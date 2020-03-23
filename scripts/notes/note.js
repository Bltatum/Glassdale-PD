
export const Note = (noteObject, criminalObject) => {
    return`
    <section class="note">
      <header><h3>${criminalObject.name}</h3></header>
      <p>${noteObject.date}</p>
      <p>${noteObject.noteText}</p>
    </section>`
}