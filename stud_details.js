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
var reg_no, stud_name, tam1, eng1, mat1, sci1, soc1, total1, percent1, rank1, tam2, eng2, mat2, sci2, soc2, total2, percent2, rank2, tam3, eng3, mat3, sci3, soc3, total3, percent3, rank3;
function setStudMarks(){
    // Display
    document.getElementById("reg_no").textContent = reg_no;
    document.getElementById("stud_name").textContent = stud_name;
    // Quaterly
    document.getElementById("tam1").textContent = tam1;
    document.getElementById("eng1").textContent = eng1;
    document.getElementById("mat1").textContent = mat1;
    document.getElementById("sci1").textContent = sci1;
    document.getElementById("soc1").textContent = soc1;
    document.getElementById("total1").textContent = total1;
    document.getElementById("percent1").textContent = percent1+" %";
    document.getElementById("rank1").textContent = rank1;
    // HalfYearly
    document.getElementById("tam2").textContent = tam2;
    document.getElementById("eng2").textContent = eng2;
    document.getElementById("mat2").textContent = mat2;
    document.getElementById("sci2").textContent = sci2;
    document.getElementById("soc2").textContent = soc2;
    document.getElementById("total2").textContent = total2;
    document.getElementById("percent2").textContent = percent2+" %";
    document.getElementById("rank2").textContent = rank2;
    // Annual
    document.getElementById("tam3").textContent = tam3;
    document.getElementById("eng3").textContent = eng3;
    document.getElementById("mat3").textContent = mat3;
    document.getElementById("sci3").textContent = sci3;
    document.getElementById("soc3").textContent = soc3;
    document.getElementById("total3").textContent = total3;
    document.getElementById("percent3").textContent = percent3+" %";
    document.getElementById("rank3").textContent = rank3;
}

reg_no = localStorage.getItem("userid");
firebase.database().ref('stud_marks/'+reg_no).on("value", function(snapshot){
    stud_name = snapshot.val().Student_Name;
    tam1 = snapshot.val().Quaterly_Makrs[0];
    eng1 = snapshot.val().Quaterly_Makrs[1];
    mat1 = snapshot.val().Quaterly_Makrs[2];
    sci1 = snapshot.val().Quaterly_Makrs[3];
    soc1 = snapshot.val().Quaterly_Makrs[4];
    total1 = snapshot.val().Quaterly_Total;
    percent1 = snapshot.val().Quaterly_Percentage;
    rank1 = snapshot.val().Quaterly_Rank;

    tam2 = snapshot.val().HalfYearly_Makrs[0];
    eng2 = snapshot.val().HalfYearly_Makrs[1];
    mat2 = snapshot.val().HalfYearly_Makrs[2];
    sci2 = snapshot.val().HalfYearly_Makrs[3];
    soc2 = snapshot.val().HalfYearly_Makrs[4];
    total2 = snapshot.val().HalfYearly_Total;
    percent2 = snapshot.val().HalfYearly_Percentage;
    rank2 = snapshot.val().HalfYearly_Rank;

    tam3 = snapshot.val().Annual_Makrs[0];
    eng3 = snapshot.val().Annual_Makrs[1];
    mat3 = snapshot.val().Annual_Makrs[2];
    sci3 = snapshot.val().Annual_Makrs[3];
    soc3 = snapshot.val().Annual_Makrs[4];
    total3 = snapshot.val().Annual_Total;
    percent3 = snapshot.val().Annual_Percentage;
    rank3 = snapshot.val().Annual_Rank;

    setStudMarks();
});

document.getElementById("logout").onclick = function(){
    window.location = './index.html';
}