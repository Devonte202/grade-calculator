$(document).ready(function(){
// Start of add aspect button code
$("#addAspect").click(function(){
    $("#inputTable").append("\
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
   // FIGURE OUT HOW TO MAKE THIS LOGIC DYNAMIC 

// Code written here is to check to see if the data in forms was being collected
   var percentages = $(".percentInput");
   $("#calculate").click(function(){
     var sum = 0;

$('.percentInput').each(function(){
    sum += parseInt(this.value);
});
      console.log(sum);

     });

});
