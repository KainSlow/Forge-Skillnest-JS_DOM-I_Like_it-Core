

function addLikeButtonEvents(){
    let like_buttons = document.querySelectorAll(".like_button");
    let like_counters = document.querySelectorAll(".like_counter");

    if(like_buttons.length == 0 || like_counters.length == 0 ||
        like_buttons.length != like_counters.length){
        alert("Failed to bind like buttons");
    }

    let max = like_buttons.length;

    for(var i = 0; i < max; i++){

        let button = like_buttons[i];
        let counter = like_counters[i];

        button.addEventListener("click", function(){
            let like_count = Number(counter.innerText.split(/\s/g)[0]);
            counter.innerText = ++like_count + " Like(s)";
        });
    }
}

function main(){
    document.addEventListener("DOMContentLoaded", addLikeButtonEvents);
}

main();