// let contacts =[{id:1,name:'Eli',email:'el@example.com',phone:'123-456-7890'},
//     {id:2,name:'David',email:'david@example.com',phone:'987-654-3210'},
//     {id:3,name:'Ariel',email:'Ariel@example.com',phone:'456-789-0123'}
// ]


// localStorage.setItem('contactApp', JSON.stringify([{id:1,name:'Eli',email:'el@example.com',phone:'123-456-7890'}]))

let contacts = JSON.parse(localStorage.getItem('contacts'));
let nextId;
if(contacts ==null){
    localStorage.setItem('contacts', JSON.stringify([]));
};
if(contacts.length == 0) {
    localStorage.setItem('nextId', JSON.stringify(1));   // If there are no contacts, display a message or handle accordingly
}

// Create table rows for displaying contacts
function createTableRow(data) {
    let txt ="";
    for(obj of data){
        txt+="<tr>"
        txt+=`<td><button onclick="deleteContact(${obj.id})">Delete</button></td>`
        for(k in obj){
            txt+=`<td>${obj[k]}</td>`;
        }
        txt+=`<td><button onclick="editToContact(${obj.id})">Edit</button></td>`;
        txt+="</tr>";
    }
    document.getElementById("contact-list").innerHTML = txt;

}


// add contact
function addContact() {
  let id= JSON.parse(localStorage.getItem('nextId'));
  let name = document.getElementById("AddName").value;
  let email = document.getElementById("AddEmail").value;
  let phone = document.getElementById("AddPhone").value;
  let obj ={
      id: id,
      name: name,
      email: email,
      phone: phone
  }
  contacts.push(obj);
  localStorage.setItem('contacts', JSON.stringify(contacts));
  createTableRow(contacts);
    document.getElementById("AddName").value="";
    document.getElementById("AddEmail").value="";
    document.getElementById("AddPhone").value="";
    localStorage.setItem('nextId', JSON.stringify(id + 1));

}

// delete contact
function deleteContact(id) {
    contacts =JSON.parse(localStorage.getItem('contacts'));
    contacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    createTableRow(contacts);
}

//update contect
function editToContact(id) {
  contacts = JSON.parse(localStorage.getItem('contacts'));
  let contact = contacts.find(contact => contact.id === id);
  
      document.getElementById("id").value= contact.id
      document.getElementById("AddName").value = contact.name;
      document.getElementById("AddEmail").value = contact.email;
      document.getElementById("AddPhone").value = contact.phone;
  
}
function editContact(){
    let id =document.getElementById('id').value;
    let name =document.getElementById("AddName").value;
    let email =document.getElementById("AddEmail").value;
    let phone =document.getElementById("AddPhone").value;
    let obj=contacts.find(contact=>contact.id==id);
    obj.name=name;
    obj.email=email;
    obj.phone=phone;
    localStorage.setItem("contacts",JSON.stringify(contacts));
    createTableRow(contacts)
    document.getElementById("id").value = "";
    document.getElementById("AddName").value = "";
    document.getElementById("AddEmail").value = "";
    document.getElementById("AddPhone").value = "";

}
function createOrEdit(){
    let id= document.getElementById("id").value;
    if(id){
        editContact()
    }else{
        addContact()
    }
}
// sort מטלה
function search(){
    let find = document.getElementById("search").value.toLowerCase();
    let filterd =contacts.filter(contact=>{
         return contact.name.toLowerCase().includes(find) ||
               contact.email.toLowerCase().includes(find) ||
               contact.phone.toLowerCase().includes(find);
    })
    createTableRow(filterd);
}



    createTableRow(contacts);