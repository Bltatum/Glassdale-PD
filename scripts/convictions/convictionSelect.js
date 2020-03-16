/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionProvider.js"


const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {
  // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
       const theCrimeThatWasChosen = changeEvent.target.value
       
       const crimeChosenEvent = new CustomEvent("crimeChosen", {
          detail: {
              chosenCrime: theCrimeThatWasChosen
          } 
       })
        // Dispatch to event hub
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})
export const ConvictionSelect = () => {
    
    const convictions = useConvictions()
    
    const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
             <select class="dropdown" id="crimeSelect">
            <option value="0">Crimes</option>   
            ${
                convictionsCollection.map(singleConviction => {
                    return `<option>${singleConviction.name}</option>`
                })
            }
        </select> `
        }
    
    render(convictions)

}






