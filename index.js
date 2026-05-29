class Todo{
    constructor(title,description,dueDate,priority,task){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.checklist = [
            {
                Task: description, 
                done: this.complete == true ? "done" : "not-done"
            } 
        ]
    }
    toggleComplete(){
this.complete = !this.complete;
}
checkPriority = (priority) => {
    this.priority = priority
}
 
}
/*
step 1 
---------------------step 1 from T.O.P------------------
class Todo{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
 
}
let Todo = {
    title:'buy milk',
    description: 'buy 2milks from a super market',

}
function Todo (){
    const title = 'buy milk';
    const description = 'buy 2milks from a super market';
    return{title,description};
}

function Todo(title,description,dueDate,priority){
    
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

-----------------All these are valid-------------------       
*/

const notes = {
    notes(){
        return [this.title , 'At:' + this.dueDate,
            "PriorityLevel:" + this.priority
        ];
    }
};


Object.assign(Todo.prototype,notes);

const time = {

now: new Date(),
getYear(){
    return this.now.getFullYear();
},
getMonth(){
    return this.now.getMonth();
},
getHour(){
    return this.now.getHours();
},
getMinute(){
    return this.now.getMinutes();
},
getSecond(){
    return this.now.getSeconds();
}

}

const projects = [
     {
        name: 'Gym',
        todos: [{title: 'Finish report', description: 'Complete the quarterly report', dueDate: '2023-10-15', priority: 'High'}],
     },
/*
    {
    name: 'Work',
    todos: [
    {title: 'Finish report', description: 'Complete the quarterly report', dueDate: '2023-10-15', priority: 'High'}],
 },


     {
    name: 'School',
    todos: [],
 },


     {
   name: 'Exercise',
   todos: [],
 },


*/
];


//Application Logic



function showProjects(){
return projects.forEach(p => {
    console.log(p);
});
}

/*
new todo(Buy milk):


*/

function createProject(){
    const title = prompt("title","groceries");
    const description = prompt("description","buy some vegies and fruits");
    const dueDate = prompt('Date',time.getHour()+":"+time.getMinute()+':'+time.getSecond()+' /'+time.getYear());
    const priority = prompt('Priority','High');
    const task = prompt("Did you" + description, false)
    const todo = new Todo(title,description,dueDate,priority,task);
    return projects.push({name: title,todos:todo});
}



function deleteTodo(proj){
    return projects.forEach(p => p.todos(item => item.todos != proj.todos));
}
createProject();
showProjects();




/*todos = ['wake-up','brush-teeth','comb-hair',
'eat-breakfast','change-cloth','go to work',....]

projects = [project1,project2,project3]

project1 = {
name: 'Exercise'
todos:[jumping-jaks,10 wall-push-ups,20 russian-twists,knee-pushups]
}

project 2 = {


}



projects = [
     p = {
        name: 'Gym',
        todos: [{title: 'Finish report', description: 'Complete the quarterly report', dueDate: '2023-10-15', priority: 'High'}],
     },
     p = {
       name: 'Exercise',
       todos: [jumping-jaks,10 wall-push-ups,20 russian-twists,knee-pushups]
}
]
    return projects.forEach(p => p.todos(item => item.todos != proj.todos));

[1,2,3]

arr = [ 'a', 'b', 'c' ]

 
arr.length = 3
forEach = for(i = 0; i < arr.length(3); i++){
arr[i];
}


showProjects();

function createProject(){
    const title = prompt('Title',"groceries");
    const description = prompt('Description');
    const dueDate = prompt('Date',time.getHour()+':'+time.getMinute()+':'+time.getSecond()+' /'+time.getYear());
    const priority = prompt('Priority','High');
    const newProject = new todo_items(title,description,dueDate,priority);
    projects.push(newProject);
}
createProject();
*/
