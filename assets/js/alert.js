const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Anda akan beralih ke halaman ${item.textContent}`);
    });
});

const button = document.querySelectorAll('ul li');
button.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Anda akan membaca dokumen ${item.textContent}`);
    });
});
// const button2 = document.querySelectorAll('section ul li');
// button2.forEach(item => {
//     item.addEventListener('click', () => {
//         alert(`Anda akan membaca dokumen ${item.textContent}`);
//     });
// });