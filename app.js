const singleData = document.querySelectorAll(".single-data input")
const incomeSum = document.querySelector(".result-number")
const incomeDiff = document.querySelector(".difference-number")

let sum, diff = 0.0;
for(let i = 0; i < singleData.length; i++){
    singleData[i].value = 0
}

for(let i = 0; i < singleData.length; i++){
    singleData[i].addEventListener("input", function(){
        if (!singleData[i].value){
            singleData[i].value = 0
        }
        sum = parseFloat(singleData[0].value) +
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
        parseFloat(singleData[16].value * 0.01)
        diff = sum - parseFloat(singleData[1].value)
        incomeSum.innerText = sum + " zł"
        incomeDiff.innerText = diff + " zł"
        if (diff > 0) {
            incomeDiff.style.color = "var(--correct-color)"
        } else {
            incomeDiff.style.color = "var(--alert-color)"
        }
    })
}