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
var t_user, t_pass, s_user, s_pass, t_db_pass, s_db_pass;
function tUserPass(){
    t_user = document.getElementById("teacher_user").value;
    t_pass = document.getElementById("teacher_pass").value;
}

function sUserPass(){
    s_user = document.getElementById("stud_user").value;
    s_pass = document.getElementById("stud_pass").value;
    localStorage.setItem("userid", s_user);
}

document.getElementById("teacher_login").onclick = function(){
    tUserPass();
    firebase.database().ref('teacher_login/'+t_user).on('value', function(snapshot){
        t_db_pass = snapshot.val().Password;
        if(t_pass == t_db_pass){
            window.location="./stud_details_reg.html";
        }
        else{
            alert("Login Failed\n\nCheck Username and Password");
        }
    });
}

document.getElementById("stud_login").onclick = function(){
    sUserPass();
    firebase.database().ref('stud_login/'+s_user).on('value', function(snapshot){
        s_db_pass = snapshot.val().Password;
        if(s_pass == s_db_pass){
            window.location="./student_details.html";
        }
        else{
            alert("Login Failed\n\nCheck Username and Password");
        }
    });
}

document.getElementById("teacher_show_pass").onclick = function(){
    var show = document.getElementById("teacher_pass");
    var btn = document.getElementById("teacher_show_pass");
    if(show.type === 'password'){
        show.type = 'text';
        btn.textContent = "Hide Password"
    }
    else{
        show.type = 'password';
        btn.textContent = "Show Password"
    }
}

document.getElementById("stud_show_pass").onclick = function(){
    var show = document.getElementById("stud_pass");
    var btn = document.getElementById("stud_show_pass");
    if(show.type === 'password'){
        show.type = 'text';
        btn.textContent = "Hide Password"
    }
    else{
        show.type = 'password';
        btn.textContent = "Show Password"
    }
}