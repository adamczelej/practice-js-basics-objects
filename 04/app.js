const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '30',
        month: '03',
        year: '1985'
    }
}



user.isTodayYourBday = function(name, lastName){
    const date = new Date(); 
    const day = this['born']['day'];
    const month = this['born']['month'];
    nameCheck = this['firstName'];
    lastNameCheck = this['lastName'];
    
    if(nameCheck === name && lastNameCheck === lastName) {
        if(parseInt(day) === date.getDate() && parseInt(month) === (date.getMonth() + 1)) {
            console.log('Dziś są Twoje urodziny ' + name + ' ' +lastName);
        }else{
            console.log('Niestety dziś nie masz urodzin');
        }  
    }else{
        console.log('Nie ma takiego uzytkownika');
    }
}
user.isTodayYourBday('Adam', 'Nowak');
