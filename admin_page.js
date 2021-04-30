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
var s_name, s_regno, s_gender, s_section, s_pass, s_repass;
function sUserReg(){
    s_name = document.getElementById("stud_name").value;
    s_regno = document.getElementById("stud_regno").value;
    var getgender = document.getElementsByName("gender");
    if(getgender[0].checked){
        s_gender = "Male"
    }
    if(getgender[1].checked){
        s_gender = "Female"
    }
    if(getgender[2].checked){
        s_gender = "Other"
    }
    s_section = document.getElementById("section_list").value;
    s_pass = document.getElementById("stud_pass").value;
    s_repass = document.getElementById("stud_repass").value;
}

var t_name, t_gender, t_pass, t_repass;
function tUserReg(){
    t_name = document.getElementById("teacher_name").value;
    var getgender = document.getElementsByName("gender");
    if(getgender[3].checked){
        t_gender = "Male"
    }
    if(getgender[4].checked){
        t_gender = "Female"
    }
    if(getgender[5].checked){
        t_gender = "Other"
    } 
    t_pass = document.getElementById("teacher_pass").value;
    t_repass = document.getElementById("teacher_repass").value;
}

document.getElementById("teacher_submit").onclick = function(){
    tUserReg();
    firebase.database().ref('teacher_login/'+t_name).set({
        Username: t_name,
        Password: t_pass
    });
    
    firebase.database().ref('teacher_details/'+t_name).set({
        Name: t_name,
        Gender: t_gender
    });
    alert("Teacher Registered Successfully");
    setTimeout('reload()', 1000);
}

document.getElementById("stud_submit").onclick = function(){
    sUserReg();
    firebase.database().ref('stud_login/'+s_regno).set({
        Username: s_regno,
        Password: s_pass
    });
    
    firebase.database().ref('stud_details/'+s_regno).set({
        Name: s_name,
        Register_Number: s_regno,
        Gender: s_gender,
        Section: s_section
    });
    alert("Student Registered Successfully");
    setTimeout('reload()', 1000);
}

document.getElementById("teacher_show_pass").onclick = function(){
    var show = document.getElementById("teacher_pass");
    var show1 = document.getElementById("teacher_repass");
    var btn = document.getElementById("teacher_show_pass");
    if(show.type === 'password'){
        show.type = 'text';
        show1.type = 'text';
        btn.textContent = "Hide Password";
    }
    else{
        show.type = 'password';
        show1.type = 'password';
        btn.textContent = "Show Password";
    }
}

document.getElementById("stud_show_pass").onclick = function(){
    var show = document.getElementById("stud_pass");
    var show1 = document.getElementById("stud_repass");
    var btn = document.getElementById("stud_show_pass");
    if(show.type === 'password'){
        show.type = 'text';
        show1.type = 'text';
        btn.textContent = "Hide Password";
    }
    else{
        show.type = 'password';
        show1.type = 'password';
        btn.textContent = "Show Password";
    }
}

document.getElementById("logout").onclick = function(){
    window.location = "./adminlogin.html";
}

function reload(){
    window.location = './adminpage.html'
}

function preback(){
    window.history.forward();
}
setTimeout('preback()', 0);
window.onunload = function(){null}