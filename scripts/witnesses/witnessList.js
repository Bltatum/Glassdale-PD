//display whatgs on dom

import { getWitnesses, useWitnesses } from "./witnessData.js"
import { witnesses } from "./witnesses.js"

const contentTarget = document.querySelector(".witnessContainer")
const eventHub = document.querySelector(".container")
let visibility = false

eventHub.addEventListener("witnessesClicked", e => {
    visibility = !visibility
    if(visibility) {
        contentTarget.classList.remove("invisible")
        render()
    } else {
        contentTarget.classList.add("invisible")
        
    }
})
// function for getting data and displaying it.
const render = () => {
    getWitnesses().then(()=>{
        const allWitnesses = useWitnesses()
        contentTarget.innerHTML = allWitnesses.map(
            currentWitnessObject =>{
                return witnesses(currentWitnessObject)
            }
        ).join(" ")
    })
}

