const formElements = document.querySelectorAll('input, textarea');
const submit = document.querySelector("button");
const errorMessages = document.querySelectorAll('.error-message');
const successModal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close');

function validateInput(element) {
  const errorMessage = element.nextElementSibling;
  if (element.value.trim() !== '') {
    element.classList.add('input-success');
    element.classList.remove('input-error', 'input-default');
    errorMessage.textContent = '';
  } else {
    element.classList.add('input-error');
    element.classList.remove('input-success', 'input-default');
    errorMessage.textContent = 'required *';
  }
}

function validation() {
  let isValid = true;
  formElements.forEach((element) => {
    validateInput(element);
    if (element.classList.contains('input-error')) {
      isValid = false;
    }
  });
  return isValid;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validation()) {
    successModal.style.display = 'block';
    const closeModalButtons = document.querySelectorAll('.close, .btn-secondary');
    closeModalButtons.forEach((button) => {
      button.addEventListener('click', () => {
        successModal.style.display = 'none'; 
        window.location.reload();
      });
    });
  }
});