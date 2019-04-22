function invert(rgb) {
    rgb = Array.prototype.join.call(arguments).match(/(-?[0-9\.]+)/g);
    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    }
    return rgb;
  }
  
  console.log(
    invert('rgba(255, 0, 0, 0.3)'), // 0, 255, 255, 0.7
    invert('rgb(255, 0, 0)'), // 0, 255, 255
    invert('255, 0, 0'), // 0, 255, 255
    invert(255, 0, 0) // 0, 255, 255
  );