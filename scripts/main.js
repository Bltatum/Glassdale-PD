import { officerList } from "./officers/officerList.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { getCriminals } from "./criminals/criminalDataProvider.js"
import ConvictionSelect from "./convictions/convictionSelect.js"
import { getConvictions } from "./convictions/convictionProvider.js"




getConvictions().then(ConvictionSelect)


getCriminals().then(criminalList)

getOfficers().then(officerList)

