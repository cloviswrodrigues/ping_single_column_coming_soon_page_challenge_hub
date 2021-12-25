const form = document.getElementById('form');
const inputEmail = document.getElementById('js-email');
const msgErrorEmail = document.getElementById('js-msg-error');
const msgSucessEmail = document.getElementById('js-msg-sucess');


form.addEventListener('submit', (e) => {              
    e.preventDefault();   
    let validate = validateInputs();
    if (!validate) {
        setTimeout(() => {
            document.location.reload();
        }, 3000);
    }
})

form.addEventListener('focusin', (e) => {
    activeErrorInputEmail();
});

function validateInputs() {
   if (!isValidEmail(inputEmail.value)){
        activeErrorInputEmail('error');
        return true;
    }else{
        activeErrorInputEmail('sucess');
        return false;
    }
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(option) {
    if (option == 'error'){
        inputEmail.classList.add('error-active');
        msgErrorEmail.classList.add('show');
        inputEmail.classList.remove('sucess-active');
        msgSucessEmail.classList.remove('show');
    }else if (option == 'sucess') {
        inputEmail.classList.remove('error-active');
        msgErrorEmail.classList.remove('show');
        msgSucessEmail.classList.add('show');
        inputEmail.classList.remove('sucess-active');
    }else {
        inputEmail.classList.remove('error-active');
        inputEmail.classList.remove('sucess-active');
        msgErrorEmail.classList.remove('show');
        msgSucessEmail.classList.remove('show');
    }
}