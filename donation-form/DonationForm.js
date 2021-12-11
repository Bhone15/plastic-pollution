// Handling PayMent From
const visaBtn = document.querySelector('#visa');
const paypalBtn = document.querySelector('#paypal');
const visaParent = document.querySelector('.visaParent');
const paypalParent = document.querySelector('.paypalParent');
const submitBtn = document.querySelector('#submit');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-button');
const allBtn = document.querySelectorAll('button');

allBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

closeBtn.addEventListener('click', () => {
  closeModal(modal);
});

overlay.addEventListener('click', () => {
  closeModal(modal);
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openModal(modal);
});

const openModal = (modal) => {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

const closeModal = (modal) => {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

const hasClass = (element, className) => {
  return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
};

visaBtn.addEventListener('click', () => {
  visaParent.classList.add('payment-active');
  if (hasClass(paypalParent, 'payment-active')) {
    paypalParent.classList.remove('payment-active');
  }
});

paypalBtn.addEventListener('click', () => {
  paypalParent.classList.add('payment-active');
  if (hasClass(visaParent, 'payment-active')) {
    visaParent.classList.remove('payment-active');
  }
});

//Handling Prev and Next Btn
const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const formSteps = document.querySelectorAll('.form-step');
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let formStepNum = 0;
let currentActive = 1;

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum++;
    updateFormSteps();
    updateProgressForNext();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum--;
    updateFormSteps();
    updateProgressForPrev();
  });
});

const updateFormSteps = () => {
  formSteps.forEach((formStep) => {
    formStep.classList.contains('form-step-active') &&
      formStep.classList.remove('form-step-active');
  });

  formSteps[formStepNum].classList.add('form-step-active');
};

const updateProgressForNext = () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateProgress();
};

const updateProgressForPrev = () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
};

const updateProgress = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('circle-active');
    } else {
      circle.classList.remove('circle-active');
    }
  });

  const actives = document.querySelectorAll('.circle-active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
};
