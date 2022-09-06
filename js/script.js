let listaPracownikow = {
    "pracownicy": [ 
        { "firstName": "Krystian", "lastName": "Dziopa" }, 
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
};

console.log(listaPracownikow);

listaPracownikow.pracownicy.forEach(function(pracownik, index) {
    console.log(`index: ${index}, imie: ${pracownik.firstName}, nazwisko: ${pracownik.lastName}`);   
})
   



// console.log(JSON.stringify(listaPracownikow));

// console.log(JSON.parse(listaPracownikow));



