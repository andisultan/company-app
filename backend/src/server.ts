import express from 'express';
import helmet from 'helmet';
import cors from 'cors'
import compression from 'compression';

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  res.send({
    message: 'API is secure 🚀'
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});