/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    const convictions = useConvictions()
     
    const render = convictionsCollection =>{
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(singleConvinction =>{
                    return `<option>${singleConvinction.name}</option>`})}
            </select>`
    }
    render(convictions)
}
    

