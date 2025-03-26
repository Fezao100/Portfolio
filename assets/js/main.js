import { fetchProfileData } from './api.js';

function uptadeProfileData(profileData){
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
}

function uptadeDegreeData(profileData) {
    const university = document.getElementById('profile.university')
    university.innerText = profileData.university

    const degree = document.getElementById('profile.degree')
    degree.innerText = profileData.degree
}

function uptadeLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language.language}: <span>${language.level}</span></li>`).join('')
}

function uptadeSoftSkill(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function uptadeHardSkill(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('')
}

function uptadeProjects(profileData) {
    const projects = document.getElementById('profile.projects')
    projects.innerHTML = profileData.projects.map(project => 
        `<li><span><img src="${project.gitIcon}"> ${project.name}</span>
        <a href="${project.url}">${project.url}</a></li>`).join('')
}

function uptadeProfessionalExperience(profileData) {
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(exp => 
        `<li><span>${exp.name}</span>
        <p><img src="${exp.calendar}">${exp.period}</p>
        <p>${exp.description}</p></li>`).join('')
}

function uptadeCourses(profileData) {
    const courses = document.getElementById('profile.courses')
    courses.innerHTML = profileData.courses.map(course => 
        `<li><span>${course.name}</span>
            <p ><img src="${course.calendar}">${course.conclusion}</p>
            <p>${course.description}</p></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()

    uptadeProfileData(profileData)
    uptadeDegreeData(profileData)
    uptadeSoftSkill(profileData)
    uptadeHardSkill(profileData)
    uptadeLanguages(profileData)
    uptadeProjects(profileData)
    uptadeProfessionalExperience(profileData)
    uptadeCourses(profileData)
})();