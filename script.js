//your JS code here. If required.
function delayedPromise() {
	return new Promise((resolve) =>{
		sateTimeout(() =>{
			resolve("Hello, world!");
		}, 1000);
	});
}

delayedPromise().then((value)=>{
	document.getElementById("output").textContent = value;
});