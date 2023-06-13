const list = [10,20,30];
        console.log(list);
    
const todos1 = [];
const todos2 = [];
        

function addItem(){

    const inputTodo1 = document.querySelector('.js-todoinput1');
    const inputString = inputTodo1.value;
    todos1.push(inputString);
    console.log(todos1);
    inputTodo1.value = '';

}

function addItem2(){

    const inputTodo1 = document.querySelector('.js-todoinput2');
    const inputString = inputTodo1.value;
    let outputString = ``;
    todos2.push(inputString);
    for(let i = 0;  i < todos2.length; i++){
        outputString = outputString +`<p>${todos2[i]}</p>`
    }
    document.querySelector('.js-todooutput').innerHTML = outputString;
    inputTodo1.value = '';

}