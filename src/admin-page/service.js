const appUrl = `${appLocalizer.apiUrl}/ym-meeting/v1/settings`


export async function getMeetingSettings() {
    try {
        const response = await fetch(appUrl, {
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