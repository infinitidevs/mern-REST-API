const express = require('express');
require('./config/db');
const exercisesRouter = require('./routes/Exercises');

const app = express();
app.use(express.json());

app.use('/api', exercisesRouter);

app.use('*', (req, res) => {
  res.status(404).json({ data: 'Not found' });
});

app.use((error, req, res) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`>> Server running on: http://localhost:${PORT}`);
});
