document
  .getElementById('login_button')
  .addEventListener('click', function (event) {
    event.preventDefault()
  })

function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  // Usando Axios
  axios
    .post('http://localhost:3000/login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log(response.data)
      // Lidar com a resposta do servidor
    })
    .catch(error => {
      console.error('Erro:', error)
      console.log('Realmente está quebrando aqui', { email, password })
      // Lidar com erros de requisição
    })
}
