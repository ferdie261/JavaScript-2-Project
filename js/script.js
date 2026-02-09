//Contacts

function isValid(name) {
    const inquiries = /^[a-zA-Z0-9\s!@#();':",.?]+$/;
    return inquiries.test(name);
};

const submit = document.getElementById('submit');
const invalidMessage = document.getElementById('invalidMessage');
const invalidName = document.getElementById('invalidName');
const invalidemail = document.getElementById('invalidemail');
const textarea = document.getElementById('textarea');
const Name = document.getElementById('Name');
const email = document.getElementById('email');

submit.addEventListener('click', function () {
    const textvalue = textarea.value.trim();
    const Namevalue = Name.value.trim();
    const emailvalue = email.value.trim();

   
    if (!isValid(Namevalue)) {
        invalidName.textContent = 'Please fill up this form. Only letters, numbers, and selected symbols are allowed.';
        event.preventDefault();
    }
    else if(!isValid(emailvalue)) {
        invalidemail.textContent = 'Please fill up this form. Only letters, numbers, and selected symbols are allowed.';
        event.preventDefault();
    }

    else if (!isValid(textvalue)) {
        invalidMessage.textContent = 'Please fill up this form. Only letters, numbers, and selected symbols are allowed.';
        event.preventDefault();
    }
    else {
        invalidMessage.textContent = '';
        invalidName.textContent = '';
        invalidemail.textContent = '';
        alert('Thank you for submitting your inquiries. Please check your email for our response within 24hrs.');
    }
});