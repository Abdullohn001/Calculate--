const btn = document.getElementById("btn");
const amout = document.getElementById("amout");
const clear = document.getElementById("clear");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
const form = document.getElementById("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const radio = document.querySelector('input[name="option"]:checked');

  const mainAmout = document.getElementById("mainAmout").value;
  const year = document.getElementById("year").value;
  const present = document.getElementById("present").value;
  const total = document.getElementById("total");

  if (mainAmout && year && present) {
    section2.classList.add("hidden");
    section3.classList.remove("hidden");
    if (radio.value === "a") {
      const monthlyInterest = present / 100 / 12;
      const numberOfPayment = year * 12;
      const onePlusPowerN = Math.pow(1 + monthlyInterest, numberOfPayment);
      const monthly =
        (mainAmout * (monthlyInterest * onePlusPowerN)) / (onePlusPowerN - 1);
      const totalRepayment = monthly * numberOfPayment;
      const monthlyRepayment = Number(monthly).toFixed(2);
      const totalRepaymentRounded = Number(totalRepayment).toFixed(2);

      amout.textContent = monthlyRepayment;
      total.textContent = totalRepaymentRounded;
    } else if (radio.value === "b") {
      const monthlyInterest = present / 100 / 12;
      const monthlyInterestPayment = mainAmout * monthlyInterest;
      const totalInterest = monthlyInterestPayment * year * 12;
      const interestPayment = Number(monthlyInterestPayment).toFixed(2);
      const interestPaidOverTerm = Number(totalInterest).toFixed(2);

      amout.textContent = interestPayment;
      total.textContent = interestPaidOverTerm;
    } else {
      return false;
    }
  } else {
    form.classList.add("error")
  }
});

clear.addEventListener("click", () => {
  form.reset();
  section2.classList.remove("hidden");
  section3.classList.add("hidden");
});
