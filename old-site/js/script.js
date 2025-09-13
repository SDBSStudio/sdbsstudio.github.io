const themeButton = document.getElementById('theme-button');
const htmlElement = document.documentElement;

themeButton.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    htmlElement.classList.add('dark');
} else if (storedTheme === 'light') {
    htmlElement.classList.remove('dark');
} else {
    htmlElement.classList.add('dark');
}