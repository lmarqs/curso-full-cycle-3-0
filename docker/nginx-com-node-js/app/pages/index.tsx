import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import mysql, { Connection } from 'mysql2';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ records }) => {
  return (
    <main>
      <h1>Full Cycle Rocks!</h1>

      - Lista de nomes cadastrada no banco de dados.

      <ul>
        {records.map((record, key) => (
          <li key={key}>{record.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<{ records: Array<Record<string, any>> }> = async (context) => {
  const connection = createConnection();

  let records = await getRecordsFromDatabase(connection);

  if (!records.length) {
    await insertRecordIntoDatabase(connection);
    records = await getRecordsFromDatabase(connection);
  }

  connection.end();

  return {
    props: {
      records,
    },
  };
};

async function insertRecordIntoDatabase(connection: Connection) {
  await connection
    .promise()
    .execute(`
      INSERT INTO people (name) VALUES 
        ('David de Souza'),
        ('Ashley Ferraz'),
        ('Camilo Torres'),
        ('Isadora Vila'),
        ('Pamela Prado'),
        ('Adriana Gil'),
        ('Ian Valentin'),
        ('Mia Marinho'),
        ('Allison Torres'),
        ('Alma Valencia');   
    `);
}

async function getRecordsFromDatabase(connection: Connection): Promise<Array<Record<string, any>>> {
  const [records] = await connection
    .promise()
    .query("SELECT * FROM people");

  return JSON.parse(JSON.stringify(records));
}

function createConnection() {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
}

