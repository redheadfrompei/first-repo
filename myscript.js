let myButton;
let myTextArea;
let myName="";
let myEmail="";

function resetSuggestion() {
   var objForm = document.getElementsByTagName('form');
   var objError, objExisting, objNew;

document.getElementById("laughingllama").style.visibility='hidden'
document.getElementById('suggestion').value='';
document.getElementById('Name').value='';
document.getElementById('email').value='';
document.getElementById('dateofbirth').value='';

objError = document.getElementsByClassName('validationerrors');
for (iCounter=0; iCounter<objError.length; iCounter++)
{
   if (objError[iCounter].className == 'validationerrors')
   {
      objExisting = objError[iCounter];
   }
}
objNew=document.createElement('p')
if (objExisting)
      {
         objExisting.parentNode.replaceChild(objNew, objExisting);
      }
      else
      {
         objPosition = objForm.firstChild;
         
 //        objForm.insertBefore(objNew, objPosition);
//         objForm. insertBefore(objError, 1)
         objForm.insertBefore(objNew, 1 );

      }



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
/*    const currentdate2 = new Date(); 
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

*/
  validateForm(window);
/*  document.getElementById("validationerrors").innerHTML = errorText; */

}
function hoverHome(){

    document.getElementById("home").src="home_hover.png";
    
}
function notHome(){
    document.getElementById("home").src="home.PNG";
}

window.onload = initialise;

function initialise()
{
   var objForms = document.getElementsByTagName('form');
   var iCounter;

   // Attach an event handler for each form
   for (iCounter=0; iCounter<objForms.length; iCounter++)
   {
      objForms[iCounter].onsubmit = function(){return validateForm(this);};
   }
}


// Event handler for the form
function validateForm(objForm2)
{
   var arClass = [];
   var iErrors = 0;
   var objForm = document.getElementsByTagName('form');
 //  var objField = objForm.getElementsByTagName('input');
     var objField = document.getElementsByTagName('input');
 //  var objLabel = objForm.getElementsByTagName('label');
   var objLabel = document.getElementsByTagName('label');
   var objList = document.createElement('ol');
   var objError, objExisting, objNew, objTitle, objParagraph, objAnchor, objPosition;
   var strLinkID, iFieldCounter, iClassCounter, iCounter;
   const currentdate2 = new Date(); 
   const currentYear2 = currentdate2.getFullYear(); 
   const suggestiontext=document.getElementById("suggestion").value;
   const myName=document.getElementById("Name").value;
   const myEmail=document.getElementById("email").value;
   const mydate = document.getElementById("dateofbirth").value;
   let errorText="";
   const newdate = new Date(mydate);

   const underagePrize = "Because you are under 19 years of age, a coupon for a free poster of a funny llama "; 
   const overagePrize = "Because you are over 19 years of age, a coupon for a free bottle of wine ";
   


   // Get the id or name of the form, to make a unique
   // fragment identifier
   if (objForm.id)
   {
      strLinkID = objForm.id + 'ErrorID';
   }
   else
   {
      strLinkID = objForm.name + 'ErrorID';
   }

   // Iterate through input form controls, looking for validation classes
   for (iFieldCounter=0; iFieldCounter<objField.length; iFieldCounter++)
   {
      // Get the class for the field, and look for the appropriate class
      arClass = objField[iFieldCounter].className.split(' ');
      for (iClassCounter=0; iClassCounter<arClass.length; iClassCounter++)
      {
         switch (arClass[iClassCounter])
         {
            case 'string':
               if (!isString(objField[iFieldCounter].value, arClass))
               {
                  if (iErrors === 0)
                  {
                     logError(objField[iFieldCounter], objLabel, objList, strLinkID);
                  }
                  else
                  {
                     logError(objField[iFieldCounter], objLabel, objList, '');
                  }
                  iErrors++;
               }
               break;
            case 'number':
               if (!isNumber(objField[iFieldCounter].value, arClass))
               {
                  if (iErrors === 0)
                  {
                     logError(objField[iFieldCounter], objLabel, objList, strLinkID);
                  }
                  else
                  {
                     logError(objField[iFieldCounter], objLabel, objList, '');
                  }
                  iErrors++;
               }
               break;

            case 'email' :
               if (!isEmail(objField[iFieldCounter].value, arClass))
               {
                  if (iErrors === 0)
                  {
                     logError(objField[iFieldCounter], objLabel, objList, strLinkID);
                  }
                  else
                  {
                     logError(objField[iFieldCounter], objLabel, objList, '');
                  }
                  iErrors++;
               }
               break;
         }
      }
   }
   objError = document.getElementsByClassName('validationerrors');
   for (iCounter=0; iCounter<objError.length; iCounter++)
   {
      if (objError[iCounter].className == 'validationerrors')
      {
         objExisting = objError[iCounter];
      }
   }


   if (iErrors > 0)
   {
      // If not valid, display error messages
      
      // Look for existing errors
 

      objNew = document.createElement('div');
      objTitle = document.createElement('h2');
      objParagraph = document.createElement('p');
      objAnchor = document.createElement('a');

      if (iErrors == 1)
      {
         objAnchor.appendChild(document.createTextNode('1 Error in Submission'));
      }
      else
      {
         objAnchor.appendChild(document.createTextNode(iErrors + ' Errors in Submission'));
      }
      objAnchor.href = '#' + strLinkID;
      objAnchor.className = 'submissionerror';

      objTitle.appendChild(objAnchor);
      objParagraph.appendChild(document.createTextNode('Please review the following'));
      objNew.className = 'validationerrors';

      objNew.appendChild(objTitle);
      objNew.appendChild(objParagraph);
      objNew.appendChild(objList);
      
      // If there were existing error, replace them with the new lot,
      // otherwise add the new errors to the start of the form
      if (objExisting)
      {
         objExisting.parentNode.replaceChild(objNew, objExisting);
      }
      else
      {
         objPosition = objForm.firstChild;
         
 //        objForm.insertBefore(objNew, objPosition);
//         objForm. insertBefore(objError, 1)
         objForm.insertBefore(objNew, 1 );

      }

      // Allow for latency
      setTimeout(function() { objAnchor.focus(); }, 50);
      
      // Don't submit the form
      objForm.submitAllowed = false;
      return false;
   }
   else
   {

      let answerText="Thank you for your suggestion " + myName +". ";
   
      if (isOver19(newdate))
      {
         answerText= answerText + overagePrize + "will be sent to "+myEmail;
      }
      else{
          answerText= answerText + underagePrize + "will be sent to "+myEmail;
         
      }
      objParagraph = document.createElement('p');
      objParagraph.appendChild(document.createTextNode(answerText));

      if (objExisting)
      {
         objExisting.parentNode.replaceChild(objParagraph, objExisting);
      }
      else
      {
         objPosition = objForm.firstChild;
         
 //        objForm.insertBefore(objNew, objPosition);
//         objForm. insertBefore(objError, 1)
         objForm.insertBefore(objParagraph, 1 );

      }
      

   }
   // Submit the form
   return true;
}





