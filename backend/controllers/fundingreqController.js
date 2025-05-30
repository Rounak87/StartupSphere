import { request } from "express";
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

export const givefundingreq = async (req, res) => {
    const { startupid } = req.params;
    const { investorID, amountoffered } = req.body;
    console.log('Received:', { startupid, investorID, amountoffered }); // <-- Add this line
    if (!startupid || !investorID || !amountoffered) {
        return res.status(400).json({ error: 'all fields not there' });
    }
    const sid = parseInt(startupid, 10);
    const iid = parseInt(investorID, 10);
    const amt = parseFloat(amountoffered);
    try {
        const [row] = await pool.query(
            'insert into FundingRequests (StartupID, InvestorID, AmountOffered) values (?,?,?)',
            [sid, iid, amt]
        );
        if (row.insertId) {
            res.status(201).json({ message: 'Funding request created', fundingID: row.insertId });
        } else {
            res.status(400).json({ error: 'Failed while creating funding request' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error at funding requesting' });
    }
};

export const updateFundingStatus= async(req, res) => {

    const {requestid}=req.params;
    const {status}=req.body;

    try{

        const [rows]=await pool.query('update FundingRequests set status=? where requestID=?',[status,requestid]);

        if(rows.affectedRows===0){
            return res.status(404).json({error:'Funding request not found'});
        }
        res.status(200).json({message:'Funding request updated successfully'});
    }
    catch{
        console.error(err);
        res.status(500).json({error:'Error at funding requesting'});
    }


}