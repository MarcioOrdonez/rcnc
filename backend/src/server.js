const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const port = 3000;

const app = express();
mongoose.connect("mongodb+srv://OmniStack:OmniStack@omnistack-0bajw.mongodb.net/Aplicativo?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//req.query = acessar query params (para filtros)
// req.params = acessas route params(para edição, delete)
// req.body = acessar ciroi da requisição (para criação e edição)
// aula2 1h 16m

app.use(express.json());
app.use(routes);

console.log("rota: localhost:"+port);
app.listen(port);
