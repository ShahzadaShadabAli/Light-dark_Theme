const toggleSwitch = document.querySelector('input');
const nav = document.getElementById('nav')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const toggleIcon = document.getElementById('toggle-icon')

//Dynamic Theme
function imageTheme(color){
    image1.src = `img/undraw_feeling_proud_${color}.svg`
    image2.src = `img/undraw_proud_coder_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

//Changing The Remaining Obj To dark
function darkTheme(){
    nav.style.backgroundColor='rgb(0 0 0 /50%)'
    textBox.style.backgroundColor='rgb(255 255 255 /50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    imageTheme('dark');
    
}
function lightTheme(){
    nav.style.backgroundColor='rgb(255 255 255 /50%)'
    textBox.style.backgroundColor='rgb(0 0 0 /50%)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    imageTheme('light');
    
}

//Switch the Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        //local Storage
        localStorage.setItem('theme', 'dark')
        darkTheme();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        //Local Storage
        localStorage.setItem('theme', 'light')
        lightTheme();
    }
}

//Checking the current theme
const currentTheme = localStorage.getItem('theme')
document.documentElement.setAttribute('data-theme', currentTheme)

if(currentTheme === 'dark'){
    darkTheme();
    toggleSwitch.checked = true
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);