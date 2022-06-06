// fade in welcome to website
// fade in template text "i'm a __, __, and __"
// highlight anim
// fade in "below are some of my projects"
// some emphasis anim
const infoTimeline = anime.timeline({ loop: false, autoplay: false, easing: "easeOutExpo", duration: 400 })
    .add({
        targets: "#info-page h2:first-of-type",
        opacity: [0, 1],
        translateX: ["100vw", 0],
    })
    .add({
        targets: "#info-page h2:nth-child(2)",
        opacity: [0, 1],
        translateX: ["-100vw", 0],
        delay: 500
    })
    .add({
        targets: "#info-page h2:nth-child(2) .highlight",
        color: ["#111111", "#FFFFFF"],
        duration: 750,
    })
    .add({
        targets: "#info-page h2:nth-child(3)",
        opacity: [0, 1],
        translateX: ["100vw", 0],
    })
    .add({
        targets: "#info-page h2:nth-child(3) .highlight:nth-child(1)",
        color: ["#111111", "#FFFFFF"],
        duration: 750,
    })
    .add({
        targets: "#info-page h2:nth-child(3) .highlight:nth-child(2)",
        color: ["#111111", "#FFFFFF"],
        duration: 750,
    })
    .add({
        targets: "#social-list-container a",
        color: ["#111111", "#EF8354"],
        duration: 650,
        delay: anime.stagger(125, { start: 250 })
    })
