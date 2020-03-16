import { officerList } from "./officers/officerList.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { getCriminals } from "./criminals/criminalDataProvider.js"
import { ConvictionSelect } from "./convictions/convictionSelect.js"
import { getConvictions } from "./convictions/convictionProvider.js"
import NoteForm from "./notes/noteForm.js"
import { officerSelect } from "./officers/officerSelector.js"
import { criminalSelect } from "./criminals/criminalSelect.js"
import { initializeDetailButtonEvents } from "./dialog.js"



//getOfficers().then(criminalSelect)


getConvictions().then(ConvictionSelect)

NoteForm()

getCriminals().then(criminalList)

getOfficers().then(officerList)

getOfficers().then(officerSelect)

getCriminals().then(criminalSelect)

initializeDetailButtonEvents()