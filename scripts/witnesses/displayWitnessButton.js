const contnetTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")

contnetTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "showWitnesses") {
        const allWitnesses = new CustomEvent("witnessesClicked")

        eventHub.dispatchEvent(allWitnesses)
    }
})

export const displayWitnessButton = () =>{
    contnetTarget.innerHTML = "<button id='showWitnesses'>Show Witnesses</button>"
}