import { CanisterMethod, CreateSchemaArgs, Field, QuikDB, ResultBool } from 'quikdb-cli-beta/v1/sdk';

(async () => {
  try {
    const db = new QuikDB();
    await db.init();

    const schemaName = 'testSchema';

    const fields: Field[] = [
      { name: 'username', fieldType: 'Text' },
      { name: 'age', fieldType: 'Int' },
    ];
    const indexes: string[] = ['username'];

    const args: CreateSchemaArgs = [schemaName, fields, indexes];

    const result: ResultBool = await db.callCanisterMethod<ResultBool>(CanisterMethod.CreateSchema, args);

    console.log({ result });
  } catch (error) {
    console.error({ error });
  }
})();
