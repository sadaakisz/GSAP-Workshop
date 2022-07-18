/* gsap.from('.header', { duration: 1, y: '-100%', ease: 'expo' })
gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
gsap.from('.left', { duration: 1, x: '-100%', delay: 1.5, ease: 'power2.in' })

gsap.to('.footer', { duration: 1, y: 0, delay: 2.5, ease: 'elastic' })

gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }) */

const obj = { x: 0 }

gsap.to(obj, { duration: 2, x: 100, onUpdate: () =>
console.log(obj.x) })

const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
    .from('.header', { y: '-100%', ease: 'expo' }) /* the duration is a default value */
    .from('.link', { opacity: 0, stagger: .5 }) /* dont need the delay */
    .from('.right', { x: '-100vw', ease: 'power2.in' }, 1) /* absolute delay, seconds from the start of the timeline */
    .from('.left', { x: '-100%' }, '<.5') /* relative delay, start .5s after the previous one */
    .to('.footer', { y: 0, ease: 'elastic' })
    .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

const button = document.querySelector('.button')

button.addEventListener('click', () => {
    timeline.timeScale(3)
    timeline.reverse()
})