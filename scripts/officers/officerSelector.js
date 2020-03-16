import { useOfficers } from "./officerProvider.js";

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if(changeEvent.target.id === "officerSelect"){
        const theChosenOfficer = changeEvent.target.value
        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                chosenOfficer: theChosenOfficer
            }
        })

        eventHub.dispatchEvent(officerChosenEvent)
    }
})
export const officerSelect = () => {
    
    const officers = useOfficers()
    
    const render = (officerCollection) => {
    contentTarget.innerHTML = `
             <select class="dropdown" id="officerSelect">
            <option value="0">Officer</option>   
            ${
                officerCollection.map(singleOfficer => {
                    return `<option>${singleOfficer.name}</option>`
                })
            }
        </select> `
        }
    
    render(officers)

}

