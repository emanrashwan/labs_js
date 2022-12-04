
function myFunction() {

let x ={ userName:"",password:""};
x.userName=document.getElementById("username").value;
x.password=document.getElementById("password").value;
if (x.userName=="admin"&& x.password==123)
    {document.write("welcome");}
else
{ document.write("not registered");}
}