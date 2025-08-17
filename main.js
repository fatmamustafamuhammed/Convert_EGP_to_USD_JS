let pound = document.getElementById("pound");
let dollar = document.getElementById("dollar");

pound.onkeyup = function () {
    dollar.value = (pound.value / 48.51);
}

dollar.onkeyup = function () {
    pound.value = (dollar.value * 48.51);
}
