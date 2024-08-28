let clock=document.getElementById('clock');           

setInterval(function(){                              //Jar Ekadhi function tharavil pratek vele nantr run karaych aslays setInterval 
                                                     //Method use Karaychi synatax:-   setInterval(function(){},timeofInterval)    timeofInterval:-ktit vele nantr chalavcha ahe to time ex. 1000ms
let date=new Date();

clock.innerHTML=date.toLocaleTimeString();

},1000)