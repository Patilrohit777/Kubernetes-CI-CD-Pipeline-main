function openCalc(type) {
  document.getElementById("calculatorModal").style.display = "block";

  let html = "";

  if (type === "lumpsum") {
    html = `
      <h2>Lumpsum Calculator</h2>
      <input id="principal" placeholder="Amount"><br><br>
      <input id="rate" placeholder="Rate %"><br><br>
      <input id="time" placeholder="Years"><br><br>
      <button onclick="calcLumpsum()">Calculate</button>
      <h3 id="result"></h3>
    `;
  }

  if (type === "sip") {
    html = `
      <h2>SIP Calculator</h2>
      <input id="sip" placeholder="Monthly Investment"><br><br>
      <input id="rate" placeholder="Rate %"><br><br>
      <input id="time" placeholder="Years"><br><br>
      <button onclick="calcSIP()">Calculate</button>
      <h3 id="result"></h3>
    `;
  }

  if (type === "emi") {
    html = `
      <h2>EMI Calculator</h2>
      <input id="loan" placeholder="Loan Amount"><br><br>
      <input id="rate" placeholder="Rate %"><br><br>
      <input id="time" placeholder="Years"><br><br>
      <button onclick="calcEMI()">Calculate</button>
      <h3 id="result"></h3>
    `;
  }

  document.getElementById("calculatorContent").innerHTML = html;
}

function closeCalc() {
  document.getElementById("calculatorModal").style.display = "none";
}

// Calculations
function calcLumpsum() {
  let p = +document.getElementById("principal").value;
  let r = +document.getElementById("rate").value / 100;
  let t = +document.getElementById("time").value;

  let fv = p * Math.pow(1 + r, t);
  document.getElementById("result").innerText = "Future Value: ₹" + fv.toFixed(2);
}

function calcSIP() {
  let p = +document.getElementById("sip").value;
  let r = +document.getElementById("rate").value / 100 / 12;
  let n = +document.getElementById("time").value * 12;

  let fv = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  document.getElementById("result").innerText = "Value: ₹" + fv.toFixed(2);
}

function calcEMI() {
  let P = +document.getElementById("loan").value;
  let r = +document.getElementById("rate").value / 12 / 100;
  let n = +document.getElementById("time").value * 12;

  let emi = (P * r * Math.pow(1+r,n)) / (Math.pow(1+r,n) - 1);
  document.getElementById("result").innerText = "EMI: ₹" + emi.toFixed(2);
}