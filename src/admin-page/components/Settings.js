import React, { useState, useEffect } from 'react';
import DaysSettings from './DaysSettings';
import { getMeetingSettings } from '../service'
const Settings = () => {
    const [meetingSettings, setMeetingSettings] = useState(null)

    useEffect(async () => {
        const settings = await getMeetingSettings()
        console.log(settings);
        setMeetingSettings(settings)
    }, [])

    return (
        <React.Fragment>
          { meetingSettings && <DaysSettings availabilitys={meetingSettings.availabilitys} />}
        </React.Fragment>
    )
}

export default Settings;