//your JS code here. If required.
let p = new Promise((resolve, reject)=>{
	setTimeout({
		resolve("Hello world!");
	}1000);
})
p.then(value){
	const val = value;
}
let div = document.getElementById("output");
div.innerContent = val;