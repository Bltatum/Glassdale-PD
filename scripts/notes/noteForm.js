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
            criminal: criminalName,
           noteText: noteText,

          
       
        }
         // Change API state and application state
        saveNote(newNote)
    }
})

contentTarget.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "criminal"){
        const theChosenCriminal = changeEvent.target.value
        const criminalChosenEvent = new CustomEvent("criminalChosen", {
            detail: {
                chosenCriminal: theChosenCriminal
            } 
        })

        eventHub.dispatchEvent(criminalChosenEvent)
    }
})


export const NoteForm = () =>{
    
    const criminal = useCriminals()
   
 const render = (criminalCollection) => {
    contentTarget.classList.add("invisible")
    
    contentTarget.innerHTML = `
<form action="">
    <fieldset>
        <label for="noteDate">Date of Entry</label>
        <input type="date" name="noteDate" id="noteDate">
    </fieldset>
</form>
    <fieldset>
      <select class="dropdown" id="criminal">
       <option value="0">Criminal</option>   
            ${ criminalCollection.map(singleCriminal => {
                    return `<option>${singleCriminal.name}</option>`
                })}
        </select> 
    </fieldset>
    <fieldset>
     <label for="noteText">Note:</label>
        <textarea type="text" id="noteText" rows= "2" cols=""></textarea>
     </fieldset>
     
        <button id="saveNote">Save Note</button>
    `
        }
    render(criminal)
    }
    
        

