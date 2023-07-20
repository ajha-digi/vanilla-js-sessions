

const INSERT_BTN = document.getElementById("insert");
const SUBJECT = document.getElementById("subject");


INSERT_BTN.addEventListener("click", ()=>{
    const POSITION = document.getElementById("position");
    // SUBJECT.insertAdjacentHTML(
    //     POSITION.value,
    //     "<strong> Inserted Text</strong>"
    // )
    // SUBJECT.insertAdjacentText(
    //     POSITION.value,
    //     "<strong> Inserted Text</strong>"
    // )
    
    SUBJECT.insertAdjacentElement(
        POSITION.value,
        SUBJECT
    )
})