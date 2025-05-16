gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)

const splitTypes = document.querySelectorAll(".reveal-type")

splitTypes.forEach((char, i) => {

    const text = new SplitType(char, {types: "chars"})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
    })
})

ScrollSmoother.create({
  smooth: 0.5,
  effects: true,
});