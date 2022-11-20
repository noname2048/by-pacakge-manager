const button: HTMLElement = document.getElementById("hello")
const span: HTMLElement = document.getElementById("cnt")

interface Func {
    (): void
}

const buttonOnClickHandler: Func = (): void => { span.innerText = String(parseInt(span.innerText) + 1); }
button.addEventListener("click", buttonOnClickHandler);

interface some {
    id: number
    name: string
    ids: number[] | undefined
}

type GreetFunction = (a: string) => void;
function greeter(fn: (a: string)=> void){
    fn("hello world");
};
function greeting(fn: GreetFunction) {
    fn("Hello world" );
}
function greet(person: { name: string, age: number}) {
    return "Hello" + person.name;
}
