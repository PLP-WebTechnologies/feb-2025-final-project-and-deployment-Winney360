document.addEventListener("DOMContentLoaded", function() {
    const likeBtn = document.querySelector(".like-btn");
    const commentBtn = document.querySelector(".comment-btn");
    const commentInput = document.querySelector(".comments input");

    likeBtn.addEventListener("click", function() {
        alert("Post liked! ❤️");
    });

    commentBtn.addEventListener("click", function() {
        if (commentInput.value.trim() === "") return;
        let newComment = document.createElement("p");
        newComment.textContent = commentInput.value;
        document.querySelector(".comments").appendChild(newComment);
        commentInput.value = "";
    });
});


document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("user", username);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials!");
    }
});


document.getElementById("new-post").addEventListener("click", function() {
    let title = prompt("Enter post title:");
    let content = prompt("Enter post content:");

    if (title && content) {
        let postList = document.getElementById("post-list");
        let postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        postList.appendChild(postDiv);
    }
});