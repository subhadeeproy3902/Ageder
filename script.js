function calculateAge() {
  // Get the user's input (date of birth)
  const birthDateInput = document.getElementById('birthDate');
  const birthDateValue = new Date(birthDateInput.value);

  // Check if the input is a valid date
  if (isNaN(birthDateValue)) {
      alert('Please enter a valid date of birth.');
      return;
  }

  // Get the current date
  const currentDate = new Date();

  // Calculate the age
  const ageInMilliseconds = currentDate - birthDateValue;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInYears = ageInDays / 365;

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your age is approximately ${ageInYears.toFixed(2)} years.`;
}
