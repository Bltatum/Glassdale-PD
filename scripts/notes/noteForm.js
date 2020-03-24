import { saveNote } from "./noteDataProvider.js"
import {useCriminals} from "../criminals/criminalDataProvider.js"

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

// Handle browser-generated click event in compo       nent
contentTarget.addEventListener("click", clickEvent => {
       if (clickEvent.target.id === "saveNote") {
         
         const noteText = document.querySelector("#noteText").value
         const criminalId = document.querySelector("#NotesCriminalSelect").value
   // Make a new object representation of a note
          const newNote = {
            // Key/value pairs here           
            criminal: parseInt(criminalId),
            noteText: noteText,
            timestamp: Date.now()
          }
          // Change API state and application state         
        saveNote(newNote)
    }
})
                                                                                                              
const render = () => {
    contentTarget.classList.add("invisible")
    const criminals = useCriminals()
    
    contentTarget.innerHTML = `
<fieldset class="noteFormInput">
    <section>
      <select class="noteDropdown" id="NotesCriminalSelect">
       <option value="0">Perp</option>   
        ${ 
            criminals.map(singleCriminal => {
               return `<option value="${singleCriminal.id}">${singleCriminal.name}</option>`
            }).join("")
        }
        </select> 
    </section>
     <label for="noteText">Note</label>
    <section>
        <textarea type="text" id="noteText" rows= "2" cols="50"></textarea>
        </section>
        <button id="saveNote">Save Note</button>
</fieldset> `
        }
export const NoteForm = () =>{
   render()
}
    
    
        