// Function to add a link in a list item that points to problematic field control
function addError(objList, strError, strID, strErrorID)
{
   var objListItem = document.createElement('li');
   var objAnchor = document.createElement('a');
   
   // Fragment identifier to the form control
   objAnchor.href='#' + strID;

   // Make this the target for the error heading
   if (strErrorID.length > 0)
   {
      objAnchor.id = strErrorID;
   }

   // Use the label prompt for the error message
   objAnchor.appendChild(document.createTextNode(strError));
   // Add keyboard and mouse events to set focus to the form control
   objAnchor.onclick = function(event){return focusFormField(this, event);};
   objAnchor.onkeypress = function(event){return focusFormField(this, event);};
   objListItem.appendChild(objAnchor);
   objList.appendChild(objListItem);
}

function focusFormField(objAnchor, objEvent)
{
   var strFormField, objForm;

   // Allow keyboard navigation over links
   if (objEvent && objEvent.type == 'keypress')
   {
      if (objEvent.keyCode != 13 && objEvent.keyCode != 32)
      {
         return true;
      }
   }

   // set focus to the form control
   strFormField = objAnchor.href.match(/[^#]\w*$/);
   objForm = getForm(strFormField);
   objForm[strFormField].focus();
   return false;
}

// Function to return the form element from a given form field name
function getForm(strField)
{
   var objElement = document.getElementById(strField);

   // Find the appropriate form
   do
   {
      objElement = objElement.parentNode;
   } while (!objElement.tagName.match(/form/i) && objElement.parentNode);

   return objElement;
}

// Function to log the error in a list
function logError(objField, objLabel, objList, strErrorID)
{
   var iCounter, strError;

   // Search the label for the error prompt
   for (iCounter=0; iCounter<objLabel.length; iCounter++)
   {
      if (objLabel[iCounter].htmlFor == objField.id)
      {
         strError = objLabel[iCounter].firstChild.nodeValue;
      }
   }
   strError = strError + " is required";
   addError(objList, strError, objField.id, strErrorID);
}

// Validation routines - add as required

function isString(strValue, arClass)
{
   var bValid = (typeof strValue == 'string' && strValue.replace(/^\s*|\s*$/g, '') 
     !== '' && isNaN(strValue));

   return checkOptional(bValid, strValue, arClass);
}

function isEmail(strValue, arClass)
{
   var objRE = /^[\w-\.\']{1,}\@([\da-zA-Z\-]{1,}\.){1,}[\da-zA-Z\-]{2,}$/;
   var bValid = objRE.test(strValue);

   return checkOptional(bValid, strValue, arClass);
}

function isNumber(strValue, arClass)
{
   var bValid = (!isNaN(strValue) && strValue.replace(/^\s*|\s*$/g, '') !== '');

   return checkOptional(bValid, strValue, arClass);
}

function checkOptional(bValid, strValue, arClass)
{
   var bOptional = false;
   var iCounter;

   // Check if optional
   for (iCounter=0; iCounter<arClass.length; iCounter++)
   {
      if (arClass[iCounter] == 'optional')
      {
         bOptional = true;
      }
   }

   if (bOptional && strValue.replace(/^\s*|\s*$/g, '') === '')
   {
      return true;
   }

   return bValid;
   }
