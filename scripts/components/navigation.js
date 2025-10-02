
async function loadNavigation() {
    try {
        const response = await fetch('navigation.html');
        const html = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = html;
    } catch (error) {
        console.log('Navigation loading failed', error)
    }
}


document.addEventListener('DOMContentLoaded', loadNavigation)