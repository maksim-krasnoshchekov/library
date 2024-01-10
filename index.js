console.log("Этап 1: Пользователь не зарегистрирован\nОграниченная карусель в блоке About +25\nСлайдер в блоке Favorites +25\nЭтап 2: Пользователь на этапе регистрации\nМеню авторизации при нажатии на иконку пользователя +8\nМодальное окно REGISTER +29\nОкончание регистрации +8\nПри наличии регистрации, но будучи не авторизованным +4\nЭтап 3: Пользователь на этапе входа в учётную запись после регистрации.\nМодальное окно LOGIN +27\nБлок Favorites +2\nЭтап 4: Пользователь после входа в учётную запись\nМеню профиля при нажатии на иконку с инициалами пользователя +16\nМодальное окно MY PROFILE +25\nБлок Favorites +6\nМодальное окно BUY A LIBRARY CARD +27\nБлок Digital Library Cards +2\nScore: 204/200")


/*---------------profile__drop-menu---------------*/


const profileDropMenu = document.querySelector('.profile__drop-menu');
const profileIconLink = document.querySelector('.profile__link');


const profileDropMenuToggle = (event) => {
    profileDropMenu.classList.toggle('profile__drop-menu--active');
}

document.addEventListener('click', (event) => {
    const profileIconLinkOutside = event.composedPath().includes(profileIconLink);
    const profileDropMenuOutside = event.composedPath().includes(profileDropMenu);
    if (!profileIconLinkOutside && !profileDropMenuOutside) {
        profileDropMenu.classList.remove('profile__drop-menu--active');
    };
});

profileIconLink.addEventListener('click', profileDropMenuToggle);


/*---------------menu-logIn---------------*/


const modalLogIn = document.querySelector('.header__modal-log-in-wrapper');
const headerModalLogIn = document.querySelector('.header__modal-log-in');
const modalLogInExit = document.querySelector('.modal-log-in__button-exit');
const readerCardDuttonLogin = document.querySelector('.reader-card__button-login');
const profileLogIn = document.querySelector('.profile__log-in');
const modalProfileWrapper = document.querySelector('.header__modal-profile-wrapper');
const modalProfileButtonExit = document.querySelector('.modal-profile__button-exit');


const profileLogInOpen = (event) => {
    if (profileLogIn.textContent == 'My profile') {
        modalProfileWrapper.classList.add('header__modal-log-in-wrapper-active');
        modalProfileWrapper.classList.remove('header__modal-log-in-wrapper-close');
        profileDropMenu.classList.remove('profile__drop-menu--active');
        modalProfileWrapper.style.display = 'block';
    } else {
        resetInput();
        modalLogIn.classList.add('header__modal-log-in-wrapper-active');
        profileDropMenu.classList.remove('profile__drop-menu--active');
        modalLogIn.classList.remove('header__modal-log-in-wrapper-close');
        modalLogIn.style.display = 'block';
    }

}

const modalProfileClose = (event) => {
    modalProfileWrapper.classList.remove('header__modal-log-in-wrapper-active');
    modalProfileWrapper.classList.add('header__modal-log-in-wrapper-close');
}

const profileLogInClose = (event) => {
    modalLogIn.classList.remove('header__modal-log-in-wrapper-active');
    modalLogIn.classList.add('header__modal-log-in-wrapper-close');
    modalLogInEmailInput.style.borderColor = '#BB945F';
    modalLogInPasswordInput.style.borderColor = '#BB945F';
}

const closeOutside = (event) => {
    const headerModalLogInOutside = event.composedPath().includes(headerModalLogIn);
    if (!headerModalLogInOutside) {
        profileLogInClose();
    };
}

modalLogIn.addEventListener('click', closeOutside);
profileLogIn.addEventListener('click', profileLogInOpen);
modalLogInExit.addEventListener('click', profileLogInClose);
modalProfileButtonExit.addEventListener('click', modalProfileClose);
readerCardDuttonLogin.addEventListener('click', profileLogInOpen);


/*---------------modal-profile---------------*/


const modalProfileInitials = document.querySelector('.modal-profile__initials');
const modalProfileName = document.querySelector('.modal-profile__name');
const profileName = document.querySelector('.profile__name');
const modalProfileVisitsCount = document.querySelector('.modal-profile__visits-count');
const modalProfileCardNamberSpan = document.querySelector('.modal-profile__card-namber--span');
const modalProfileButtonCopy = document.querySelector('.modal-profile__button-copy');
const modalProfileBooksCount = document.querySelector('.modal-profile__books-count');
const modalProfileBonusesCount = document.querySelector('.modal-profile__bonuses-count');


