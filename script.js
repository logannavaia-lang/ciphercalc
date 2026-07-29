
// ================= DISPLAY =================

const display = document.querySelector("#display");


// ================= SCREENS =================

const calculatorScreen = document.querySelector("#calculator-screen");
const encryptionScreen = document.querySelector("#encryption-screen");
const conversionsScreen = document.querySelector("#conversions-screen");
const voiceRecorderScreen = document.querySelector("#voice-recorder");


// ================= BUTTONS =================

// Numbers
const numberButtons = document.querySelectorAll("[id^='num']");


// Operators
const plus = document.querySelector("#plus-btn");
const minus = document.querySelector("#minus-btn");
const multiply = document.querySelector("#multiply-btn");
const divide = document.querySelector("#divide-btn");

 //delete
const deleteButton = document.querySelector("#delete-btn");
// Equals
const equals = document.querySelector("#equals-btn");


// Powers
const squared = document.querySelector("#squared-btn");
const cubed = document.querySelector("#cubed-btn");
const tesseracted = document.querySelector("#tesseracted-btn");
const quintic = document.querySelector("#quintic-btn");


// Other math
const squareroot = document.querySelector("#square-root-btn");


// Navigation
const leftMover = document.querySelector("#leftmover-btn");
const rightMover = document.querySelector("#rightmover-btn");
const selector = document.querySelector("#selector-btn");


// ================= CALCULATOR VARIABLES =================

let firstNumber = "";
let secondNumber = "";
let currentInput = "";
let operator = "";
let answer = "";


// ================= NUMBER BUTTONS =================

numberButtons.forEach(button => {

    button.addEventListener("click", function () {

        currentInput += button.textContent.trim();

        display.value = currentInput;

    });

});


// ================= OPERATORS =================

function chooseOperator(symbol) {

    firstNumber = currentInput;

    operator = symbol;

    currentInput = "";

}
if(plus){
    plus.addEventListener("click", function () {
        chooseOperator("+");
    });
}

if(minus){
    minus.addEventListener("click", function () {
        chooseOperator("-");
    });
}

if(multiply){
    multiply.addEventListener("click", function () {
        chooseOperator("*");
    });
}

if(divide){
    divide.addEventListener("click", function () {
        chooseOperator("/");
    });
}



// ================= EQUALS =================
if (equals) {
    equals.addEventListener("click", function () {

    secondNumber = currentInput;


    if (operator === "+") {
        answer = Number(firstNumber) + Number(secondNumber);
    }

    else if (operator === "-") {
        answer = Number(firstNumber) - Number(secondNumber);
    }

    else if (operator === "*") {
        answer = Number(firstNumber) * Number(secondNumber);
    }

    else if (operator === "/") {
        answer = Number(firstNumber) / Number(secondNumber);
    }


    display.value = answer;


    currentInput = answer;
    firstNumber = "";
    secondNumber = "";
    operator = "";

    });
}

//================== delete ====================
if (deleteButton) {
    deleteButton.addEventListener("click", function () {

        currentInput = currentInput.slice(0, -1);

        display.value = currentInput;

    });
} 
// ================= POWERS =================

function power(number) {

    answer = Number(currentInput) ** number;

    display.value = answer;

    currentInput = answer;

}


squared.addEventListener("click", function () {
    power(2);
});


cubed.addEventListener("click", function () {
    power(3);
});


tesseracted.addEventListener("click", function () {
    power(4);
});


quintic.addEventListener("click", function () {
    power(5);
});


// ================= SQUARE ROOT =================

squareroot.addEventListener("click", function () {

    answer = Math.sqrt(Number(currentInput));

    display.value = answer;

    currentInput = answer;

});


// ================= SCREEN SWITCHING =================

let currentScreen = 0;


// 0 = Calculator
// 1 = Encryption
// 2 = Math Tools
// 3 = Conversions
function showScreen() {

    calculatorScreen.style.display = "none";
    encryptionScreen.style.display = "none";
    voiceRecorderScreen.style.display = "none";
    conversionsScreen.style.display = "none";

    if (currentScreen === 0) {
        calculatorScreen.style.display = "block";
    }

    else if (currentScreen === 1) {
        encryptionScreen.style.display = "block";
    }

    else if (currentScreen === 2) {
        voiceRecorderScreen.style.display = "block";
    }

    else if (currentScreen === 3) {
        conversionsScreen.style.display = "block";
    }

}
if (leftMover) {

    leftMover.addEventListener("click", function () {

        currentScreen--;

        if (currentScreen < 0) {
            currentScreen = 3;
        }

        showScreen();

    });

} 
if (rightMover) {

    rightMover.addEventListener("click", function () {

        currentScreen++;

        if (currentScreen > 3) {
            currentScreen = 0;
        }

        showScreen();

    });

}

//======= Encryption Page =======


const words = [
    "APPLE",
    "BANANA",
    "DRAGON",
    "FOREST",
    "MOUNTAIN",
    "OCEAN",
    "THUNDER",
    "SHADOW",
    "PHOENIX",
    "GALAXY",
    "LAPRAS",
    "COMET",
    "CASTLE",
    "TIGER",
    "EAGLE",
    "WIZARD",
    "ROCKET",
    "CRYSTAL",
    "VOLCANO",
    "PENGUIN",
    "SUNFLOWER",
    "HORIZON",
    "DIAMOND",
    "RIVER",
    "TORNADO",
    "JUNGLE",
    "LIGHTNING",
    "ANCHOR",
    "CANYON",
    "BLOSSOM",
    "PANTHER",
    "FALCON",
    "TEMPLE",
    "CIRCUIT",
    "METEOR",
    "NEBULA",
    "ORCHID",
    "SAPPHIRE",
    "WHISPER",
    "VORTEX",
    "HAMMER",
    "COMPASS",
    "COBRA",
    "LANTERN",
    "BREEZE",
    "EVEREST",
    "SPARROW",
    "EMBER",
    "AURORA",
    "CIPHER"
];


