function toCamelCase(str){
  let firstLetter = str.at(0);
  console.log(firstLetter)
//   const phrase = str.split(' ');
//   console.log(phrase);

  if(firstLetter === firstLetter.toUpperCase()){
     if(str.includes('_')) {
        str.replace('_', ' ');
     } else if(str.includes('-')) {
        str.replace('-', ' ');
    }
    console.log(str)
  }

}

toCamelCase('the-stealth-warrior');
toCamelCase('The_Stealth_Warrior');

