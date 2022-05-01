var myAge = 33;
// created a variable named myAge and gave it a number value of my age. 
var earlyYears = 2;
// created a variable named earlyYears and gave it a number value of 2. 
earlyYears *= 10.5;
var laterYears = myAge - 2;
// created a variable named laterYears and took the variable myAge and subtracted it by 2 to give laterYears a value. 
laterYears *= 4;
// used the multiple / equal assignment operator to multiple the variable laterYears and assign at the same time.
console.log(earlyYears);
console.log(laterYears);
var myAgeInDogYears = earlyYears + laterYears;
// created a variable for myAgeInDogYears and assigned it the variable earlyYears and laterYears together. 
var myName ='Amber'.toLowerCase();
//created a variable for my name and type it normally. The .tolowercase will make sure my name is in all lower case. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//Used string interpolation to add the variables of everything. 
