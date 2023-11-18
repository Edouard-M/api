let notes_container = document.getElementById("note");

let select_buttons = document.getElementsByName("tag_select");

let select_all_button = document.getElementById('all');
select_all_button.className = "select selected";

select_buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        for (let i=0 ; i < select_buttons.length ; i++) {
            select_buttons[i].className = "select";
        }
        button.className = "select selected";
    })
})

let test = document.createElement("div");
test.className = "note";
notes_container.appendChild(test);

let all_notes_element = document.getElementById("all_notes");

let all_notes = all_notes_element.getAttribute("data-table");
//var all_notes = all_notes_element.getAttribute("data-table");
//let truc = notes_container.value;

console.log(`All = ${all_notes}`);

/*
all_notes.forEach(note => {
    console.log(`Note = ${note}`);
})
*/

