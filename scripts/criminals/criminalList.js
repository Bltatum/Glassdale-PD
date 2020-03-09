import { useCriminals } from "./criminalDataProvider.js";
import {criminal} from "./criminals.js"

const contentElement = document.querySelector(".criminalsContainer")

export const criminalList = () =>{
    const criminalObjectArray = useCriminals()

    for (const criminalObject of criminalObjectArray) {
        const criminalHTMLrep = criminal(criminalObject)
        contentElement.innerHTML += criminalHTMLrep

    }
}