const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {res.send ('Thank You for Calling Me')});
app.get('/fruit/banana', (req, res)=> {
    res.send({
        Fruit: 'Banana', quantity:1000, Price: 10000
    })
});
app.get('/nayeam', (req, res)=>{
    res.send({
        FirstName: 'Nayeam',
        LastName: 'Seikh',
        Age: 29,
        Hobby: 'Programming',
        PhoneNumber: '+8801750497007'
    })
});
const users = ['Samad', 'Jamal', 'beniamin', 'Yousuf', 'Labi', 'yahuda', 'sulaiman'];
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({name, id});
});
app.post('/addUser', (req, res)=>{
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(4000, () => console.log('Listening to port 4000'))