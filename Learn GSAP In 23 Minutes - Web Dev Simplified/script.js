gsap.from('.header', { duration: 1, y: '-100%', ease: 'expo' })
gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
gsap.from('.left', { duration: 1, x: '-100%', delay: 1.5, ease: 'power2.in' })

gsap.to('.footer', { duration: 1, y: 0, delay: 2.5, ease: 'elastic' })

gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

const obj = { x: 0 }

gsap.to(obj, { duration: 2, x: 100, onUpdate: () =>
console.log(obj.x) })