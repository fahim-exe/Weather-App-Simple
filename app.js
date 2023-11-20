const outerSection = document.querySelector(".outer-section"),
    userInput = document.querySelector(".user-input"),
    infoText = document.querySelector(".info-txt"),
    inputField = document.querySelector("input"),
    btnLocation = document.querySelector("button"),
    weatherOutput = outerSection.querySelector(".weather-output"),
    weatherIcon = weatherOutput.querySelector("img"),
    backArrow = outerSection.querySelector("headedr i")

    let API;

const rndMessages = ["If you get drenced in rain it can cure skin disease....", "Better take umbrella whether it is summer or winter or rain...", "Sun is the free source of Vitamin D !!!!", "When you are hit with storm try to get into the eye.....", "In winter running loses more fat...."];



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

    function onSuccess(position){
        const{latitude, longitude} = position.coords;
        API = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon={longitude}&units=metric&appid=91c3f2167431be518d3f9b4109376769`;
        fetchData();
    }


    function onError(error){
        infoText.innerText = error.message;
        infoText.classList.add("error")
    }

    function fetchData(){
        infoText.innerText = "Geting weather updates........"
    }