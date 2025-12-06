import express from 'express';
const app = express();
app.get('/', (req, res) => {
 res.send('<html><body><h1>GET</h1></body></html>');
});
app.use(express.static('public'));
app.listen(3001);