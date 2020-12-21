alert("Make sure that you have the link to your Sololearn profile and remember to put the correct id in the input because messages you typed and the profile pic will be loaded by the id!!!\n\nWhat you can do 🔥🔥🔥:\nMessage for REAL!!! (It's a GROUP Chat..You can even include HTML markup in the messages!!!)\n\nFurther information:\nThis project uses Firebase as the Back-end😅\nPls Read the instructions in the NEXT section..\nSometimes it may refresh when you try to Login, I don't know why...\n\nI hope you will like it 🔥!!\nIf you like it, plz give an upvote and leave a comment!!!😊😊😊")
    function getIn(){
      $("#info").css("left","-100%")
    }
    function sendMessage() {
        
        firebase.database().ref("messages").push().set({
            "id":$("#login-id").val(),
            "sender": $("#login-name").val(),
            "message": $("#input").val()
        });
        $("#input").val("")
        scrolldown();
        return false;
        
    }
    function login() {
      var n = $(".msg-"+$("#login-id").val());
      n.removeClass("others-msg").addClass("my-msg")
      $("#chat").css("right","0%");
      return false;
    }
    
