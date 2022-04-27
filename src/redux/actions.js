
import * as constantType from './constants'


export const addContact = (contacts) => (dispatch) => {

    contacts.sort((a,b) => {

        let fName1 = a.fName.toUpperCase()
        let lName1 = a.lName.toLowerCase()
        let tel1 = a.tel

        let fName2 = b.fName.toUpperCase()
        let lName2 = b.lName.toLowerCase()
        let tel2 = b.tel

        if (fName1 > fName2) {
            return 1
        }

        else if (fName1 === fName2 && lName1 > lName2) {
            return 1
        }

        else if (fName1 === fName2 && lName1 === lName2 && tel1 > tel2) {
            return 1
        }

        else {
            return -1
        }
    })

    dispatch({type: constantType.ADD_CONTACT, payload: contacts})
}

export const search = (searchResults) => (dispatch) => {

    return dispatch({type: constantType.SEARCH_CONTACT, payload: searchResults})


}