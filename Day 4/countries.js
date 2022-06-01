var request = new XMLHttpRequest()
request.open("Get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){

    var info = JSON.parse(request.response);
  
    for(var i=0;i<info.length;i++){
         console.log(`Country Name is : ${info[i].name} , region is : ${info[i].region} , sub region is : ${info[i].subregion} and population is : ${info[i].population}`);      
      }
};