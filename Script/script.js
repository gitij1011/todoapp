document.querySelector("#btn").onclick = function () {

  // executed when no task is entered
    if (document.querySelector("#newtask input").value.length == 0) {
      alert("Please Enter a Task");
    }
  // executed when user clicks on add button after writing task
    else{
      document.querySelector("#tasks").innerHTML+=`
      <div class="task">
      <span id="taskname">
         ${document.querySelector("#newtask input").value}
      </span>
      <button class="delete">
      <i class="fa-solid fa-trash-can"></i>
      </button>
   </div>
   `
  //  makes the input field empty after task is added
   document.querySelector("#newtask input").value="" ;
  
  // delete btn functionality
  var current_tasks=document.querySelectorAll(".delete");
  for(var i=0;i<current_tasks.length;i++)
  {
    current_tasks[i].onclick=function(){
      this.parentNode.remove();
    };
  }
 }
};