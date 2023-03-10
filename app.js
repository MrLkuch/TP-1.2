// carousel article

class Carrousel {
    constructor(articles, htmlId) {
        this.articles = articles;
        this.htmlId = htmlId;
        this.carrouselArticleContainer = document.getElementById(htmlId)
        this.indexActuel = 0;
        this.CarrouselElement = document.createElement('p');
        this.display();
    }

    display = () => {

        this.carrouselArticleContainer.innerHTML = "";

        const article = this.articles[this.indexActuel] ;     

        const articleContainer = document.createElement('article');
        articleContainer.classList.add('article');

        const articleIcone = document.createElement('i');

        articleIcone.classList.add('fa-4x');
        articleIcone.classList.add('fa');
        articleIcone.classList.add(article.icone);
        articleIcone.classList.add('article__icon');

        const articleContent = document.createElement('div');
        articleContent.classList.add('articles__box__texte');

        const articleTitle = document.createElement('h3');
        articleTitle.classList.add('article__title');
        articleTitle.textContent = article.titre;

        const articleP = document.createElement('p');
        articleP.classList.add('articles__box__texte__p');
        articleP.textContent = article.contenu;

        this.carrouselArticleContainer.appendChild(articleContainer);

        articleContainer.appendChild(articleIcone);
        articleContainer.appendChild(articleContent);
        articleContent.appendChild(articleTitle);
        articleContent.appendChild(articleP);

    }

    suivant = () => {
        if (!this.articles[this.indexActuel + 1]) {
            this.indexActuel = 0;
        } else {
            this.indexActuel += 1;
        }
        this.display();
    }

    precedent = () => {
        if (!this.articles[this.indexActuel - 1]) {
            this.indexActuel = this.articles.length - 1;
        } else {
            this.indexActuel -= 1 ;
        }
        this.display()
    }
}

const articlesArray = [
    {
        icone: "fa-puzzle-piece",
        titre: "Article A",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, diam ut tincidunt ornare, risus mauris ornare risus, in consectetur libero justo sed justo."
    },
    {
        icone: "fa-puzzle-piece",
        titre: "Article B",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, diam ut tincidunt ornare, risus mauris ornare risus, in consectetur libero justo sed justo."
    },
    {
        icone: "fa-puzzle-piece",
        titre: "Article C",
        contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis, diam ut tincidunt ornare, risus mauris ornare risus, in consectetur libero justo sed justo."
    },

]

const carrousel1 = new Carrousel(articlesArray, "carousel_article");

const previousArrow = document.getElementById('previous');
const nextArrow = document.getElementById('next');

previousArrow.addEventListener('click', () => carrousel1.precedent());
nextArrow.addEventListener('click', () => carrousel1.suivant())







// formulaire


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

