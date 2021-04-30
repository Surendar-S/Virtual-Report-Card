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
var reg_number, stud_name, qmarks, qpercent, qtotal, qrank, hmarks, hpercent, htotal, hrank, amarks, apercent, atotal, arank;
qmarks = [];
hmarks = [];
amarks = [];
function getStudMarks(){
    reg_number = document.getElementById("regno").value;
    stud_name = document.getElementById("stud_name").value;
    marksq = document.getElementsByName("qmark");
    marksh = document.getElementsByName("hmark");
    marksa = document.getElementsByName("amark");
    lenq = marksq.length-3;
    lenh = marksh.length-3;
    lena = marksa.length-3;
    var i, j, k;
    for(i=0; i<lenq; i++){
        qmarks.push(document.getElementById(marksq[i].id).value);
    }
    for(j=0; j<lenh; j++){
        hmarks.push(document.getElementById(marksh[j].id).value);
    }
    for(k=0; k<lena; k++){
        amarks.push(document.getElementById(marksa[k].id).value);
    }
    qpercent = document.getElementById("reg_percent1").value;
    qtotal = document.getElementById("reg_total1").value;
    qrank = document.getElementById("reg_rank1").value;
    hpercent = document.getElementById("reg_percent2").value;
    htotal = document.getElementById("reg_total2").value;
    hrank = document.getElementById("reg_rank2").value;
    apercent = document.getElementById("reg_percent3").value;
    atotal = document.getElementById("reg_total3").value;
    arank = document.getElementById("reg_rank3").value;
}

document.getElementById("stud_submit").onclick = function(){
    getStudMarks();
    firebase.database().ref('stud_marks/'+reg_number).set({
        Register_Number: reg_number,
        Student_Name: stud_name,
        Quaterly_Makrs: qmarks,
        Quaterly_Total: qtotal,
        Quaterly_Percentage: qpercent,
        Quaterly_Rank: qrank,
        HalfYearly_Makrs: hmarks,
        HalfYearly_Total: htotal,
        HalfYearly_Percentage: hpercent,
        HalfYearly_Rank: hrank,
        Annual_Makrs: amarks,
        Annual_Total: atotal,
        Annual_Percentage: apercent,
        Annual_Rank: arank
    });
    alert("Uploaded");
    setTimeout('reload()', 1000);
}

document.getElementById("reg_total1").onclick = function(){
    marks = document.getElementsByName("qmark");
    len = marks.length-3;
    var i, sum = 0;
    for(i=0; i<len; i++){
        sum += parseInt(document.getElementById(marks[i].id).value);
    }
    document.getElementById("reg_total1").value = sum;
    document.getElementById("reg_percent1").value = parseFloat(sum/5);
}

document.getElementById("reg_total2").onclick = function(){
    marks = document.getElementsByName("hmark");
    len = marks.length-3;
    var i, sum = 0;
    for(i=0; i<len; i++){
        sum += parseInt(document.getElementById(marks[i].id).value);
    }
    document.getElementById("reg_total2").value = sum;
    document.getElementById("reg_percent2").value = parseFloat(sum/5);
}

document.getElementById("reg_total3").onclick = function(){
    marks = document.getElementsByName("amark");
    len = marks.length-3;
    var i, sum = 0;
    for(i=0; i<len; i++){
        sum += parseInt(document.getElementById(marks[i].id).value);
    }
    document.getElementById("reg_total3").value = sum;
    document.getElementById("reg_percent3").value = parseFloat(sum/5);
}

document.getElementById("stud_logout").onclick = function(){
    window.location = './index.html';
}

function reload(){
    window.location = './stud_details_reg.html'
}