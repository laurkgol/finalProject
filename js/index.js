$("#navlist1").click(function() {
 $.scrollTo(".About",800);
 });
$("#navlist2").click(function() {
 $.scrollTo("#logistics",800);
 });
$("#navlist3").click(function() {
 $.scrollTo(".schedule",800);
 });
$('#navlist4').click(function(){
  $.scrollTo($('.Registration'), {
    duration: 600
  });
  return false;
});

$("#trvl").click(function(){
$.scrollTo("#travel",800);
 });
$("#arvls").click(function(){
$.scrollTo("#arrivals",800);
 });
$("#htl").click(function(){
$.scrollTo("#accomodations",800);
 });