const modalProfileInitialsActicve = (event) => {
    modalProfileInitials.textContent = `${user.fName[0]}${user.lName[0]}`;
    modalProfileName.textContent = `${user.fName} ${user.lName}`;
    profileName.textContent = user.cardNumber;
    modalProfileCardNamberSpan.textContent = user.cardNumber;
    profileName.style.fontSize = '12px';
    modalProfileBooksCount.textContent = user.bookRent;
    modalProfileBonusesCount.textContent = (user.bookRent * 25) + user.visitCount;
}

const buttonCopy = (event) => {
    let copyNumber = modalProfileCardNamberSpan.innerText;
    navigator.clipboard.writeText(copyNumber);
};

modalProfileButtonCopy.addEventListener('click', buttonCopy);


/*---------------modal-register---------------*/


const modalRegister = document.querySelector('.header__modal-register-wrapper');
const modalRegisterExit = document.querySelector('.modal-register__button-exit');
const readerCardButtonRegister = document.querySelector('.reader-card__button-register');
const profileRegister = document.querySelector('.profile__register');
const headerModalRegister = document.querySelector('.header__modal-register');


const profileRegisterOpen = (event) => {
    if (profileLogIn.textContent == 'My profile') {
        successfulLogOut();
    } else {
        resetInput()
        modalRegister.classList.add('header__modal-log-in-wrapper-active');
        profileDropMenu.classList.remove('profile__drop-menu--active');
        modalRegister.classList.remove('header__modal-log-in-wrapper-close');
        modalRegister.style.display = 'block';
    }

}
const profileRegisterClose = (event) => {
    modalRegister.classList.remove('header__modal-log-in-wrapper-active');
    modalRegister.classList.add('header__modal-log-in-wrapper-close');
    modalRegisterEmailInput.style.borderColor = '#BB945F';
    modalRegisterLastNameInput.style.borderColor = '#BB945F';
    modalRegisterFirstNameInput.style.borderColor = '#BB945F';
    modalRegisterPasswordInput.style.borderColor = '#BB945F';
}

const closeRegisterOutside = (event) => {
    const headerModalRegisterOutside = event.composedPath().includes(headerModalRegister);
    if (!headerModalRegisterOutside) {
        profileRegisterClose();
    };
}

modalRegister.addEventListener('click', closeRegisterOutside);
profileRegister.addEventListener('click', profileRegisterOpen);
modalRegisterExit.addEventListener('click', profileRegisterClose);
readerCardButtonRegister.addEventListener('click', profileRegisterOpen);


/*---------------modal-libraryCard---------------*/


const modalLibraryCard = document.querySelector('.modal-library__card');
const modalLibraryCardCodeInner = document.querySelector('.modal-library__card-code-inner');
const headerModalLibraryWrapper = document.querySelector('.header__modal-library-wrapper');
const modalLibraryButtonExit = document.querySelector('.modal-library__button-exit');
const modalLibraryCardNumberInput = document.querySelector('.modal-library__card-number-input');
const modalLibraryCardCode1Input = document.querySelector('.modal-library__card-code1-input');
const modalLibraryCardCode2Input = document.querySelector('.modal-library__card-code2-input');
const modalLibraryCardCvcInput = document.querySelector('.modal-library__card-cvc-input');
const modalLibraryCardNameInput = document.querySelector('.modal-library__card-name-input');
const modalLibraryCardPostalInput = document.querySelector('.modal-library__card-postal-input');
const modalLibraryCardCityInput = document.querySelector('.modal-library__card-city-input');
const modalLibraryCardButton = document.querySelector('.modal-library__card-button');
const validInput = document.querySelectorAll('.valid-input');
const findCardHistoryVisitsCount = document.querySelector('.find-card__history-visits-count');
const findCardHhistoryBonusesCount = document.querySelector('.find-card__history-bonuses-count');
const findCardHistoryBooksCount = document.querySelector('.find-card__history-books-count');
const readerCardTitle = document.querySelector('.reader-card__title');
const readerCardText = document.querySelector('.reader-card__text');
const readerCardButtonClose = document.querySelector('.reader-card__button--close');
const findCardTitle = document.querySelector('.find-card__title');



const cardNumberValid = (event) => {
    try {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
        event.target.value = event.target.value.match(/.{1,4}/g).join(' ');
    } catch(e) {
    }
    
}
const onlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
}
const onlyString = (event) => {
    event.target.value = event.target.value.replace(/[0-9]/g, "");
}

