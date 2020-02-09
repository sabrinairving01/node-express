const express = require('express');
const bodyParser = require('body-parser');

const partnersRouter = express.Router()

partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});


app.get('/partners/:partnerId', (req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
});

app.post('/partners/:partnerId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.partnerId}`);
});

app.put('/partners/:partnerId', (req, res) => {
    res.write(`Updating the promotion: ${req.params.partnerId}\n`);
    res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/partners/:partnerId', (req, res) => {
    res.end(`Deleting promtions: ${req.params.partnerId}`);
});