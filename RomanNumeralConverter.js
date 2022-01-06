function convertToRoman(num) {
//map the numbers
const roman=['M','CM','DCCC','DCC','DC','D','CD','CCC','CC','C','XC','LXXX','LXX','LX','L','XL','XXX','XX','X','IX','VIII','VII','VI','V','IV','III','II','I'];
const arabic=[1000,900,800,700,600,500,400,300,200,100, 90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
//make a copy of the given number
let numCopy=num;
//make an empty string to store the roman number
let romanNumber='';
//find the roman number
arabic.forEach(function(number, i)
{
    while(numCopy-number>=0)
    {
    romanNumber=romanNumber+roman[i];
    numCopy=numCopy-number;
    }
});
console.log(romanNumber)
return romanNumber;
}

convertToRoman(1000);