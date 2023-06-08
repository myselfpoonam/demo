let form1 = document.querySelector('#form')
form1.addEventListener('submit', event => {
    //form1.addEventListener('submit', async event => {
    event.preventDefault()

    const fname = document.getElementById('firstname').value
    const lname = document.getElementById('lastname').value
    const emailid = document.getElementById('email').value
    const password1 = document.getElementById('password').value
    const confpassword = document.getElementById('confirmpassword').value
    console.log(fname)
    if (password1 !== confpassword) {
        alert("Password and Confirm Password do not match")

        return;
    }
    const registerdata = {
        firstName: fname,
        lastName: lname,
        email: emailid,
        password: password1,
        Confirmpassword: confpassword
    };
    //try{
    //const response = await fetch("https://rest-api-bjno.onrender.com/register", {
    fetch("https://rest-api-bjno.onrender.com/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerdata),

        })
        .then(res => res.json()) //const data = await response.json();
        //console.log(data);
        .then(data => {
            console.log(data)
            const datalist = document.querySelector('ul')
            const { firstName, lastName } = data
            console.log(firstName, lastName)
            const list = document.createElement('li')
            list.textContent = `FullName:${firstName} ${lastName}`
            datalist.appendChild(list);
        })
        .catch(error => {
            console.log("Error:", error)
        });

})
let subbtn = document.querySelector('.details')
subbtn.addEventListener('click', event => {
    event.preventDefault()
    fetch("https://rest-api-bjno.onrender.com/users", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {

            const listcontainer = document.getElementById('name')
            data.forEach((item) => {
                ' List of all the Register User FullName'
                const Fullname = 'Fullname : ' + item.firstName + ' ' + item.lastName
                const listname = document.createElement('li')
                listname.textContent = (Fullname);
                listcontainer.appendChild(listname);
            })

        })
        .catch(error => {
            console.log("Error:", error)
        });

})