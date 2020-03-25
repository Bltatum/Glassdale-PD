import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js"
import { Note } from "./note.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"


const contentTarget = document.querySelector(".notesContainer")
const eventHub= document.querySelector(".container")

let visibility = false


eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})


eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility
    if(visibility) {
        contentTarget.classList.remove("invisible")
        
    } else {
        contentTarget.classList.add("invisible")
        
    }
})
//E.V. for deleting notes button clicked
contentTarget.addEventListener("click", e =>{
  if(e.target.id.startsWith("deleteNote--")){
      const [pefix, noteId] = e.target.id.split("--")
      deleteNote(noteId)
  }
})

const render = () =>{
    
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

   getNotes().then(()=>{
    
     const allTheNotes = useNotes()
     const allTheCriminals = useCriminals()
     
        contentTarget.innerHTML = allTheNotes.map(currentNoteObject => {
            const foundSingleCriminal = allTheCriminals.find(
                (singleCriminalObj) => {
                   return currentNoteObject.criminal === singleCriminalObj.id
                })
           return Note(currentNoteObject, foundSingleCriminal)
                }
                  ).join(" ") 
                  
        
    })
    
}
 export const noteListComponent = () =>{
     render()
 }   

