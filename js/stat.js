'use strict';

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

var renderCloud = function (ctx, shadowColor, cloudColor) {
  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = SHADOW_OFFSETX;
  ctx.shadowOffsetY = SHADOW_OFFSETY;
  ctx.fillStyle = cloudColor;
  ctx.fillRect(CLOUD_OFFSETX, CLOUD_OFFSETY, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxNumber = function (arr) {
  var maxNumber = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255, 1)');
  ctx.shadowColor = 'transparent'; // shadow causes a lot of pain
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_OFFSETX + TEXT_MARGIN, CLOUD_OFFSETY + TEXT_MARGIN);
  ctx.fillText('Список результатов:', CLOUD_OFFSETX + TEXT_MARGIN, CLOUD_OFFSETY + TEXT_MARGIN * 2);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(names[i], CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH + BAR_MARGIN) * i, CLOUD_OFFSETY + BAR_HEIGHT + TEXT_MARGIN * 4);
    ctx.fillText(Math.round(times[i]), CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH + BAR_MARGIN) * i, CLOUD_OFFSETY + (TEXT_MARGIN * 3) + (BAR_HEIGHT - times[i] * BAR_HEIGHT / getMaxNumber(times)));
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(250, ' + Math.round(Math.random() * 101) + '%,' + Math.round(Math.random() * 101) + '%)';
    }
    ctx.fillRect(CLOUD_OFFSETX + BAR_MARGIN + (BAR_WIDTH + BAR_MARGIN) * i, CLOUD_OFFSETY + (TEXT_MARGIN * 3.5) + (BAR_HEIGHT - times[i] * BAR_HEIGHT / getMaxNumber(times)), BAR_WIDTH, times[i] * BAR_HEIGHT / getMaxNumber(times));
  }
};
