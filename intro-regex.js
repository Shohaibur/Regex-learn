//Regular expression is a pattern matching technique

let re;
let str;
let result;

re = /hello/; //regex defined using /regex/ format
console.log(re); //here 'hello' is a regular expression
console.log(re.source); //only print the regular expression 'hello'

str = "hello world";

//regex execution exec() ; return array/null
result = re.exec(str);

console.log(result); //here, only 'hello' (index =0) portion is matched by regex 

 
//case insensitive : /regex/i
re = /shoaib/i;
str = "Shoaib";

result = re.exec(str);
console.log(result); //here the string matched by regex because case insensitive

str = "Rochi Shoaib";
result = re.exec(str);
console.log(result); // 'Shoaib', index: 6, found regex 'Shoaib' at index no 6
//if theres many regex pattern in string it will take first matched pattern

//test() ; true/false
result = re.test(str);
console.log(result); //true

//match() ; same as exec()
result =  str.match(re);
console.log(result);

//search() ; returns first matched index number if not matched -1
result =  str.search(re);
console.log(result); // 6 

//replace() ; replace regex with string and returns 
str = "Hello shoaib rochi";
let newstr= str.replace(re,"Hi");
console.log(newstr); //Hello Hi rochi