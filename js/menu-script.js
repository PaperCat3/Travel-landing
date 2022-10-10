const navigation = document.querySelector('nav')
const navElement = document.querySelector('.nav-list')
const adaptiveMenu = document.querySelector('.adaptiv-menu')
const closeNav = document.querySelector('.close-nav')
const body= document.querySelector('main')

function openMenu (){
   navigation.classList.add('open-list')
   navigation.classList.remove('close-menu')
}

adaptiveMenu.addEventListener('click', openMenu);

function closeMenu (){
   if (navigation.classList.contains('open-list')) {
   navigation.classList.remove('open-list')
   navigation.classList.add('close-menu')}
}

navElement.addEventListener('click', closeMenu);
closeNav.addEventListener('click', closeMenu);
body.addEventListener('click', closeMenu);