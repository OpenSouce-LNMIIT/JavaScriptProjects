// all UI value

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const year = document.getElementById('years');

const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const calculateInterest = document.getElementById('loan-form');

const loader = document.getElementById('loading');
const results = document.querySelector('#results');
const card2 = document.querySelector('.card2');

// Show error
const showError = function(error){
    //show loader
    loader.style.display = 'none';
    card2.style.backgroundColor  = "transparent";
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card1');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger mb-3';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000)
}

// calculate function
const result = function(){
    
    const principal = parseFloat(amount.value);
    const calcInterest = parseFloat(interest.value) / 100 / 12;
    const calcPayment = parseFloat(year.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calcInterest, calcPayment);
    const monthly = (principal * x * calcInterest) / (x -1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcPayment).toFixed(2);
        totalInterest.value = ((monthly * calcPayment) - principal).toFixed(2);
        //hide result
        results.style.display = 'block';
        //show loader
        loader.style.display = 'none';
    }
    else{
        showError('Input valid Amount');
    }
}


// calculate event listener
calculateInterest.addEventListener('submit', function(e){
    e.preventDefault();
    
    card2.style.backgroundColor  = "#fff";

    //hide result
    results.style.display = 'none';
    //show loader
    loader.style.display = 'block';

    setTimeout(result, 2000)
});