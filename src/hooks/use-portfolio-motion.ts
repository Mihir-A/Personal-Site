'use client'

import { useEffect, useState, type RefObject } from 'react'

export function usePortfolioMotion(rootRef: RefObject<HTMLElement | null>) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    const animations = new Set<Animation>()
    let observer: IntersectionObserver | undefined

    const reveal = (element: HTMLElement, animate: boolean) => {
      delete element.dataset.pending
      element.dataset.revealed = 'true'
      observer?.unobserve(element)
      if (!animate || preference.matches) return

      const animation = element.animate(
        [
          { opacity: 0, translate: '0 18px' },
          { opacity: 1, translate: '0 0' },
        ],
        {
          duration: 650,
          delay: Number(element.dataset.revealDelay || 0),
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'backwards',
        },
      )
      animations.add(animation)
      animation.finished.then(() => animations.delete(animation)).catch(() => {})
    }

    const configureReveals = () => {
      observer?.disconnect()
      animations.forEach((animation) => animation.cancel())
      animations.clear()
      if (preference.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => reveal(element, false))
        return
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          if (entry.isIntersecting && element.dataset.pending) reveal(element, true)
        })
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' })

      elements.forEach((element) => {
        if (element.dataset.revealed) return
        // Never hide content above the viewport after a restored scroll position.
        if (element.getBoundingClientRect().bottom <= 0) {
          reveal(element, false)
          return
        }
        element.dataset.pending = 'true'
        observer?.observe(element)
      })
    }

    // Keyboard navigation must never land on a hidden link.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return
      const element = event.target.closest<HTMLElement>('[data-reveal]')
      if (!element) return
      reveal(element, false)
      element.getAnimations().forEach((animation) => {
        if (animations.has(animation)) {
          animation.cancel()
          animations.delete(animation)
        }
      })
    }

    configureReveals()
    preference.addEventListener('change', configureReveals)
    root.addEventListener('focusin', onFocus)

    return () => {
      observer?.disconnect()
      preference.removeEventListener('change', configureReveals)
      root.removeEventListener('focusin', onFocus)
      animations.forEach((animation) => animation.cancel())
      elements.forEach((element) => {
        delete element.dataset.pending
        delete element.dataset.revealed
      })
    }
  }, [rootRef])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const sections = Array.from(root.querySelectorAll<HTMLElement>('section[id]:not(#hero)'))
    let frame = 0

    const update = () => {
      frame = 0
      const distance = document.documentElement.scrollHeight - window.innerHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0
      root.style.setProperty('--scroll-progress', String(progress))
      let active = ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= Math.max(160, window.innerHeight * 0.3)) {
          active = section.id
        }
      }
      if (progress >= 0.995 && distance > 0) active = sections.at(-1)?.id ?? active
      setActiveSection((previous) => previous === active ? previous : active)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(root)
    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [rootRef])

  return activeSection
}
