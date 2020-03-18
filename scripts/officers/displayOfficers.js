const contentTarget = document.querySelector(".officers__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", e => {
    if (e.target.id === "showOfficers") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const allOfficers = new CustomEvent("allOfficersClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allOfficers)
    }
})

export const DisplayOfficersButton = () => {
    contentTarget.innerHTML = "<button id='showOfficers'>Show Officers</button>"
}