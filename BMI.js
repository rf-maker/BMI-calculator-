//Body Mass Index Calculator
function BMI() {
   var height = document.getElementById("tall").value;
   var weight = document.getElementById("mass").value;
   var squared = height * height;
   var BodyMS = weight / squared;
   document.getElementById('BodyMassIndex').innerHTML = 'Your BMI is ' + BodyMS.toFixed(2) + ' kg/m2';


   if (BodyMS < 18.5) {
      document.getElementById('BodyMassIndex').innerHTML = 'Your BMI is ' + BodyMS.toFixed(2) + ' kg/m2 (You are Underweight)'
      document.getElementById('Pic').src = 'https://thumbs.dreamstime.com/b/skinny-guy-n-gym-vector-illustration-cool-cartoon-style-geometrical-flat-isolated-white-background-70243123.jpg'
   }
   else if (BodyMS < 25) {
      document.getElementById('BodyMassIndex').innerHTML = 'Your BMI is ' + BodyMS.toFixed(2) + ' kg/m2 (You are Healthy)'
      document.getElementById('Pic').src = 'https://thumbs.dreamstime.com/b/boy-flaunting-his-muscles-fitness-flat-design-icon-flat-vector-illustration-isolated-white-background-boy-flaunting-his-muscles-128116502.jpg'
   }
   else if (BodyMS < 30) {
      document.getElementById('BodyMassIndex').innerHTML = 'Your BMI is ' + BodyMS.toFixed(2) + ' kg/m2 (You are Overweight)'
      document.getElementById('Pic').src = 'https://i.pinimg.com/564x/7e/db/11/7edb1114b2c65a32f837c0d6c0fd0a44.jpg'
   }
   else if (BodyMS > 30) {
      document.getElementById('BodyMassIndex').innerHTML = 'Your BMI is ' + BodyMS.toFixed(2) + ' kg/m2 (You are Obese)'
      document.getElementById('Pic').src = 'https://c7.uihere.com/files/97/268/929/obese-children-drink-water.jpg'
   }
}
