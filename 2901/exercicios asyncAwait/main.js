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

getPrimeiroTitulo().then(console.log);

// fetch API de requisição POST

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Meu Post",
    body: "Este é o corpo do meu post",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json;charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((erro) => `Erro: ${erro}`);
