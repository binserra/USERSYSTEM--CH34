function User(firstname, lastname, age,gender,phone,payment,color,email,password){
    this.Fname=firstname;
    this.Lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    this.email=email;
    this.password=password;
}

function validation(user){
    let valid = true;
    if(user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }
    return valid;
}

let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGender = $("#txtGender");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputcolor = $('#selColor');
let inputEmail = $('#txtEmail');
let inputPassword = $('#txtPassword');


function register(){

let newUser=new User( inputFname.val(),inputLname.val(),inputAge.val(),inputGender.val(),inputPhone.val(),inputPayment.val(),inputcolor.val(),inputEmail.val(),inputPassword.val());
if(validation(newUser)==true){
    saveUser(newUser);  
    $("input").val("");
}
console.log(newUser);

}

function init(){
    $('#btnAdd').click(register);

}
window.onload=init;
