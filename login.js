window.onload = loginLoad;
const queryString = window.location.search;
console.log(queryString);

function loginLoad(){
	const login = document.getElementById("myLogin");

	login.onsubmit = checkLogin;	
	login.onreset = resetall;
	
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const urlParams =  new URLSearchParams(queryString);
	
	const urlusername = urlParams.get('username')
	const urlpassword = urlParams.get('password')

	console.log(urlusername)
	console.log(urlpassword)

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	console.log(username);
	console.log(password);
	
	if(username != urlusername){
		alert("Wrong username.")
		return false;
	}else if(password != urlpassword){
		alert("Wrong password.")
		return false;
	}else{
		alert("Login Completed")
		return true;
	}
		
}

function resetall(){
	username.value= "";
	password.value= "";
}


			