//Functionality for the JS-exercise
let notes = document.querySelector(".notes");

let form = document.querySelector(".form");

form.addEventListener("submit", addNote);

/**
 * 
 * @param {SubmitEvent} event 
 */
function addNote(event) {
    event.preventDefault();

    //Adds a note displaying the date, given name and a message.
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let formData = new FormData(event.currentTarget);
    let name = formData.get("nameInput");
    let note = formData.get("noteInput");
    let important = formData.get("important");

    function createNote() {
        let span = document.createElement("span");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h3.textContent = day + "." + (month+1) + "." + year + " (" + name + ") " + hours + ":" + minutes;

        p.textContent = note;

        //Adds a red highlight when checkbox is selected
        if (important) {
            span.classList.add("highlight");
        }

        //Hides any notes past the 5th and marks them with overflow-class
        if (document.querySelectorAll(".notes>span").length >= 5) {
            span.classList.add("hide");
            span.classList.add("overflow");
        }

        span.appendChild(h3);
        span.appendChild(p);
        notes.appendChild(span);
    }

    createNote();
}






//Other functionality
let main = document.querySelectorAll(".main");

//Header icons

let infoIcon = document.querySelector(".info");
let infoPage = document.getElementById("info");
infoIcon.addEventListener("click", () => infoPage.classList.toggle("hide"));

let archiveIcon = document.querySelector(".archive");
archiveIcon.addEventListener("click", () => {
    infoPage.classList.add("hide");
    main.forEach(n => n.classList.add("hide"));

    document.querySelectorAll(".notes>span").forEach(n => n.classList.remove("hide"));
});

let addIcon = document.querySelector(".add");
addIcon.addEventListener("click", () => {
    infoPage.classList.add("hide");
    main.forEach(n => n.classList.remove("hide"));

    document.querySelectorAll(".notes>span").forEach(n => {
        //Hides all notes past the 5th
        if (n.classList.contains("overflow")) {
            n.classList.add("hide");
        }
    })
})