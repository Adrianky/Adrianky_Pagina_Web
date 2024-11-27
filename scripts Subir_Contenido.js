// scripts.js
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileURL = e.target.result;
            const fileType = file.type;

            let element;
            if (fileType.startsWith('image/')) {
                element = document.createElement('img');
                element.src = fileURL;
            } else if (fileType.startsWith('video/')) {
                element = document.createElement('video');
                element.src = fileURL;
                element.controls = true;
            }

            if (element) {
                gallery.appendChild(element);
            }
        };
        reader.readAsDataURL(file);
    }
}
