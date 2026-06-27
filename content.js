// content.js - The Professional Watcher
chrome.runtime.sendMessage({ action: "getScamList" }, (response) => {
    const dangerousSites = response.list;
    
    // Check if the current site is in your list
    if (dangerousSites.includes(window.location.hostname)) {
        // This injects a clean, full-screen warning page
        document.body.innerHTML = `
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:red; color:white; z-index:9999; display:flex; flex-direction:column; justify-content:center; align-items:center; font-family:sans-serif;">
                <h1>⚠️ ScamShield Alert</h1>
                <p>This website has been flagged as a security risk.</p>
                <button onclick="window.history.back()" style="padding:10px 20px; cursor:pointer;">Go Back Safely</button>
            </div>
        `;
    }
});