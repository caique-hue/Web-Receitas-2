document
  .getElementById('login_button')
  .addEventListener('click', function (event) {
    event.preventDefault()
  })

function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173/',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Resposta do servidor:', data)
    })
    .catch(error => {
      console.error('Erro:', error)
    })
}
