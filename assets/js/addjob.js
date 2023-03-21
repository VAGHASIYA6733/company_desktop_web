

function validation() {
 
  const title = document.getElementById("formGroupExampleInput").value;
  const positionType = document.getElementById("floatingSelectGrid1").value;
  const department = document.getElementById("floatingSelectGrid2").value;
  const noOfPositions = document.getElementById("floatingInputGrid3").value;
  const interviewDate = document.getElementById("floatingInputGrid4").value;
  const location = document.getElementById("floatingInputGrid5").value;
  const reportingTo = document.getElementById("floatingInputGrid6").value;
  const qualification = document.getElementById("formGroupExampleInput7").value;
  
  if (title === "" || positionType === "" || department === "" || noOfPositions === "" ||
      interviewDate === "" || location === "" || reportingTo === "" || qualification === "") {
    alert("Please fill out all fields");
    return false;
  }
  
  
  return true;
}













