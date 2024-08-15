const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //await necesita una función  async
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  $n.textContent = "Algo salió mal: "; '${err}'; //se agregó "$" antes de la n
  console.log('OH NO!');
  
  console.log(err);
  
}

displayUser('stolinski').catch(handleError);