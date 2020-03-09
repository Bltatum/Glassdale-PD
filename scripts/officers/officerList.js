import { officer } from "./officers.js";
import { useOfficers } from "./officerProvider.js";


const contentTarget = document.querySelector(".officersContainer")


export const officerList = () =>{
    const officerObjectArray = useOfficers()

    for (const officerObject of officerObjectArray) {
        const officerHTMLrep = officer(officerObject)
        contentTarget.innerHTML += officerHTMLrep
        
    }
}
