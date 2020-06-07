//  var weekDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//  var day=weekDay[new Date().getDay()];
//  res.render("list",{kindOfDay: day});
exports.getDate=function(){
let today=new Date();
let options= {
  weekday:"long",
  day:"numeric",
  month:"long"
};
let day=today.toLocaleDateString("en-US",options);
return day;
};
