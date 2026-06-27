document.addEventListener('DOMContentLoaded', function() {
    
    // We now use the IDs that match your HTML (licenseKey and activateBtn)
    const activateBtn = document.getElementById('activateBtn');
    const licenseInput = document.getElementById('licenseKey');
    const statusDiv = document.getElementById('status');

    activateBtn.addEventListener('click', function() {
        const key = licenseInput.value;

        // Perform the check
        if (key === "PREMIUM-2026-X") {
            statusDiv.innerText = "✅ License Verified! Protection Active.";
            statusDiv.className = "success";
        } else {
            statusDiv.innerText = "❌ Invalid License. Please try again.";
            statusDiv.className = "error";
        }
    });

});