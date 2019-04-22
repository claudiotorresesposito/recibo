function timer() {
	var count = store.get("usercount")
	
	if(count<=2){
		store.set("usercount",400)
		document.getElementById("usercount").innerHTML = 0;
	} else {
	
	count = count - Math.ceil(4*Math.random());	
	store.set("usercount",count);
	document.getElementById("usercount").innerHTML = store.get("usercount");
	}
};

if(store.get("usercount") == null){
	$(document).ready(function(){
	store.set("usercount",362)
	document.getElementById("usercount").innerHTML = store.get("usercount");
	});
} else {
	$(document).ready(function(){
		document.getElementById("usercount").innerHTML = store.get("usercount");
	});
};

setInterval(timer, 3500);

setInterval(function(){
	document.getElementById("status1").innerHTML = "Running.";
	document.getElementById("status2").innerHTML = "Running.";
	document.getElementById("status3").innerHTML = "Running.";

	setTimeout(
		function(){
			document.getElementById("status1").innerHTML = "Running..";
			document.getElementById("status2").innerHTML = "Running..";
			document.getElementById("status3").innerHTML = "Running..";
		}, 1000);
	
	setTimeout(
		function(){
			document.getElementById("status1").innerHTML = "Running...";
			document.getElementById("status2").innerHTML = "Running...";
			document.getElementById("status3").innerHTML = "Running...";
		}, 2000);	
		
},3000);
