"use strict";
$(document).ready(function () {

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={f8c0821516f23a4f1ec9d133cbb48b51}'
            async function myWeather() {
                let responce = await fetch(url)
                let data = await responce.json()
                $("#city").html(data.name)
                $("#temp").html(data.main.temp)
                $("#feels").html(data.main.feels_like)
                $("#myWeather").val("")
                console.log(data)
            }
            myWeather()
        }
    }
 });

$("#btn").click(function (e) {
    e.preventDefault()
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={f8c0821516f23a4f1ec9d133cbb48b51}'
    async function myWeather() {
        let responce = await fetch(url)
        let data = await responce.json()
        $("#city").html(data.name)
        $("#temp").html(data.main.temp)
        $("#feels").html(data.main.feels_like)
        $("#myWeather").val("")
        console.log(data)
    }
    myWeather()
}

