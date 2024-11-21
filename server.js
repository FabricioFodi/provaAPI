const express = require ('express');
const app = express();
app.use(express.json());
PORT = 3000;

let users = [];
let products = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const {name, cpf, email} = req.body;
    if(nome <= 3){
        return res.status(400).json({ mensagem: "'Nome' deve conter no mínimo 3 caracteres" });
    }
    else if(nome >= 150){
        return res.status(400).json({ mensagem: "'Nome' deve conter no máximo 150 caracteres" });
    }
    else if(cpf.length !== 11){
        return res.status(400).json({ mensagem: "'CPF' deve conter 11 caracteres" });
    }
    else if(typeof str !== 'string'){
        return res.status(400).json({ mensagem: "'CPF' deve conter apenas números" });
    }
    else if(email <= 3){
        return res.status(400).json({ mensagem: "'Email' deve conter no mínimo 3 caracteres" });
    }
    else if(email >= 100){
        return res.status(400).json({ mensagem: "'Email' deve conter no máximo 100 caracteres" });
    }
    const id = users.length + 1;
    users.push({id, name, cpf, email});
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso' });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === Number(id));
    if(!user){
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, cpf, email } = req.body;
    const user = users.find((user) => user.id === Number(id));
    if(!user){
        return res.status(404).json({ mensagem: "Usuário não encontrado" });   
    }
    user.name = name;
    user.cpf = cpf;
    user.email = email;
    res.status(200).json(user);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((user) => user.id === Number(id));
    if(index === -1){
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    users.splice(index, 1);
    res.status(204).json({ mensagem: "Usuário removido com sucesso" });
});

app.get('/products', (req, res) => {
    res.json(products);
})

app.post('/products', (req, res) => {
    const { nome, preco } = req.body;
    if(nome <= 3){
        return res.status(400).json({ mensagem: "'Nome' deve conter no mínimo 3 caracteres"});
    }
    else if(nome >= 100){
        return res.status(400).json({ mensagem: "'Nome' deve conter no máximo 100 caracteres"});
    }
    else if(preco <= 0){
        return res.status(400).json({ mensagem: "Preço deve ser maior que 0"})
    }
    const id = products.length + 1;
    products.push({id, name, preco});
    res.status(201).json({ mensagem: "Produto cadastrado com sucesso!" });
});

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));
    if(!product){
        return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    res.json(product);
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, preco } = req.body;
    const product = products.find((product) => product.id === Number(id));
    if(!product){
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }
    product.name = name;
    product.preco = preco;
    res.status(200).json(product);
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((product) => product.id === Number(id));
    if(index === -1){
        return res.status(404).json({mensagem: "Produto não encontrado!" });
    }
    products.splice(index, 1);
    res.status(204).json({ mensagem: "Produto removido com sucesso"})
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});