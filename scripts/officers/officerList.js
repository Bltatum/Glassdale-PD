import { officer } from "./officers.js";
import { useOfficers } from "./officerProvider.js";


const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("allOfficersClicked", e => {
    visibility = !visibility
    if(visibility) {
        contentTarget.classList.remove("invisible")
        
    } else {
        contentTarget.classList.add("invisible")
        
    }
})


export const officerList = () =>{
    
    const officerObjectArray = useOfficers()

    for (const officerObject of officerObjectArray) {
        const officerHTMLrep = officer(officerObject)
        contentTarget.classList.add("invisible")
        contentTarget.innerHTML += officerHTMLrep
        
    }
}
