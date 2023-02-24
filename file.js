let id = 0;

document.getElementById("add").addEventListener("click",() =>{
    let createdDate = new Date();
    let table=document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML= document.getElementById("new-Name").value;
    row.insertCell(1).innerHTML= document.getElementById("new-Location").value;
    row.insertCell(2).innerHTML= `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(3).innerHTML= document.getElementById("new-start-date").value;
    row.insertCell(4).innerHTML= document.getElementById("new-end-date").value;
    let actions = row.insertCell(5);
    document.getElementById("new-Location").value= "";
    actions.appendChild(createDeleteButton(id++));
});

function createDeleteButton(id){
    let btn = document.createElement("button");
    btn.className="btn btn-primary";
    btn.id = id;
    btn.innerHTML = "Delete";
    btn.onclick=() => {
        console.log(`Deleting row with id: item-${id}`);
        let elementtToDelete = document.getElementById(`item-${id}`);
        elementtToDelete.parentNode.removeChild(elementtToDelete);
    };
    return btn;
}

