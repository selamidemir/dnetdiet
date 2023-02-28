import colors from '../assets/js/colors';

export default backgroundColor => {
  const colorKeys = Object.keys(colors);
  const colorList = colorKeys.map(color => {
    if (colors[color] !== backgroundColor) return colors[color];
    return false;
  });
  return colorList[parseInt(Math.random() * colorList.length)];
};
