'use strict';

var canvas = document.getElementById('statistics');
var ctx = canvas.getContext('2d');
var CLOUD_OFFSETX = 100;
var CLOUD_OFFSETY = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var TEXT_MARGIN = 25;
var SHADOW_OFFSETX = 10;
var SHADOW_OFFSETY = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_MARGIN = 50;

var renderCloud = function(ctx, shadowColor, cloudColor) {
  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = SHADOW_OFFSETX;
  ctx.shadowOffsetY = SHADOW_OFFSETY;
  // почему тень должна быть перед фигурой? я сперва написала параметры тени после fillStyle и в таком случае тень не появлялась.
  ctx.fillStyle = cloudColor;
  ctx.fillRect(CLOUD_OFFSETX, CLOUD_OFFSETY, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxNumber = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      var maxNumber = arr[i];
    }
    return maxNumber;
  }
}

// maxNumber = 150;
// times[i] = x

window.renderStatistics = function(ctx, names, times) {
  // почему вызов этой функции идет через window, а предыдущая объявляется через var? в чем вобще разнциа?
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255, 1)');
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_OFFSETX + TEXT_MARGIN, CLOUD_OFFSETY + TEXT_MARGIN);
  ctx.fillText('Список результатов:', CLOUD_OFFSETX + TEXT_MARGIN, CLOUD_OFFSETY + TEXT_MARGIN*2);
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH+BAR_MARGIN) * i, CLOUD_OFFSETY + BAR_HEIGHT + TEXT_MARGIN * 4);
    ctx.fillText((Math.floor(times[i])).toString(), CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH+BAR_MARGIN) * i, CLOUD_OFFSETY + TEXT_MARGIN * 3);
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    }
    else {
      var random = 'Math.floor(Math.random() * 101)' + '%';
      ctx.fillStyle = 'hsl(250, random, random)';
    }
    ctx.fillRect(CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH+BAR_MARGIN) * i, CLOUD_OFFSETY + TEXT_MARGIN * 3, BAR_WIDTH, times[i] * BAR_HEIGHT / getMaxNumber(times));
  }
}
