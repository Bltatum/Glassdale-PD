import { saveNote } from "./noteDataProvider.js"

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            detail: {
                note: ""
            } 
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})



const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text"></input>

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm