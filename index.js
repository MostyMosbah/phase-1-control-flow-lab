function scuberGreetingForFeet(distanceFeet) {
  let scuberFare;
  
  if (distanceFeet <= 400) {
    scuberFare = "This one is on me!";
    return scuberFare;
  } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
    scuberFare = "I will gladly take your thirty bucks.";
    return scuberFare;
  } else if (distanceFeet > 2500) {
    scuberFare = "No can do.";
    return scuberFare;
  }
}; 



function ternaryCheckCity(city){
  const isCity =  (city === "NYC") ? "Ok, sounds good." : "No go."
  return isCity;
};

function switchOnCharmFromTip(tip){
  const fareTip = tip
  switch (fareTip) {
    case 'generous' : return ("Thank you so much.")
    break; 
    case 'not as generous' : return ('Thank you.')
    break;
    case 'thanks for everything' : return ('Bye.')
  }
} 

