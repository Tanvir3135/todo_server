require("dotenv").config();
const { Pool } = require("pg");

const query = (sql, values = []) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = openDb();
      const result = await pool.query(sql, values);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
};

const openDb = () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
  return pool;
};

module.exports = { query };
