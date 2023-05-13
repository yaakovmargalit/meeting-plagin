import React, { useState, useEffect } from 'react';
import DaysSettings from './DaysSettings';
import { getMeetingSettings, removeAvailability } from '../service'
import { addNewAvailability } from '../service'
const Settings = () => {
  const [meetingSettings, setMeetingSettings] = useState(null)
  const [update, setUpdate] = useState(false);

  useEffect(async () => {
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }, [])

  async function updateData(startTime, endTime, meetingLength, selctedDayCode) {
    await addNewAvailability(startTime, endTime, meetingLength, selctedDayCode)
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }

  async function deleteAvailability(id){
    await removeAvailability(id)
    const settings = await getMeetingSettings()
    setMeetingSettings(settings)
  }

  return (
    <React.Fragment>
      {meetingSettings && <DaysSettings deleteAvailability={deleteAvailability} addNewAvailability={updateData} availabilitys={meetingSettings.availabilitys} />}
    </React.Fragment>
  )
}

export default Settings;