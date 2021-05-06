function adduser()
{
   person1=document.getElementById("player1").value;
   person2=document.getElementById("player2").value;
   localStorage.setItem("key1",person1);
   localStorage.setItem("key2",person2);
   window.location="quiz_game_page.html";
}