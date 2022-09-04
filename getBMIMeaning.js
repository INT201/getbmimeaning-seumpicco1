//const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  
 return weight / (height*height)
}
function getBMIMeaning(weight, height) {
  let BMI =calculateBMI(weight,height)
 if(BMI < 18.5) {

  return "Underweight"

 }
 else if (BMI >18.5 && BMI <=24.9){
return "Normal weight"

 }
 else {

  return "Over weight "
 }
};

console.log(calculateBMI(70,170))
console.log(getBMIMeaning(64,3))