

function zaubertrick() {
    if (document.getElementById('site-title').textContent == 'Du Stinkst!') {
        document.getElementById('site-title').innerHTML += ' wirklich!';
    }
    else if (document.getElementById('site-title').textContent == 'Du Stinkst! wirklich!') {
        document.getElementById('site-title').innerHTML = 'Willst du einen <br> Zaubertrick sehen?✨'
    }
    else {
        document.getElementById('site-title').innerHTML = 'Du Stinkst!';
    }
    

}