let re ;
let str ;

//Postal Code (matches exactly 4 digits
re =/^[0-9]{4}$/;
str="1234";



function reTest(re,str){
  if (re.test(str)){
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{

    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);