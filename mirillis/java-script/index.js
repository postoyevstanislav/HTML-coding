const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    let openMenu = document.getElementById('myTopnav')
        if(openMenu.className === 'topnav') {
            openMenu.classList.add('responsive')
        } else {
            openMenu.className = 'topnav'
        }
})

let myIndex = 0;
carousel();

function carousel() {
  let i;
  const slideShow = document.getElementsByClassName("mySlides");
  for (i = 0; i < slideShow.length; i++) {
    slideShow[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slideShow.length) {myIndex = 1}    
  slideShow[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}

