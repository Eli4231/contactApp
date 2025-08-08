// let contacts =[{id:1,name:'Eli',email:'el@example.com',phone:'123-456-7890'},
//     {id:2,name:'David',email:'david@example.com',phone:'987-654-3210'},
//     {id:3,name:'Ariel',email:'Ariel@example.com',phone:'456-789-0123'}
// ]


localStorage.setItem('contactApp', JSON.stringify([{id:1,name:'Eli',email:'el@example.com',phone:'123-456-7890'}]))



function createTableRow(data) {
    let txt ="";
    for(obj of data){
        txt+="<tr>"
        txt+=`<td><button>Delete</button></td>`
        for(k in obj){
            txt+=`<td>${obj[k]}</td>`;
        }
        txt+="<td><button>Edit</button></td>";
        txt+="</tr>";
    }
    document.getElementById("contact-list").innerHTML = txt;
}

function addContact(data) {
    let contacts = JSON.parse(localStorage.getItem('contactApp')) || [];
    contacts.push(data);
    localStorage.setItem('contactApp', JSON.stringify(contacts));
    createTableRow(contacts);

}

let contacts = JSON.parse(localStorage.getItem('contactApp'));
createTableRow(contacts);