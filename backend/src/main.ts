import * as express from 'express';

const port = 7000;
const host = 'localhost';
let app: express.Application = express();

app.use((request:express.Request, response: express.Response, next: express.NextFunction)=>
{
	response.setHeader('Access-Control-Allow-Origin', '*');
	next();
});




app.get('/randomNumber', (request: express.Request, response: express.Response)=>
{
	response.send(`${Math.random()}`);
});



console.log(`Listening on ${host}:${port}`);
app.listen(port, host);
