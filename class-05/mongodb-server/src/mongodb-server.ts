import express, { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const port = 3000;

const app = express();

const mongodbUrl = String(process.env?.MONGO_URL);

// status codes: 2** (success) 3** (redirect) 4** (client errors) 5** (server side errors)

app.use(express.json());

app.get('/:id', async (req, res) => {
 console.log({ Params: req.params });
  const client = new MongoClient(mongodbUrl);
  
  try {
   await client.connect();

   const schoolDb = client.db('school');

   const studentCollection = schoolDb.collection('student');

   const result = await studentCollection.findOne({
     _id: new ObjectId(req.params.id)
   });

   console.log({ result });

   console.log('connected successfully to mongodb')
   res.status(200).json({
    message: 'successful',
    data: result
   })
  } catch (error) {
   console.log(error);
   res.status(500).json({
    message: "failed to connect"
   })
  }
});

app.post('/', addToStore);

app.listen(port, () => {
 console.log(`the server is listening on port: ${port}`)
})

async function addToStore(req: Request, res: Response) {
 const body = req.body;
  const client = new MongoClient(mongodbUrl);
  
  try {
    await client.connect();

    const schoolDb = client.db('school');

    const studentCollection = schoolDb.collection('student');

    const result = await studentCollection.insertOne(body);

    console.log({ result });

    console.log('connected successfully to mongodb');
    res.status(200).json({
      message: 'successful',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'failed to connect',
    });
  }
}