'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var username = document.querySelector('input[name=username]');
var wizardCoat = document.querySelector('.setup-player .wizard-coat');
var wizardEyes = document.querySelector('.setup-player .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardFragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;


setupSimilar.classList.remove('hidden');

var getRandomElementFromArray = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var customizeWizards = function () {
  var wizardsArray = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizardsArray.push({
      name: FIRST_NAMES[getRandomElementFromArray(FIRST_NAMES)] + ' ' + LAST_NAMES[getRandomElementFromArray(LAST_NAMES)],
      eyeColor: EYE_COLORS[getRandomElementFromArray(EYE_COLORS)],
      coatColor: COAT_COLORS[getRandomElementFromArray(COAT_COLORS)]
    });
  }
  return wizardsArray;
};

var createWizardsfromTemplate = function (wizard) {
  customizeWizards();
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var createWizardFragment = function (wizardsArray) {
  customizeWizards();
  for (var i = 0; i < wizardsArray.length; i++) {
    wizardFragment.appendChild(createWizardsfromTemplate(wizardsArray[i]));
  }
  return wizardFragment;
};

createWizardFragment(customizeWizards());
similarListElement.appendChild(wizardFragment);

var convertRgbToHex = function (col) {
  if (col.charAt(0) === 'r') {
    col = col.replace('rgb(', '').replace(')', '').split(', ');
    var r = parseInt(col[0], 10).toString(16);
    var g = parseInt(col[1], 10).toString(16);
    var b = parseInt(col[2], 10).toString(16);
    r = r.length === 1 ? '0' + r : r; g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;
    var colHex = '#' + r + g + b;
  }
  return colHex;
};

var onOpenPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onClosePopupEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.removeEventListener('keydown', onClosePopupEnterPress);
  document.addEventListener('keydown', onOpenPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onOpenPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);
setup.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

username.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    event.stopPropagation();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomElementFromArray(COAT_COLORS)];
  document.querySelector('input[name=coat-color]').value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYE_COLORS[getRandomElementFromArray(EYE_COLORS)];
  document.querySelector('input[name=eyes-color]').value = wizardEyes.style.fill;
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = FIREBALL_COLORS[getRandomElementFromArray(FIREBALL_COLORS)];
  document.querySelector('input[name=fireball-color]').value = convertRgbToHex(wizardFireball.style.backgroundColor);
});
