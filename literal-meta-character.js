let re;
let str;

re = /nala/;
str = "Nala";

//console.log(re.exec(str));
//document.write(re.exec(str));


//console.log(re.exec(str));

function reTest(re,str){
  if (re.test(str)){
   // console.log(`'${str}' matches regex '${re.source}' `)
    document.write(`'${str}' matches regex '${re.source}'`);

  }else{
    //console.log(`'${str}' doesn't matches regex`)
    document.write(`'${str}' doesn't match '${re.source}'`);

  }

} 
reTest(re, str);