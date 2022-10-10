L CSS JSResult Skip Results Iframe
EDIT ON
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh === 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
function calculateAge(date) 
{
  const now = new Date();
  const diff = Math.abs(now - date );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age
}

var picker = new Pikaday({ 
  field: document.getElementById('birth_date') ,
  yearRange:[1900,2020],
  onSelect: function(date) {
  let age = calculateAge(date);
  document.getElementById('age').innerHTML = "age: "+age ;
  }                        
});

$('input[type=button]').click(function(){
  var responseContainer = $(this).closest('dt').next('dd');
  var answerEntered = $(this).prev('input[type=text]').val();
  var correctAnswer = $(this).next('input[type=hidden]').val();

  // Erase the contents of the response container.
  responseContainer.empty();
  
  if(answerEntered == correctAnswer){
      responseContainer.html('That is correct!');
  } else {
      responseContainer.html('That is incorrect.  The correct answer is "' + correctAnswer + '".');
  }
  responseContainer.show();    
});