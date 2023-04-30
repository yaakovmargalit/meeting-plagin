const appUrl = `${appLocalizer.apiUrl}/ym-meeting/v1`
import axios from 'axios';


export async function getMeetingSettings() {
    try {
        const response = await fetch(appUrl + '/settings', {
            headers: {
                'X-WP-NONCE': appLocalizer.nonce
            }
        })
        const settings = await response.json()
        console.log(settings);
        settings.dayList = []
        return settings;
    } catch (error) {
        return error
    }
}
export async function addNewAvailability() {
    try {
        const response = await axios.post(appUrl + '/settings/availability', {
            "startTime": "13:00",
            "endTime": "18:00",
            "meetingLength": "40",
            "dayRef": "4"
        },
            {
                headers: {
                    'X-WP-NONCE': appLocalizer.nonce
                }
            }
        )
        const added = response.data
        console.log(added);
        return added;
    } catch (error) {
        return error
    }
}