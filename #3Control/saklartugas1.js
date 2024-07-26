/** @format */
console.log(listrikRumah);
function listrikRumah() {
  let toggle1 = document.getElementById("lampuKeluarga");
  let toggle2 = document.getElementById("lampuMakan");
  let toggle3 = document.getElementById("lampuTidur");
  let toggle4 = document.getElementById("lampuTamu");
  let lampu1 = document.getElementById("lampuKeluarga1");
  let lampu2 = document.getElementById("lampuKeluarga2");
  let lampu3 = document.getElementById("lampuKeluarga3");
  let lampu4 = document.getElementById("lampuMakan1");
  let lampu5 = document.getElementById("lampuMakan2");
  let lampu6 = document.getElementById("lampuTidur1");
  let lampu7 = document.getElementById("lampuTamu1");
  let lampu8 = document.getElementById("lampuTamu2");
  let lampu9 = document.getElementById("lampuTamu3");
  let lampu10 = document.getElementById("lampuTamu4");

  if (toggle1.checked) {
    lampu1.src = "asset/images/on.png";
    lampu2.src = "asset/images/on.png";
    lampu3.src = "asset/images/on.png";
  } else {
    lampu1.src = "asset/images/off.png";
    lampu2.src = "asset/images/off.png";
    lampu3.src = "asset/images/off.png";
  }

  if (toggle2.checked) {
    lampu4.src = "asset/images/on.png";
    lampu5.src = "asset/images/on.png";
  } else {
    lampu4.src = "asset/images/off.png";
    lampu5.src = "asset/images/off.png";
  }

  if (toggle3.checked) {
    lampu6.src = "asset/images/on.png";
  } else {
    lampu6.src = "asset/images/off.png";
  }
  if (toggle4.checked) {
    lampu7.src = "asset/images/on.png";
    lampu8.src = "asset/images/on.png";
    lampu9.src = "asset/images/on.png";
    lampu10.src = "asset/images/on.png";
  } else {
    lampu7.src = "asset/images/off.png";
    lampu8.src = "asset/images/off.png";
    lampu9.src = "asset/images/off.png";
    lampu10.src = "asset/images/off.png";
  }
}
