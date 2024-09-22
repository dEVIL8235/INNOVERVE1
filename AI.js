function checkDocument() {
    const resultDiv = document.getElementById('result');
    const fileInput = document.getElementById('docInput').files[0];

    // Check if the user uploaded a document
    if (!fileInput) {
        resultDiv.innerHTML = '<p style="color: red;">Please upload a document.</p>';
        return;
    }

    // Simulate AI checking with random data
    let predictionPercentage = Math.floor(Math.random() * 100) + 1;

    // Create result message
    let resultMessage = `Document verification result: <strong>${predictionPercentage}%</strong> accurate.<br>`;

    if (predictionPercentage > 70) {
        resultMessage += '<p style="color: green;">Your document is verified successfully!</p>';
    } else {
        resultMessage += '<p style="color: red;">Document rejected! Reason:</p>';
        
        // Give reasons for rejection
        if (predictionPercentage < 50) {
            resultMessage += '<p style="color: red;">- Low originality. The content seems to be copied.</p>';
        }
        if (predictionPercentage < 30) {
            resultMessage += '<p style="color: red;">- Incorrect formatting or suspicious modifications detected.</p>';
        }
    }

    resultDiv.innerHTML = resultMessage;
}
