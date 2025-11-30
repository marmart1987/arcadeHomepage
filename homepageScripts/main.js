function checkSize() {
    const aspectRatioValid = () => {
        return Math.abs(window.innerWidth / window.innerHeight - 2) > 0.7
    }
    if (aspectRatioValid()) {
        try {
            document.body.innerHTML = "<div class=ps2p>Please resize the window. Width / height is " + (window.innerWidth / window.innerHeight).toPrecision(4) + ", but it should be greater than 1.3 and lesser than 2.7 </div>"
        } catch (e) { console.warn(e) }

        function checkFlag() {
            if (aspectRatioValid()) {
                window.setTimeout(checkFlag, 100);
            } else {
                window.location.reload();
            }
        }
        checkFlag();

    }
}
window.onload = checkSize
window.onresize = checkSize
