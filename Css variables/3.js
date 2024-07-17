const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
    // console.log(this.dataset); // dataset will show the attributes which we have added in input field using data-variableName
    const suffix = this.dataset.sizing || '';  //select sizing from datasets or nothing  
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate);
});

inputs.forEach(input => {
    input.addEventListener('mousemove', handleUpdate);
});
