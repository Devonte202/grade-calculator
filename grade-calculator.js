$(document).ready(function(){
  var percentageArray = [];
  var gradeArray = [];

// Start of add aspect button code
$("#addAspect").click(function(){
    $("#table").append("\
   <tr class='tableItem'>\
     <td>\
       <form>\
             <input list='aspects' name='aspects'>\
             <datalist id='aspects'>\
               <option value='Exams'>\
               <option value='Homework'>\
               <option value='Attendance'>\
               <option value='Term paper(s)'>\
               <option value='Quizzes'>\
               <option value='Final Exam'>\
               <option value='Lab'>\
           </datalist>\
       </form>\
     </td>\
     <td>\
       <form>\
             <input class='percentInput'>\
       </form>\
     </td>\
     <td>\
       <form>\
             <input class='gradeInput'>\
       </form>\
     </td>\
   </tr>\
      ")

   });
// End of add aspect button code



// Start of Calculate Button Code

      // function calcGrade(h,x,y,z){
     //var Grade = (0.10*h)+(0.25*x)+(0.25*y)+(0.40*z)
    //  return Grade ;
    //}
   //console.log("Calculus " + calcGrade(84.72,77,55,82).toFixed(4));
   // FIGURE OUT HOW TO MAKE THIS LOGIC DYNAM
// Code written here is to check to see if the data in forms was being collected
   var percentages = $(".percentInput");

   $("#calculate").click(function(){
     var sum = 0;
     percentageArray = [];
     gradeArray = [];



     $('.percentInput').each(function(){
       var currentPercent = this.value;
       percentageArray.push(currentPercent / 100);

    });

    $('.gradeInput').each(function () {
      var currentGrade = this.value;
      gradeArray.push(currentGrade);


   
   });

      var sum = 0;
      for(var i=0; i< percentageArray.length; i++) {
               sum += percentageArray[i]*gradeArray[i];
          }

    $("#gradeText").text(sum);

     });
});
