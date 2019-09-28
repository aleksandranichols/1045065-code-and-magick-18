'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var customizeWizards = function (firstNames, lastNames, coatsColor, eyesColor) {
  var wizards = {};
  for (var i = 0; i < firstNames.length; i++) {
    wizards[i] = {
      name: firstNames[Math.round(Math.random() * i)] + ' ' + lastNames[Math.round(Math.random() * i)],
      eyeColor: eyesColor[i],
      coatColor: coatsColor[i]
    }
  }
  return wizards;
};

var createWizards = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
}

var wizardFragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var fillWizards = function () {
  customizeWizards(['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'], ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'], ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'], ['black', 'red', 'blue', 'yellow', 'green']);
  for (var i = 0; i < wizards.length; i++) {
    wizardFragment.appendChild(createWizards(wizards[i]));
  }
};
similarListElement.appendChild(wizardFragment);
