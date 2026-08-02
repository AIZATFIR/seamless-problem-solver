import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollFloat - React Bits component port for Vanilla JS & ES Modules
 * Animates text characters floating in on scroll trigger.
 */
export function initScrollFloat(target, options = {}) {
  const elements = typeof target === 'string' 
    ? document.querySelectorAll(target) 
    : (target ? [target] : []);

  const {
    animationDuration = 1,
    ease = 'back.inOut(2)',
    scrollStart = 'center bottom+=50%',
    scrollEnd = 'bottom bottom-=40%',
    stagger = 0.03
  } = options;

  elements.forEach((el) => {
    if (!el || el.dataset.scrollFloatInitialized) return;
    el.dataset.scrollFloatInitialized = 'true';

    el.classList.add('scroll-float');
    const text = el.textContent || '';
    
    const splitHTML = text.split('').map((char) => (
      `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`
    )).join('');

    el.innerHTML = `<span class="scroll-float-text">${splitHTML}</span>`;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  });
}

export default initScrollFloat;
