function send() {
    let x = document.getElementById("name");
    let y = document.getElementById("email");
    let z = document.getElementById("mess");
    let w = document.getElementById("button");

    if((x.value != "") || (y.value != "") || (z.value != "")) {
        console.log("Your name: " + x.value, "\nEmail: " + y.value, "\nSubject: " + z.value);
        w.innerHTML = "Thank you!"
        x.value = ""
        y.value = ""
        z.value = ""
        setTimeout(() => w.innerHTML = "SEND", 3000);
    }
}