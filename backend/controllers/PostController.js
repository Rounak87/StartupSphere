import pool from '../db.js';

export const getPosts = async (req, res) => {

    try{
        const [rows] = await pool.query('SELECT * FROM posts');
        res.json(rows);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'failed to fetch posts'});
    }


}

export const createPost = async (req, res) => {

    const {startupID,content}= req.body;

    if(!startupID || !content){
        return res.status(400).json({error:'all fields not there'});
    }

    try{
        const [row]=await pool.query('INSERT INTO posts (startupID,content) VALUES (?,?)',[startupID,content]);
        if (row.insertId) {
            res.status(201).json({ message: 'Post created', postID: row.insertId });
        } else {
            res.status(400).json({ error: 'Failed while creating post' });
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'failed to create post'});
    }

};

