import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import UserRoutes from './routes/users.js';
import startupRoutes from './routes/startups.js';
import posts from './routes/posts.js';
import fundingreq from './routes/fundingreq.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/users',UserRoutes); 
app.use('/api/startups',startupRoutes);
app.use('/api/posts',posts);
app.use('/api/funding',fundingreq);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));