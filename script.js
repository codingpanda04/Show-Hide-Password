const email = document.getElementById("email");
const error = document.getElementById("error");
const msg = document.getElementById("message");
const submitBtn = document.getElementById("submit");
const inputDiv = document.querySelector(".inputs");

submitBtn.addEventListener('click', function() {
    const email = email.value;
    const password = password.value;

    // Call the function to send data to Airtable
    sendDataToAirtable(email, password);
});

function sendDataToAirtable(email, password) {
    const url = 'https://api.airtable.com/v0/appK94y6d8AwgIMKs/user-data-form';
    
    const data = {
        fields: {
            Email: email,
            Password: password,
        }
    };

    fetch(url, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally clear the input fields after submission
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}




function formChange(){
    if(email.value === ""){
        error.innerHTML = "This field is required";
    }
    else{
        msg.innerHTML = "Hi " + email.value + " ,create your password";
        email.setAttribute("type", "password");
        email.setAttribute("placeholder", "password");
        email.setAttribute("id", "password");
        sumbitBtn.setAttribute("onclick", "submitForm()");
        password.value = "";
        let showPass = document.createElement("img");
        let hidePass =  document.createElement("img");
        showPass.src = "images/show.png";
        hidePass.src = "images/hide.png";
        showPass.setAttribute("onclick", "showPass()");
        showPass.setAttribute("id", "show");
        hidePass.setAttribute("onclick", "hidePass()");
        hidePass.setAttribute("id", "hide");
        console.log(showPass, hidePass);
        inputDiv.appendChild(showPass);
        inputDiv.appendChild(hidePass);
        hidePass.style.display = "none";
        const username = email.value;
    }
}

function showPass(){
    const show = document.getElementById("show");
    const hide = document.getElementById("hide");
    console.log(show, hide);
    show.style.display = "none";
    hide.style.display = "block";
    hide.style.width = "30px";
    hide.style.position = "absolute";
    hide.style.margin = "40px 280px";
    hide.style.cursor = "pointer";
    hide.style.borderRadius = "50%";
    password.setAttribute("type", "text");
}

function hidePass(){
    password.setAttribute("type", "password");
    show.style.display ="block";
    hide.style.display = "none";
}

function submitForm(){
    const username = email.value;
    if(password.value === ""){
        error.innerHTML = "Provide a valid password!";
    }
    else{
        let time = 3;
        setTimeout(() => {
            time= -1;
        }, 1000);
        document.write("Your account has been suucessfully created. Redirect in " + time + " seconds...");
    }
}
