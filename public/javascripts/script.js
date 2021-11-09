async function calcVat() {
  let price = 0;
  let vat = 0;

  // use getElementById() to get values
  price = document.getElementById("price").value;
  vat = document.getElementById("vat").value;

  let url = `http://localhost:3000/vat?price=${price}&vat=${vat}`;

  try {

    const response = await fetch(url);
    if (!response.ok) {
      console.log(await response.text());
      document.getElementById("result").innerHTML = "Failed to calculate VAT";
    } else {
      const json = await response.json();
      console.log(json.price_with_vat);
      document.getElementById("result").innerHTML = json.price_with_vat;
    }
  }
  catch (err) {
    console.log(err);
  }
}


document.getElementById("calculate").addEventListener("click", calcVat);