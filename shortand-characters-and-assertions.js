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
str = "ab123";

//one or more digit
re = /\d+/;
str = "54";

//non digit character
re = /\D/;
str = "A";

//accept space 
re = /\s/;
str = "shoaib rochi  ";

// accept no space 
re = /\S/;
str = "ABCD";

//Word boundary /foo\b/; cannot have any character attached with foo;
re =/computer\b/;
str = "OKay computer1 "; //doesn't match
str = "OKay computer 1"; 
re = /\bOkay/;
str = "I'mOKay"; //doesn't match
str = "I'm Okay"; 

//Assertions (conditioning)
// matches A only if A is before B
re = /A(?=B)/; 
str = "ABC";
re = /A(?=Bc)/; 
str = "ABc";

// matched A only if after A any other character than B
re = /A(?!B)/;
str = "AC";





function reTest(re,str){
  if (re.test(str)){
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{

    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);