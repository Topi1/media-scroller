
const backgroundImg = document.querySelector(".backImg")
const mediaElement = document.getElementsByClassName("media")
const mediaImg = document.querySelector(".mediaImg")
const showName = document.querySelector(".showName")
const showInfo = document.querySelector(".showInfo")


backgroundImg.src = mediaImg.src
showName.textContent = mediaImg.title
showName.style.fontFamily = mediaImg.style.fontFamily
showInfo.textContent = mediaImg.alt


function changeImg(img) {

    showName.style.opacity = 0.0
    showInfo.style.opacity = 0.0
    backgroundImg.style.opacity = 0.1

    setTimeout(() => {
    showName.style.opacity = 1
    showName.style.fontFamily = img.style.fontFamily
    showName.textContent = img.title    

    showInfo.textContent = img.alt
    showInfo.style.opacity = 1

    backgroundImg.src = img.src
    backgroundImg.style.opacity = 1
    }, "700")

}


for (var i = 0; i < mediaElement.length; i++) {
    mediaElement[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active")
  
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "")
      }
      
      this.className += " active"
    });
  } 