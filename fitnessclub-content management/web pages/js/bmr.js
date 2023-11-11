function calculate(){
  console.log("Executing");
  var age = parseInt(document.bmr.age.value);
  var gender = document.bmr.sex.value;
  var height = parseFloat(document.bmr.height.value);
  var weight = parseFloat(document.bmr.weight.value);

  if(gender === "Male"){
    var basal = (10.0  *weight) + (6.25 * height) - (5 * age) + 5;
  }
  if(gender === "Female"){
    var basal = (10.0  *weight) + (6.25 * height) - (5 * age) - 161;
  }
  document.getElementById("bmr_result").innerHTML = basal;
}
