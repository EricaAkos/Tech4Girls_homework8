// let name = prompt("Hi, what is your name?");

function checkGender(){
    let gender = prompt("What is your gender?: Male or Female.");
    if (gender === "female"){
        alert(`You are a ${gender}!👧`);
    } else if (gender === "male"){
        alert(`You are a ${gender}!👦`);
    } else{
        alert(`Please enter your gender.`);
    }
}
checkGender();