function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!"}
    if (distance > 2500) {
      return "No can do."}
    if (distance > 2000) {
      return "I will gladly take your thirty bucks."}
    }

function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  if (city !== "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
        break; 
        default:
          return 'Bye.';
          break;
  }
}