document.querySelector(".imageInput").addEventListener("change", handleImageUpload);
let imgUpdateBtns = document.querySelectorAll(".imgUpdate");
for (let i=0; i<imgUpdateBtns.length; i++) {
    imgUpdateBtns[i].addEventListener("change", handleImageUpdate);
}

function handleImageUpload(event) {
    const file = event.target.files[0]; // Get the first file (only one in this case)

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageDataUrl = e.target.result; // Store image as a data URL
            //console.log(imageDataUrl); // This will log the image as a base64 encoded string

            // You can also store this in a variable or use it to display the image
            const imageVariable = imageDataUrl;

            document.getElementById("imgString").value = imageDataUrl;
            
            const imgElement = document.createElement('img');
            imgElement.src = imageVariable;
            document.querySelector('.post-creation').appendChild(imgElement);
        }

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

function handleImageUpdate(event) {
    const file = event.target.files[0]; // Get the first file (only one in this case)
    let sibling = this.nextElementSibling.nextElementSibling;
    // console.log(sibling);
    let index = this.nextElementSibling.value;
    // console.log(index);
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageDataUrl = e.target.result; // Store image as a data URL
            //console.log(imageDataUrl); // This will log the image as a base64 encoded string

            // You can also store this in a variable or use it to display the image
            const imageVariable = imageDataUrl;

            sibling.value = imageDataUrl;
            
            // const imgElement = document.createElement('img');
            // imgElement.src = imageVariable;
            // document.querySelectorAll('.post')[index].appendChild(imgElement);
        }

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