const alphabet = {
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
    F:6,
    G:7,
    H:8,
    I:9,
    J:10,
    K:11,
    L:12,
    M:13,
    N:14,
    O:15,
    P:16,
    Q:17,
    R:18,
    S:19,
    T:20,
    U:21,
    V:22,
    W:23,
    X:24,
    Y:25,
    Z:26
};


// Buttons
const encryptButton = document.querySelector("#encrypt-btn");
const gencodeword = document.querySelector("#gencodeword-btn");


// Inputs
const messageInput = document.querySelector("#message");
const encryptionOutput = document.querySelector("#encryption-output");
const codeWordInput = document.querySelector("#codeword");
const wordTitle = document.querySelector("#wordTitle");


let codeWord = "";



// Generate Code Word

if(gencodeword){

gencodeword.addEventListener("click", function(){

    const randomIndex = Math.floor(Math.random() * words.length);

    codeWord = words[randomIndex];


    codeWordInput.value = codeWord;

    wordTitle.textContent = "Code Word: " + codeWord;


});

}



// Encrypt

if(encryptButton){

encryptButton.addEventListener("click", function(){


    if(codeWord === ""){

        alert("Generate a code word first!");

        return;

    }


    let message = messageInput.value.toUpperCase();


    let repeatedCodeWord = "";


    while(repeatedCodeWord.length < message.length){

        repeatedCodeWord += codeWord;

    }


    repeatedCodeWord = repeatedCodeWord.slice(0,message.length);



    let encryptedMessage = "";



    for(let i = 0; i < message.length; i++){


        let messageChar = message[i];

        let codeChar = repeatedCodeWord[i];


        if(alphabet[messageChar] && alphabet[codeChar]){


            let encryptedPosition =
            (alphabet[messageChar] + alphabet[codeChar] - 1) % 26 + 1;



            let encryptedChar =
            Object.keys(alphabet)
            .find(letter => alphabet[letter] === encryptedPosition);



            encryptedMessage += encryptedChar;


        }

        else{

            encryptedMessage += messageChar;

        }


    }


    encryptionOutput.textContent = encryptedMessage;


});

} 
// decrypt button 


const decryptbtn = document.querySelector("#decrypt-btn");

if(decryptbtn){

decryptbtn.addEventListener("click", function(){

    if(codeWord === ""){

        alert("Generate a code word first!");

        return;

    }


    let message = messageInput.value.toUpperCase();


    let repeatedCodeWord = "";


    while(repeatedCodeWord.length < message.length){

        repeatedCodeWord += codeWord;

    }


    repeatedCodeWord = repeatedCodeWord.slice(0,message.length);



    let decryptedMessage = "";



    for(let i = 0; i < message.length; i++){


        let messageChar = message[i];

        let codeChar = repeatedCodeWord[i];


        if(alphabet[messageChar] && alphabet[codeChar]){


            let decryptPosition =
            (alphabet[messageChar] - alphabet[codeChar] + 26 - 1) % 26 + 1;



            let decryptedChar =
            Object.keys(alphabet)
            .find(letter => alphabet[letter] === decryptPosition);



            decryptedMessage += decryptedChar;


        }

        else {


            decryptedMessage += messageChar;


        }


    }


   


    encryptionOutput.textContent = decryptedMessage;


});

}


const startButton = document.querySelector("#start-recording");
const stopButton = document.querySelector("#stop-recording");
const audioPlayback = document.querySelector("#audio-playback");
const recordStatus = document.querySelector("#record-status");
const deleteRecordingButton = document.querySelector("#deleteRecording");

let mediaRecorder;
let audioChunks = [];


if (startButton && stopButton) {

    startButton.addEventListener("click", async function(){

        const stream = await navigator.mediaDevices.getUserMedia({
            audio:true
        });


        mediaRecorder = new MediaRecorder(stream);

        audioChunks = [];

        mediaRecorder.start();

        recordStatus.textContent = "Recording... 🎙";


        mediaRecorder.addEventListener("dataavailable", function(event){

            audioChunks.push(event.data);

        });

    });


    stopButton.addEventListener("click", function(){

        if(mediaRecorder){

            mediaRecorder.stop();

            recordStatus.textContent = "Recording stopped";


            mediaRecorder.addEventListener("stop", function(){

                const audioBlob = new Blob(audioChunks,{
                    type:"audio/mp3"
                });


                const audioURL = URL.createObjectURL(audioBlob);

                audioPlayback.src = audioURL;

            });

        }

    });

}


// Delete recording

if(deleteRecordingButton){

    deleteRecordingButton.addEventListener("click", function(){

        if(mediaRecorder && mediaRecorder.state === "recording"){
            mediaRecorder.stop();
        }


        audioPlayback.src = "";

        audioChunks = [];


        recordStatus.textContent = "Recording deleted 🗑";

    });

}