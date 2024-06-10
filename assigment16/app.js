let fullName =  document.getElementById('fullName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let user_email = document.getElementById('user_email');
let logincontainer = document.getElementById('login_container');
let homecontainer = document.getElementById('home_container');
let note = document.getElementById('note');



function loginuser() {
    if (!fullName.value || !email.value || !password.value) 
    return alert ('Please Enter The Information');

    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    checkisuserlogin()

}

function checkisuserlogin() {
    let email = localStorage.getItem('email');
    if (email) {
        logincontainer.style.display = 'none';
       homecontainer.style.display = 'block';
       user_email.innerHTML = email;
    }
    else{
        logincontainer.style.display = 'grid';
       homecontainer.style.display = 'none';
    }
}

checkisuserlogin();


function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    checkisuserlogin()
}

function submitnote() {
    let email = localStorage.getItem("email");

    let obj = {
        email : email,
        note : note.value
    };

    saveValueToLocalStorage(obj);
    note.value = "";
}

function saveValueToLocalStorage(obj){
    let notes = localStorage.getItem("notes");

    if (notes){
        notes = JSON.parse(notes);
        notes.push(obj);
        notes.push(obj);
        localStorage.setItem ("notes" , JSON.stringify(notes));

    }else {
        notes = [obj];
        localStorage.setItem ("notes" , JSON.stringify(notes));
    }

    displayusernotes()
}

function displayusernotes() {
    let notes = localStorage.getItem ('notes');
    let list = document.getElementById('list');

    if (notes) {
        list.innerHTML = "";
        notes = JSON.parse (notes);
        notes.forEach(function (data, ind) {
            let lielement = ` <li style="border:2px solid rgb(198, 198, 198); padding: 7px;">
         ${data.note}
         <p>${data.email}</p>
        </li>`
        list.innerHTML += lielement;
        });
    }
}

displayusernotes();