let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};
// Создаем глубокую копию объекта
let passportCopy = JSON.parse(JSON.stringify(passportWithAddress));

// Меняем значение city на 'Bobryisk'
passportCopy.address.city = 'Bobryisk';

// Проверяем, что изменения верны
console.log(passportCopy);

console.log(passportWithAddress);
