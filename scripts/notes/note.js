
export const Note = (noteObject, criminalObject) => {
    return`
    <section class="note">
      <h3>${criminalObject.name}</h3>
      <p>${noteObject.noteText}</p>
      <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
      <p>
        <button id="deleteNote--${noteObject.id}">Delete</button>
      </p>
    </section>`
}