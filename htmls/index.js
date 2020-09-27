var $addtodo = document.getElementById("addtodo");
var todolist = document.getElementById('todoelements');
$addtodo.addEventListener('keypress',(e) =>{
    if(e.code==="Enter"&&e.target.value!=="")
    {
         var todovalue = e.target.value;
         var todoitem = document.createElement('li');
         var todoid= new Date().getTime();
         todoitem.innerHTML = `
         <input type="checkbox" id="${todoid}" />
         <label for="${todoid}">${todovalue}</label>
         `;
         console.log(todoitem);
         var todolist = document.getElementById('todoelements').appendChild(todoitem);
         $addtodo.value="";
    }
});
todolist.addEventListener('click', (e) =>
{
    if(e.target.checked)
    {
       e.target.parentElement.classList.add('completed');
    }
    else
    e.target.parentElement.classList.remove('completed');
});