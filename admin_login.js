// Firebase API
var firebaseConfig = {
    apiKey: "AIzaSyCCscE9FsJ09iKnr6enNtoZiCJTZuDrIMI",
    authDomain: "virtual-report-card.firebaseapp.com",
    projectId: "virtual-report-card",
    storageBucket: "virtual-report-card.appspot.com",
    messagingSenderId: "628332021823",
    appId: "1:628332021823:web:436ebf0e9694762d18908a",
    measurementId: "G-TKVBJCYBES"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Main Functions
var user, gender, phonenumber, pass, repass;
function getData(){
    user = document.getElementById("reg_username").value;
    phonenumber = document.getElementById("reg_phonenumber").value;
    var getgender = document.getElementsByName("gender");
    if(getgender[0].checked){
        gender = "Male"
    }
    if(getgender[1].checked){
        gender = "Female"
    }
    if(getgender[2].checked){
        gender = "Other"
    }
    pass = document.getElementById("reg_pass").value;
    repass = document.getElementById("reg_repass").value;
}

var login_user, login_pass, db_pass;
function loginData(){
    login_user = document.getElementById("username").value;
    login_pass = document.getElementById("password").value;
}

function admin_page(){
    window.location="./adminpage.html";
    document.write("<center>Please Wait...<br>Loging In</center>");
    setTimeout('admin_page()', 3000);
}

document.getElementById("login").onclick = function(){
    loginData();
    firebase.database().ref('admin_login/'+login_user).on('value', function(snapshot){
        db_pass = snapshot.val().Password;
        if(login_pass == db_pass){
            admin_page();
        }
        else{
            alert("Login Failed\n\nCheck Username and Password");
        }
    });
}

document.getElementById("reg_submit").onclick = function(){
    getData();
    firebase.database().ref('admin_login/'+user).set({
        Username: user,
        Password: pass
    });

    firebase.database().ref('admin_details/'+user).set({
        Name: user,
        Phone_Number: phonenumber,
        Gender: gender,
        Username: user
    });
    alert("Registration Successful");
    setTimeout('reload()', 1000);
}

function reload(){
    window.location = './adminlogin.html'
}

document.getElementById("back").onclick = function(){
    window.location = "./index.html";
}