const profileLibraryCardOpen = (event) => {
    headerModalLibraryWrapper.classList.add('header__modal-log-in-wrapper-active');
    headerModalLibraryWrapper.classList.remove('header__modal-log-in-wrapper-close');
    headerModalLibraryWrapper.style.display = 'block';
}
const profileLibraryCardClose = (event) => {
    headerModalLibraryWrapper.classList.remove('header__modal-log-in-wrapper-active');
    headerModalLibraryWrapper.classList.add('header__modal-log-in-wrapper-close');
    validInput.forEach(input => {
        input.value = '';
    })
}

const buyLibraryCard = (event) => {
    validCard();
};
const successfulBuyLibraryCard = () => {
    if (modalLibraryCardNumberInput.value.length == 19) {
        modalLibraryCardNumberInput.style.borderColor = '#BB945F';
        user.libraryCard = true;
        overwriteLocalStorage();
        profileLibraryCardClose();
    } else {
        modalLibraryCardNumberInput.style.borderColor = 'red';
    }

}
const validCard = (event) => {
    let checkInput = 0;
    validInput.forEach(input => {
        if (input.value == '') {
            input.style.borderColor = 'red';
            checkInput++;
        } else {
            input.style.borderColor = '#BB945F';
        }
    });
    if (checkInput == 0) {
        successfulBuyLibraryCard();
    }
}

const findCardInputNameNamber = document.querySelector('.find-card__input-text');
const findCardInputNumber = document.querySelector('.find-card__input-number');
const findCardButton = document.querySelector('.find-card__button');
const findCardHistory = document.querySelector('.find-card__history');

const cardNumberCheck = (event) => {
    if (findCardInputNameNamber.value != '') {
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            user = JSON.parse(localStorage.getItem(`${key}`));
            if (findCardInputNameNamber.value == user.fName) {
                if (findCardInputNumber.value == user.cardNumber) {
                    findCardHistoryVisitsCount.innerHTML = user.visitCount;
                    findCardHhistoryBonusesCount.innerHTML = (user.bookRent * 25) + user.visitCount;
                    findCardHistoryBooksCount.innerHTML = user.bookRent;
                    cardOpen();
                    setTimeout(cardclose, 10000);
                } else {
                    user = {};
                };
            } else {
                user = {};
            };
        }
    }
}
findCardButton.addEventListener('click', cardNumberCheck);
const cardOpen = (event) => {
    findCardButton.style.display = 'none';
    findCardHistory.style.display = 'flex';
    findCardInputNameNamber.value = `${user.fName} ${user.lName}`;
    findCardInputNumber.value = user.cardNumber;
    findCardHistoryVisitsCount.innerHTML = user.visitCount;
    findCardHhistoryBonusesCount.innerHTML = (user.bookRent * 25) + user.visitCount;
    findCardHistoryBooksCount.innerHTML = user.bookRent;
}
const cardclose = (event) => {
    findCardButton.style.display = 'block';
    findCardHistory.style.display = 'none';
    findCardInputNameNamber.value = '';
    findCardInputNumber.value = '';
    user = {};
}


modalLibraryCardNumberInput.addEventListener('input', cardNumberValid);
modalLibraryCardCode1Input.addEventListener('input', onlyNumber);
modalLibraryCardCode2Input.addEventListener('input', onlyNumber);
modalLibraryCardCvcInput.addEventListener('input', onlyNumber);
modalLibraryCardPostalInput.addEventListener('input', onlyNumber);
modalLibraryCardNameInput.addEventListener('input', onlyString);
modalLibraryCardCityInput.addEventListener('input', onlyString);
modalLibraryButtonExit.addEventListener('click', profileLibraryCardClose);
modalLibraryCardButton.addEventListener('click', buyLibraryCard);


/*---------------icon-logOut---------------*/


const profileIcon = document.querySelector('.profile__icon');
let profileIconLinkDiv = document.createElement('div');
profileIconLinkDiv.className = "profile__link-div";
profileIconLink.prepend(profileIconLinkDiv);


const successfulLogOut = (event) => {
    profileLogInClose();
    profileLogIn.textContent = 'Log In';
    profileRegister.textContent = 'Register';
    profileIconLinkDiv.style.display = 'none';
    profileIcon.style.display = 'block';
    profileName.textContent = 'Profile';
    profileName.style.fontSize = '15px';
    findCardTitle.textContent = 'Find your Library card';
    modalProfileBooksList.innerHTML = "";
    book.forEach(book => {
        book.removeAttribute("disabled");
    });
    cardclose();
    readerCardDuttonLogin.textContent = 'Log In';
    readerCardButtonClose.style.display = 'block';
    readerCardTitle.textContent = 'Get a reader card';
    readerCardText.textContent = 'You will be able to see a reader card after logging into account or you can register a new account';
    inputWinter.checked = true;
}


