function calculateAge() {
  
    var birthYearInput = document.getElementById("birthYear").value;
    var currentYear = new Date().getFullYear();
      
    var birthYear = parseInt(birthYearInput);
    var age = currentYear - birthYear;
    document.getElementById("result").innerHTML = "Your age is: " + age;
    
  }
  