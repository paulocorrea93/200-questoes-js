// função que retorna depois de 2 segundos

function esperaDoisSegundos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tempo esgotado");
    }, 2000);
  });
}

esperaDoisSegundos().then(console.log);

// fetch API em requisição GET

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((erro) => console.log(`Erro: ${erro}`));

// função assincrona de requisição GET

async function getPrimeiroTitulo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data[0].title;
}

getPrimeiroTitulo().then(console.log)