

let userName = document.getElementById('userName');
let emailAdd = document.getElementById('emailAdd');
let userPassA = document.getElementById('userPassA');
let userPassB = document.getElementById('userPassB');
let submitBtn = document.getElementById('submitBtn');
let checker = document.getElementById('checker')
let formNow = document.getElementById('formNow')


let store = JSON.parse(localStorage.getItem("userDetails")) || []

function userSubmit() {

    if (userName.value == '' || emailAdd.value == '' || userPassA.value == '' || userPassB.value == '') {
        alert("Fill All The Required Field")
    } else if (userPassA.value !== userPassB.value) {
        alert("Your Password Must Match")
    } else if (checker.checked !== true) {
        alert("Agree to the terms and conditions")
    } else if (userPassA.value.lenght <= 1 && userPassB.value.lenght <= 1) {
        alert("Password Must Be Greater Than 8")
    } else {

        store.push({
            userName: userName.value,
            Email: emailAdd.value,
            Password: userPassA.value,
            ConfirmPassword: userPassB.value,
            Checker: checker.checked
        })
        localStorage.setItem("userDetails", JSON.stringify(store))
        console.log(store);

    }

    resetInput()
    TableUsers()
}



let tableBody = document.getElementById("tableBody")
function TableUsers() {
    tableBody.innerHTML = ""
    store.forEach((data, index) => {
        tableBody.innerHTML += `
        <tr>
        <td>${data.userName}</td>
        <td>${data.Email}</td>
        <td>${data.Password}</td>
        <td>${data.ConfirmPassword}</td>
        <td>${data.Checker}</td>
        </tr>
        `
    });


}


function resetInput() {
    userName.value = "";
    emailAdd.value = "";
    userPassA.value = "";
    userPassB.value = "";

}



let userNameLogin = document.getElementById('userNameNow');
let userPassLogin = document.getElementById('userPass');
let userDetails = JSON.parse(localStorage.getItem("userDetails"))
console.log(userDetails);


// let MapMe = userDetails.map((mapus) =>{
//     return mapus.Email
// })
// console.log(MapMe);


// let FindME = userDetails.find((findUs) =>{
//     return findUs.Email === "ee"
// })
// console.log(FindME);



function userlogin() {
console.log(userNameLogin.value, userPassLogin.value);
let UserTest = userDetails.find((user) => user.userName == userNameLogin.value && user.Password == userPassLogin.value)

if(UserTest){
    alert(`Login Successful, Welcome ${userNameLogin.value}`)
    window.location.href="dashboard.html"
}else{
    alert("Users Not Found, Please Proceed to registration Page")
}

}