
import React, {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addContact} from "../redux/actions";


const UserInput = () => {

    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)

    const [contactInfo, setContactInfo] = useState({
        fName: '',
        lName: '',
        tel: ''
    })

    const onAddContact = () => {

        dispatch(addContact([...contacts, contactInfo]))

        setContactInfo({
            fName: '',
            lName: '',
            tel: ''
        })
    }

    return (

            <Grid container justifyContent="center" alignItems="center" spacing={1} sx={{ml: {xs: '130px', sm: "60px"}, mt: "10px"}}>
                <Grid item xs={12} sm={2} md="auto">
                    <TextField className="text-input"
                               label="First Name"
                               variant="outlined"
                               value={contactInfo.fName}
                               onChange={(e) => setContactInfo(prevState => ({...prevState, fName: e.target.value}))}/>
                </Grid>

                <Grid item xs={12} sm={2} md="auto">
                    <TextField className="text-input"
                               label="Last Name"
                               variant="outlined"
                               value={contactInfo.lName}
                               onChange={(e) => setContactInfo(prevState => ({...prevState, lName: e.target.value}))}/>
                </Grid>

                <Grid item xs={8} sm={2} md="auto">
                    <TextField className="text-input"
                               label="Phone Number"
                               variant="outlined"
                               value={contactInfo.tel}
                               onChange={(e) => setContactInfo(prevState => ({...prevState, tel: e.target.value}))}/>
                </Grid>

                <Grid item xs={4} sm="auto">
                    <Button variant="contained" onClick={onAddContact}>Add</Button>
                </Grid>
            </Grid>
    )
}

export default UserInput