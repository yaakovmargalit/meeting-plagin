import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Settings = () => {

    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [loader, setLoader] = useState('Save Settings');

    // const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoader('Saving...');
    //     axios.post(url, {
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email
    //     }, {
    //         headers: {
    //             'content-type': 'application/json',
    //             'X-WP-NONCE': appLocalizer.nonce
    //         }
    //     })
    //         .then((res) => {
    //             setLoader('Save Settings');
    //         })
    // }

    // useEffect( () => {
    //     axios.get( url )
    //     .then( ( res ) => {
    //         setFirstName( res.data.firstname );
    //         setLastName( res.data.lastname );
    //         setEmail( res.data.email );
    //     } )
    // }, [] )

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const meetings = [1, 2, 3, 4,'שושי']
    return (
        <React.Fragment>
            <div className="main-app-settings">
                <h2>ניהול הפגישות</h2>
                <Button variant="text" onClick={handleClickOpen}>צור סוג פגישה</Button>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {meetings.map((item, index) => {
                                return <Tab label={item} />
                            })}
                            {/* <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" /> */}
                        </Tabs>
                    </Box>
                    {meetings.map((item, index) => {
                        return <TabPanel value={value} index={index}>
                            {item}
                        </TabPanel>
                    })}

                </Box>

            </div>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
        </React.Fragment>
    )
}

export default Settings;