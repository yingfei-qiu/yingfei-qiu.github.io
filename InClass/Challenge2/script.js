// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
let result1 = document.getElementById("justin-btn");
result1.addEventListener("mouseover", () => { 
    result.style.backgroundColor = "pink";
    result.style.color = 'blue';
    result.innerText = "Welcome to my heart";
})


// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
let result2 = document.getElementById("justin-btn");
result2.addEventListener("mouseout", () => { 
    result.style.backgroundColor = "black";
    result.style.color = 'red';
    result.innerText = "Don't leave my heart";
})