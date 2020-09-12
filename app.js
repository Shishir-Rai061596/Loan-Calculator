const AMOUNT = document.querySelector('#amount');
const INTEREST = document.querySelector('#interest');
const YEARS = document.querySelector('#years');
const FORM = document.querySelector('#loan-form');
const MONTHLYPAYMENT = document.querySelector('#monthly-payment');
const TOTALPAYMENT = document.querySelector('#total-payment');
const TOTALINTEREST = document.querySelector('#total-interest');
const CARD = document.querySelector('.card');
const HEADING = document.querySelector('.heading');
const LOADING = document.querySelector('#loading');
const RESULTS = document.querySelector('#results');


LOADING.style.display = "none";
RESULTS.style.display = "none";

loadEvenetListerners();

function loadEvenetListerners() {
    FORM.addEventListener('submit', (e) => {
        RESULTS.style.display = "none";
        LOADING.style.display = "block";
        setTimeout(handleFormSubmit, 2000)
        e.preventDefault();
    })
}

function handleFormSubmit() {
    LOADING.style.display = "none";
    const PRINCIPLE = parseFloat(AMOUNT.value);
    const CALCULATEDINTEREST = parseFloat(INTEREST.value) / 100 / 12;
    const CALCULATEDPAYMENTS = parseFloat(YEARS.value) * 12;

    const X = Math.pow(1 + CALCULATEDINTEREST, CALCULATEDPAYMENTS)
    const MONTHLY = (PRINCIPLE * X * CALCULATEDINTEREST) / (X - 1);

    if (isFinite(MONTHLY)) {
        MONTHLYPAYMENT.value = MONTHLY.toFixed(2);
        TOTALPAYMENT.value = (MONTHLY * CALCULATEDPAYMENTS).toFixed(2);
        TOTALINTEREST.value = ((MONTHLY * CALCULATEDPAYMENTS) - PRINCIPLE).toFixed(2);
        RESULTS.style.display = "block";

    } else {
        showError("Please check your Numbers!")
    }


}

function showError(err) {
    const DIV = document.createElement('div');
    DIV.className = "alert alert-danger";
    DIV.appendChild(document.createTextNode(err))
    CARD.insertBefore(DIV, HEADING);
    setTimeout(() => {
        DIV.style.display = "none";
        // DIV.remove()
    }
        , 3000)

}


















