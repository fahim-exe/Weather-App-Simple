const outerSection = document.querySelector(".outer-section"),
    userInput = document.querySelector(".user-input"),
    infoText = document.querySelector(".info-txt"),
    inputField = document.querySelector("input"),
    btnLocation = document.querySelector("button"),
    weatherOutput = outerSection.querySelector(".weather-output"),
    weatherIcon = weatherOutput.querySelector("img"),
    backArrow = outerSection.querySelector("headedr i")

    let API;

    inputField.addEventListener("keyup", e => {
        if (e.key == "Enter" && inputField.value !=""){

            requestApi(inputField.value);
        }
    });


    btnLocation.addEventListener("click", () =>{

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }

        else{
            alert("Your browser does not support geolocation api!!!")
        }
    });

    function requestApi(city){
        API = `api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91c3f2167431be518d3f9b4109376769`;
        fetchData();
    }
