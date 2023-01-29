function calculate() {
  //fetch(`${BASE_URL}`, option);
  // fetch('itmes.json',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type: application/json'
  //   }
  // })

  fetch("./items.json")
    .then((res) => {
      res.json();
      console.log(res);
    })
    .then((data) => console.log(data));
}

calculate();
