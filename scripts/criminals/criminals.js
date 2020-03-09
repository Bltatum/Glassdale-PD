export const criminal = (criminal) =>{
    return `
    <div class="criminal">
        <p>${criminal.name}</p>
      <ul>
        <li>AGE: ${criminal.age}</li>
        <li>Arresting Officer: ${criminal.arrestingOfficer}</li>
        <li>Conviction: ${criminal.conviction}</li>
        <li>Associates: </li>
            <ul>
           ${criminal.known_associates.map(accociateObject => {
                return `<li>Name- ${accociateObject.name}</li>
                       <li>Alibi- ${accociateObject.alibi}</li>`})}
            </ul>
         <li>Inc. Start:${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
         <li>Inc. End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
       </ul>
    </div>
    `
}