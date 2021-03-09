let addTask= document.querySelector(".btn")
let taskInput= document.querySelector("#task")
let list= document.querySelector(".collection")
let clear= document.querySelector(".clear-tasks")
let filter= document.getElementById("filter")


loadEventListeners();

function loadEventListeners(){
   clear.addEventListener("click", clearAll)
   addTask.addEventListener("click", add)
   list.addEventListener("click", removeItem)
   filter.addEventListener("keyup", filterTasks)
}


function add(e){
   let newLi= document.createElement("li")
   let x= document.createElement("a")

   newLi.className="collection-item"
   newLi.innerText= taskInput.value

   x.className="delete-item secondary-content"
   x.innerHTML='<i class="fa fa-remove">'
    newLi.appendChild(x)
    list.appendChild(newLi)

    e.preventDefault()
}

function filterTasks(z){
    let input= z.target.value
    let listItems= document.querySelectorAll('.collection-item')
    listItems.forEach(function(task){
        let item= task.firstChild.textContent;

        if(item.toLowerCase().indexOf(input) != -1){
            task.style.display="block"
        } else{
             task.style.display="none"
        }
    })
    


}

function clearAll(){
  list.innerText=""


}

function removeItem(e){

    if(e.target.classList.contains("fa-remove") ){
        if(confirm("Are you sure you want to remove this?")){
        e.target.parentElement.parentElement.remove()}
    }
}

