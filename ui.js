class UI{
    constructor(){
        this.profile =document.getElementById("profile");
    }

    showProfile(userData){
        this.profile.innerHTML = `
        <h3 class="font-weight-bold text-info text-center">Location: ${userData.timezone}</h3>
        <h3 class="font-weight-bold text-info text-center">Temperature: ${Math.round((userData.currently.temperature - 32) * 5/9)}°C</h3>
        <h3 class="font-weight-bold text-info text-center">Weather description: ${userData.currently.summary}</h3>
        `;
    }
}