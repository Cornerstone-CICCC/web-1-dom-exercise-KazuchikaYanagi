// YOUR CODE HERE

const btn1 = document.querySelector("#btn1");
const outPut1 = document.querySelector("#output1");
btn1.addEventListener("click", () => {
  outPut1.style.color = "red";
});

const btn2 = document.querySelector("#btn2");
const outPut2 = document.querySelector("#output2");
btn2.addEventListener("click", () => {
  const helloWord = document.createElement("span");
  helloWord.textContent = "Hello word";
  outPut2.append(helloWord);
});

const btn3 = document.querySelector("#btn3");
const smallText = document.querySelector("#output3 .small-text");
btn3.addEventListener("click", () => {
  smallText.classList.remove("small-text");
});

const btn4 = document.querySelector("#btn4");
const outPut4 = document.querySelector("#output4");
btn4.addEventListener("click", () => {
  outPut4.style.color = "red";
});

const btn5 = document.querySelector("#btn5");
const message = document.querySelector("#message");
btn5.addEventListener("click", () => {
  const valueMessage = message.getAttribute("value");
  console.log(valueMessage);
});
