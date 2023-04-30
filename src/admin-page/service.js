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
export async function addNewAvailability(startTime, startime, endTime,selctedDayCode) {
    try {
        const response = await axios.post(appUrl + '/settings/availability', {
            "startTime": startTime,
            "endTime": endTime,
            "meetingLength": startime,
            "dayRef": selctedDayCode
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