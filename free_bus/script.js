const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;

  let feedback;
if(isSeatAvailable){
  console.log("Seat is available")
  feedback = "Seat is available"
if(isAgeAbove50){
  feedback+=",Aged above 50"
  if(hasAadharCard)
  {
    feedback+=",Has Aadhar card"
    confirmMsg=confirm("Do u want to come inside ?") // it returns true if clicked k ,else false for cancel
    if (confirmMsg){
      alert("Please open the door")
    }
  }
  else{
    feedback+=",But u dont have Aadhar card"
  }
}
else{
  feedback+=",but ur age is below 50 years"
}
}
else{
  feedback+=",Seat is not available"
}

  passengerStatus.textContent=feedback
});

