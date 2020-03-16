import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveNote") {

   const noteText = document.querySelector("#noteText").value
   const criminalName = document.querySelector("#criminal").value
        // Make a new object representation of a note
        const newNote = {
             // Key/value pairs here
           noteText: noteText,
           criminal: criminalName,
           timestamp: Date.now()
       
        }
         // Change API state and application state
        saveNote(newNote)
    }
})



const render = () => {
    contentTarget.innerHTML = `
   
    <fieldset>
    <label for="criminal">Perp:</label>
        <input type="text" id="criminal"></input>
     </fieldset>
     <fieldset>
     <label for="noteText">Note:</label>
        <textarea type="text" id="noteText" rows= "2" cols=""></textarea>
     </fieldset>
        

        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm