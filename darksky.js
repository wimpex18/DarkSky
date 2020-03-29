class DarkSky{
    constructor(){
        this.coord1 = "59.2609"
        this.coord2 = "24.4421"
        this.secret_key = "adb51686961c9aeb311462550678aa87"
        this.url = "https://api.darksky.net/forecast/";
    }

    

    //method to get data from github API
    async getWeatherData(){
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = `${proxyUrl}${this.url}${this.secret_key}/${this.coord1},${this.coord2}`;

        const urlResponse = await fetch(apiUrl);
        const urlJson = await urlResponse.json();

        return{
            urlJson
        }

    }
}