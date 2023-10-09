window.onload = pageLoad;



function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm(){
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    
    var pass = document.forms["myForm"]["password"].value;
    var repass = document.forms["myForm"]["repassword"].value;

    if(pass != repass){
        alert("Password not match.")
        return false;
    }
    else{
        alert("OK!, Pass");
    }
    
    // var firstname = document.getElementById("firstname").value;
    // var lastname = document.getElementById("lastname").value;

    

    // if(firstname == ""){
    //     alert("Please input firstname.")
    //     return false;
    // }
    // if(lastname == ""){
    //     alert("Please input lastname.")
    //     return false;
    // }

    // var radiocheck = document.getElementById("radio-check");

    // if(!radiocheck.checked){
    //     alert("Please select gender.")
    //     return false;
    // }

    // var username = document.getElementById("username-check").value;

    // if(username == ""){
    //     alert("Please input username.")
    //     return false;
    // }

    // var passwordcheck1 = document.getElementById("pass1").value;
    // var passwordcheck2 = document.getElementById("pass2").value;

    // if(passwordcheck1 != passwordcheck2){
    //     alert("Password not match.")
    //     return false;
    // }
    
   
}