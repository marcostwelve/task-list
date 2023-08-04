module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'Tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}