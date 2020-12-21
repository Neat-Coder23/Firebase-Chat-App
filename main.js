//firebase config
    var firebaseConfig = {
        apiKey: "AIzaSyCSM4BXigBnm9Zh5BJ46-8_cf9Lc6Te0-8",
        authDomain: "chat-app-cdda7.firebaseapp.com",
        projectId: "chat-app-cdda7",
        databaseURL: "https://chat-app-cdda7-default-rtdb.firebaseio.com/",
        storageBucket: "chat-app-cdda7.appspot.com",
        messagingSenderId: "248770525059",
        appId: "1:248770525059:web:64a8b0de9920375867e8b6"
    };
    
    // Initializing Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    function scrolldown(){
      document.getElementById("msgs").scrollTop = document.getElementById("msgs").scrollHeight;
    }
    
    
    
    
  var val,html
    firebase.database().ref("messages").on("child_added",(snapshot) => {
      const id = document.getElementById("login-id").value
        if (snapshot.val().id == id) {
            html = `
            <div class="my-msg"><span class="my-name"><img src="https://api.sololearn.com/Uploads/Avatars/${snapshot.val().id}.jpg" alt="" class="pic">${snapshot.val().sender}</span><br> ${snapshot.val().message}</div><br>
            `;
            document.getElementById("msgs").innerHTML += html;
        }
        else{
          html = `
          <div class="others-msg msg-${snapshot.val().id}"><span class="sender-name"><img src="https://api.sololearn.com/Uploads/Avatars/${snapshot.val().id}.jpg" alt="" class="pic">${snapshot.val().sender}</span><br>${snapshot.val().message}</div><br>
            `;
            
            document.getElementById("msgs").innerHTML += html;
        }
        var z = document.getElementsByClassName("pic")
        for(let i of z){
          i.onerror = ()=>{
            i.setAttribute("src","https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg")
            i.style.border = "transparent"
          }
        }
        scrolldown();
        
        
    });
    
    document.getElementById("addemoji").onclick = () => {
        let arr = ['🙂','😆','😍','😘','😑','😜','😅','✌️','🤪','🤟','😢','😡','😊']

        document.getElementById("input").value += arr[Math.floor(Math.random() * 14)];
        document.getElementById("input").focus()
    }
