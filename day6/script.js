//forEach array methods
//const persons = [
// { firstname: "Malcom", lastname: "Reynolds" },
//{ firstname: "Kaylee", lastname: "Frye" },
//{ firstname: "Jayne", lastname: "Cobb" }
//];
//persons.forEach(people)
//const listname = document.querySelector(".textarea");

//function people(name) {
//  const list = createElement("p")
//list.textContent = name.firstname
//listname.append(list)
//}
//people();

//forEach array methods

//const number = [2, 7, 8, 4]
//number.forEach(myfunction)

//function myfunction(item, index, array) {
// array[index] = item - 3;
//}
//console.log(number)

//for filter array methods
//Click "check" to get every element in the array that has a value less this number:
//let clickbtn = document.querySelector('.check')
//const element = [2, 5, 68, 44, 56, 34, 66, 78]
//const output = element.filter(lessnumber)
//clickbtn.addEventListener('click', checknumber)

//function lessnumber(items) {
//  return items < document.querySelector('.number').value
//}

//function checknumber() {
//  document.querySelector('.result').innerHTML = console.log(output);
//}

//for map array method
//const products = [
//  { name: "iPhone", price: 999 },
//{ name: "MacBook", price: 1999 },
//{ name: "iPad", price: 799 },
//];

//const applyDiscount = (product) => {
//  let productname = product.name
//let discountedPrice = product.price * .5
//return { name: productname, discounted: discountedPrice }
//};

//let updatedProducts = products.map(applyDiscount);
//console.log(updatedProducts);
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'User 78',
        })
    }).then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    //.catch(error => console.log('ERROR'))