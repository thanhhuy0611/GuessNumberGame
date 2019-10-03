let key;
function random() {
    key = Math.floor(Math.random() * 100) + 1;
    console.log(key);
}
random();
let history = [];
//--------------------------------------
//-------compare and add history------
function compare() {
    let input = document.getElementById('inputNumber').value;
    if (checkDoubleNumber(input)) {
        addHistory(input);
        if (input != key) {
            //--add history-------
            history.push(input);
            console.log(history);
            //----------------------
            if (input > key) {
                document.getElementById('result').innerHTML = "Too high";
            } else if (input < key) {
                document.getElementById('result').innerHTML = "Too low";
            }
        }
        else if (input = key) {
            document.getElementById('result').innerHTML = "Bingo";
            resetHistory();
            alert('You won!');
            random();
        }
        clearInputBox();
    }
}
function addHistory(numberGuess) {
    let node = document.createElement("LI");
    let listHistory = document.createTextNode(numberGuess);
    node.appendChild(listHistory);
    document.getElementById("history").append(node);
}
function clearInputBox() {
    document.getElementById('inputNumber').value = "";
    document.getElementById('inputNumber').innerHTML = "";
}
function gameOver(timeGuess) {
    if (history.length === timeGuess) {
        console.log("Game over")
        document.getElementById("submit").disabled = true;
        alert("Game over!")
    } else { document.getElementById("submit").disabled = false; }
}
function resetHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
    random();
}
function validationInputNumber() {
    let input = document.getElementById('inputNumber').value;
    if (input > 0) {
        return true;
    } else {
        return false;
    }
}
function checkDoubleNumber(input) {
    
        if (input === history[0]) {
            alert("You have already choice this number!");
            return false;
        }
        else if (input === history[1]) {
            alert("You have already choice this number!");
            return false;
        }
        else if (input === history[2]) {
            alert("You have already choice this number!");
            return false;
        } else if (input === history[3]) {
            alert("You have already choice this number!");
            return false;
        }
        return true;
    console.log(double)
}

document.getElementById('submit').addEventListener('click', function () {
    if (validationInputNumber()) {
        let input = document.getElementById('inputNumber').value;
        compare();
        gameOver(5);
    } else {
        alert('Please enter your number & it\'s greater than 0');
    }
})
document.getElementById('reset').addEventListener("click", function () {
    resetHistory();
    gameOver(5);
})

