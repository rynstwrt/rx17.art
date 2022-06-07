const scrollPaddingPixels = 250;
const debugMode = true;
let hasPlayedTurntableAnims = debugMode ? true : false;
let hasPlayedInfoAnims = false;


//===================== LANDING ANIMATIONS =====================//
const platterAnim = anime({
    targets: "#platter",
    rotate: "360deg",
    autoplay: false,
    easing: "linear",
    duration: 3000,
    loop: true
});

anime.timeline({ loop: false, autoplay: true })
    .add({ // Grow turntable
        targets: "#turntable",
        scale: [0, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 750,
        delay: 1000
    })
    .add({ // Pop up text
        targets: "#rx17-text",
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500
    }, "-=300")
    .add({ // Down arrow chevron and spin turntable
        targets: "#down-arrow-container",
        opacity: [0, 1],
        easing: "linear",
        duration: 300,
        endDelay: 200,
        complete: () =>
        {
            hasPlayedTurntableAnims = true;
            platterAnim.play();
        }
    });



//===================== INFO ANIMATIONS =====================//
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
    });



//===================== SCROLL LISTENER =====================//
window.addEventListener("scroll", () =>
{
    if (hasPlayedTurntableAnims && !hasPlayedInfoAnims && window.scrollY + scrollPaddingPixels >= window.innerHeight)
    {
        hasPlayedInfoAnims = true;
        infoTimeline.play();
    }
});
