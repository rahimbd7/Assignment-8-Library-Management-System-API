import express from 'express';
const app = express();

app.get('/', (req, res) => {    
    res.send('Hello World!');
});



const main = async () => {
    app.listen(3000, () => {    
        console.log('Example app listening on port 3000!');
    });
}
main();