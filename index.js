function dwarfRollCall(dwarves) {
  
let string = "" ; 

for (let i=0 ; i<dwarves.length ; i++){
  
string +=`${i+1}. ${dwarves[i]} `;
  
}
  return string;
}



function summonCaptainPlanet(planeteerCalls){
  
  let newArr = [];
  
  for(let i= 0 ; i< planeteerCalls.length; i++){
    
    planeteerCalls[i] = planeteerCalls[i].toUpperCase();
    
    planeteerCalls[i] =planeteerCalls[i].concat("!");
     
     newArr.push(planeteerCalls[i]);
  }
 
  
  return newArr;
}




function longPlaneteerCalls(words) {
   
   if(words.length>=4){
   
   return (true);
   
 }else{
   
   return (false);

}

}



/*
function findTheCheese (foods) {
  
  var count=foods.length;
  
  for (let i=0 ; i<foods.length ; i++){
    
          if(foods[i]==="cheddar"){
    
           return foods[i];
  
             }else if (foods[i]==="gouda"){
  
             return foods[i];
  
          }else if (foods[i]==="camembert"){
  
         return foods[i];
         
      }
  
     
      }
 return ("no cheese!");
  }
  */
 


function findTheCheese (foods) {
  
  var  cheeses = ["cheddar","gouda","camembert"] 
  
   for (let i=0 ; i<foods.length ; i++){
     
   if (cheeses.includes(foods[i])){
     
     return foods[i];
   }
     
   }
   return "no cheese!";
}










