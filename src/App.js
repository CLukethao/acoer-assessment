
import {Grid} from "@mui/material";
import ContactsIcon from '@mui/icons-material/Contacts';
import UserInput from "./components/UserInput";
import ContactsDisplay from "./components/ContactsDisplay";
import SearchContacts from "./components/SearchContacts";


const App = () => {

    return (
        <Grid container justifyContent='center'>

            <UserInput />


            <h1> <ContactsIcon sx={{color: '#db9a0f'}}/> Contacts</h1>

            <SearchContacts />

            <ContactsDisplay />

        </Grid>
    );
}

export default App;
