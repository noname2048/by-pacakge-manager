const button: HTMLElement = document.getElementById("hello")
const span: HTMLElement = document.getElementById("cnt")

const buttonOnClickHandler: function = (): void => { span.innerText = String(parseInt(span.innerText) + 1); }
button.addEventListener("click", buttonOnClickHandler);
