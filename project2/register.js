function signupform()
{
    var uname = document.getElementById("username");
    var user_name = uname.value;
    var pass = document.getElementById("psw");
    var passw =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var cpass = document.getElementById("cpsw");
    var email = document.getElementById("Email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobno = document.getElementById("Mob");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    const letters = /^[A-Za-z\s]+$/;


    if(user_name === "" )
    {
        alert("please enter username");
        return false;
    }
    if (user_name.length < 2 || user_name.length > 25) {
        alert("Please enter greater than 2 and less than 25");
        return false;
    }
    if(pass.value === "" )
    {
        alert("please enter password");
        return false;
    }
     if  (!pass.value.match(passw))
    {
        alert("Please put valid password:\n at least 8 character \n at least 1 numeric character \n at least 1 lowercase letter \n at least 1 uppercase letter \n at least 1 special character");
        return false;
    }
     if (cpass.value != pass.value)
    {
        alert("Please enter same password ");
        return false;
    }
    if(email.value === "")
    {
        alert("Please enter email-id");
        return false;
    }
    if(!email.value.match(mailformat))
    {
        alert("InValid email address!");
        return false;
    }
    if (mobno.value.length!=10)
    {
        alert("Please enter 10 digit number");
        return false;
    }
    if (fname.value == "" ) {
        alert('Please enter first name');
        return false;
    } 
    if (fname.value.length < 2 || fname.value.length > 25) {
        alert("Please enter greater than 2 and less than 25");
        return false;
    }
    if (!fname.value.match(letters)) {
        alert("Name must be in alphabets");
        return false;
    }
    if (lname.value == "") {
        alert('Please enter  last name');
        return false;
    }
   
    if (lname.value.length < 2 || lname.value.length > 25) {
        alert("Please enter greater than 2 and less than 25");
        return false;
    }

    if (!lname.value.match(letters)) {
        alert("Name must be in alphabets");
        return false;
    }

    else{
        alert("form submitted successfully");
        return true;
    }


}