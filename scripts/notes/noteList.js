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

const render = () =>{
   getNotes().then(()=>{
    const allTheNotes = useNotes()

    contentTarget.innerHTML = allTheNotes.map(
        currentNoteObject => {
        return Note(currentNoteObject)
        }
        ).join(" ")
        
    })

}
   