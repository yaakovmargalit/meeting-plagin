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
export async function addNewAvailability(startTime, endTime, meetingLength, selctedDayCode) {
    console.log("fdgdfg");
    try {
        const response = await axios.post(appUrl + '/settings/availability', {
            "startTime": startTime,
            "endTime": endTime,
            "meetingLength": meetingLength,
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
export async function removeAvailability(id) {
    try {
        const response = await axios.delete(appUrl + '/settings/availability',
            {
                data: {
                    id
                },
                headers: {
                    'X-WP-NONCE': appLocalizer.nonce
                }
            }
        )
        const deleted = response.data
        console.log(deleted);
        return deleted;
    } catch (error) {
        return error
    }
}