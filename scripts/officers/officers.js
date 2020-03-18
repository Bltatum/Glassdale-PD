export const officer = (officer) =>{
    return `
    <div class="officer">
      <p>Officer</p>
      <ul>
      <li>ID- ${officer.id}</li>
      <li>${officer.name}</li>
      </ul>
    </div>
    `
}