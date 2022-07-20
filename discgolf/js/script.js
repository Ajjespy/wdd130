const toggleButton = document.querySelector('.toggle-button')
const headerLinks = document.querySelector('.headerLinks')

toggleButton.addEventListener('click', () => {
    headerLinks.classList.toggle('active')
})