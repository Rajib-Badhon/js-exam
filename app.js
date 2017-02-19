$(document).ready(function() {
    

 $("#password").keyup(function(){

  var pass=$("#password").val();
  if(pass.length<6){$("#smsemail").text("your password is weak");
  $("#smsemail").addClass(".red");

}
else{

  $("#password").removeClass(".red");
  $("#smsemail").text("Your password is strong");
}

 });

 $("#btn").click(function(){
   $("#password").val("");
  $("#username").val("");

 });

 $('.btn-gr').click(function () {
            var password = $("#password").val();
            var username = $("#username").val();
            if (password.length ==0 && username.length ==0){
                alert("please fillup the form");
                
            }
            
            else{
                window.location.href = 'subpage.html';
            }
        });


});