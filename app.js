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
    })
