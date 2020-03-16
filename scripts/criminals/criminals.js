export const criminal = (criminal) =>{
    return `
    <div class="criminal">
        <p>${criminal.name}</p>
      <ul>
        <li>AGE: ${criminal.age}</li>
        <li>Arresting Officer: ${criminal.arrestingOfficer}</li>
        <li>Conviction: ${criminal.conviction}</li>
      </ul>
     
         <button id="associates--${criminal.id}">Associate Alibis </button>
    
            <dialog class="dialog--criminal" id="details--${criminal.id}">
             ${criminal.known_associates.map(accociateObject => {
               return `
             <p class="alibi__name">${accociateObject.name}</p>
             <p class="alibi__alibi">Alibi: ${accociateObject.alibi}</li>`}).join("")}</p>

           <button class="button--close">Close</button>
             </dialog>
        
         <p>Inc. Start:${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
         <p>Inc. End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
   </div>
    `
}

{/* <ul>
${criminal.known_associates.map(accociateObject => {
     return `<li>Name- ${accociateObject.name}</li>
            <li>Alibi- ${accociateObject.alibi}</li>`})}
 </ul> */}