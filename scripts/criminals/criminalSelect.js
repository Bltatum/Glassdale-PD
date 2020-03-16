import { useCriminals } from "./criminalDataProvider.js";

const contentTarget = document.querySelector(".filters__criminal")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "criminalSelect"){
        const theChosenCriminal = changeEvent.target.value
        const criminalChosenEvent = new CustomEvent("criminalChosen", {
            detail: {
                chosenCriminal: theChosenCriminal
            } 
        })

        eventHub.dispatchEvent(criminalChosenEvent)
    }
})
export const criminalSelect = () => {
    
    const criminal = useCriminals()
    
    const render = (criminalCollection) => {
    contentTarget.innerHTML = `
             <select class="dropdown" id="criminalSelect">
            <option value="0">Criminal</option>   
            ${
                criminalCollection.map(singleCriminal => {
                    return `<option>${singleCriminal.name}</option>`
                })
            }
        </select> `
        }
    
    render(criminal)

}