// Business Logic
function Task (trash) {
  this.trash = trash;
}

// User-interface
$(document).ready(function(){
  $("form#new-task").submit(function(){
    event.preventDefault();
    var inputtedTask = $('input#new-taskNeedComplete').val();
    var newTask = new Task(inputtedTask);

    $('ul#listTasks').append("<li><span class='taskNames'>" + inputtedTask +"</li>");

    $("li .taskNames").click(function(){
      var transferTasks = $("li .taskNames").detach();
      $("#listCompletedTasks").append(transferTasks);
    });

    inputtedTask = $('input#new-taskNeedComplete').val("");

    $(".taskNames").last().click(function(){
    $("#hide-results").show();
    $(".task-text").text(newTask.task);

  });
  });
});
