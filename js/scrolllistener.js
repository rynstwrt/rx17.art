const scrollPaddingPixels = 250;
let hasPlayedHighlightAnim = false;

window.addEventListener("scroll", () =>
{
    if (!hasPlayedHighlightAnim && window.scrollY + scrollPaddingPixels >= window.innerHeight)
    {
        hasPlayedHighlightAnim = true;
        infoTimeline.play();
    }
});
