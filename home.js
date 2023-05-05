const Hello = document.getElementById('hello');
const UserName = localStorage.getItem('butt');

Hello.innerHTML = "Hello " + UserName;

// main.js
function storeIdAndNavigate(event) {
    event.preventDefault();
    const id = event.target.parentElement.id;
    sessionStorage.setItem('id', id);
    window.location.href = 'page2.html';
}

