import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import md5 from 'md5'
import mysql from 'mysql2'
import https from 'node:https'
import axios from 'axios'
const app = express()
const port = 3000

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  console.log('Passou pelo app.use com CORS')
  next()
}) -
  app.use(
    cors({
      origin: 'http://localhost:5173/',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204
    })
  )

app.use(bodyParser.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '85245600q',
  database: 'banco de dados web receitas'
})

app.post('/cadastro', (req, res) => {
  const { nome, email, password } = req.body

  db.execute(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (err, results) => {
      if (err) {
        console.error(err.message)
        return res.status(500).json({ error: 'Erro interno do servidor' })
      }

      if (results.length > 0) {
        return res.status(400).json({ error: 'Usuário já cadastrado' })
      }

      const hashedPassword = md5(password)

      db.execute(
        'INSERT INTO usuarios (nome, email, password) VALUES (?, ?, ?)',
        [nome, email, hashedPassword],
        err => {
          if (err) {
            console.error(err.message)
            return res.status(500).json({ error: 'Erro interno do servidor' })
          }

          res.json({ message: 'Usuário cadastrado com sucesso' })
        }
      )
    }
  )
})

app.post('/login', (req, res) => {
  console.log('entrei na função')
  const { email, password } = req.body

  db.query(
    'SELECT * FROM usuarios WHERE email = ?',
    [email],
    (err, results) => {
      if (err) {
        console.error(err.message)
        return res.status(500).json({ error: 'Erro interno do servidor' })
      }

      if (results.length > 0 && results[0].password === md5(password)) {
        console.log('Confirmando que chega até aqui')
        return res.json({ message: 'Login bem-sucedido' })
      }

      res.status(401).json({ error: 'Credenciais inválidas' })
    }
  )
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