/*---------------modalSwitch-logIn-Register---------------*/


const modalLogInRegister = document.querySelector('.modal-log-in__register');
const modalRegisterLogin = document.querySelector('.modal-register__login');

const switcherLogInRegister = (event) => {
    resetInput()
    profileLogInClose();
    profileRegisterOpen();
}
const switcherRegisterLogIn = (event) => {
    resetInput()
    profileRegisterClose();
    profileLogInOpen();
}

modalLogInRegister.addEventListener('click', switcherLogInRegister);
modalRegisterLogin.addEventListener('click', switcherRegisterLogIn);


/*---------------Register---------------*/


const modalRegisterFirstNameInput = document.querySelector('.modal-register__first-name-input');
const modalRegisterLastNameInput = document.querySelector('.modal-register__last-name-input');
const modalRegisterEmailInput = document.querySelector('.modal-register__email-input');
const modalRegisterPasswordInput = document.querySelector('.modal-register__password-input');
const modalRegisterButtonSignUp = document.querySelector('.modal-register__button');

const usersRegister = (event) => {
    let user = {};
    let firstNameInput = modalRegisterFirstNameInput.value;
    firstNameInput = firstNameInput.replaceAll(' ', '');
    if (firstNameInput == '') {
        modalRegisterFirstNameInput.style.borderColor = 'red';
    } else {
        modalRegisterFirstNameInput.style.borderColor = '#BB945F';
        user.fName = modalRegisterFirstNameInput.value;
    };

    let lastNameInput = modalRegisterLastNameInput.value;
    lastNameInput = lastNameInput.replaceAll(' ', '');
    if (lastNameInput == '') {
        modalRegisterLastNameInput.style.borderColor = 'red';
    } else {
        modalRegisterLastNameInput.style.borderColor = '#BB945F';
        user.lName = modalRegisterLastNameInput.value;
    };

    let registerEmailInput = modalRegisterEmailInput.value;
    registerEmailInput = registerEmailInput.replaceAll(' ', '');
    if (registerEmailInput == '') {
        modalRegisterEmailInput.style.borderColor = 'red';
    } else {
        modalRegisterEmailInput.style.borderColor = '#BB945F';
        user.email = modalRegisterEmailInput.value;
    };

    let registerPasswordInput = modalRegisterPasswordInput.value;
    registerPasswordInput = registerPasswordInput.replaceAll(' ', '');
    if (registerPasswordInput == '') {
        modalRegisterPasswordInput.style.borderColor = 'red';
    } else {
        if (modalRegisterPasswordInput.value.length < 8) {
            modalRegisterPasswordInput.style.borderColor = 'red';
        } else {
            modalRegisterPasswordInput.style.borderColor = '#BB945F';
            user.password = modalRegisterPasswordInput.value;
        }
    };
    if (modalRegisterPasswordInput.style.borderColor == 'red' || modalRegisterEmailInput.style.borderColor == 'red' || modalRegisterLastNameInput.style.borderColor == 'red' || modalRegisterFirstNameInput.style.borderColor == 'red') {
    } else {
        const HexadecimalNumberSystem = '0123456789ABCDEF';
        let GenCardNumber = '';
        for (let i = 0; i < 9; i++) {
            GenCardNumber += HexadecimalNumberSystem[getRandom(0, HexadecimalNumberSystem.length - 1)];
        }
        function getRandom(min, max) {
            return Math.floor(Math.random() * max - min + 1) + min;
        }
        
        user.libraryCard = false;
        user.cardNumber = GenCardNumber;
        user.visitCount = 1;
        user.bookRent = 0;
        user.books = [];
        localStorage.setItem(modalRegisterEmailInput.value, JSON.stringify(user));
        profileRegisterClose();
    }
};

const noSpace = (event) => {
    event.target.value = event.target.value.replace(' ', "");
}

modalRegisterButtonSignUp.addEventListener('click', usersRegister);
modalRegisterPasswordInput.addEventListener('input', noSpace);

const resetInput = (event) => {
    modalRegisterFirstNameInput.value = '';
    modalRegisterLastNameInput.value = '';
    modalRegisterEmailInput.value = '';
    modalRegisterPasswordInput.value = '';
    modalLogInEmailInput.value = '';
    modalLogInPasswordInput.value = '';
}


/*---------------emailValid---------------*/


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
    if (isEmailValid(modalRegisterEmailInput.value)) {
        modalRegisterEmailInput.style.borderColor = '#BB945F';
    } else {
        modalRegisterEmailInput.style.borderColor = 'red';
    }
}

