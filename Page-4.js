  
  
  
  let objectivesList = document.querySelector("#objectives")
  let numNeededObj = objectivesArr.length

  let vocabularyList = document.querySelector("#vocabulary")
  let numNeededVocab = vocabularyArr.length

  let priorKnowledgeList = document.querySelector("#priorKnowledge")
  let numNeededPrior = priorKnowledgeArr.length

  let applicationList = document.querySelector("#application")
  let numNeededApp = applicationArr.length

  let template = objectivesList.children[0]



  objectivesList.replaceChildren()

  for (let i = 0; i < numNeededObj; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[3]
    text.innerHTML = objectivesArr[i]
    objectivesList.appendChild(node)
  }

  vocabularyList.replaceChildren()

  for (let i = 0; i < numNeededVocab; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[3]
    text.innerHTML = vocabularyArr[i]
    vocabularyList.appendChild(node)
  }

  priorKnowledgeList.replaceChildren()

  for (let i = 0; i < numNeededPrior; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[3]
    text.innerHTML = priorKnowledgeArr[i]
    priorKnowledgeList.appendChild(node)
  }

  applicationList.replaceChildren()

  for (let i = 0; i < numNeededApp; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[3]
    text.innerHTML = applicationArr[i]
    applicationList.appendChild(node)
  }







  let videosList = document.querySelector("#videosDiv")
  let videoTemplate = videosList.children[0]
  let numNeededVids = videosArr.length
  const srcTemplate = "https://www.youtube.com/embed/"

  videosList.replaceChildren()

  for (let i = 0; i < numNeededVids; i++) {
    const node = videoTemplate.cloneNode(true)
    let title = node.childNodes[1].childNodes[1]
    console.log(node)
    // console.log(title)
    title.textContent = videosArr[i].title

    let initialURL = videosArr[i].url
    if (initialURL != "uploaded") {
      let url
      if (initialURL.includes("youtube")) {
        url = srcTemplate + videosArr[i].url.split("=")[1]
      }
      else {
        url = initialURL
      }
      node.getElementsByTagName("Iframe")[0].setAttribute("src", url)
      videosList.appendChild(node)
    }
    else if (initialURL === "uploaded") {
      let uploadedVideosList = document.querySelectorAll(".lecture-attachment-type-video")
      const selectedVideo = uploadedVideosList[0]
//       selectedVideo.style.setProperty("width", "960px", "important")
      selectedVideo.style.setProperty("margin", "19px 20px 20px", "important")
      node.firstElementChild.children[1].replaceWith(selectedVideo)
      videosList.appendChild(node)
    }

  }

function eventListener(){
    let btns = document.querySelectorAll('#courseSidebar a');

  for (btn of btns) {
    btn.addEventListener('click', function() {
      window.location.href = this.href;
    });
  }
}

eventListener();

