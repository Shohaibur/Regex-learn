let re ;
let str ;

// 1. Postal Code (matches exactly 4 digits
re =/^[0-9]{4}$/;
str="1234";

// 2. Bangladeshi Phone number (i.e. 01xxxxxxxxx , +8801xxxxxxxxx , 8801xxxxxxxxx)
re = /^01[0-9]{9}$/;
str = "01882576086"

re = /^\+8801[0-9]{9}$/;
str = "+8801882576086";

re = /^8801[0-9]{9}$/;
str = "8801882576086";

re = /^(\+88)?(88)?01[0-9]{9}$/; // Combined and Grouping
str = "+8801882576086"

//Custom Email address (i.e. 20-42424-1@student.aiub.edu)
re = /^[0-9]{2}-[0-9]{5}-[0-9]{1}(@student.aiub.edu)$/;
str = "22-42424-3@student.aiub.edu"

//

document.write(re.test(str));