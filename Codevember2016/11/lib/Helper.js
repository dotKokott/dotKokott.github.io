function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function HSLA(value, offset) {
    var hue = value % 360 + (offset || 0);
    return 'hsla(' + hue + ',100%,50%,1)';
}

function randomColor(alpha) {
    if(alpha === undefined) {
      alpha = 1;
    }

    var r = randomInt(0, 255),
        g = randomInt(0, 255),
        b = randomInt(0, 255);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

Math.mapRange = function (value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

Math.lerp = function (value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
	return value1 + (value2 - value1) * amount;
};
