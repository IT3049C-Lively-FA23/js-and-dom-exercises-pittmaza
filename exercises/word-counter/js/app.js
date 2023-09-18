// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.getElementById("text");
const stats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

textarea.addEventListener("keyup", update_stats);

function update_stats() {
  const text = textarea.value;
  const words = text.split(" ");
  let word_count = 0;

  for (const word of words) {
    if (word.trim() !== "") {
      word_count++;
    }
  }
  const characters = text.length;

  stats.textContent = `You've written ${word_count} words and ${characters} characters.`;
}

//I'm sure there's a more simple method for updating this
//I just ended up using .trim()
