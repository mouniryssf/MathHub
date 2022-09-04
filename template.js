  // Input Lesson Details
//   const objectivesArr = [
//     'Identify "Like Terms" in an expression',
//     'Add & Subtract "Like Terms"',
//     'Write expressions in "Simplest Form"'
//   ]

//   const vocabularyArr = [
//     'Collect / Combine',
//     'Like Terms',
//     'Expressions',
//     'Coefficients',
//     'Variables',
//     'Constants',
//     'Terms (Associated Signs)'
//   ]

//   const priorKnowledgeArr = [
//     "Prior 1",
//     "Prior 2",
//     "Prior 3",
//     "Prior 4"
//   ]

//   const applicationArr = [
//     "Lesson 1: List the steps for combining like terms. In your notes, highlight the following terms: variables, like terms, unlike terms, cubed variable.",
//   ]

//   const videosArr = [
//     { title: "Black Panther", url: "https://www.youtube.com/watch?v=RlOB3UALvrQ" },
//     { title: "Moon Knight", url: "https://www.youtube.com/watch?v=x7Krla_UxRg" },
//     { title: "Mounir's Video", url: "uploaded" },
//     { title: "Avengers : Infinity War", url: "https://www.youtube.com/watch?v=6ZfuNTqbHE8" },
//     { title: "Mounir's Second Video", url: "uploaded" },
//     { title: "Thor : Love & Thunder", url: "https://www.youtube.com/watch?v=Go8nTmfrQd8" },
//     { title: "Doctor Strange in The Multiverse of Madness", url: "https://www.youtube.com/watch?v=aWzlQ2N6qqg" },
//     { title: "Century Videos", url: "//app.century.tech/learn/my-path/study-groups/e5637f15-6948-4a11-8550-567cbd2d0dd5/nuggets/4adaffb7-84de-462d-896a-6016ca9e79dc" }
//   ]


  // Adjust Lesson Using Details

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
    let text = node.childNodes[2]
    text.textContent = objectivesArr[i]
    objectivesList.appendChild(node)
  }

  vocabularyList.replaceChildren()

  for (let i = 0; i < numNeededVocab; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[2]
    text.textContent = vocabularyArr[i]
    vocabularyList.appendChild(node)
  }

  priorKnowledgeList.replaceChildren()

  for (let i = 0; i < numNeededPrior; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[2]
    text.textContent = priorKnowledgeArr[i]
    priorKnowledgeList.appendChild(node)
  }

  applicationList.replaceChildren()

  for (let i = 0; i < numNeededApp; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[2]
    text.textContent = applicationArr[i]
    applicationList.appendChild(node)
  }



  // Handle Videos
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
      selectedVideo.style.setProperty("width", "960px", "important")
      selectedVideo.style.setProperty("margin", "19px auto 0", "important")
      node.firstElementChild.children[1].replaceWith(selectedVideo)
      videosList.appendChild(node)
    }

  }