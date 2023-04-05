// initial account balance.
var balance = 1000.0;

// account balance
function get_balance() {
  prompt("Your current balance is: " + balance);
  atm();
}

// deposit
function make_deposit() {
  var deposit = parseFloat(prompt("How much would you like to deposit?"));
  if (isNaN(deposit) || deposit === "") {
    prompt("Error: please enter a number!");
    make_deposit();
  } else {
    balance += deposit;
    get_balance();
  }
}

// withdrawal
function make_withdrawal() {
  var withdrawal = parseFloat(prompt("How much would you like to withdrawal?"));
  if (isNaN(withdrawal) || withdrawal === "") {
    prompt("Error: please enter a number!");
    make_withdrawal();
  } else {
    balance -= withdrawal;
    get_balance();
  }
}

// when the user selects a wrong input.
function error() {
  prompt(
    "Error: \nYou have entered a wrong input, please select a choice from 1 - 4."
  );
  atm();
}

// end transaction
function exit() {
  var confirm_leave = confirm("You have ended your transaction.");
  if (confirm_leave) {
    window.close();
  } else {
    atm();
  }
}

function atm() {
  var choice = parseInt(
    prompt("Select a choice \n1. Balance \n2. Deposit \n3. Withdrawal\n4. Exit")
  ); //prompt user for choice.

  if (choice === 1) {
    get_balance();
  } else if (choice === 2) {
    make_deposit();
  } else if (choice === 3) {
    make_withdrawal();
  } else if (choice === 4) {
    exit();
  } else {
    error();
  }
}

atm();
