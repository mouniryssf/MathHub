
  let assignmentDescription = document.querySelector("#assignmentDescription")
  let numNeededDesc = assignmentDescriptionArr.length

  let assignmentWindow = document.querySelector("#assignmentWindow")

  let feedbackForm = document.querySelector("#feedbackform")

  let template = assignmentDescription.children[0]



  assignmentDescription.replaceChildren()

  for (let i = 0; i < numNeededDesc; i++) {
    let node = template.cloneNode(true)
    let text = node.childNodes[2]
    text.textContent = assignmentDescriptionArr[i]
    assignmentDescription.appendChild(node)
  }

  
    let window = assignmentWindow.getElementsByTagName("iframe")[0].src = assignmentLink
    let form = feedbackForm.getElementsByTagName("iframe")[0].src = formLink