//searching the container.
const eventHub = document.querySelector(".container")
//empty array for notes
let notes = []
// C.E. function to notify change of state
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
  //dispatching the C.E.
    eventHub.dispatchEvent(noteStateChangedEvent)
}
export const useNotes = () => notes.slice()
//fetching notes from api
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
    //taking what was recieved(promise) and turning it into java
        .then(response => response.json())
        //taking that java and storing it in a variable
        .then(parsedNotes => {
            notes = parsedNotes
        })

}
//sending notes to api with fetch and verb POST
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //convert object into string that reps object w/ json.stringify
        body: JSON.stringify(note)
    })
    .then(getNotes)
    //lets other components know something changed
    .then(dispatchStateChangeEvent)
}