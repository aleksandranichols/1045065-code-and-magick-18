'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
setup.classList.remove('hidden');
var wizards = {};
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

for (var i = 0; i < firstNames.length; i++) {
  wizards[i] = {
    name: firstNames[Math.round(Math.random() * i)] + ' ' + lastNames[Math.round(Math.random() * i)],
    eyeColor: eyesColor[i],
    coatColor: coatsColor[i]
  }
};
var wizardFragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyeColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardFragment.appendChild(wizardElement);
};
similarListElement.appendChild(wizardFragment);
setupSimilar.classList.remove('hidden');
