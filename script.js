function calculateBMI() {
    let weight = document.getElementById('WEIGHT').value;
    let height = document.getElementById('HEIGHT').value;
    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        document.getElementById('result').innerText = `Your bmi is :${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid values.";
    }
}
