score1=0;
score2=0;
p1=localStorage.getItem("key1");
p2=localStorage.getItem("key2");

console.log(p1);
console.log(p2);

document.getElementById("disname1").innerHTML = p1 + ":" ;
document.getElementById("disname2").innerHTML =  p2 + ":" ;



document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;




document.getElementById("Player_question").innerHTML = "Question Turn : " + p1;
document.getElementById("Player_answer").innerHTML = "Answer Turn : " + p2;



var number_1=0;
var number_2=0;
actual_answer=0
document.getElementById("Player_question").innerHTML="questionturn="+player1name;
document.getElementById("player_answer").innerHTML="answerturn="+player2name;

function send()
{
 number_1=document.getElementById("number1").value;
 number_2=document.getElementById("number2").value;
 actual_answer=parseInt(number_1)*parseInt(number_2);

 question_number = "<h4 id='word_display'> Q. " + number_1 + " x " + number_2 + "</h4>";

 input_box="<br>Answer:<input type='text' id='input_checkbox'>";
 check_button="<br><br><button class='btn-btn-info' onclick='check()'>Check</button>";
 row= question_number + input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number1").value="";
 document.getElementById("number2").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    get_answer = get_answer.toLowerCase();
    console.log(get_answer);

    if (get_answer == word) {
        if (answer_turn == "player1") {
           score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = score1;
        } else {
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = score2;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
     else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
      
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
     else {
        question_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML="";
}