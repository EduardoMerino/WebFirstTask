var database = firebase.database();
//var userId = firebase.auth().currentUser;
//var ref = database.ref('/question1');

var idea1;
var idea2;
$(".fireAnswer").click(function(){
  console.log("hola");
  return database.ref('question1').once('value').then(function(snapshot) {
    console.log("fire");
    idea1 = snapshot.child("q1a1").val();
    idea2 = snapshot.child("q1a2").val();
    console.log("1 " + idea1 + " 2 " + idea2);
    $("#idea1").text("" + idea1);
    $("#idea2").text("" + idea2);
  });

});
