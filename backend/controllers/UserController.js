import express from 'express';
import pool from '../db.js';

export const getUser = async (req,res) =>{
    try {
        const [rows]=await pool.query('Select * from users');
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
    }



};

export const createUser = async (req, res) => {
    const { name, password, role } = req.body;

    if (!name  || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Ensure the column names are lowercase: 'email' instead of 'Email'
        const [result] = await pool.query('INSERT INTO users (name ,password, role) VALUES (?, ?, ?)', [name, password, role]);
        res.status(201).json({ message: 'User created', userID: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not create user' });
    }
};


