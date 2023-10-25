export const validCardHolder = (cardHolder) => {

  if (cardHolder.trim().split(' ').length === 1) {
    return false;
  }
  if (/[а-яА-Я]/.test(cardHolder)) {
    return false;
  }
  if (/\d/.test(cardHolder)) {
    return false;
  }

  return true;
};


export const validCardNumber = (cardNumber) => {

  if (/[а-яА-Я]/.test(cardNumber)) {
    return false;
  }
  if (/[a-zA-Z]/.test(cardNumber)) {
    return false;
  }
  if (/[^\w\s]/.test(cardNumber)) {
    return false;
  }
  if (String(cardNumber).length < 15 || String(cardNumber).length > 17) {
    return false;
  }

  return true;
}

export const validCardCVC = (cardCVC) => {

  if (cardCVC.length < 3 && cardCVC.length >= 4) {
    return false
  };

  if (/[а-яА-Я]/.test(cardCVC)) {
    return false;
  }
  if (/[a-zA-Z]/.test(cardCVC)) {
    return false;
  }
  if (/[^\w\s]/.test(cardCVC)) {
    return false;
  }

  return true;
}

// Вы также можете написать тесты для функций валидации, чтобы проверить их работоспособность. Ниже приведен пример использования фреймворка Jest для написания и выполнения тестов в браузере:

// // Пример теста для функции validateCardHolder
// test('validateCardHolder возвращает true для валидного имени владельца карты', () => {
//   expect(validateCardHolder('John Doe')).toBe(true);
// });

// test('validateCardHolder возвращает false для имени владельца карты с кириллицей', () => {
//   expect(validateCardHolder('Иван Иванов')).toBe(false);
// });

// test('validateCardHolder возвращает false для имени владельца карты, содержащего цифры', () => {
//   expect(validateCardHolder('John123 Doe')).toBe(false);
// });

// // Пример теста для функции validateCardNumber
// test('validateCardNumber возвращает true для валидного номера карты', () => {
//   expect(validateCardNumber('1234567890123456')).toBe(true);
// });

// test('validateCardNumber возвращает false для номера карты с символами кириллицы', () => {
//   expect(validateCardNumber('12345678абв01234')).toBe(false);
// });

// test('validateCardNumber возвращает false для номера карты с символами латиницы', () => {
//   expect(validateCardNumber('12345678abcdefg0')).toBe(false);
// });

// test('validateCardNumber возвращает false для номера карты с знаками препинания', () => {
//   expect(validateCardNumber('12345678!@#$%^&*()')).toBe(false);
// });

// // Пример теста для функции validateCVV
// test('validateCVV возвращает true для валидного CVV', () => {
//   expect(validateCVV('123')).toBe(true);
// });

// test('validateCVV возвращает false для CVV, содержащего нецифровые символы', () => {
//   expect(validateCVV('12a')).toBe(false);
// });

// test('validateCVV возвращает false для слишком длинного CVV', () => {
//   expect(validateCVV('12345')).toBe(false);
// });