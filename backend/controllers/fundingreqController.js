import pool from "../db.js";

export const getfundingreq= async(req, res) => {

    const {startupid}=req.params;
    // const startupID='3';

    // console.log("startupid is =", startupID);
    try {
        // console.log("startupid is =",startupid);
        const [rows] = await pool.query("SELECT * FROM FundingRequests WHERE startupid = ?", [startupid]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "No funding req recieved" });
        }
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error at funding requesting" });
    }




}

export const givefundingreq= async(req, res) => {
    const {startupID,investorID,amountoffered}=req.body;
    if(!startupID || !investorID || !amountoffered){
        return res.status(400).json({error:'all fields not there'});
    }
    try{

        const [row]=await pool.query('insert into FundingRequests (startupID,investorID,amountoffered) values (?,?,?)',[startupID,investorID,amountoffered]);
        if(row.insertId){
            res.status(201).json({ message: 'Funding request created', fundingID: row.insertId });
        }
        else{
            res.status(400).json({ error: 'Failed while creating funding request' });
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'Error at funding requesting'});
    }



}