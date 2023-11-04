/* ---------------------------------------------*/
// SHOW MENU

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/* ---------------------------------------------*/
// CLOSE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/* ---------------------------------------------*/
// CHANGE BACKGROUND HEADER

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('bg-header')
                                  :  header.classList.remove('bg-header')  
}
window.addEventListener('scroll', scrollHeader)


/* ---------------------------------------------*/
// CALCULATE BMI

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()

    // Check if the fields have a value
    if(calculateCm.value === '' && calculateKg.value === '') {
        
        // Add and Remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.remove('color-yellow')
        calculateMessage.classList.add('color-red')
        calculateCm.classList.add('border-red')
        calculateKg.classList.add('border-red')

        // Show Message
        calculateMessage.textContent = 'Inserisci i dati: Altezza e Peso.'

        // Remove Message after 3 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
            calculateCm.classList.remove('border-red')
            calculateKg.classList.remove('border-red')
        }, 3000)

    } else if(calculateCm.value === '') {
        
        // Add and Remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.remove('color-yellow')
        calculateMessage.classList.add('color-red')
        calculateCm.classList.add('border-red')

        // Show Message
        calculateMessage.textContent = 'Inserisci il dato: Altezza.'

        // Remove Message after 3 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
            calculateCm.classList.remove('border-red')
        }, 3000)

    } else if(calculateKg.value === '') {

        // Add and Remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.remove('color-yellow')
        calculateMessage.classList.add('color-red')
        calculateKg.classList.add('border-red')

        // Show Message
        calculateMessage.textContent = 'Inserisci il dato: Peso.'

        // Remove Message after 3 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
            calculateKg.classList.remove('border-red')
        }, 3000)

    } else {
        
        // BMI formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

        // Show health status
        if (bmi < 18.5) {
            calculateMessage.classList.remove('color-red')
            calculateMessage.classList.remove('color-green')
            calculateMessage.classList.add('color-yellow')
            calculateMessage.textContent = `Il tuo IMC è ${bmi} e sei sottopeso.` 
        } 
        
        else if (bmi < 25) {
            calculateMessage.classList.remove('color-red')
            calculateMessage.classList.remove('color-yellow')
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Il tuo IMC è ${bmi} e sei in salute.` 
        }

        else {
            calculateMessage.classList.remove('color-red')
            calculateMessage.classList.remove('color-green')
            calculateMessage.classList.add('color-yellow')
            calculateMessage.textContent = `Il tuo IMC è ${bmi} e sei sovrappeso.` 
        }

        // To clear input field
        calculateCm.value = ''
        calculateKg.value = ''

        // Remove message after 4 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)


/* ---------------------------------------------*/
// EMAIL JS

const conctactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactUser.value === '') {

        // Add and Remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')
        contactUser.classList.add('border-red')

        // Show message
        contactMessage.textContent = 'Inserisci la tua email.'

        // Remove message after 3 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
            contactUser.classList.remove('border-red')
        }, 3000)
    }

    else {

        // Show Message and add color
        contactMessage.classList.remove('color-red')
        contactMessage.classList.add('color-green')
        contactMessage.textContent = 'Registrazione effettuata con successo !'

        // Remove message after 4 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 4000)

        // To clear input field
        contactUser.value = ''
    }
}

conctactForm.addEventListener('submit', sendEmail)


/* ---------------------------------------------*/
// SCROLL SECTION ACTIVE LINK


/* ---------------------------------------------*/
// SCROLL UP

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    
    //When scroll > 350vh Add class show-scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/* ---------------------------------------------*/
// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {distance: '20px', interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})






