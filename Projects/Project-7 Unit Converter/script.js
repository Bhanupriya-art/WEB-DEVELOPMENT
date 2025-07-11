const conversions = {
    cm: { m: 0.01, km: 0.00001, cm: 1 },
    m: { cm: 100, km: 0.001, m: 1 },
    km: { m: 1000, cm: 100000, km: 1 },
    in: { cm: 2.54, m: 0.0254, in: 1 },
    g: { kg: 0.001, g: 1 },
    kg: { g: 1000, kg: 1 },
    lb: { kg: 0.453592, lb: 1 },
    L: { L: 1 },
};
function convertTemperature(value, from, to) {
    if (from === to) return value;
    if (from === "C") {
        if (to === "F") return value * 9 / 5 + 32;
        if (to === "K") return value + 273.15;
    } else if (from === "F") {
        if (to === "C") return (value - 32) * 5 / 9;
        if (to === "K") return (value - 32) * 5 / 9 + 273.15;
    } else if (from === "K") {
        if (to === "C") return value - 273.15;
        if (to === "F") return (value - 273.15) * 9 / 5 + 32;
    }
    return null;
}
function convertUnit() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    const resultDiv = document.getElementById("result");
    const history = document.getElementById("history");
    if (isNaN(inputValue)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }
    let convertedValue = null;
    if (["C", "F", "K"].includes(inputUnit) && ["C", "F", "K"].includes(outputUnit)) {
        convertedValue = convertTemperature(inputValue, inputUnit, outputUnit);
    } else if (conversions[inputUnit] && conversions[inputUnit][outputUnit]) {
        convertedValue = inputValue * conversions[inputUnit][outputUnit];
    } else {
        resultDiv.textContent = "Conversion not supported!";
        return;
    }
    const formatted = `${inputValue} ${inputUnit} = ${convertedValue.toFixed(3)} ${outputUnit}`;
    resultDiv.textContent = `${formatted}`;
    const listItem = document.createElement("li");
    listItem.textContent = `${formatted}`;
    history.prepend(listItem);
}
