var name, age, gender, is_member, thirsty, drink_of_choice;

/*Write out a pseudocode solution in comments
If someone is under 21 OR not a member, deny access
Otherwise, greet by name + Mr. or Mrs.
If they ask for Coors Light, kick them out
If they ask for any other drink, tell them "yes" (name) "one" (drink_name) "coming right up!"*/

var age = prompt("Please enter your age:");
var is_member = true;

if(age >= 21) {
  var name = prompt("What is your name?");
      document.querySelector("#greeting").textContent = ("Welcome " + name)
} else {
  window.alert("Sorry! No access :-(");
}
