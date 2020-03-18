import { saveNote } from "./noteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false


 eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility
  if (visibility) {
      contentTarget.classList.remove("invisible")
      
  } else {
      contentTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveNote") {
        
    const entryDate = document.querySelector("#noteDate").value    
   const noteText = document.querySelector("#noteText").value
   const criminalName = document.querySelector("#criminal").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            date: entryDate,
           noteText: noteText,
           criminal: criminalName,
          
       
        }
         // Change API state and application state
        saveNote(newNote)
    }
})



const render = () => {
    contentTarget.classList.add("invisible")
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
        <label for="noteDate">Date of Entry</label>
        <input type="date" name="noteDate" id="noteDate">
    </fieldset>
</form>
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