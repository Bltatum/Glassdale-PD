/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    const render = convictionsCollection =>{
        const option = convictionsCollection.map(
          crimesObject => { 
              return `<option>${crimesObject.name}</option>`
            }
        )
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${option}
            </select>
        `
    }
    render(convictions)

}
    


export default ConvictionSelect