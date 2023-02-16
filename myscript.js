let myButton;
let myTextArea;
let myName="";
let myEmail="";

function resetSuggestion() {

document.getElementById("laughingllama").style.visibility='hidden'
document.getElementById('suggestion').value='';
document.getElementById('Name').value='';
document.getElementById('email').value='';
document.getElementById('dateofbirth').value='';

}


/* checking if the birthday provided makes them over 19 */
function isOver19(birthday)
{
    
  let ageindays;
  const currentdate = new Date(); 
  const currentYear = currentdate.getFullYear(); 
  const currentMonth = currentdate.getMonth(); 
  const birthdaymonth = birthday.getMonth();
  const birthdayday = birthday.getDate()+1; // have to add one to the day for some reason ... javascript is weird because the current date returns the correct day number
  const currentday = currentdate.getDate();
  const ageinyears = currentYear - birthday.getFullYear();

  // if the difference in the current year and their birth year is greater than 19 they are 19 and return true
  if (ageinyears > 19) 
  {
    return(true);
  }
  else 
  {
    //if the differece between the current year and birth year is 19 you will have to check the month and day
    if (ageinyears == 19) 
    {
      // if the birthday month is less than the current month - they are 19 
      if (birthdaymonth < currentMonth) 
      {
        return(true);
      }
      else 
      {
        // if the birthday month is the same as the current month you will need to check that the birthdate day is less than the current day
        if ( (birthdaymonth == currentMonth) && (birthdayday <= currentday))
        {
          return(true); 
        }
      }
    }   
    // they are not 19
    return(false);
  }
}

function submitSuggestion(){
    const currentdate2 = new Date(); 
    const currentYear2 = currentdate2.getFullYear(); 
    const suggestiontext=document.getElementById("suggestion").value;
    const myName=document.getElementById("Name").value;
    const myEmail=document.getElementById("email").value;
    const mydate = document.getElementById("dateofbirth").value;
    let errorText="";
    const newdate = new Date(mydate);

    const underagePrize = "because you are under 19 years of age, a coupon for a free poster of a funny llama "; 
    const overagePrize = "because you are over 19 years of age, a coupon for a free bottle of wine ";
    
    let answerText="";
    if (myName==""){
      errorText="<p>Name is Mandatory.</p>";
    }
    if (myEmail==""){
      errorText = errorText + "<p>Email is Mandatory.</p>";
    }
    if (mydate == "")
    {
      errorText = errorText + "<p>date of birth is Mandatory.</p>";
    }
   if (errorText==""){
    if (isOver19(newdate))
    {
       answerText=overagePrize;
    }
    else{
        answerText=underagePrize;
    }
    document.getElementById("Thankheader").innerHTML= "Thank you for your suggestion " + myName;
    document.getElementById("Thankyou").innerHTML="We have received the following suggestion: <p >" +suggestiontext + "</p><p> To thank you for your suggestion,  "+ answerText + " has been sent to <strong>" + myEmail + "</strong></p>";    
    document.getElementById("laughingllama").style.visibility='visible'; 
  } 
    document.getElementById("validationerrors").innerHTML = errorText;

}
function hoverHome(){

    document.getElementById("home").src="home_hover.png";
    
}
function notHome(){
    document.getElementById("home").src="home.PNG";
}
