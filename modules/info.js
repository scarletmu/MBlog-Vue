const Config = require('../config');

exports.initSlider = function (){
  let title = Config.Title, Slider = Config.Slider;
  //
  if(Slider.length === 0){
    Slider = [
      {icon: 'home', text: 'HangZhou,China'},
      {icon: 'email', text: 'shuimu123@gmail.com'}
    ]
  }
};