let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".navbar");

menu.onclick = () => {
    nav.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () => {
    nav.classList.remove("open-menu");
    menu.classList.remove("move");
}


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

//Certifications section

const certifications = document.querySelectorAll('.certification-box');

certifications.forEach((certification) => {
    const btn = certification.querySelector('.certification-btn');
    
    btn.addEventListener('click', function(){
        certifications.forEach((item) => {
            if(item != certification){
                item.classList.remove('show-info');
            }
        });

        certification.classList.toggle('show-info');
    })
})

//Header background change On Scroll

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

//Scroll Top button

let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
});

//Pop Up

const popup = document.querySelector('.popup');
window.onload = () => {
    setTimeout(() => {
        popup.style.display = 'block';
    }, 2000)
}

const close = document.querySelector('.close');
close.addEventListener('click', () => {
    popup.style.display = 'none';
})




