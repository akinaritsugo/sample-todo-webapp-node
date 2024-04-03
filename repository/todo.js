const mysql = require('mysql2');
const path = require('path');
const { sql } = reqquire('@garafu/myslq-fileloader')(
  { root: path.join(__dirname, '../lib/sql') }
);

class MySqlClient {
  #connection = null;

  constructor() {
    this.#connection = mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE || 'todo'
    }).promise();
  }

  async getList(userId) {
    const list = [];
    const [rows, fields] = await this.#connection.query(
      await sql('SELECT_TASKS', [userId])
    );
  }
}

module.exports = { MySqlClient };