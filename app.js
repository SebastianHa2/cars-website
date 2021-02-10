const menu = document.querySelector(".menu")

menu.addEventListener("click", () =>{
    document.querySelectorAll(".target").forEach(item => {
        item.classList.toggle("change")
    })
})

const sections = document.querySelectorAll(".wrapper")
sections.forEach(item => {
    item.addEventListener("click", () =>{
        document.querySelectorAll(".target").forEach(item => {
            item.classList.remove("change")
        })
    })
})

const videoWrapper = document.querySelector(".video-wrapper")

const playVideo = (e) => {
    if(e.target.classList.contains("video")){
        e.target.play()
    }
}

const stopVideo = (e) => {
    if (e.target.classList.contains("video")){
        e.target.pause()
    }
}

videoWrapper.addEventListener("mouseover", playVideo)

videoWrapper.addEventListener("mouseout", stopVideo)