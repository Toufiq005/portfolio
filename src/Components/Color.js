const setColor = () => {
  const items = [
    "colorOne",
    "colorTwo",
    "colorThree",
    "colorFour",
    "colorFive",
  ];

  var color = Math.floor(Math.random() * items.length);
  console.log(items[color]);
  // console.log(color)
};

export default setColor();
