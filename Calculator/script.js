 let result = document.getElementById('input-text');
 let calculate=(number)=>{
    result.value += number;

 }
 let Result=()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Enter the valid input");
    }
 }
 let clr=()=>{
    result.value ="";
 }
 function del(){
    result.value = result.value.slice(0,-1);
 }

// clicking on the equal by pessing enter key
 result.addEventListener("keypress", function(event) {
   // If the user presses the "Enter" key on the keyboard
   if (event.key === "Enter") {
     // Cancel the default action, if needed
     event.preventDefault();
     // Trigger the button element with a click
     document.getElementById("equal").click();
   }
 });
