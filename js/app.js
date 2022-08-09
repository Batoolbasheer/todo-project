var userName=prompt("Hello ,Enter your name pleas!");

userGender=prompt("ok"+" "+userName +" "+ "What is your gender?")
userGender = "Female" ? alert("Welcome Ms"+" "+userName) : alert("Welcome Mr"+" "+userName);

var userAge = prompt("Enter your Age :");
if (userAge <= 0) {}


var done=confirm("skip the welcoming message");
console.log(done)



q1=prompt("Do you wake up early?")
q2=prompt(" Do you prefer to use the alarm clock?")
q3=prompt(" are you a student ?")
var answer = [q1 ,q2 ,q3]

console.log(answer)

for (var i = 0; i < answer.length; i++){
  console.log(answer[i])
  if (answer[i] == false) {
      console.log("invalid")
  }
  }