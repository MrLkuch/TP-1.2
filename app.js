
const contactForm = document.getElementById('leForm');



contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
    }

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');

    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const lastNameRegex = /^[a-zA-Z ]+$/;
        const firstNameRegex = /^[a-zA-Z ]+$/;
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        if (!formData.firstName || !firstNameRegex.test(formData.firstName)) {
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }
        if (!formData.lastName || !lastNameRegex.test(formData.lastName)) {
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
    }


    
    if (!Object.values(errors).includes(true)) {
        console.log(formData);
        contactForm.reset();

        axios.post("http://212.83.176.255:3030/contact", formData,{

        })

        .then(function (response){
            console.log(response.data.message);
        })
    }




})

