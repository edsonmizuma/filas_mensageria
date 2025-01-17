//callback

/* function fetchData(callback) {
  setTimeout(() => {
    callback("Dados carregados!");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
}); */

//promisses

/* function fetchData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados carregados!");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  }); */

//async await

async function fetchData() {
  return "Dados carregados!";
}

async function showData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

showData();
