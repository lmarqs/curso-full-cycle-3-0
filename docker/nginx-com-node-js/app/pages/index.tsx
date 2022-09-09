import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import mysql from 'mysql2';

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

export const getServerSideProps: GetServerSideProps<{ records: Array<Record<string, any>> }> = async (context) => {
  return {
    props: {
      records: JSON.parse(JSON.stringify(await getRecordsFromDatabase())),
    },
  };
};

async function getRecordsFromDatabase() {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  const [records] = await connection
    .promise()
    .query("SELECT * FROM names");

  connection.end();

  return records
}

export default Home
