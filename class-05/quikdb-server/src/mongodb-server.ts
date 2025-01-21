import express, { Request, Response } from 'express';
import { QuikDB, ResultBool, CreateSchemaArgs, GetSchemaArgs, CanisterMethod, CreateRecordDataArgs, DBRecord, GetRecordArgs, ResultRecords } from 'quikdb-cli-beta/v1/sdk';
import dotenv from 'dotenv';

dotenv.config();

const port = 3000;

let quikdb = new QuikDB();

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
 console.log({ Params: req.params });
  
  try {
  const getRecordArgs: GetRecordArgs = ['UserSchema', 'record1'];
  const retrievedRecord = await quikdb.callCanisterMethod(CanisterMethod.GetRecord, getRecordArgs);
  console.log('Retrieved Record:', retrievedRecord);

  let keyValuePairs = {} as any;

  const data = (retrievedRecord as any).ok;

  const lines = data.split('\n');

  // Loop through each line and process it
  lines.forEach((line: any) => {
    // Skip the 'Fields:' line
    if (line.startsWith('Fields:')) return;

    // Split the line into key and value
    const [key, value] = line.split(/:\s+/);

    // Add to the object, trimming whitespace
    if (key && value) {
      keyValuePairs[key.trim()] = value.trim();
    }
  });

   console.log('connected successfully to mongodb')
   res.status(200).json({
     message: 'successful',
     retrievedRecord: keyValuePairs,
   });
  } catch (error) {
   console.log(error);
   res.status(500).json({
    message: "failed to connect"
   })
  }
});

app.post('/', addToStore);

app.listen(port, async () => {
    await quikdb.init();
 console.log(`the server is listening on port: ${port}`)
})

async function addToStore(req: Request, res: Response) {
 const body = req.body;
  
  try {
    // const initOwnerResult = await quikdb.callCanisterMethod<ResultBool>(CanisterMethod.InitOwner, []);

    // console.log({ initOwnerResult });
    // if (initOwnerResult) {
    //   console.log('Owner initialized successfully.');
    // } else {
    //   console.error(`Error: ${initOwnerResult}`);
    // }

    // Define schema details
    // const schemaName = 'UserSchema';
    // const fields = [
    //   { name: 'username', unique: false, fieldType: 'Text' },
    //   { name: 'age', unique: false, fieldType: 'Int' },
    //   { name: 'email', unique: true, fieldType: 'Text' },
    // ];
    // const indexes = ['email'];

    // const args: CreateSchemaArgs = [schemaName, fields, indexes];
    // const createResult = await quikdb.callCanisterMethod(CanisterMethod.CreateSchema, args);

    // console.log({ createResult });

    // Insert a new record
    const record: DBRecord = {
      id: 'record1',
      fields: [
        ['username', 'testuser'],
        ['age', '30'],
        ['email', 'test@example.com'],
      ],
    };
    const createRecordArgs: CreateRecordDataArgs = ['UserSchema', record];
    const insertResult = await quikdb.callCanisterMethod(CanisterMethod.CreateRecordData, createRecordArgs);
    console.log('Insert Record Result:', insertResult);

    console.log('connected successfully to mongodb');
    res.status(200).json({
      message: 'successful',
      insertResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'failed to connect',
    });
  }
}