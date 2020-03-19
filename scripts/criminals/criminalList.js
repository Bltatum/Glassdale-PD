import { useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminals.js";
//import { initializeDetailButtonEvents } from "./KnownAssociatesDialog.js";
// import { useOfficers } from "../officers/officerProvider.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


//event listener for known ass. button clicked
contentTarget.addEventListener("click", e => {
if(e.target.id.startsWith("associates--")) {
    const[prefix, criminalID] = e.target.id.split("--")

    const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
        detail: {
            chosenCriminal: criminalID
        }
    })
    eventHub.dispatchEvent(showAssociatesEvent)
   }
})

//Event listener for crime chosen selector
eventHub.addEventListener("crimeChosen", event => {
    // Filter the list of criminal who committed the crime
    // Get the criminals
    const criminals = useCriminals()
     // Get the crime
    const theCrimeThatWasChosen = event.detail.chosenCrime
     // Look at all of the criminals and determine if each one is a vandal
    const guiltyCriminals = criminals.filter(criminal => {
        if (criminal.conviction === theCrimeThatWasChosen){ 
            return true
        }
            return false
    }
         )

    // Clear inner HTML of the criminal list
    contentTarget.innerHTML = ""

    // Build it up again
    for (const singleCriminal of guiltyCriminals) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
    //initializeDetailButtonEvents()
})
//Event listener for criminal chosen selector
eventHub.addEventListener("criminalChosen", event =>{
   
    const criminals = useCriminals()

    const theCriminalThatWasChosen = event.detail.chosenCriminal

    const selectedCriminal = criminals.filter(criminals =>{
        if(criminals.name === theCriminalThatWasChosen){
            return true
        }
        return false
    }
    )
    contentTarget.innerHTML = ""
    
    for (const singleCriminal of selectedCriminal) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
    //initializeDetailButtonEvents()
})
//event Listener for arresting officer selector
eventHub.addEventListener("officerChosen", event =>{
   
    const criminals = useCriminals()
    const theOfficerThatWasChosen = event.detail.chosenOfficer

    const ArrestingOfficer = criminals.filter(criminal =>{
        if(criminal.arrestingOfficer === theOfficerThatWasChosen){
            return true
        }
        return false
    }
    )
    contentTarget.innerHTML = ""
    
    for (const singleCriminal of ArrestingOfficer) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
    //initializeDetailButtonEvents()
})
// event listener for close button


export const criminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
    //initializeDetailButtonEvents()
} 
