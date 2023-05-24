//your JS code here. If required.
function delayedPromise() {
	return new Promise((resolve) =>{
		setTimeout(() =>{
			resolve("Hello, world!");
		}, 1000);
	});
}

delayedPromise().then((value)=>{
	document.getElementById("output").textContent = value;
});
/*function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Usage example:
delayedHello().then((message) => {
  document.getElementById("output").textContent = message;
});*/