// fade in hello
// fade in template text "I'm a __ from __"
// fade in text
// fade in template text "You can __ me and _______ below"
// fade in text
const infoTimeline = anime.timeline({ loop: false, autoplay: false, easing: "easeOutExpo", duration: 400 })
    .add({ // Hello!
        targets: "#info-page h2:first-of-type",
        opacity: [0, 1],
        translateX: ["100vw", 0],
    })
    .add({ // I'm a DJ from Dallas, TX text
        targets: "#info-page h2:nth-child(2)",
        opacity: [0, 1],
        translateX: ["-100vw", 0],
        delay: 650
    })
    .add({ // I'm a DJ from Dallas, TX highlight
        targets: "#info-page h2:nth-child(2) .line",
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: 250,
    })
    .add({ // You can contact me and find my mixes below
        targets: "#info-page h2:nth-child(3)",
        opacity: [0, 1],
        translateX: ["100vw", 0],
        delay: 650,
    })
    .add({ // You can contact me and find my mixes below
        targets: "#info-page h2:nth-child(3) .line",
        opacity: [0, 1],
        scaleX: [0, 1],
        duration: 250,
    })
    .add({ // Social icons
        targets: "#social-list-container a",
        opacity: [0, 1],
        duration: 250,
        keyframes: [
            { scale: 1.33 },
            { scale: 1 }
        ],
        delay: anime.stagger(50, { start: 500 })
    })
