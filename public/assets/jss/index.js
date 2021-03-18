function eventloginpopup(){
    document.getElementById('login-form').style.display='block';
    document.getElementById("overlay").style.display = "block";
}

document.getElementById('add_issues').addEventListener('click', () => {
    eventloginpopup()
})

// document.getElementById('login').addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.getElementById('login-form').style.display= 'none';
//     document.getElementById("overlay").style.display = "none";

// })

function eventloginpopupclose(){
    document.getElementById('login-form').style.display='none';
    document.getElementById("overlay").style.display = "none";
}
document.getElementById('close').addEventListener('click', () => {
    eventloginpopupclose()
})





