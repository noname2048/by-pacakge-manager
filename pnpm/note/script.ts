const button: HTMLElement = document.getElementById("hello")
const buttonOnClickHandler = (): void => {
    alert("hello");
}

button.addEventListener("click", buttonOnClickHandler);
