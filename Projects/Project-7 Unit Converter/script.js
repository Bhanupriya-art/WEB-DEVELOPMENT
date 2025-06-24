const conversions = {
    cm: { m: 0.01, km: 0.00001, cm: 1 },
    m: { cm: 100, km: 0.001, m: 1 },
    km: { m: 1000, cm: 100000, km: 1 },
    g: { kg: 0.001, g: 1 },
    kg: { g: 1000, kg: 1 }
};
function convertUnit() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const resultDiv = document.getElementById("result");
    if (isNaN(inputValue)) {
        resultDiv.textContent = "❌ Please enter a valid number!";
        return;
    }
    if (!(inputUnit in conversions) || !(outputUnit in conversions[inputUnit])) {
        resultDiv.textContent = "❌ Conversion not supported!";
        return;
    }
    const convertedValue = inputValue * conversions[inputUnit][outputUnit];
    resultDiv.textContent = `✅ ${inputValue} ${inputUnit} = ${convertedValue} ${outputUnit}`;
}
