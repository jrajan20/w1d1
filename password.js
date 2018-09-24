var password = process.argv[2];

function displayPassword(password)
{
   var modifiedPass = "";
  for (var i = 0; i < password.length; i++)
  {
	 if (password[i] === "a")
	 {
       modifiedPass += "4";
	 }
	 else if (password[i] === "e")
	 {
       modifiedPass += "3";
	 }
	 else if (password[i] === "o")
	 {
       modifiedPass += "0";
	 }
	 else if (password[i] === "l")
	 {
       modifiedPass += "1";
	 }
	 else 
	 {
       modifiedPass += password[i];
	 }
   } 
  return modifiedPass;
}

console.log(displayPassword(password));
