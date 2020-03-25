import { officerList } from "./officers/officerList.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { getCriminals } from "./criminals/criminalDataProvider.js"
import { ConvictionSelect } from "./convictions/convictionSelect.js"
import { getConvictions } from "./convictions/convictionProvider.js"
import { NoteForm } from "./notes/noteForm.js"
import { criminalSelect } from "./criminals/criminalSelect.js"
import { DisplayNotesButton } from "./notes/displayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/displayNotesFormButton.js"
import { officerSelect } from "./criminals/arrestingOfficerSelect.js"
import { DisplayOfficersButton } from "./officers/displayOfficers.js"
import { noteListComponent } from "./notes/noteList.js"
import { displayWitnessButton } from "./witnesses/displayWitnessButton.js"
import "./criminals/KnownAssociatesDialog.js"
import "./witnesses/witnessList.js"
import "./notes/noteList.js"




getCriminals()
  .then(criminalList)
  .then(noteListComponent)
  .then(NoteForm)

getConvictions().then(ConvictionSelect)

getOfficers().then(officerList)

getOfficers().then(officerSelect)

getCriminals().then(criminalSelect)

displayWitnessButton()
DisplayOfficersButton()
DisplayNoteFormButton()
DisplayNotesButton()
