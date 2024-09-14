 //27dc11fedd9c75899561fba1cdf85590
    //https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=27dc11fedd9c75899561fba1cdf85590
    //https://api.openweathermap.org/data/2.5/weather?units=metric&q=Varanasi&appid=27dc11fedd9c75899561fba1cdf85590
// async function weather(){
//     let city=document.querySelector('div.nav>input').value;
//     //console.log(city);
//     const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=27dc11fedd9c75899561fba1cdf85590";
//     //console.log(url);
//      const res=await fetch(url);
//      const data=await res.json();
//      console.log(data);
//     document.getElementById('degree').innerHTML=Math.round(data.main.temp)+"°C";
//     document.getElementById('city').innerHTML=data.name;
//     document.getElementById('numb1').innerHTML=data.main.humidity;
//     document.getElementById('numb2').innerHTML=data.wind.speed+"Km/h";
//     if(data.weather[0].main=="Mist")
//     {
//        document.querySelector('#image>img').src="img/mist.png";
//     }
//     else if(data.weather[0].main=="Clouds")
//     {
//         document.querySelector('#image>img').src="img/clouds.png";
//     }
//     else if(data.weather[0].main=="Clear")
//     {
//         document.querySelector('#image>img').src="img/clear.png";
//     }
//     else if(data.weather[0].main=="Rain")
//     {
//         document.querySelector('#image>img').src="img/rain.png";
//     }

// }
document.querySelector("div.nav>input").focus();
async function weather(){
    let city=document.querySelector('div.nav>input').value;
    //console.log(city);
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=27dc11fedd9c75899561fba1cdf85590";
    //console.log(url);
     const res=await fetch(url);
     const data=await res.json();
    // console.log(data);
     if(data.message=="Nothing to geocode"){
        alert("Please Enter City Name");
        location.reload();
     }
     else if(data.message=="city not found")
     {
        alert("City not found");
        location.reload();
     }
     else{
    document.querySelector('div.nav>input').value=null;
    document.getElementById('degree').innerHTML=Math.round(data.main.temp)+"°C";
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('numb1').innerHTML=data.main.humidity;
    document.getElementById('numb2').innerHTML=data.wind.speed+"Km/h";
    if(data.weather[0].main=="Mist")
    {
       document.querySelector('#image>img').src="img/mist.png";
    }
    else if(data.weather[0].main=="Clouds")
    {
        document.querySelector('#image>img').src="img/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        document.querySelector('#image>img').src="img/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        document.querySelector('#image>img').src="img/rain.png";
    }
    document.querySelector("div.nav>input").focus();
}

}