import express from "express";
import cors from "cors";
import { postRouter } from "./Post/infraestructure/routes/postRouter";

const app = express();
const PORT = process.env.PORT;
const client = process.env.CLIENT_URL!;

app.use(express.json());
app.use(cors({
  origin: [client],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


app.use("/api/post", postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

