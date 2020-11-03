window.onload = sendApirequest;

async function sendApirequest(){
    document.getElementById("answer1").style.backgroundColor = "#008CBA";
    document.getElementById("answer2").style.backgroundColor = "#008CBA";
    document.getElementById("answer3").style.backgroundColor = "#008CBA";
    document.getElementById("answer4").style.backgroundColor = "#008CBA";
    let e = category();
    let a = difficulty();
    
    if(e == "any" || a == "any"){
        if(e == "any" && a != "any"){
            let response = await fetch(`https://opentdb.com/api.php?amount=1&difficulty=${a}&type=multiple`);
            let data = await response.json();
            useApi(data);
        }else if(e != "any" && a == "any"){
            let response = await fetch(`https://opentdb.com/api.php?amount=1&category=${e}&type=multiple`);
            let data = await response.json();
            useApi(data);
        }else{
            let response = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
            let data = await response.json();
            useApi(data);
        }
    }else{
        let response = await fetch(`https://opentdb.com/api.php?amount=1&category=${e}&difficulty=${a}&type=multiple`);
        let data = await response.json();
        useApi(data);
    }
}

var ans = [];
var correct_answer;
function useApi(data){
    document.getElementById("question").innerHTML = `Question : ${data.results[0].question}`;
    correct_answer = `${data.results[0].correct_answer}`;
    ans = [ `${data.results[0].correct_answer}`, `${data.results[0].incorrect_answers[0]}`, `${data.results[0].incorrect_answers[1]}`, `${data.results[0].incorrect_answers[2]}`]; 
    ans = shuffle(ans);
    document.getElementById("answer1").innerHTML = ans[0];
    document.getElementById("answer2").innerHTML = ans[1];
    document.getElementById("answer3").innerHTML = ans[2];
    document.getElementById("answer4").innerHTML = ans[3];
}

function category(){
    let e = document.getElementById("category").value;
    if(e == null){
        e = "any";
    }
    return e;
}
function difficulty(){
    let a = document.getElementById("difficulty").value;
    if(a == null){
        a = "any";
    }
    return a;
}
function shuffle(arr){
    for(let i = arr.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = arr[i];
        arr[i] = arr [j];
        arr[j] = temp;
    }
    return arr;
}
function check1(){
    let a = document.getElementById("answer1").innerHTML;
    if(a == correct_answer){
        document.getElementById("answer1").style.backgroundColor = "green";
    }
    else{
        document.getElementById("answer1").style.backgroundColor = "red";
    }
}

function check2(){
    let a = document.getElementById("answer2").innerHTML;
    if(a == correct_answer){
        document.getElementById("answer2").style.backgroundColor = "green";
    }
    else{
        document.getElementById("answer2").style.backgroundColor = "red";
    }
}

function check3(){
    let a = document.getElementById("answer3").innerHTML;
    if(a == correct_answer){
        document.getElementById("answer3").style.backgroundColor = "green";
    }
    else{
        document.getElementById("answer3").style.backgroundColor = "red";
    }
}

function check4(){
    let a = document.getElementById("answer4").innerHTML;
    if(a == correct_answer){
        document.getElementById("answer4").style.backgroundColor = "green";
    }
    else{
        document.getElementById("answer4").style.backgroundColor = "red";
    }
}