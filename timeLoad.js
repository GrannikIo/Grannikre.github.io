// ------------ Скрипт канваса с часами ----------------------------------------------------------
function load()
{
var canvas=document.getElementById("alarm"); // Получаем DOM-объект нашего "холста"
var ctx=canvas.getContext("2d");             //Берём его контекст (с его помощью и будем рисовать)
var width=canvas.width,height=canvas.height; //Размеры "холста"

 ctx.shadowColor = "Coral";
 ctx.shadowOffsetX = 5;
 ctx.shadowOffsetY = 5;
 ctx.shadowBlur = 5;
 ctx.fillStyle = "Teal";
 ctx.strokeStyle = "DarkCyan";

var position_s=0,position_m=0,position_h=0;  //Получаем значения в радианах, соответствующие градусам,
 //на которые повернётся соответствующая стрелка часов за секунду
var sec=6*Math.PI/180,
min =1/ 10*Math.PI/180,
hour=1/120*Math.PI/180;
//И текущее положение стрелок на часах
//С переводом из секунд в соответствующие единицы времени
position_s=new Date().getSeconds()*sec;
position_m=new Date().getMinutes()*60*min;
position_h=new Date().getHours()*3600*hour+new Date().getMinutes()*60*hour;
function alarm()//функция перерисовки Canvas'а вызывается каждую секунду
{
function line(pos,r,w)
{ //функция рисования линии
ctx.lineWidth=w||1; //первый аргумент - градус поворота стрелки
ctx.beginPath();
ctx.moveTo(width/2,height/2); //center conusa
ctx.lineTo(width/2+r*Math.cos(pos-Math.PI/2), //2 ploscost conusa,
height/2+r*Math.sin(pos-Math.PI/2));//2 ploscost conusa,
ctx.stroke();
ctx.closePath();
}
position_s+=sec;
position_m+=min;
position_h+=hour;
ctx.clearRect (0, 0, width, height); //Функция очистки Canvas
line(position_h,233,8);//Рисование стрелок часов
line(position_m,208,3);//Рисование стрелок часов
line(position_s,208,1);//Рисование стрелок часов
}
setInterval(alarm,1000); //Создание таймера, вызывающего всю перерисовку
}
