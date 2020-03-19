//htmlrep of array
export const witnesses = (witness) => {
    return `
    <article class="witnesses" id="${witness.id}">
      <p><h3>${witness.name}</h3></p>
      <p>${witness.statements}</p>
    </article>
    `
}
