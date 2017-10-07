const randomColorGenerator = ()=>{
  return `rgb(${randomMax255()},${randomMax255()},${randomMax255()})`;
};

const randomMax255 = ()=> Math.floor(Math.random() * 255);

const color = ()=> randomColorGenerator();

const colorPicker = (e)=>{
  e.preventDefault();
  $(e.target).css('background-color', color);
  $('.cell').mouseenter((e)=>{
    $(e.target).css('background-color', color);
  });
};

$(()=>{
  $('.container').on('click', '#color-changer', colorPicker);
});
