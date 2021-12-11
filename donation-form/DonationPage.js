const openMoneyBtn = document.querySelector('#money');
const closeModalBtn = document.querySelector('.close-button');
const close2 = document.querySelector('#close2');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('.modal');
const supporterModal = document.querySelector('#modal2');
const openSupporter = document.querySelector('#supporters');

overlay.addEventListener('click', () => {
  closeModal(modal);
  closeModal(supporterModal);
});

openSupporter.addEventListener('click', () => {
  openModal(supporterModal);
});

openMoneyBtn.addEventListener('click', () => {
  openModal(modal);
});

closeModalBtn.addEventListener('click', () => {
  closeModal(modal);
});

close2.addEventListener('click', () => {
  closeModal(supporterModal);
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
