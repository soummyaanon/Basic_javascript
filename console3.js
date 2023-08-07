function getGrade(marks) {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else {
      return "D";
    }
  }
  
  // Example usage:
  console.log(getGrade(95)); // Output: "A"
  console.log(getGrade(85)); // Output: "B"
  console.log(getGrade(75)); // Output: "C"
  console.log(getGrade(60)); // Output: "D"
  