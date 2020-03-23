import { getNotes, useNotes } from "./noteDataProvider.js"
import { Note } from "./note.js"
import { useCriminals } from "../criminals/criminalDataProvider.js"


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
    const allTheCriminals = useCriminals()
    
        contentTarget.innerHTML = allTheNotes.map(currentNoteObject => {
            const foundSingleCriminal = allTheCriminals.find(
                singleCriminalObj => singleCriminalObj.id === currentNoteObject.criminalId
            )
           return Note(currentNoteObject, foundSingleCriminal)
                }
                  ).join(" ")
        
    })
    contentTarget.classList.add("invisible")
}
 export const noteListComponent = () =>{
     render()
 }   

// const render = () =>{
//     getNotes().then(()=>{
//     const allTheNotes = useNotes()
//     const allTheCriminals = useCriminals() 
//    for (const singleNote of allTheNotes) {
//        const foundSingleCriminal = allTheCriminals.find(singleCriminalObj => singleCriminalObj.id === singleNote.criminalID)
//        contentTarget.innerHTML += Note(singleNote, foundSingleCriminal)
       
//    }
// })
// }
// export const noteListComponent =()=>{
//     render()
// }

// const render = (noteCollection, criminalCollection) => {
//     contentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// const noteListComponent = () => {
//     const notes = useNotes()
//     const criminals = useCriminals()

//     render(notes, criminals)
// }