modalRegisterEmailInput.addEventListener('input', onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}


/*---------------logIn---------------*/


const modalLogInEmailInput = document.querySelector('.modal-log-in__email-input');
const modalLogInPasswordInput = document.querySelector('.modal-log-in__password-input');
const modalLogInButton = document.querySelector('.modal-log-in__button');

let user;

const usersLogIn = (event) => {
    let LogInNameInput = modalLogInEmailInput.value;
    LogInNameInput = LogInNameInput.replaceAll(' ', '');
    if (LogInNameInput == '') {
        modalLogInEmailInput.style.borderColor = 'red';
    } else {
        modalLogInEmailInput.style.borderColor = '#BB945F';
    };
    let LogInPasswordInput = modalLogInPasswordInput.value;
    LogInPasswordInput = LogInPasswordInput.replaceAll(' ', '');
    if (LogInPasswordInput == '') {
        modalLogInPasswordInput.style.borderColor = 'red';
    } else {
        modalLogInPasswordInput.style.borderColor = '#BB945F';
    };
    if (modalLogInPasswordInput.style.borderColor == 'red' || modalLogInEmailInput.style.borderColor == 'red') {
    } else {
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            user = JSON.parse(localStorage.getItem(`${key}`));
            if (LogInNameInput == key) {
                modalLogInEmailInput.style.borderColor = '#BB945F';
                if (LogInPasswordInput == user.password) {
                    successfulLogin();
                    bookSerchInLocalSorage();
                    i = localStorage.length;
                } else {
                    modalLogInPasswordInput.style.borderColor = 'red';
                }
            } else {
                modalLogInEmailInput.style.borderColor = 'red';
            };
            if (LogInNameInput == user.cardNumber) {
                modalLogInEmailInput.style.borderColor = '#BB945F';
                if (user.password == LogInPasswordInput) {
                    successfulLogin();
                    bookSerchInLocalSorage();
                    modalLogInPasswordInput.style.borderColor = '#BB945F';
                    i = localStorage.length;
                } else {
                    modalLogInPasswordInput.style.borderColor = 'red';
                }
            };
        }
    }
};

modalLogInButton.addEventListener('click', usersLogIn);
const successfulLogin = (event) => {
    /*---change icon profile---*/
    profileIconLinkDiv.innerHTML = `${user.fName[0]}${user.lName[0]}`;
    profileIconLinkDiv.setAttribute('title', `${user.fName} ${user.lName}`)
    profileIconLinkDiv.style.display = 'flex';
    profileIcon.style.display = 'none';
    /*---stop scan localStorage---*/
    i = localStorage.length;
    /*---close logIn---*/
    profileLogInClose();
    profileLogIn.textContent = 'My profile';
    readerCardDuttonLogin.textContent = 'Profile';
    readerCardButtonClose.style.display = 'none';
    readerCardTitle.textContent = 'Visit your profile';
    findCardTitle.textContent = 'Your Library card';
    readerCardText.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
    profileRegister.textContent = 'Log Out';
    /*---change modalProfile---*/
    modalProfileInitialsActicve();
    /*---add visitCount---*/
    user.visitCount++;
    modalProfileVisitsCount.textContent = `${user.visitCount}`;
    /*---overwrite localStorage---*/
    overwriteLocalStorage();
    cardOpen();
}

const overwriteLocalStorage = (event) => {
    let localStorageDelete = user.email;
    delete localStorage.localStorageDelete;
    localStorage.setItem(user.email, JSON.stringify(user));
}


const bookEaters = document.querySelector('.book-eaters');
const bookCackle = document.querySelector('.book-cackle');
const bookDante = document.querySelector('.book-dante');
const bookQueen = document.querySelector('.book-queen');

const bookBody = document.querySelector('.book-body');
const bookCarry = document.querySelector('.book-carry');
const bookDistraction = document.querySelector('.book-distraction');
const bookDominicana = document.querySelector('.book-dominicana');

const bookCrude = document.querySelector('.button-crude');
const bookSurfing = document.querySelector('.book-surfing');
const bookMuseum = document.querySelector('.book-museum');
const bookShark = document.querySelector('.book-shark');

const bookRenia = document.querySelector('.book-renia');
const bookLou = document.querySelector('.book-lou');
const bookRickey = document.querySelector('.book-rickey');
const bookSlug = document.querySelector('.book-slug');

const modalProfileBooksList = document.querySelector('.modal-profile__books-list');


