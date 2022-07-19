

function xyzform()

{
    var uname = document.getElementById("username");
    var user_name = uname.value;

    var pass = document.getElementById("psw");
    var passw =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(user_name === "" )                                             
    {
            alert("Please enter username");
            return false;
    }
    if(user_name.length<2 || user_name.length>25)                                             
    {
            alert("Please enter username greater than 2 or less than 25 ");
            return false;
    }
    if(pass.value === "" )                                             
    {
            alert("Please enter password");
            return false;
    }
    if  (!pass.value.match(passw))
    {
        alert("Please put valid password:\n at least 8 character \n at least 1 numeric character \n at least 1 lowercase letter \n at least 1 uppercase letter \n at least 1 special character");
        
        
       
        return false;
    }

    else{
        alert("form submitted successfully");
        return true;
    }

}