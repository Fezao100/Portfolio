export async function fetchProfileData() {
    const response = await fetch('data/profile.json');
    
    return await response.json();
}
