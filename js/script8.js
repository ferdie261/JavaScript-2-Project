document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculateBtn");
    
    button.addEventListener("click", function () {
        const principal = parseFloat(document.getElementById("principal").value);
        const rate = 58.87; //current conversion

        const resultDiv = document.getElementById("result");

        if (isNaN(principal)) {
        resultDiv.innerText = "Please enter valid numbers.";
        return; //isNan = is Not a Number, return means it would not accept letters and symbols.
        }
        const totalAmount = principal * rate;

        resultDiv.innerHTML = `
        Current rate: ${rate.toFixed(2)} <br>
        Converted value: ${rate.toFixed(2)} x ${principal} = P${totalAmount.toFixed(2)}`;
    });
});

document.getElementById('backBtn').addEventListener ("click", function () {
    window.location.href = "index.html"

});