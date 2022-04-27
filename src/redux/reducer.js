
import {ADD_CONTACT, SEARCH_CONTACT} from "./constants";

export default (state = {
    contacts: [{fName: 'Darth', lName: 'Vader', tel: '1111111111'}, {fName: 'John', lName: 'Doe', tel: '3333333333'}, {fName: 'Luke', lName: 'Skywalker', tel: '2222222222'}, {fName: 'Mary', lName: 'Jane', tel: '7894561230'}, {fName: 'Peter', lName: 'Parker', tel: '0123456789'}],
    searchResults: [],

}, action) => {

    switch (action.type) {

        case SEARCH_CONTACT:
            return {...state, searchResults: action.payload}

        case ADD_CONTACT:
            return {...state, contacts: action.payload}

        default:
            return state

    }
}