import { useCriminals } from "./criminalDataProvider.js"



const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked", CustomEvent => {
  
    const criminalID = CustomEvent.detail.chosenCriminal

    const criminalArray = useCriminals()

    const findTheCriminal = criminalArray.find(
        (currentCriminal) => {
            if(currentCriminal.id === parseInt(criminalID)) {
                return true
            }
            return false
        }
    )

    KnownAssociatesDialog(findTheCriminal)

    const findTheCriminalDialog = document.querySelector("#associates")
    findTheCriminalDialog.showModal()
    
})

export const KnownAssociatesDialog = (associateObject) => {
    contentTarget.innerHTML =`
    <dialog class="dialog--criminal" id="associates">
       ${associateObject.known_associates.map(currentAssociateObject => {
         return `
      <p class="alibi__name">${currentAssociateObject.name}</p>
      <p class="alibi__alibi">Alibi: ${currentAssociateObject.alibi}</li>`}).join("")}</p>
      
    </dialog>
    `
}
































//This is the first way i did it


// export const initializeDetailButtonEvents = () => {
//     const allCloseButtons = document.querySelectorAll(".button--close")

//     for (const btn of allCloseButtons) {
//         btn.addEventListener(
//             "click",
//             theEvent => {
//                 const dialogElement = theEvent.target.parentNode
//                 dialogElement.close()
//             }
//         )
//     }
   
//     const allDetailButtons = document.querySelectorAll("button[id^='associates--']")
      
//     for (const btn of allDetailButtons) {
       
//         btn.addEventListener(
//             "click",
//             theEvent => {
//                 const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                
//                 const theDialog = document.querySelector(dialogSiblingSelector)
//                 theDialog.showModal()
//             }
//         )
//     }
// }

            
                


       