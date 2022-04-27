import React from 'react'
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, TableContainer, Paper} from "@mui/material";

import { useSelector } from "react-redux";

const tHeadCells = {backgroundColor : 'black', color : 'white', fontWeight: 'bold'}

const ContactsDisplay = () => {

    const contacts = useSelector(state => state.contacts)
    const searchResults = useSelector(state => state.searchResults)

    return (
        <Grid container justifyContent='center' sx={{ml: {sm: "50px"}, mt: '15px'}}>

            <Grid item xs={12} sm={8} lg={4}>
                <TableContainer component={Paper}>


                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell align='center' sx={tHeadCells}>First Name</TableCell>

                            <TableCell align='center' sx={tHeadCells}>Last Name</TableCell>

                            <TableCell align='center' sx={tHeadCells}>Phone Number</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>

                        <ContactsTRow contacts={searchResults.length > 0 ? searchResults.map(index => (contacts[index])) :  contacts} />

                    </TableBody>

                </Table>
                </TableContainer>
            </Grid>
        </Grid>

    )
}

const ContactsTRow = ({contacts}) => {

    return contacts.map((contact, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

            <TableCell align='center'> {contact.fName} </TableCell>

            <TableCell align='center'> {contact.lName} </TableCell>

            <TableCell align='center'> {contact.tel} </TableCell>

        </TableRow>
    ))
}

export default ContactsDisplay