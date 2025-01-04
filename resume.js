function updateDetails() {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const jobTitle = document.getElementById("jobtitle").value;
    const experience = document.getElementById("experinence").value;
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;

    // Update existing elements
    document.querySelector(".rsName").innerText = name || "Name";
    document.querySelector(".rsTitle").innerText = jobTitle || "Job Title";

    // Update or create spans for other fields
    updateOrCreateSpan("rsH3-phone", contact || "Phone");
    updateOrCreateSpan("rsH3-email", email || "Email");
    updateOrCreateSpan("rsH3-location", `${city}, ${country}` || "Location");
    updateOrCreateSpan("rsH3-experience", experience || "Experience");
}

function updateOrCreateSpan(id, value) {
    let span = document.getElementById(id);
    if (!span) {
        span = document.createElement("span");
        span.id = id;
        span.className = "rsH3";
        document.querySelector(`.${id.split("-")[1]}`).appendChild(span);
    }
    span.innerText = value;
}

function updateSkills() {
    // Get the input value
    const skillsInput = document.getElementById("skillsInput").value;

    // Split the input into an array of skills
    const skills = skillsInput.split(",").map(skill => skill.trim()).filter(skill => skill !== "");

    // Get the <ul> element
    const skillsList = document.querySelector(".rsSkills");

    // Clear existing skills
    skillsList.innerHTML = "";

    // Add each skill as an <li> element
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

}
function updateLanguages() {
    // Get the input value
    const languageInput = document.getElementById("languageInput").value;

    // Split the input into an array of languages
    const languages = languageInput.split(",").map(lang => lang.trim()).filter(lang => lang !== "");

    // Get the <ul> element
    const languagesList = document.querySelector(".rsLanguages");


    // Add each language as an <li> element
    languages.forEach(language => {
        const li = document.createElement("li");
        li.textContent = language;
        languagesList.appendChild(li);
    });
}
function updateHobbies() {
    // Get the input value
    const hobbiesInput = document.getElementById("hobbiesInput").value;

    // Split the input into an array of hobbies
    const hobbies = hobbiesInput.split(",").map(hobby => hobby.trim()).filter(hobby => hobby !== "");

    // Get the <ul> element
    const hobbiesList = document.querySelector(".rsHobbies");

    // Add each hobby as an <li> element
    hobbies.forEach(hobby => {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });
}

function updateProfileSummary() {
    // Get the text from the textarea
    const profileSummary = document.getElementById("ProfileSummary").value;

    // Get the <p> element
    const summaryParagraph = document.querySelector(".rsBpara");

    // Update the <p> content
    summaryParagraph.textContent = profileSummary;
}
function addEducationDetails() {
    // Get input values
    const courseName = document.getElementById("courseName").value;
    const specialisation = document.getElementById("specialisation").value;
    const university = document.getElementById("university").value;
    const passingYear = document.getElementById("passingYear").value;
    const percentage = document.getElementById("percentage").value;

    // Validation to ensure fields are filled
    if (!courseName || !specialisation || !university || !passingYear || !percentage) {
        alert("Please fill out all fields!");
        return;
    }

    // Create a new div for education context
    const newEducationDiv = document.createElement("div");
    newEducationDiv.classList.add("rsEducationContext");

    // Add content to the div
    newEducationDiv.innerHTML = `
        <p id="rsH3" class="rsCourseSpecialisation">${courseName} - ${specialisation}</p>
        <p class="rsEdYear">${passingYear}</p>
        <p class="rsEdclg">${university}</p>
        <p class="rsEdGrade">Grade - ${percentage}%</p>
        <button class="remove-btn" onclick="removeEducationDetail(this)">X</button>
    `;

    // Append the new div to the list
    document.getElementById("educationList").appendChild(newEducationDiv);

    // Clear input fields
    document.getElementById("courseName").value = "";
    document.getElementById("specialisation").value = "";
    document.getElementById("university").value = "";
    document.getElementById("passingYear").value = "";
    document.getElementById("percentage").value = "";
}

function removeEducationDetail(button) {
    // Remove the parent div of the button
    button.parentElement.remove();
}
function addProject() {
    // Get input values
    const title = document.getElementById("projectTitle").value;
    const duration = document.getElementById("projectDuration").value;
    const description = document.getElementById("projectDescription").value;

    // Validation to ensure fields are filled
    if (!title || !duration || !description) {
        alert("Please fill out all fields!");
        return;
    }

    // Create a new div for the project context
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("rsProjectContext");

    // Add content to the div
    newProjectDiv.innerHTML = `
        <p id="rsH3" class="">${title}</p>
        <p class="rsPjd">${duration}</p>
        <p class="rsPjtext">${description}</p>
        <button class="remove-btn" onclick="removeProject(this)">X</button>
    `;

    // Append the new div to the list
    document.getElementById("projectList").appendChild(newProjectDiv);

    // Clear input fields
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDuration").value = "";
    document.getElementById("projectDescription").value = "";
}
function updateCertificate() {
    // Get the input values
    const certificateName = document.getElementById("certificateName").value;
    const issuedDate = document.getElementById("issuedDate").value;

    // Validate inputs
    if (!certificateName || !issuedDate) {
        alert("Please fill out both fields!");
        return;
    }

    // Create a new div for the certificate
    const newCertificateDiv = document.createElement("div");
    newCertificateDiv.classList.add("certificate-item");

    // Set the content for the new certificate
    newCertificateDiv.innerHTML = `
        <span class="rsEdYear">${certificateName}</span>
        <span class="rsEdYear">${issuedDate}</span>
        <button class="remove-btn" onclick="removeCertificate(this)">X</button>
    `;

    // Append the new certificate to the rsCertificate container
    document.querySelector(".rsCertificate").appendChild(newCertificateDiv);

    // Clear the input fields
    document.getElementById("certificateName").value = "";
    document.getElementById("issuedDate").value = "";
}

function removeCertificate(button) {
    // Remove the certificate div when the X button is clicked
    button.parentElement.remove();
}
function removeProject(button) {
    // Remove the parent div of the button
    button.parentElement.remove();
}
window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            var xbtn = document.querySelector(".remove-btn");
            if (xbtn){
                xbtn.style.visibility = "hidden";
            }
            const invoice = this.document.getElementById("resumePreview");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: [0, 2, 5, 5], // No margin
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 1.0 }, // Highest quality
                html2canvas: { scale: 3 }, // High scale for better rendering
                jsPDF: { unit: 'mm', format: [210, 297], orientation: 'portrait' } // Custom page size
            };
            
            html2pdf().from(invoice).set(opt).save()
            
        })
}
window.addEventListener('beforeunload', function (e) {
    // Display a confirmation message
    var message = "Are you sure you want to leave? Changes you made may not be saved.";
    
    e.returnValue = message; // Standard for most browsers
    return message; // For some older browsers
});
