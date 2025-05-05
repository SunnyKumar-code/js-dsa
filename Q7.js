
/**
 * async => Declaring a function with async makes it return a promise
 * await => It pauses the execution of the code until the promise it's waiting for is resolved , then returns the resolved value
 */

async function fetchApi() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);

    }
}
fetchApi()