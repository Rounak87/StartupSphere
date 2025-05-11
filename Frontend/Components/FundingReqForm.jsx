import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import API from '../src/api';

const FundingReqForm = ({ user }) => {
  const [amount, setAmount] = useState('');
  const { startupID } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startupID || !user?.userID || !amount) {
      alert('All fields are required');
      return;
    }
    try {
      await API.post(`/api/funding/${startupID}`, {
        investorID: user.investorID, // This is the actual InvestorID, not UserID
        amountoffered: Number(amount),
      });
      alert('Funding offer sent!');
      setAmount('');
    } catch (err) {
      alert('Error sending funding offer');
      console.error(err?.response?.data || err.message, err);
    }
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar user={user} />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#EE2B69]">
            Funding Request Form
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2 text-gray-700 font-medium" htmlFor="amount">
              Amount Offered:
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter the amount you want to offer"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded p-2 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-[#EE2B69] text-white px-4 py-2 rounded hover:bg-[#d1225b] transition"
            >
              Offer your Funding
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FundingReqForm;