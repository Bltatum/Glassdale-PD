import { getNotes, useNotes } from "./noteDataProvider.js"
import { Note } from "./note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub= document.querySelector(".container")

eventHub.addEventListener("eventStateChanged", customEvent =>{
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})
let visibility = false

eventHub.addEventListener("allNotesClicked", e => {
    visibility = !visibility
    if(visibility) {
        contentTarget.classList.remove("invisible")
        
    } else {
        contentTarget.classList.add("invisible")
        
    }
})

const render = () =>{
   getNotes().then(()=>{
    const allTheNotes = useNotes()
      contentTarget.innerHTML = allTheNotes.map(
        currentNoteObject => {
          return Note(currentNoteObject)
        }
        ).join(" ")
        
    })
    contentTarget.classList.add("invisible")
}
 export const noteListComponent = () =>{
     render()
 }   