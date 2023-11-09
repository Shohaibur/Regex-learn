// Shortand characters : Shorthand characters in regular expressions are special codes or sequences that represent common character classes, making it more convenient to write compact and expressive patterns
// shortand character classes
let re;
let str;

re = /\w/; //represent words characters - Alphanumeric and '_' (alphabet numeric [a-zA-Z_]) , defined with \
str = "Abc";
str = "_";

//one or more word character
re = /\w+/;
str = "A";

// non Alphanumeric character
re = /\W/;
str = "_";

// one or more non Alphanumeric character
re = /\W+/;
str = "/*";

// checks any digit
re = /\d/;
str = "abc123";




function reTest(re,str){
  if (re.test(str)){
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{

    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);