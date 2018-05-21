const singleData = document.querySelectorAll(".single-data input")
const incomeSum = document.querySelector(".result-number")
const incomeDiff = document.querySelector(".difference-number")
const confirmButton = document.querySelector(".confirm-data")

let sum, diff = 0.0;

confirmButton.addEventListener("click", function(){
    /*sum = parseFloat(singleData[0].value) +
        parseFloat(singleData[2].value * 500) +
        parseFloat(singleData[3].value * 200) +
        parseFloat(singleData[4].value * 100) +
        parseFloat(singleData[5].value * 50) +
        parseFloat(singleData[6].value * 20) +
        parseFloat(singleData[7].value * 10) +
        parseFloat(singleData[8].value * 5) +
        parseFloat(singleData[9].value * 2) +
        parseFloat(singleData[10].value) +
        parseFloat(singleData[11].value * 0.5) +
        parseFloat(singleData[12].value * 0.2) +
        parseFloat(singleData[13].value * 0.1) +
        parseFloat(singleData[14].value * 0.05) +
        parseFloat(singleData[15].value * 0.02) +
        parseFloat(singleData[16].value * 0.01)*/
    sum = ((singleData[0].value != "") ? parseFloat(singleData[0].value) : 0) +
    ((singleData[2].value != "") ? parseFloat(singleData[2].value) * 500 : 0) +
    ((singleData[3].value != "") ? parseFloat(singleData[3].value) * 200 : 0) +
    ((singleData[4].value != "") ? parseFloat(singleData[4].value) * 100 : 0) +
    ((singleData[5].value != "") ? parseFloat(singleData[5].value) * 50 : 0) +
    ((singleData[6].value != "") ? parseFloat(singleData[6].value) * 20 : 0) +
    ((singleData[7].value != "") ? parseFloat(singleData[7].value) * 10 : 0) +
    ((singleData[8].value != "") ? parseFloat(singleData[8].value) * 5 : 0) +
    ((singleData[9].value != "") ? parseFloat(singleData[9].value) * 2 : 0) +
    ((singleData[10].value != "") ? parseFloat(singleData[10].value) : 0) +
    ((singleData[11].value != "") ? parseFloat(singleData[11].value) * 0.5 : 0) +
    ((singleData[12].value != "") ? parseFloat(singleData[12].value) * 0.2 : 0) +
    ((singleData[13].value != "") ? parseFloat(singleData[13].value) * 0.1 : 0) +
    ((singleData[14].value != "") ? parseFloat(singleData[14].value) * 0.05: 0) +
    ((singleData[15].value != "") ? parseFloat(singleData[15].value) * 0.02 : 0) +
    ((singleData[16].value != "") ? parseFloat(singleData[16].value) * 0.01 : 0)
    diff = sum - ((singleData[1].value != "") ? parseFloat(singleData[1].value) : 0)
    incomeSum.innerText = sum + " zł"
    incomeDiff.innerText = diff + " zł"
    if (diff > 0) {
        incomeDiff.style.color = "var(--correct-color)"
    } else {
        incomeDiff.style.color = "var(--alert-color)"
    }
})