
export const Note = noteObject => {
    return`
    <section class="note">
      <header><h3>${noteObject.criminal}</h3></header>
      <p>${noteObject.date}</p>
      <p>${noteObject.noteText}</p>
    </section>`
}