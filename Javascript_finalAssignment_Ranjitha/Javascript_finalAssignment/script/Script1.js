function fn1(){
    var Name=document.getElementById("Id1".valueOf);
    var regx=/([a-z A-Z \d{20}$])/
    
    if(regx.test(Name))
    {
        document.getElementById("name").innerHTML=("Valid");
        document.getElementById("name").style.visibility=("visible");
        document.getElementById("name").style.color="red";
         alert("your name is valid");

    }
    else{
        if(Name=="")
        {
            document.getElementById("name").innerHTML=("inValid");
            document.getElementById("name").style.visibility=("invisible");
            document.getElementById("name").style.color="red";
            alert("name is required");

        }
        
        else
        {
            document.getElementById("name").innerHTML=("inValid");
            document.getElementById("name").style.visibility=("invisible");
            document.getElementById("name").style.color="red";
            alert("your name is invalid");

        }

    }
}

function fn2()
{
    var email=document.getElementById("Id2". valueOf);
    var regx=/^([a-z 0-9\.-]+)*@([a-z 0-9.]+)*(\.\w{2,3})+$/;
    if(regx.test(email)==true)
    
    {
        document.getElementById("Id2").innerHTML=("Valid");
        document.getElementById("Id2").style.visibility=("visible");
        document.getElementById("Id2").style.color="red";
        // alert("your mailId is valid");

    }
    else{
        
        document.getElementById("Id2").innerHTML=("inValid");
        document.getElementById("Id2").style.visibility=("invisible");
        document.getElementById("Id2").style.color="red";
        // alert("your your mailid is invalid");

    }

}
function func()
{
    var mobile=document.getElementById("Id4".valueOf);
    var regx=/(^[7-9]\d{9}$)/
    if(regx.test(mobile==""))
    {
        document.getElementById("Id4").innerHTML=("invalid");
        document.getElementById("Id4").style.visibility=("invisible");
        document.getElementById("Id4").style.color="red";
        // alert("your MobileNumber field is empty");

    }
    else{



        document.getElementById("Id4").innerHTML=("valid");
        document.getElementById("Id4").style.visibility=("visible");
        document.getElementById("Id4").style.color="red";
        // alert("your MobileNumber is valid");


    }
}





