import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import API from '../src/api';

const RecievedFundingReq = ({ user }) => {
  const [offers, setOffers] = useState([]);
  const [investors, setInvestors] = useState({});

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const startupsRes = await API.get('/api/startups');
        const myStartup = startupsRes.data.find(
          (s) => s.FounderID === user.userID
        );
        if (!myStartup) return;
        const offersRes = await API.get(`/api/funding/${myStartup.StartupID}`);
        setOffers(offersRes.data);
        const usersRes = await API.get('/api/users');
        const userMap = {};
        usersRes.data.forEach((u) => {
          userMap[u.UserID] = u;
        });
        setInvestors(userMap);
      } catch (err) {
        setOffers([]);
        console.error('Error fetching offers:', err);
      }
    };
    fetchOffers();
  }, [user]);

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Navbar user={user} />
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#EE2B69]">
            Received Funding Requests
          </h2>
          <div className="flex flex-col space-y-4">
            {offers.length === 0 && (
              <p className="text-gray-500 text-center">No offers yet.</p>
            )}
            {offers.map((offer) => (
              <div
                key={offer.RequestID}
                className="border border-gray-300 rounded p-4 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-1">
                  From: {investors[offer.InvestorID]?.Name || 'Investor'}
                </h3>
                <p className="text-gray-700 mb-1">
                  Amount Offered: <span className="font-bold text-[#EE2B69]">₹{offer.AmountOffered}</span>
                </p>
                <p className="text-gray-500 mb-2">
                  Status: <span className="font-semibold">{offer.Status || 'Pending'}</span>
                </p>
                {offer.Status === 'Pending' && (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition w-fit self-end"
                    onClick={async () => {
                      try {
                        await API.patch(`/api/funding/${offer.RequestID}`, { status: 'Rejected' });
                        // Refresh offers after rejection
                        const startupsRes = await API.get('/api/startups');
                        const myStartup = startupsRes.data.find(
                          (s) => s.FounderID === user.userID
                        );
                        if (!myStartup) return;
                        const offersRes = await API.get(`/api/funding/${myStartup.StartupID}`);
                        setOffers(offersRes.data);
                      } catch (err) {
                        alert('Error rejecting offer');
                      }
                    }}
                  >
                    Reject
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecievedFundingReq;