let re;
let str;

re = /nala/;
//case insensitive /foo/i;
re = /nala/i;
str = "My cat' name is Nala";

//meta-characters
// /^foo/ ; must start with foo;
re=/^nala/i;
str = "Nala is my cat's name";

// /bar$/ ; must end with bar;
re=/cat$/i;
str = "Nala is the name of my Cat";

// /./ ; matches any one character;
re= /^n.la$/i;
str = "Nula";
re = /n.la/i;
str = "My cat's name is not Nula";

// /*/ ; 0 or more times; case insensitive;
re = /N*ala/;
str = "naeala is not my cat's name";
str = "Naala is not my cat's name";

// /foo?bar/ ; o is optional;
re = /na?la/i;
str = "Nla";
re = /na?e?la/i;
str = "naela";

// /\why?/ ; escaping ; ? is a part of the string not optional
re = /why\?$/ ; 
str = "okay, why?";



function reTest(re,str){
  if (re.test(str)){
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{

    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);