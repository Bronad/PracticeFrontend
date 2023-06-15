const list = [10,20,30];
        console.log(list);
    
const todos1 = [];
const todos2 = [];
const todos3 = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
        

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
    document.querySelector('.js-todooutput2').innerHTML = outputString;
    inputTodo1.value = '';

}

function addItem3(){

    const inputTodo = document.querySelector('.js-todoinput3');
    const inputString = inputTodo.value;

    const dateInputElement = document.querySelector('.js-todoinputdate3');
    const dateInputString = dateInputElement.value;

    todos3.push({name: inputString, dueDate: dateInputString});
    inputTodo.value = '';
    renderTodoList();

}

function renderTodoList(){

    let todoListHTML = '';
/*
    for (let i = 0; i < todos3.length; i++) {
        const todoObject = todos3[i];
        const {name, dueDate} = todoObject;
        
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todos3.splice(${i}, 1);
          renderTodoList();
        " class="deletebutton">Delete</button>
      `;
      todoListHTML += html;
    }
*/
    todos3.forEach(function(value,index){
      const {name, dueDate} = value;
        
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todos3.splice(${index}, 1);
          renderTodoList();
        " class="deletebutton">Delete</button>
      `;
      todoListHTML += html;
    })
  
    document.querySelector('.js-todooutput3').innerHTML = todoListHTML;
}