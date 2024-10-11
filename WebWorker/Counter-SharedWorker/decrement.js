if (window.SharedWorker) {
    const worker = new SharedWorker("worker.js");

    document.getElementById("counter-button-decrement").addEventListener("click", () => {
        worker.port.postMessage("decrement");
        console.log("Decrement button clicked");
    });

    worker.port.onmessage = function (e) {
        document.getElementById("current-count").textContent = e.data;
        console.log('Message received from worker', e.data);
    }
    worker.port.postMessage("getCurrentCount");
} else {
    console.error("Web Workers are not supported in this browser.");
}