import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'; 

const app = express();
const PORT = 8001;

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Debe iniciar sesión para acceder a esta vista");
});

app.listen(PORT, () =>
  console.log(`Server corriendo en puerto: http://localhost:${PORT}`)
);

