// Read More Button

function toggleText(){

    let text = document.getElementById("moreText");
    let btn = document.getElementById("btn");

    if(text.style.display === "block"){

        text.style.display = "none";
        btn.innerHTML = "Read More";

    }else{

        text.style.display = "block";
        btn.innerHTML = "Show Less";

    }

}


// View Details Button

function toggleProject(button){

    let details = button.previousElementSibling;

    if(details.style.display === "block"){

        details.style.display = "none";
        button.innerHTML = "View Details";

    }else{

        details.style.display = "block";
        button.innerHTML = "Hide Details";

    }

}