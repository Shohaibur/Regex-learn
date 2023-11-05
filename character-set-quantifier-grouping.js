//character set using []

let re ;
let str ; 

// /[bar]/ ; must be one of character inside []
re = /N[ae]la/;
str = "Nala";
str = "Nela";

// /[^bar]foo/ ; anything except inside []
re = /[^ab]cde/;
str = "fgcde";

// /^[bar]foo/ ; must start with anything at most one character inside []
re = /^[rf]ahim/i;
str = "Rahim";
str = "Fahim";

//using range : /[a-z] ; anything from a to z
re = /[a-c]def/ ;
str = "bdef";
str = "abcdef";
re = /[A-C]def/; //Must be capital from A to C then def inside string
str = "ABdef";
str = "abcCdefgh";

//First letter must be uppercase
re = /^[A-Z]/;
str = "Nala";

//Start with either upper or lower case
re = /[A-Za-z]/;

//Digit
re = /[0-9] is number/;
str = "256 is number";
re = /^\+880[0-9]/;
str = "+8801882576086";



function reTest(re,str){
  if (re.test(str)){
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{

    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);