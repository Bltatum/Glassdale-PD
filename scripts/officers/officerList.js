import { officer } from "./officers.js";
import { useOfficers } from "./officerProvider.js";


const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("officerChosen", event =>{
   
    const officers = useOfficers()

    const theOfficerThatWasChosen = event.detail.chosenOfficer

    const selectedOfficer = officers.filter(officers =>{
        if(officers.name === theOfficerThatWasChosen){
            return true
        }
        return false
    }
    )
    contentTarget.innerHTML = ""
    
    for (const singleOfficer of selectedOfficer) {
        contentTarget.innerHTML += officer(singleOfficer)
    }
})
export const officerList = () =>{
    const officerObjectArray = useOfficers()

    for (const officerObject of officerObjectArray) {
        const officerHTMLrep = officer(officerObject)
        contentTarget.innerHTML += officerHTMLrep
        
    }
}
