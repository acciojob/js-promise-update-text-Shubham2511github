//your JS code here. If required.
let p = new Promise((resolve, reject)=>{
	setTimeout({
		resolve("Hello"," world!");
	}1000);
})
p.then(value){
	let val = value;
}
let div = document.getElementById("output");
div.textContent = val;