let form1 = document.querySelector('#form')
form1.addEventListener('submit', event => {
    event.preventDefault()

    const fname = document.getElementById('firstname').value
    const lname = document.getElementById('lastname').value
    const emailid = document.getElementById('email').value
    const password1 = document.getElementById('password').value
    const confpassword = document.getElementById('confirmpassword').value
        //console.log(fname)

    const registerdata = {
        firstName: fname,
        lastName: lname,
        email: emailid,
        password: password1,
        Confirmpassword: confpassword
    };
    fetch("https://rest-api-bjno.onrender.com/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerdata),

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.success) {
                document.getElementById("message").innerHTML = "Register Successful!!!"

            } else {
                document.getElementById("message").innerHTML = "Failed Register"
            }
        })
        .catch(error => {
            console.log("Error:", error)
        });

})