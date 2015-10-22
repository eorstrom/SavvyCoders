// var user_input = document.querySelector('input#search').value,
//   output_el = document.querySelector('#output')
//
// if (user_input !== "happieness") {
//   if (!user_input) {user_input = document.querySelector('input').value = "hey youm type here :z"}
// } else {
//   output_el.textContent = "You're searching for the wrong thing"
//   } else {
//   output_el.textContent = "ahh, the enlightened one!"
// }



var user_input = document.querySelector('input#search').value,
    output_el = document.querySelector('#output')

if (user_input !== "happiness") {
  if (!user_input) { // this tells us something important about empty strings
    // What would happen if we tried to use?     user_input =
    document.querySelector('input').value = "hey you, type here :z"
  } else {
    output_el.textContent = "You're searching for the wrong thing"
  }
} else {
  output_el.textContent = "ahh, the enlightened one!"
}
