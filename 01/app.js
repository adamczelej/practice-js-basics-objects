const user = {
    firstName: 'Adam',
    lastName: 'Kowalski',
    sex: 'male',
    age: 18,
}

for(let key in user){
    console.log(user[key]);
}