const buyBook = (event) => {
    if (profileLogIn.textContent == 'Log In') {
        profileLogInOpen();
    } else if (user.libraryCard == false) {
        profileLibraryCardOpen();
    } else {
        user.bookRent++;
        let thisBook = event.target;
        thisBook.setAttribute('disabled', 'disabled');
        modalProfileBooksCount.textContent = user.bookRent;
        addNameBookInRent(thisBook);
        user.books.push(thisBook.value);
        overwriteLocalStorage();
    }
} 

const book = document.querySelectorAll('.book__button');

const addNameBookInRent = (event) => {
    let modalProfileListItem = document.createElement('li');
    modalProfileListItem.className = 'modal-profile__list-item';
    modalProfileListItem.innerHTML = event.value;
    modalProfileBooksList.append(modalProfileListItem);
}

const bookSerchInLocalSorage = (event) => {
    let searchBook = user.books;
    if (searchBook == '') {
    } else {
        for (let i = 0; i < user.books.length; i++) {
            for (let j = 0; j < book.length; j++) {
                if (user.books[i] == book[j].value) {
                    book[j].setAttribute('disabled', 'disabled');
                    addNameBookInRent(book[j]);
                }

            }
        }
    }
}


bookEaters.addEventListener('click', buyBook);
bookCackle.addEventListener('click', buyBook);
bookDante.addEventListener('click', buyBook);
bookQueen.addEventListener('click', buyBook);

bookBody.addEventListener('click', buyBook);
bookCarry.addEventListener('click', buyBook);
bookDistraction.addEventListener('click', buyBook);
bookDominicana.addEventListener('click', buyBook);

bookCrude.addEventListener('click', buyBook);
bookSurfing.addEventListener('click', buyBook);
bookMuseum.addEventListener('click', buyBook);
bookShark.addEventListener('click', buyBook);

bookRenia.addEventListener('click', buyBook);
bookLou.addEventListener('click', buyBook);
bookRickey.addEventListener('click', buyBook);
bookSlug.addEventListener('click', buyBook);


/*---------------menu-burger---------------*/


const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const burger = document.querySelector('.header__burger');
const burgerExit = document.querySelector('.header__burger-exit');
const aboutLink = document.querySelector('.about');
const favoritesLink = document.querySelector('.favorites');
const coffeeShopLink = document.querySelector('.coffee-shop');
const contactsLink = document.querySelector('.contacts');
const libraryLink = document.querySelector('.library');

const toggleBurger = (event) => {
    burger.classList.toggle('burger-active');
    burgerExit.classList.toggle('burger-active');

    navList.classList.toggle('burger-open');
    navList.classList.remove('burger-close');
}
const toggleBurgerExit = (event) => {
    burger.classList.toggle('burger-active');
    burgerExit.classList.toggle('burger-active');

    navList.classList.remove('burger-open');
    navList.classList.toggle('burger-close');
    
    if (navList.classList.contains('burger-close')) {
        setTimeout (function(){
            navList.classList.remove('burger-close');
        }, 1000);
    }
}

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(nav);
    const burgerExit1 = event.composedPath().includes(burgerExit);
    const burger1 = event.composedPath().includes(burger);
    if (!click && !burgerExit1 && !burger1) {

        if (navList.classList.contains('burger-open')) {
            burger.classList.add('burger-active');
            burgerExit.classList.remove('burger-active');
            navList.classList.remove('burger-open');
            navList.classList.add('burger-close');

        if (navList.classList.contains('burger-close')) {
            setTimeout (function(){
                navList.classList.remove('burger-close');
            }, 1000);
        }
        }
    }
});

burger.addEventListener('click', toggleBurger);
burgerExit.addEventListener('click', toggleBurgerExit);
aboutLink.addEventListener('click', toggleBurgerExit);
favoritesLink.addEventListener('click', toggleBurgerExit);
coffeeShopLink.addEventListener('click', toggleBurgerExit);
contactsLink.addEventListener('click', toggleBurgerExit);
aboutLink.addEventListener('click', toggleBurgerExit);


/*---------------about-slider---------------*/


const sliderInner = document.querySelector('.slider__image-wrapper');
const sliderPagination1 = document.querySelector('.slider__pagination-1');
const sliderPagination2 = document.querySelector('.slider__pagination-2');
const sliderPagination3 = document.querySelector('.slider__pagination-3');
const sliderPagination4 = document.querySelector('.slider__pagination-4');
const sliderPagination5 = document.querySelector('.slider__pagination-5');
const sliderPagination1Bg = document.querySelector('.slider__pagination-bg1');
const sliderPagination2Bg = document.querySelector('.slider__pagination-bg2');
const sliderPagination3Bg = document.querySelector('.slider__pagination-bg3');
const sliderPagination4Bg = document.querySelector('.slider__pagination-bg4');
const sliderPagination5Bg = document.querySelector('.slider__pagination-bg5');

