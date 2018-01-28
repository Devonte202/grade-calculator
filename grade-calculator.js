$(document).ready(function(){

$("#addAspect").click(function(){

   $("#inputTable").append("\
   <tr id="tableItem">\
     <td>\
       <form>\
             <input list="aspects" name="aspects">\
             <datalist id="aspects">\
               <option value="Exams">\
               <option value="Homework">\
               <option value="Attendance">\
               <option value="Term paper(s)">\
               <option value="Quizzes">\
               <option value="Final Exam">\
               <option value="Lab">\
           </datalist>\
       </form>\
     </td>\
     <td>\
       <form>\
             <input class="percentInput">\
       </form>\
     </td>\
     <td>\
       <form>\
             <input class="gradeInput">\
       </form>\
     </td>\
   </tr>\
      ")

    });
       });
