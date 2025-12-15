let numSelect = null;
let symSelect = null;
let charSelect = null;
let passLength = null;
let passList = "";
let password = "";
let passDisplay = "";
let strength = "";

window.onload = function () {
    passLength = lengthInput.value;
    lengthDisplay.innerText = lengthInput.value;
    generatePassword();
};

function outputLength() {
    passLength = lengthInput.value;
    lengthDisplay.innerText = lengthInput.value;
    console.log("Password length is: ", passLength);
}

function copyText() {
    const text = document.getElementById('passwordDisplay').textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard:', text);
        })
        .catch(err => {
            console.error('Failed to copy text:', err);
        });
}

function evalStrength() {
    strength = zxcvbn(password);
    console.log(strength.score);

    if (strength.score == 1) {
        document.getElementById('passStrength').innerText = "Weak";
        document.getElementById('passStrength').style.color = 'red';
    } else if (strength.score == 2) {
        document.getElementById('passStrength').innerText = "Medium";
        document.getElementById('passStrength').style.color = 'orange';
    } else if (strength.score == 3) {
        document.getElementById('passStrength').innerText = "Strong";
        document.getElementById('passStrength').style.color = 'green';
    } else if (strength.score == 4) {
        document.getElementById('passStrength').innerText = "Very Strong";
        document.getElementById('passStrength').style.color = '#1B5E20';
    }
}

function generatePassword() {
    password = "";
    passList = "";
    counter = 0;

    numSelect = document.getElementById('switchNumbers').checked;
    symSelect = document.getElementById('switchSymbols').checked;
    charSelect = document.getElementById('switchMixed').checked;

    if (!numSelect && !symSelect && !charSelect) {
        document.getElementById('passwordDisplay').innerText = "select an option!";
        return;
    }

    if (numSelect) {
        passList += "123456789";
    }
    if (symSelect) {
        passList += "!@#$%^&*()";
    }
    if (charSelect) {
        passList += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }

    while (counter < passLength) {
        password += passList[Math.floor(Math.random() * passList.length)];
        counter ++;
    }

    document.getElementById('passwordDisplay').innerText = password;
    evalStrength();
}