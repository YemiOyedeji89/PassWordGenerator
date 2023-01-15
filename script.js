// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


///// GET REFERENCES TO THE #generate ELEMENT/////
var generateBtn = document.querySelector('#generate');

///// EVENT LISTINER THAT CALLS THE PASSWORD OPTION FUCTION /////
generateBtn.addEventListener('click', getPasswordOptions);

///// GLOBAL DECLARED VARIABLES /////
var userInputPassWordLength;
var lowerCaseValues;
var upperCaseValues;
var numericValues;
var specialChar ;
var passwordText = document.querySelector('#password');
        

///////////////////// FUNCTION FOR PASSWORD GENERATOR //////////////////////////////////////////
function getPasswordOptions(){

  function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  };
  ///// LOGIC FOR PASSWORD LENGTH AND INPUT VALIDATION /////
  userInputPlength =  prompt("choose password length 10 to 64.");
  userInputPassWordLength =parseInt(userInputPlength);
  
  if (userInputPlength !== null){

    if ((userInputPassWordLength >= 10) && (userInputPassWordLength <= 64))
    {
      alert( "You entered " + userInputPassWordLength + " password length.");
      console.log("User Input PW Length is " + userInputPassWordLength);

      
      ///// LOWER CASE INPUT VALUES OPTION  //////
      lowerCaseValues = confirm ("Lower case characters?");

      // CONSOLE LOG FOR DEBUGGING PURPOSES
      console.log(lowerCaseValues + " :for lowercase values");

      if (lowerCaseValues){
      alert( `You entered ${lowerCaseValues}: for lowercase values.`);
      getRandom(lowerCasedCharacters);
      }
      else {
      alert("No lower case option is selected.");
      };

      ///// UPPER CASE INPUT VALUES OPTION /////
      upperCaseValues =  confirm ("Upper case characters?");

      // CONSOLE LOG FOR DEBUGGING PURPOSES
      console.log(upperCaseValues + " :for Uppercase values");

      if (upperCaseValues){
      alert( "You entered " + upperCaseValues + ": for Uppercase values.");
      getRandom(upperCasedCharacters);
      }
      else {
       alert("No Upper case option is selected.");
      };

      ///// NUMERIC VALUES INPUT OPTION /////
      numericValues = confirm ("Numbers?");

      // CONSOLE LOG FOR DEBUGGING PURPOSES
      console.log(`${numericValues} :for number values`);

      if (numericValues){
      alert( "You entered " + numericValues + ": for number values.");
      getRandom(numericCharacters);
      }
      else {
      alert("No Number option is selected.");
      };

      ///// SPECIAL CHARACTERS INPUT OPTION /////
      specialChar = confirm ("Special characters?");

      // CONSOLE LOG FOR DEBUGGING PURPOSES
      console.log(`${specialChar} : for special characters`);

      if (specialChar){
      alert( "You entered " + specialChar + ": for special characters.");
      getRandom(specialCharacters);
      }; 

      ///// CHECKING TO ENSURE THAT ONE PASSWORD OPTION TYPE IS SELECT, IF NOT PASSWORD CANNOT BE GENERATED /////
     if (lowerCaseValues === false && upperCaseValues ===false && numericValues === false && specialChar == false){
      alert("Oh! sorry, no password option type selected.");
      }

      ///// LOGIC IF AT LEAST ONE PASSWORD OPTION IS SELECT GENERATE PASSWORD /////
     else if (lowerCaseValues === true || upperCaseValues ===true || numericValues === true || specialChar === true){
      alert("Generate password ");

      generatePassword();
     };
      
      ///// FUNCTION THAT GENERATE THE PASSWORD BASE ON USER INPUT OPTION /////
      function generatePassword()
      {
        var randPassWord = "";
        for( let j = 0; j < userInputPassWordLength; j++)
        {  
          if (lowerCaseValues === true){
            randPassWord += getRandom(lowerCasedCharacters);
          }
             if (upperCaseValues === true){
            randPassWord += getRandom(upperCasedCharacters);
          }
            if(numericValues === true){
            randPassWord += getRandom(numericCharacters);
          }
            if (specialChar === true){
            randPassWord += getRandom(specialCharacters);
          };
          //console.log(randPassWord);
        }; 

      return passwordText.innerText = randPassWord.substring(0, userInputPassWordLength);
      };

      ///// LOGIC IF IN PASSWORD LENGTH INPUT IS INVALID OR NOT IN THE RANGE 10 AND 64 /////
    }else {
    alert( "Incorrect value entered, number must be between 10 and 64.");
    }; 
    ///// LOGIC IF IN PASSWORD LENGTH INPUT IS NULL /////
  } else {
  alert("password length must be entered."); 
  }; 

};
