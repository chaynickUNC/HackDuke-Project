const text = document.querySelector("#textBox");
const zButton = document.querySelector("#zButton");
const pomoButton = document.querySelector("#pomoButton");
const studyButton = document.querySelector("#studyButton");
const langButton = document.querySelector("#langButton");
const wikiButton = document.querySelector("#wikiButton");

const ZoomBox = document.querySelector(".ZoomBox");
const pomoBox = document.querySelector(".pomoBox");
const studyBox = document.querySelector(".studyBox");
const langBox = document.querySelector(".langBox");
const wikiBox = document.querySelector(".wikiBox");

const wikiSearchButton = document.querySelector("#wikiSearchButton");
const wikiTextBox = document.querySelector("#wikiTextBox");

wikiSearchButton.addEventListener("click", (e) => {
    window.open(`http://www.google.com/search?q=${wikiTextBox.value} wikipedia`)
});


function setDisplayNone(targetBox){
    const boxes = [ZoomBox, pomoBox, studyBox, langBox, wikiBox];
    i = 0;
    while(i < boxes.length){
        boxes[i].style="display:none";
        i++;
    }

    
}

zButton.addEventListener("click", (e) => {
    e.preventDefault();
    text.style="display:none";
    pomoBox.style="display:none";
    studyBox.style="display:none";
    wikiBox.style="display:none";
    langBox.style="display:none";
    ZoomBox.style="";
});

pomoButton.addEventListener("click", (e) => {
    e.preventDefault();
    text.style="display:none";
    ZoomBox.style="display:none";
    studyBox.style="display:none";
    wikiBox.style="display:none";
    langBox.style="display:none";
    pomoBox.style="";
});

studyButton.addEventListener("click", (e) => {
    e.preventDefault();
    text.style="display:none";
    pomoBox.style="display:none";
    ZoomBox.style="display:none";
    wikiBox.style="display:none";
    langBox.style="display:none";
    studyBox.style="";
});

langButton.addEventListener("click", (e)=>{
    e.preventDefault();
    text.style="display:none";
    pomoBox.style="display:none";
    ZoomBox.style="display:none";
    wikiBox.style="display:none";
    studyBox.style="display:none";
    langBox.style="";
});

wikiButton.addEventListener("click", (e) => {
    e.preventDefault();
    text.style="display:none";
    pomoBox.style="display:none";
    ZoomBox.style="display:none";
    studyBox.style="display:none";
    langBox.style="display:none";
    wikiBox.style="";
});

const pomoStartButton = document.querySelector("#startButton");
const pomoResetButton = document.querySelector("#resetButton");
const timeBox = document.querySelector("#timeBox");
const cycleBox = document.querySelector("#cycleBox");

let mins = 25; //25
let i = 0;
function countdown(){
    if(i % 2 != 0){
        cycleBox.innerHTML = `${.5 * i + .5} of 4 25-minute segments complete`;
    }

    let endTime = new Date();
    
    endTime.setMinutes(endTime.getMinutes() + mins);
    
    function timer(){

        let d = new Date();
        d.setSeconds(d.getSeconds() - 1);

        let totalSeconds = Math.floor((endTime - d)/1000);

        let minutes = Math.floor(totalSeconds / 60);

        let seconds = totalSeconds % 60;

        if(seconds < 10){
            seconds = `0${seconds}`;
        };

        timeBox.innerHTML = `${minutes}:${seconds}`;

        if((seconds <= 0) && (minutes <= 0)){
            i++;
            if(i == 7){
                clearInterval(myVar);
            } else if(i == 6){
                mins = 30; //30
                clearInterval(myVar);
                countdown();
            } else if(i % 2 != 0){
                mins = 5; //5
                clearInterval(myVar);
                countdown();
            } else {
                mins = 25; //25
                clearInterval(myVar);
                countdown();
            }

        };

    };

    var myVar = setInterval(timer, 1000);

    pomoResetButton.addEventListener("click", (e) =>{
        clearInterval(myVar);
        timeBox.innerHTML = "25:00";
        cycleBox.innerHTML = "0 of 4 25-minute segments complete"
    })
};

pomoStartButton.addEventListener("click", countdown)