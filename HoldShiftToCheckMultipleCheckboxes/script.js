const checkBoxes = document.querySelectorAll(".inbox input[type = 'checkbox']");

// console.log(checkBoxes);

// function handle(e){
//     console.log(e);
// }


let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it

  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox

    checkBoxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}



checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheck);
})