function checkSize (){
    const aspectRatioValid = () => {
        return Math.abs(window.innerWidth/window.innerHeight - 2) > 0.6
    }
    if(aspectRatioValid()) {
        try {
        document.body.innerHTML="Please resize the window. Width / height is " + window.innerWidth/window.innerHeight + " but should be greater than 1.4 and lesser than 2.6"
        } catch{}

        function checkFlag() {
            if(aspectRatioValid()) {
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
