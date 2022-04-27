
import React, {useEffect, useState} from 'react'
import {Grid, TextField} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {search} from "../redux/actions";


const SearchContacts = () => {

    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const searchResults = useSelector(state => state.searchResults)

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {

        let results = [...searchResults]

        if (searchQuery.length > 0) {

            for (let i = 0; i < contacts.length; i++) {

                let fName = contacts[i].fName.toUpperCase()
                let lName = contacts[i].lName.toUpperCase()
                let tel = contacts[i].tel
                let query = searchQuery.toUpperCase()

                if (!results.includes(i)) {

                    if (fName.startsWith(query) || lName.startsWith(query) || tel.startsWith(query)) {

                        results = [...results, i]

                    }
                }

                else if (searchResults.includes(i) && !fName.startsWith(query) && !lName.startsWith(query) && !tel.startsWith(query)) {

                    let index = results.indexOf(i)
                    results.splice(index)

                }
            }

            dispatch(search(results))
        }

        else if (searchQuery.length === 0 && searchResults.length > 0){

            results.splice(0, results.length)
            dispatch(search(results))
        }

    }, [searchQuery, contacts])


    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={5} sm='auto'>
                <TextField className="text-input"
                           label="Search"
                           variant="outlined"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}/>
            </Grid>
        </Grid>
    )
}

export default SearchContacts