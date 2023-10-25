console.log('работаем пацаны!');
import { validCardHolder, validCardNumber, validCardCVC } from './validation';
import { el, setChildren } from 'redom';

import Cleave from 'cleave.js';

console.log(String(454345434543454).length);

const createSpan = (data) => {
  const span = el('span', { className: `${data.class}` }, `${data.value}`);
  return span;
}

const createCreditCart = () => {
  const creditCard = el('div', { className: 'credit-card' });
  const cardPersonal = el('div', { className: 'card__personal' });
  setChildren(cardPersonal, [createSpan({ class: 'card__name', value: '____ _____' }), createSpan({ class: 'card__date', value: '**/**' })]);
  setChildren(creditCard, [createSpan({ class: 'card__number', value: 'xxxx xxxx xxxx xxxx' }), cardPersonal]);

  return creditCard;
}

const createInputWrapper = ({
  classNameDiv,
  classNameLabel,
  valueLabel,
  typeInput = null,
  classNameInput,
  idInput = null,
  nameAtr = null,
}) => {
  const inputWrapper = el('div', { className: `form__input-wrap ${classNameDiv}` });
  setChildren(inputWrapper, [
    el('label', `${valueLabel}`, { className: `form__label ${classNameLabel}` }),
    el('input', { className: `input ${classNameInput}`, type: `${typeInput}`, id: `${idInput}`, name: `${nameAtr}` })
  ]);
  if (inputWrapper.querySelector('.input').getAttribute('id') === 'null') {
    inputWrapper.querySelector('.input').removeAttribute('id');
  };
  if (inputWrapper.querySelector('.input').getAttribute('type') === 'null') {
    inputWrapper.querySelector('.input').removeAttribute('type');
  };

  return inputWrapper;
};

const showMessage = (message) => {
  const wrapperTest = el('div', { className: 'unit' });
  const unitText = el('h2');
  unitText.textContent = message;
  setChildren(wrapperTest, [unitText]);

  document.querySelector('.card').append(wrapperTest);

  setTimeout(function () {
    document.querySelector('.card').removeChild(wrapperTest);
  }, 2000);
};

const formShow = (name, number, date, cvv, form) => {
  form.addEventListener('input', e => {
    target = e.target;
    if (target === name) {
      name.value = name.value.replace(/[\d_+-@`!?#$^*&%А-Яа-яё]/g, '');
      document.querySelector('.card__name').innerHTML = (name.value).toUpperCase();
    };
    if (target === number) {
      const cleave = new Cleave(number, {
        creditCard: true,
      });

      document.querySelector('.card__number').innerHTML = number.value;
    };
    if (target === date) {
      const cleave = new Cleave(date, {
        date: true,
        datePattern: ['m', 'y']
      });
      document.querySelector('.card__date').innerHTML = date.value;
    }
    if (target === cvv) {
      var cleave = new Cleave(cvv, {
        delimiter: '',
        blocks: [1, 1, 1],
      });
      cvv.value = cvv.value.replace(/[\D]/g, '');
    };
  })

  form.addEventListener('submit', e => {

    const formData = new FormData(e.target);
    const creditCardValue = Object.fromEntries(formData);

    console.log(creditCardValue);

    e.preventDefault();
    form.reset();

    if (validCardHolder(creditCardValue.holder) && validCardNumber(creditCardValue.number) && validCardCVC(creditCardValue.cvv)) {
      showMessage('Данные валидны');
    } else {
      showMessage('Данные не валидны!!!');
    }
  })
}

const createForm = () => {
  const wrapper = el('div', { className: 'wrapper' });
  setChildren(wrapper, el('div', { className: 'card' }));

  const card = wrapper.querySelector('.card');

  const formCard = el('form', { className: 'form', id: 'form', action: '#' });
  setChildren(formCard, [
    createInputWrapper({
      classNameDiv: 'form__input-wrap_holder',
      classNameLabel: 'form__holder-label',
      valueLabel: 'Card Holder',
      typeInput: 'text',
      classNameInput: 'input__holder',
      nameAtr: 'holder',
    }),
    createInputWrapper({
      classNameDiv: 'form__input-wrap_number',
      classNameLabel: 'form__number-label',
      valueLabel: 'Card Number',
      typeInput: '',
      classNameInput: 'input__number',
      idInput: 'cardNumber',
      nameAtr: 'number',
    }),
    createInputWrapper({
      classNameDiv: 'form__input-wrap_date',
      classNameLabel: 'form__date-label',
      valueLabel: 'Card Expiry',
      typeInput: 'text',
      classNameInput: 'input__date',
      nameAtr: 'date',
    }),
    createInputWrapper({
      classNameDiv: 'form__input-wrap_cvv',
      classNameLabel: 'form__cvv-label',
      valueLabel: 'CVV',
      typeInput: 'text',
      classNameInput: 'input__cvv',
      nameAtr: 'cvv',
    }),
    el('button', { className: 'form__button' }, 'CHECK OUT')
  ]);

  setChildren(card, [el('p', { className: 'secure' }, 'Secure Checkout'), createCreditCart(), formCard]);
  setChildren(wrapper, card);
  setChildren(document.body, wrapper);

  formShow(
    formCard.querySelector('.form__input-wrap_holder .input'),
    formCard.querySelector('.form__input-wrap_number .input'),
    formCard.querySelector('.form__input-wrap_date .input'),
    formCard.querySelector('.form__input-wrap_cvv .input'),
    formCard
  );
};

createForm();
