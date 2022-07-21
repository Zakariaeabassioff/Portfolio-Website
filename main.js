let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
};


//Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_cllg3kn","template_l93293s",{
        to_name: name,
        from_name: email,
        message: msg,
});
}

function emptyerror(){
    swal({
        title: "Error!",
        text: "Fields cannot be empty!",
        icon: "error"
    });
}

function success(){
    swal({
        title: "Email sent successfully!",
        text: "Thanks for your Message! I'll reply asap!",
        icon: "success"
    });
}

//Header background change On Scroll

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});