module.exports = function main(inputs) {
    // write your code here...
var dis = arguments[0];
var time = arguments[1];
if(isNaN(dis)){
   return NaN;
}
if(isNaN(time)){
   return NaN;
}
var disp = 0.0;
var timep = 0.0;
var price = 0.0;
if(dis<=2){
   disp = 6;
}
if(dis>2&&dis<=8){
   disp = 6+(dis-2)*0.8;
}
if(dis>8){
  disp = 6+4.8+(dis-8)*1.2;
}
timep = time*0.25;

price = Math.round(disp+timep);
return price;
};
