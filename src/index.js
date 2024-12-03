// let name = prompt("Hi, what is your name?");

function checkGender(girl, boy){
    let gender = prompt("What is your gender?: Male or Female.");
    if (gender === female){
        alert(`You are a ${girl}! 👧`);
    } else if (gender === male){
        alert(`You are a ${boy}! 👦`);
    } else{
        alert(`Please enter your gender.`);
    }
}
checkGender();