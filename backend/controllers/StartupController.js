import pool from '../db.js';

export const getStartups=async (req,res)=>{

    try{
        const [rows]=await pool.query('SELECT * FROM startups');
        res.json(rows);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'failed to fetch startup'});
    }
}

export const createStartups=async (req,res)=>{

    const {founderId,name,description,industry,fundingStage}=req.body;

    if(!founderId || !name || !description || !industry || !fundingStage){
        return res.status(400).json({error:'all fields not there'});
    }
    try{
        const [rows]=await pool.query('INSERT INTO startups (FounderId,name,description,industry,fundingStage) VALUES (?,?,?,?,?)',[founderId,name,description,industry,fundingStage]);
        if (rows.insertId) {
            res.status(201).json({ message: 'Startup created', startupID: rows.insertId });
        } else {
            res.status(400).json({ error: 'Failed to create startup' });
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'failed to create startup'});
    }
}

export const getStartupsByIndustry = async (req, res) => {

    const {industry}=req.query;

    try{
        const [rows]=await pool.query('SELECT * FROM startups WHERE industry = ?',[industry]);
        if(rows.length===0){
            return res.status(404).json({message:'No startups found in this industry'});
        }
        res.json(rows);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'failed to fetch startup'});
    }


}

