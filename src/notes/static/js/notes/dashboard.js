let select_buttons = document.getElementsByName("tag_select");

let select_all_button = document.getElementById('all');
select_all_button.className = "select selected";

let notes_container = document.getElementById("notes_container");
const all_notes = JSON.parse(document.getElementById('all_notes_json').textContent);

let tag_selected = 0;


function display_notes(notes_container, all_notes, tag_selected){

    notes_container.innerHTML = "";

    all_notes.forEach(note_json => {
        if ((note_json["tags"].includes(parseInt(tag_selected))) || (parseInt(tag_selected) == 0)){
            /*
            <div class="note">
                <div class="note_left">
                    <div class="note_left_title">{{ note.title }}</div>
                    <div class="note_left_code_container">
                        <div class="note_left_code">{{ note.code }}</div>
                        <div class="note_left_copy">O</div>
                    </div>
                    <div class="note_left_description"></div>
                </div>
                <div class="note_right">
                    <div class="note_right_button"> V </div>
                </div>
            </div>
            */

            let note = document.createElement("div");
            note.className = "note";
            note.setAttribute("name","test");

            let note_left = document.createElement("div");
            note_left.className = "note_left";

            let note_left_title = document.createElement("div");
            note_left_title.className = "note_left_title";

            let note_left_code_container = document.createElement("div");
            note_left_code_container.className = "note_left_code_container";

            let note_left_code = document.createElement("div");
            note_left_code.className = "note_left_code";

            let note_left_copy = document.createElement("div");
            note_left_copy.className = "note_left_copy";

            let note_left_description = document.createElement("div");
            note_left_description.className = "note_left_description";


            let note_right = document.createElement("div");
            note_right.className = "note_right";

            let note_right_button = document.createElement("div");
            note_right_button.className = "note_right_button";


            note_left_title.innerText = note_json["title"];
            note_left_code.innerText = note_json["code"];
            note_left_description.innerText = note_json["description"];
            note_left_copy.innerText = "O";
            note_right_button.innerText = "V";


            note_left_code_container.appendChild(note_left_code);
            note_left_code_container.appendChild(note_left_copy);
            note_left.appendChild(note_left_title);
            note_left.appendChild(note_left_code_container);
            note_left.appendChild(note_left_description);
            note.appendChild(note_left);
            note_right.appendChild(note_right_button);
            note.appendChild(note_right);

            note.addEventListener('click', (e) => {

                let note_is_active = false;
                if (note.className == "note note_selected"){
                    note_is_active = true;
                }

                let all_notes_html = document.getElementsByName("test");
                all_notes_html.forEach(note_not_selected => {
                    note_not_selected.className = "note";
                })

                if (note_is_active == false){
                    note.className = "note note_selected";
                }
            })

            notes_container.appendChild(note);

            return notes_container;
        }
    })
}


select_buttons.forEach(button => {

    button.addEventListener('click', (e) => {
        for (let i=0 ; i < select_buttons.length ; i++) {
            select_buttons[i].className = "select";
        }
        button.className = "select selected";
        tag_selected = button.value;
        display_notes(notes_container, all_notes, tag_selected);
    })
})

display_notes(notes_container, all_notes, tag_selected);
