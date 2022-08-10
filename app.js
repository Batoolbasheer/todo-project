
var userName = prompt("Please enter your Name and Surname","Batool Basheer");

// ..................................................................
        var gender = prompt("Please enter your gender","female");

        if (gender == 'female')
        {
            alert("Welcome, MS. " + userName);

        }
        else if (gender == 'male')
        {
            alert("Welcome, MR. " + userName);

        } else {
            alert("Welcome, Unknown gender ("+ gender +") " + userName);
        }
// ..................................

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