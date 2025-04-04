document.getElementById('url-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('url-input').value;
    const contentFrame = document.getElementById('content-frame');
    contentFrame.src = urlInput;
});
