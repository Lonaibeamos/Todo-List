class Todo{
    constructor(title,description,duedate,priority){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.complete = false;
        this.checklist = {task:this.description,done: this.complete};
        this.notes = "title:" + this.title + " " + "description:" + this.description;
    }
    toggleComplete(){
        this.complete = !this.complete;
    }
    changePriority(priority){
        this.priority = priority;
    }
}

let projects = [
    {
        name: "exercise",
        todos: [
            new Todo("Leg-day","10x squat,10x dead-lift,10x jumping-jogs","18/05/26","High"),
            {
                title: "Reading-day",
                description: "Read the art of war",
                duedate: "19/05/26",
                priority: "High",
                complete: false,
            },
        ],
    },
];



function createProject(){
    let name = prompt("Enter Name","groceries");
    let todo =  {
        name,
        todos: [],
    }
   projects.push(todo);
   return todo;
}

function addTodo(){
    const title = prompt("Enter Title","groceries");
    const description = prompt("Description","Buy vegetables and fruits");
    const dueDate = prompt("DueDate","17/05/26");
    const priority = prompt("Priority","High");
    return new Todo(title,description,dueDate,priority);
}

function findProject(ProjectName){
    return projects.find(p => p.name === ProjectName);
}

function addToPojects(ProjectName){
let proj = findProject(ProjectName);
const todo = addTodo();
if(!proj){
    proj = createProject();
}
return proj.todos.push(todo);
}


//collect the dom 
const addTask = document.querySelector(".add");
const viewProjects = document.querySelector(".view");
const viewAllTodos = document.querySelector(".todo");
const sidebar = document.querySelector(".sidebar2");
const submitbtn = document.querySelector(".btn");
const projectInput = document.querySelector("#project");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const date = document.querySelector("#date");
const popup = document.querySelector(".popup");
const cancelBtn =
document.querySelector("#cancel");
const submit = document.querySelector("#submit");
const add = document.querySelector(".add");
const newDiv = document.querySelector(".Three");

function renderUI(){

addTask.addEventListener("click", () => {
    sidebar.style.background = "lightblue";
    popup.style.display = "block";
    submitbtn.style.display = "none";

})

submit.addEventListener('click',(e) => {
e.preventDefault();

    const todo = {
        name: projectInput.value,
        todos: [],

    }
    projects.push(todo);
    console.log(projects);
    popup.style.display = "none";
    submitbtn.style.display = "block";
    const td = document.createElement('td');
    td.textContent = todo.name;
    newDiv.style.display = "block"
    newDiv.appendChild(div);
    div.style.marginTop = "10px";
});
newDiv.addEventListener('click',() => {

})

cancelBtn.addEventListener('click',() =>{
    popup.style.cssText = "display: none";
    submitbtn.style.display = "block";
})

submitbtn.addEventListener("click",(e) => {
viewAllTodos.style.display = "block";

});

viewProjects.addEventListener('click',()=> {
    form.style.display = "none";
    sidebar.style.background = "#333";
    sidebar.style.color = "white";
    
})

};
renderUI();

