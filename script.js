//DOM Element Selector
const userForm = document.getElementById("user_form");
const name_input = document.getElementById("name")
const age_input = document.getElementById("age")
const dashboard_content = document.getElementById("dashboard_content")
const greeting_display = document.getElementById("greetings")
const ageInMonths_display = document.getElementById("age_in_months")
const ageStatusBox = document.getElementById("age_status_box")
const ageStatusMessage_input = document.getElementById("age_status_message")
const quote_list = document.getElementById("quote_list")
const clearBtn = document.getElementById("clear_btn")


//Age calculation function
function calculate_age_in_months(ageInYears){
    return ageInYears *12;
}

// Motivational quotes using loop
const quotes = [
    "Small progress is still progress.",
    "Discipline beats motivation.",
    "Your future is created by what you do today.",
    "Every expert was once a beginner.",
    "Success grows from consistency.",
    
    
];    
function displayQuotes(){
    quote_list.innerHTML ="";
      // the loop for quotes
    for(let i = 0; i< 5; i++){
         //new list item
    const li = document.createElement("li");
    //quote text inside li
    li.textContent = quotes [i];
    // li to ul
    quote_list.appendChild(li);
   
    }
}

//UI rendering engine which extracts data from localstorage to display content dynamically
function renderDashboard(){
    const storedName = localStorage.getItem("userName");
    const storedAge = localStorage.getItem("userAge")

    if (storedName && storedAge){
        const ageNum = parseInt(storedAge, 10);

        // personalized greeting 
        greeting_display.textContent = `Hello,${storedName}! Welcome Back to your Dashboard.`
        // Age in Months
        ageInMonths_display.textContent = `${calculate_age_in_months(ageNum)} months`;
        // Adult content section (If ...else)
        if (ageNum >=18){
            ageStatusMessage_input.textContent = "Access Granted: You can access adult content.";
            ageStatusBox.className = "p-4 rounded-xl border font-semibold text-sm bg-green-50 border-green-200 text-green-800";

        }else{
            ageStatusMessage_input.textContent = "Access Restricted: You are too young for adult content.";
            ageStatusBox.className = "p-4 rounded-xl border font-semibold text-sm bg-red-50 border-red-200 text-red-800";
        }

        //Loop function on my quotes
displayQuotes();
        //Reveal dashboard UI Panel
        dashboard_content.classList.remove("hidden");
        dashboard_content.style.display = "block";
    }else{
        //Hide dashboard if content if wiped
        dashboard_content.classList.add("hidden")
        dashboard_content.style.display = "none";
    }
}


//Data storage
userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //Capture values from input fields
const user_name = name_input.value.trim();
const userAge = age_input.value;

//secure into local Storage
localStorage.setItem("userName", user_name);
localStorage.setItem("userAge", userAge)

renderDashboard();

userForm.reset();
});

//clear data event listener
clearBtn.addEventListener("click", function(){
    localStorage.removeItem("userName");
    localStorage.removeItem("userAge");
    renderDashboard();
});

document.addEventListener("DOMContentLoaded", renderDashboard);