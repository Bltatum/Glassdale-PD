import { officerList } from "./officers/officerList.js"
import { getOfficers } from "./officers/officerProvider.js"
import { criminalList } from "./criminals/criminalList.js"
import { getCriminals } from "./criminals/criminalDataProvider.js"
  



getCriminals().then(criminalList)

getOfficers().then(officerList)

