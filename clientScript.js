let userLogin = document.querySelector(".loginInput");
let userPassword = document.querySelector(".passwordInput");

async function sendUser() {
    console.log(userLogin.value);
    console.log(userPassword.value);
    const response = await fetch("/index.html", { 
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            login: userLogin,
            password: userPassword
        })
    });
    const responseText = await response.text();
    console.log(responseText);
}