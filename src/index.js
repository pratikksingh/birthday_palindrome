var date = document.querySelector("#birthday-input");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function clickHandler() {
  output.innerHTML = "";
  const finalDate = date.value.split("-").reverse().join("");
  console.log(finalDate);
  let reverse = "";

  for (let i = finalDate.length - 1; i >= 0; i--) {
    reverse += finalDate[i];
  }
  if (finalDate === "") {
    output.innerHTML = "Enter the birth day first!";
    return;
  } else if (finalDate === reverse) {
    output.innerHTML = "Yay, your birthday is pallindrome";
  } else {
    output.innerHTML = "Oops , your birthday is not pallindrome";
  }
}

btn.addEventListener("click", clickHandler);
