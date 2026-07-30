alert("Can you feel the magic?"); 

answers = ["Yes", "No", "Maybe", 
    "Ask again later", "Definitely not"];

ballimage.onclick = magic8ball;

clickme.onclick = magic8ball;

function magic8ball() { 
    num = Math.floor(Math.random() * 5);
    answerbox.innerHTML = "<b>" + answers[num] + "</b>";
    answerbox.style.backgroundColor = "yellow";
}

