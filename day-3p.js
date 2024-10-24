//Question-1
var carprice= +prompt("enter the price...")
var hondamember= prompt("enter true/false").toUpperCase()
if(hondamember === "TRUE") console.log(carprice*20/100);
else console.log(carprice);

//Question-2
var price= +prompt("enter your price...")
var day= true
var platinum= 30
var gold= 15
var silver= 10
var regular= 5
if(day==true){
    console.log(price*platinum+5/100);
    console.log(price*gold+5/100);
    console.log(price*silver+5/100);
    console.log(price*regular+5/100);
}
else{
    console.log(price*platinum/100);
    console.log(price*gold/100);
    console.log(price*silver/100);
    console.log(price*regular/100);
}