const currentCount = document.getElementById("current-count");
const counterButton = document.getElementById("counter-button");

if (window.Worker) {
    console.log("Main thread loaded");
    const counterWorker = new Worker("counterWorker.js");

    counterButton.addEventListener("click", () => {
        counterWorker.postMessage("increment");
        console.log("Button clicked in main thread");
    });

    counterWorker.onmessage = function (e) {
        currentCount.textContent = e.data;
        console.log('Message received from worker', e.data);
    }
    counterWorker.postMessage("getCurrentCount");
} else {
    console.error("Web Workers are not supported in this browser.");
}