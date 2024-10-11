* Resource
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

* Web Worker
A simple means to run scripts in background threads. A worker is created using a constructor `Worker()`. Workers run in another global context - [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) is not available in the Worker context.

A dedicated worker is only accessible from the script that first spawned it, whereas shared workers can be accessd from multiple scripts.

A dedicated worker context is represented by a [DedicatedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope).
A shared worker context is represented by a [SharedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope).

In a worker context, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the `window` object. See [Functions and classes available to workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

Messages sent between workers and the main thread using `postMessage()` method, and respond to messages via the `onmessage` event handler.