

let tarea = document.getElementById('taskInput')
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList')
let deleteBtn= document.getElementById('eliminarTarea')
let taskSelected


//eventos
addTaskBtn.addEventListener('click', function(){
    taskList.innerHTML +=`<li>Tu tarea es ${tarea.value}</li>` 
});

taskList.addEventListener("click", (event)=>{
    for(const item of taskList.children){
        item.style.removeProperty('border')
    }
    taskSelected=event.target
    taskSelected.style.border='1px solid green'
})

deleteBtn.addEventListener('click',(event)=>{
    if (!!taskSelected){
        taskSelected.remove()
    }else{
        event.preventDefault()
    }
    
})
//event.target.remove()