let count = 1;

const togglePaginationButton1 = (event) => {
    count = 1;
    if (count == 1) {
        sliderArrowLeft.classList.add('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
    sliderInner.style.transform = "translateX(0px)"
    sliderPagination1Bg.classList.add('slider__pagination-bg--active');
    sliderPagination1.classList.add('slider__pagination--disable');
    if (sliderPagination2Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination3Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination4Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination5Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination5Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination5.classList.remove('slider__pagination--disable')
    };
}
const togglePaginationButton2 = (event) => {
    count = 2;
    if (count > 1 && count < 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
    sliderInner.style.transform = "translateX(-475px)"
    sliderPagination2Bg.classList.add('slider__pagination-bg--active');
    sliderPagination2.classList.add('slider__pagination--disable');
    if (sliderPagination1Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination1Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination1.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination3Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination4Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination5Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination5Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination5.classList.remove('slider__pagination--disable')
    };
}

const togglePaginationButton3 = (event) => {
    count = 3;
    if (count > 1 && count < 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
    sliderInner.style.transform = "translateX(-950px)"
    sliderPagination3Bg.classList.add('slider__pagination-bg--active');
    sliderPagination3.classList.add('slider__pagination--disable');
    if (sliderPagination1Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination1Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination1.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination2Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination4Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination5Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination5Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination5.classList.remove('slider__pagination--disable')
    };
}

const togglePaginationButton4 = (event) => {
    count = 4;
    if (count > 1 && count < 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
    sliderInner.style.transform = "translateX(-1425px)"
    sliderPagination4Bg.classList.add('slider__pagination-bg--active');
    sliderPagination4.classList.add('slider__pagination--disable');
    if (sliderPagination1Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination1Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination1.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination2Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination3Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination5Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination5Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination5.classList.remove('slider__pagination--disable')
    };
}

const togglePaginationButton5 = (event) => {
    count = 5;
    if (count == 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.add('slider__arrow-disable');
    } 
    sliderInner.style.transform = "translateX(-1900px)"
    sliderPagination5Bg.classList.add('slider__pagination-bg--active');
    sliderPagination5.classList.add('slider__pagination--disable');
    if (sliderPagination1Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination1Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination1.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination2Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination3Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable')
    };
    if (sliderPagination4Bg.classList.contains('slider__pagination-bg--active')) {
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable')
    };
}

sliderPagination1.addEventListener('click', togglePaginationButton1);
sliderPagination2.addEventListener('click', togglePaginationButton2);
sliderPagination3.addEventListener('click', togglePaginationButton3);
sliderPagination4.addEventListener('click', togglePaginationButton4);
sliderPagination5.addEventListener('click', togglePaginationButton5);

/*---------------about-sliderArrows---------------*/

const sliderArrowLeft = document.querySelector('.arrow-left');
const sliderArrowRight = document.querySelector('.arrow-right');

if (count == 1) {
    sliderArrowLeft.classList.add('slider__arrow-disable');
} 

const switchingArrowLeft = (event) => {
    if (count == 2) {
        sliderInner.style.transform = "translateX(-0px)";
        count--;
        sliderPagination1Bg.classList.add('slider__pagination-bg--active');
        sliderPagination1.classList.add('slider__pagination--disable');
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable');
    } else if (count == 3) {
        sliderInner.style.transform = "translateX(-475px)";
        count--;
        sliderPagination2Bg.classList.add('slider__pagination-bg--active');
        sliderPagination2.classList.add('slider__pagination--disable');
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable');
    } else if (count == 4) {
        sliderInner.style.transform = "translateX(-950px)";
        count--;
        sliderPagination3Bg.classList.add('slider__pagination-bg--active');
        sliderPagination3.classList.add('slider__pagination--disable');
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable');
    } else if (count == 5) {
        sliderInner.style.transform = "translateX(-1425px)";
        count--;
        sliderPagination4Bg.classList.add('slider__pagination-bg--active');
        sliderPagination4.classList.add('slider__pagination--disable');
        sliderPagination5Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination5.classList.remove('slider__pagination--disable');
    }
    
    if (count == 1) {
        sliderArrowLeft.classList.add('slider__arrow-disable');
    } else  if (count > 1 && count < 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
}
const switchingArrowRight = (event) => {
    if (count == 1) {
        sliderInner.style.transform = "translateX(-475px)";
        count++;
        sliderPagination1Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination1.classList.remove('slider__pagination--disable');
        sliderPagination2Bg.classList.add('slider__pagination-bg--active');
        sliderPagination2.classList.add('slider__pagination--disable');
    } else if (count == 2) {
        sliderInner.style.transform = "translateX(-950px)";
        count++;
        sliderPagination2Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination2.classList.remove('slider__pagination--disable');
        sliderPagination3Bg.classList.add('slider__pagination-bg--active');
        sliderPagination3.classList.add('slider__pagination--disable');
    } else if (count == 3) {
        sliderInner.style.transform = "translateX(-1425px)";
        count++;
        sliderPagination3Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination3.classList.remove('slider__pagination--disable');
        sliderPagination4Bg.classList.add('slider__pagination-bg--active');
        sliderPagination4.classList.add('slider__pagination--disable');
    } else if (count == 4) {
        sliderInner.style.transform = "translateX(-1900px)";
        count++;
        sliderPagination4Bg.classList.remove('slider__pagination-bg--active');
        sliderPagination4.classList.remove('slider__pagination--disable');
        sliderPagination5Bg.classList.add('slider__pagination-bg--active');
        sliderPagination5.classList.add('slider__pagination--disable');
    }

    if (count == 5) {
        sliderArrowRight.classList.add('slider__arrow-disable');
    } else if (count > 1 && count < 5) {
        sliderArrowLeft.classList.remove('slider__arrow-disable');
        sliderArrowRight.classList.remove('slider__arrow-disable');
    } 
}

sliderArrowLeft.addEventListener('click', switchingArrowLeft);
sliderArrowRight.addEventListener('click', switchingArrowRight);


/*---------------favorites-slider---------------*/


const seasonButtonWinter = document.querySelector('.seasons__label-winter');
const seasonButtonSpring = document.querySelector('.seasons__label-spring');
const seasonButtonSummer = document.querySelector('.seasons__label-summer');
const seasonButtonAutumn = document.querySelector('.seasons__label-autumn');
const seasonWinter = document.querySelectorAll('.book-winter');
const seasonSpring = document.querySelectorAll('.book-spring');
const seasonSummer = document.querySelectorAll('.book-summer');
const seasonAutumn = document.querySelectorAll('.book-autumn');


const favoriteWinter = (event) => {
    seasonWinter.forEach(book => {
        book.classList.add('animation-book--visible');
        book.classList.remove('animation-book--hidden');
    });
    seasonSpring.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonSummer.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonAutumn.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
}

const favoriteSpring = (event) => {
    seasonSpring.forEach(book => {
        book.classList.add('animation-book--visible');
        book.classList.remove('animation-book--hidden');
    });
    seasonWinter.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonSummer.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonAutumn.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
}

const favoriteSummer = (event) => {
    seasonSummer.forEach(book => {
        book.classList.add('animation-book--visible');
        book.classList.remove('animation-book--hidden');
    });
    seasonWinter.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonSpring.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonAutumn.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
}

const favoriteAutumn = (event) => {
    seasonAutumn.forEach(book => {
        book.classList.add('animation-book--visible');
        book.classList.remove('animation-book--hidden');
    });
    seasonWinter.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonSpring.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
    seasonSummer.forEach(book => {
        book.classList.remove('animation-book--visible');
        book.classList.add('animation-book--hidden');
    });
}

seasonButtonWinter.addEventListener('click', favoriteWinter);
seasonButtonSpring.addEventListener('click', favoriteSpring);
seasonButtonSummer.addEventListener('click', favoriteSummer);
seasonButtonAutumn.addEventListener('click', favoriteAutumn);

const inputWinter = document.querySelector('.input-winter');
const inputSpring = document.querySelector('.input-spring');
const inputSummer = document.querySelector('.input-summer');
const inputAutumn = document.querySelector('.input-autumn');


const keydownEnterWinter = (event) => {
    if (event.keyCode === 13) {
        favoriteWinter();
        inputWinter.checked = true;
    }
}
const keydownEnterSpring = (event) => {
    if (event.keyCode === 13) {
        favoriteSpring();
        inputSpring.checked = true;
    }
}
const keydownEnterSummer = (event) => {
    if (event.keyCode === 13) {
        favoriteSummer();
        inputSummer.checked = true;
    }
}
const keydownEnterAutumn = (event) => {
    if (event.keyCode === 13) {
        favoriteAutumn();
        inputAutumn.checked = true;
    }
}

seasonButtonWinter.addEventListener('keydown', keydownEnterWinter);
seasonButtonSpring.addEventListener('keydown', keydownEnterSpring);
seasonButtonSummer.addEventListener('keydown', keydownEnterSummer);
seasonButtonAutumn.addEventListener('keydown', keydownEnterAutumn);