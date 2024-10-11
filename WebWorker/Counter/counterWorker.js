let counter = 0;

onmessage = function (e) {
    console.log("Message received from main thread: " + e.data);
    switch (e.data) {
        case "increment":
            counter++;
            console.log("Counter incremented in worker: " + counter);
            break;
        case "getCurrentCount":
            break;
        default:
            console.error("Invalid message received from main thread: " + e.data);
            break;
    }
    postMessage(counter);
}