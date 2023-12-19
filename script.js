// window.addEventListener('onWidgetLoad', function (obj) {
//   let data = obj['detail']['session']['data'];
//   let recents = obj['detail']['recents'];
//   let currency = obj['detail']['currency'];
//   let channelName = obj['detail']['channel']['username'];
//   let apiToken = obj['detail']['channel']['apiToken'];
//   let fieldData = obj['detail']['fieldData'];

//   const newEle = document.createElement('div');
//   newEle.textContent = `${data['follower-latest']['name']} hmm`;
//   main.appendChild(newEle);
// });

const treeLeaves = document.querySelectorAll('.leaves');
const treeColorInput = document.querySelector('#tree-color');
const treeShadow = document.querySelector('#tree-shadow');
const star = document.querySelector('#star');

const hexToHSL = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
};

const changeColor = (ele) => {};

const getColor = () => {
  const { h, s, l } = hexToHSL(treeColorInput.value);
  return [h, s, l];
};
const calcShadow = (color) => {
  const [h, s, l] = color;
  return [h + 5, s + 10, l - 12];
};

treeColorInput.addEventListener('change', () => {
  const [h, s, l] = getColor();
  treeLeaves.forEach((leaf) => {
    leaf.style.fill = `hsl(${h}, ${s}%, ${l}%)`;
  });
  const [shadowH, shadowS, shadowL] = calcShadow([h, s, l]);
  treeShadow.style.fill = `hsl(${shadowH}, ${shadowS}%, ${shadowL}%)`;
});
