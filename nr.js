function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let scholarshipType = document.getElementById('scholarshipType').value;
    let address = document.getElementById('address').value;
    let Bonafide = document.getElementById('bonafide').value;
    let Caste = document.getElementById('caste').value;
    let income = document.getElementById('Income').value;
    let Residence = document.getElementById('Residence').value;
    let Aadhar = document.getElementById('Aadhar').value;
    let bankpassbook = document.getElementById('bank Passbook').value;
    let photo = document.getElementById('Photo').value;

    let errorMessage = "wrong";

    // Validate that the essay has at least 50 words
    if (address.split(' ').length < 50) {
        errorMessage = "The Address must have at least 50 words.";
    }

    if (errorMessage) {
        document.getElementById('errorMessage').textContent = errorMessage;
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
