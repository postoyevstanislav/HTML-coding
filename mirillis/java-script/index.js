const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    let openMenu = document.getElementById('myTopnav')
        if(openMenu.className === 'topnav') {
            openMenu.classList.add('responsive')
        } else {
            openMenu.className = 'topnav'
        }
})


