import express, { Request, Response } from 'express';
const port = 3000;

const app = express();

app.use(express.json());

// api methods: post -> creating a new entry, get for fetching, patch and put for updating and existing record, delete: for deleting.

const dataStore: Record<any, any> = []

app.get('/:dev', (req, res) => {
 console.log({ parameters: req.params });
 console.log({ query: req.query });
});

app.post('/', addToStore);

app.listen(port, () => {
 console.log(`the server is listening on port: ${port}`)
})

function addToStore(req: Request, res: Response) {
 const body = req.body;

 console.log({ dataStore });
 console.log({ body });

 dataStore.push(body);

 console.log({dataStore});

}