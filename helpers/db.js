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
    connectionString: process.env("DATABASE_URL"),
  });

  return pool;
};

module.exports = { query };
