$(document).ready(function(){
  var percentageArray = [];
  var gradeArray = [];

  for (i=0; i<3; i++){
    addAspect();
  }

  function addAspect(){
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
     <td><button class='aspectDelete'><div id='xSymbol'>&#x274C</div></button></td>\
   </tr>\
   ")

  }

// Start of add aspect button code
$("#addAspect").click(function(){
  addAspect();
});
// End of add aspect button code

// Start of Calculate Button Code

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

    $("body").on("click", ".aspectDelete", function(){
      var item = $(this).parents("tr");
      item.remove();
    });

    $("#clearButton").click(function(){
      $(".tableItem").each(function(){
        $(this).remove();
      })
      for (i=0; i<3; i++){
        addAspect();
      }
    });


});
