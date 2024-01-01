const IssueButton=document.getElementById("Issue");
const textButton=document.getElementById("issue-text");
textButton.style.display="none";

IssueButton.addEventListener("click",(e)=>{
    IssueButton.style.display="none";
    textButton.style.display="block";
});

const todo=document.getElementById("todo");
textButton.addEventListener("keyup",(event)=>{
    if(event.keyCode==13){ //enter key
        const card=document.createElement("div");
        card.innerText=event.target.value.trim();
        card.className="card";

        // this is not boolean value, it implies that the value started
        card.draggable="true";
        card.addEventListener("dragstart",dragStart);

        todo.appendChild(card);
        textButton.value="";

        IssueButton.style.display="block";
        textButton.style.display="none";
    }
    
});

const containers=document.querySelectorAll(".container");

//this variable hold the current draggable object
let dragElement=null;

function dragStart(event){
    dragElement=event.target;
}
function onDrag(e){
    //prevention or we can say giving access for drop
    if(dragElement.parentNode.id==e.currentTarget.id) return;
    e.preventDefault();
}
function onDrop(e){
    // drop
    e.currentTarget.appendChild(dragElement);
}

for(let i=0;i<containers.length;i++){
    containers[i].addEventListener("dragover",onDrag);
    containers[i].addEventListener("drop",onDrop);
}