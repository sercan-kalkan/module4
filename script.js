(function () {

    var names = [
        "Yaakov", 
        "John", 
        "Jen", 
        "Jason", 
        "Paul", 
        "Frank", 
        "Larry", 
        "Paula", 
        "Laura", 
        "Jim",
        "jese"
    ];
    for (var i = 0; i < names.length; i++) {
      var firstLetterLowerCase = names[i].charAt(0).toLowerCase();
      if (firstLetterLowerCase === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
})();