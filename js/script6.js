document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculateBtn");
    
    button.addEventListener("click", function () {
        const principal = parseFloat(document.getElementById("principal").value);
        const years = parseInt(document.getElementById("years").value);
        const rate = 10; //10% per year

        const resultDiv = document.getElementById("result");

        if (isNaN(principal) || isNaN(years)) {
        resultDiv.innerText = "Please enter valid numbers.";
        return; //isNan = is Not a Number, return means it would not accept letters and symbols.
        }
        const totalAmount = principal * (1 + (rate/100) * years);
        const ineterest = totalAmount - principal;

        resultDiv.innerHTML = `
        Interest: P${ineterest.toFixed(2)} <br>
        Total Amount after ${years} years: P${totalAmount.toFixed(2)}`;
    });
});

document.getElementById('backBtn').addEventListener ("click", function () {
    window.location.href = "index.html"

});











// function calculateInterest() {
//     const principal = parseFloat(document.getElementById("principal").value);
//     const years = parseInt(document.getElementById("years").value);
//     const rate = 10; //10% per year

//     if (isNaN(principal) || isNaN(years)) {
//         document.getElementById("result").innerText = "Please enter valid numbers.";
//         return;
//     }

//     //Simple interest formula: A=P(1+rt)
//     const totalAmount = principal * (1 + (rate/100) * years);
//     const ineterest = totalAmount - principal;

//     document.getElementById("result").innerHTML = `
//     Interest: P${ineterest.toFixed(2)} <br>
//     Total Amount after ${years} years: P${totalAmount.toFixed(2)}`;
// }