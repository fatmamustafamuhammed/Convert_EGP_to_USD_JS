let pound = document.getElementById("pound");
let dollar = document.getElementById("dollar");

pound.onkeyup = function () {
    dollar.value = (pound.value / 48.51).toFixed(2);
}

dollar.onkeyup = function () {
    pound.value = (dollar.value * 48.51).toFixed(2);
}
