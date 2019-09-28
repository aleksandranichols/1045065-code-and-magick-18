'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardFragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var customizeWizards = function () {
  var wizardsObject = {};
  var wizardsArray = [];
  for (var i = 0; i < 4; i++) {
    wizardsObject[i] = {
      name: firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)],
      eyeColor: eyesColor[Math.floor(Math.random() * eyesColor.length)],
      coatColor: coatsColor[Math.floor(Math.random() * coatsColor.length)]
    };
    wizardsArray.push(wizardsObject[i]);
  }
  return wizardsArray;
};

var createWizards = function (wizard) {
  customizeWizards();
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var fillWizards = function (wizardsArray) {
  customizeWizards();
  for (var i = 0; i < wizardsArray.length; i++) {
    wizardFragment.appendChild(createWizards(wizardsArray[i]));
  }
  return wizardFragment;
};

fillWizards(customizeWizards());
similarListElement.appendChild(wizardFragment);
