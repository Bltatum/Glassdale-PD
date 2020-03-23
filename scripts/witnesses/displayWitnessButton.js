const contentTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showWitnesses") {
        const allWitnessesClicked = new CustomEvent("witnessesClicked")

        eventHub.dispatchEvent(allWitnessesClicked)
    }
})

export const displayWitnessButton = () =>{
    contentTarget.innerHTML = "<button id='showWitnesses'>Show Witnesses</button>"
}