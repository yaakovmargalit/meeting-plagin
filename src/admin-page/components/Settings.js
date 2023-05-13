import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DaysSettings from './DaysSettings';
import { getMeetingSettings, removeAvailability } from '../service'
import { addNewAvailability } from '../service'


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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Settings = () => {
  const [meetingSettings, setMeetingSettings] = useState(null)
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(async () => {
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }, [])

  async function updateData(startTime, endTime, meetingLength, selctedDayCode) {
    await addNewAvailability(startTime, endTime, meetingLength, selctedDayCode)
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }

  async function deleteAvailability(id) {
    await removeAvailability(id)
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }

  return (

    
    <React.Fragment>
      {meetingSettings && 
      <>      
      <Tabs  dir="rtl" value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="מפגשים"  {...a11yProps(0)}/>
        <Tab label="הגדרות"  {...a11yProps(1)} />
      </Tabs>

      <TabPanel dir="rtl" value={value} index={0} >
        </TabPanel>
        <TabPanel dir="rtl" value={value} index={1}>
          <DaysSettings deleteAvailability={deleteAvailability} addNewAvailability={updateData} availabilitys={meetingSettings.availabilitys} />
        </TabPanel>
      </>
      }
    </React.Fragment>
  )
}

export default Settings;