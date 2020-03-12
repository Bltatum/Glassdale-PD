import { useCriminals } from "./criminalDataProvider.js";
import { criminal } from "./criminals.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

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
})

export const criminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += criminal(singleCriminal)
    }
} 