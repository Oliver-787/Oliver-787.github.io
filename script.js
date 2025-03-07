    const greenButton = document.getElementById("colorBtnGreen");
    const blueButton = document.getElementById("colorBtnBlue");
    const regularButton = document.getElementById("colorBtnRegular");

    const date = new Date();

    const form = document.getElementById("formItself");
    const firstName = document.getElementById("fName");
    const lastName = document.getElementById("lName");
    const email = document.getElementById("email");
    const phoneNum = document.getElementById("phoneNum");
    const importantQuestion = document.getElementById("importantQuestion");
    const reason = document.getElementById("reason");
    const firstNameError = document.getElementById("fNameError");
    const lastNameError = document.getElementById("lNameError");
    const emailError = document.getElementById("emailError");
    const phoneNumError = document.getElementById("")
    const questionError = document.getElementById("questionError");
    const reasonError = document.getElementById("reasonError");
    const success = document.getElementById("success");

    let root = document.querySelector(':root');


    // Submission Form
    if (form != undefined) {

        form.addEventListener("submit", (event) => {

            event.preventDefault();
    
            firstNameError.textContent = "";
            lastNameError.textContent = "";
            emailError.textContent = "";
            questionError.textContent = "";
            reasonError.textContent = "";
            success.textContent = "";
    
            let valid = true;
        
            if (firstName.value.trim() === "") {
            firstNameError.textContent = "***Invalid First Name***";
            valid = false;
            }
            if (lastName.value.trim() === "") {
            lastNameError.textContent = "***Invalid Last Name***";
            valid = false;
            }
        
            if (email.value.trim() === "") {
            emailError.textContent = "***Invalid Email***";
            valid = false;
            } 
            
            if (!importantQuestion.checked) {
            questionError.textContent = "***Invalid Answer***";
            valid = false;
            }
    
            if (reason.value.trim() === "") {
            reasonError.textContent = "***Invalid Reason***";
            valid = false;
            }
        
            if (!valid) {
            return;
            }
            else {
            success.textContent = "Successful Submission!";
            }
            
        });

    }

    // Greeting Function
    let hour = date.getHours();

    if (hour < 6) {
        document.getElementById("greetings").innerHTML = "✧ Good Night! ✧";
    }

    else if (hour < 12) {
        document.getElementById('greetings').innerHTML = "✧ Good Morning! ✧";
    }

    else if (hour < 18) {
        document.getElementById('greetings').innerHTML = "✧ Good Afternoon! ✧";
    }

    else {
        document.getElementById("greetings").innerHTML = "✧ Good Evening! ✧";
    }

    // color button functions
    function setColors() {
        let background = localStorage.getItem("background");
        let text = localStorage.getItem("text");
        let highlight = localStorage.getItem("highlight");
        
        root.style.setProperty('--background', background);
        root.style.setProperty('--text', text);
        root.style.setProperty('--highlight', highlight);
    }

    function colorGreen() {
        localStorage.setItem("background", '#d3fbe0');
        localStorage.setItem("text", '#623a93');
        localStorage.setItem("highlight", '#90C290');

        setColors();
    }

    function colorBlue() {
        localStorage.setItem("background", '#153243');
        localStorage.setItem("text", '#F4F9E9');
        localStorage.setItem("highlight", '#18557d');

        setColors();
    }

    function colorReg() {
        localStorage.setItem("background", '#faf2fb');
        localStorage.setItem("text", '#69200cda');
        localStorage.setItem("highlight", '#E9C3E6');

        setColors();
    }
    
    
    // When the audio ends
    function audioEnds() {
        alert("I hope you enjoyed!\nI spent a lot of time learning that song\n\n◕ ‿ ◕");
    }

    //Video End Event Listener
    function videoEnds() {
        document.getElementById("videoReaction").textContent = "Wasn't that cute?!?";
    }
    