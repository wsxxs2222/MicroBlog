// attach all the delete btns to delete post function
let deleteBtns = document.querySelectorAll(".delete");
for (let i=0; i<deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", deletePost);
}

function deletePost() {
    fetch('/delete', {
        method: 'POST', // Specify the HTTP method as DELETE
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers if necessary, such as authentication tokens
        },
        body: JSON.stringify({ index: this.value })
    });
}
