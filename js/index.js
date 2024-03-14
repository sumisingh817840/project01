  
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick  = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// toper logic

window.onscroll = () =>{
    document.querySelector('.header').style.top='0px'; 
}

 



 
 
 





