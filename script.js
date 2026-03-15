particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#FFD700" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
move: { speed: 2 }
}
});

function startBot(){
document.getElementById("botStatus").innerText="Status : ON";
}

function stopBot(){
document.getElementById("botStatus").innerText="Status : OFF";
}

function login(){
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
if(user=="admin" && pass=="1234"){
window.location="admin.html";
}else{
alert("Wrong Login");
}
}
