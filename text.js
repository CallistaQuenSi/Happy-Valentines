function showMessage() {
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    box.style.transform = 'translateY(-50vh)';
    message.style.display = 'block';
}

function hideMessage() {
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    box.style.transform = 'translateY(0)';
    message.style.display = 'none';
}
