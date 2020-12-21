# Firebase Chat App
<img src="https://firebase.google.com/images/brand-guidelines/logo-built_white.png" style="height:60px;width:60px;border-radius:30px;">
<p style="padding-left:10px;">This Chat App is made with the most popular BaaS "Firebase" which is a product of Google. It uses Sololearn profiles to get profile images. This App includes the following functions:</p>

  - Messaging like in a Group Chat room
  - Real Time Updates of Incoming Messages
  - Login in to message with a specific Sololearn id (Anonymuous Authentication).
  - Show Sololearn Profile Images with the input name.
  - Generate Random Emojis when the Happy face is clicked

# Improvements

  - Firebase Authentication(facebook,Google,etc.) without anonymouos
  - Make message DIVs Dissappear/Appear when User Scrolls to optimize the Page Load and Performace if there is lot of data in the database


# Manual
- Firstly, You should have a Google account because Firebase is a Product of Google.
- Then, You can go to the Firebase Console, Make a new Project, make a New App so You will get a Piece of Code To paste in the Front-end JS Code as Firebase Config. Remember to replace the blank values with your Original values in the [main.js](https://github.com/Sakindu-d/Firebase-Chat-App/blob/main/main.js) file in this repository.
```javascript
    //firebase config
    var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        databaseURL: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    };
    
    // Initializing Firebase
    firebase.initializeApp(firebaseConfig);
```

- **That's it!!!** You have a Real-time Working Chat App!!
- If you want to host this app, I recommend you [Netlify](https://netlify.com) or [Github Pages](https://pages.github.com)


### Tech used:
* Firebase
* HTML
* CSS
* JavaScript
* JQuery
## Thank You for visiting my Repository!!
# Always Be Awesome!!!
