
async function fetchProfileData() {
    const url =  'https://raw.githubusercontent.com/Fezao100/Portfolio/refs/heads/main/data/profile.json'
    const fetch = await fetch(url)
    
    return await fetching.json()
}