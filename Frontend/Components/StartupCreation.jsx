import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../src/api';

const StartupCreation = ({ user }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    industry: '',
    fundingStage: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFundingStage = (stage) => {
    setForm({ ...form, fundingStage: stage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/api/startups', {
        founderId: user.userID,
        ...form,
      });
      navigate('/');
    } catch (err) {
      alert('Error creating startup',err);
    }
  };

  return (
    <div className="bg-[#f7f7f7] h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-3/4 md:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#EE2B69]">
          Tell us about your startup
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Startup Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4 h-24 resize-none"
            required
          ></textarea>
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            value={form.industry}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 mb-4"
            required
          />
          <div className="mb-4">
            <p className="mb-2 text-gray-700">Funding Stage:</p>
            <div className="flex items-center">
              {['Series A', 'Series B', 'Series C'].map((stage) => (
                <label key={stage} className="flex items-center mr-4 cursor-pointer">
                  <input
                    type="radio"
                    name="fundingStage"
                    value={stage}
                    checked={form.fundingStage === stage}
                    onChange={() => handleFundingStage(stage)}
                    className="hidden"
                  />
                  <span
                    className={`px-4 py-2 rounded-full border ${
                      form.fundingStage === stage
                        ? 'bg-[#EE2B69] text-white'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    {stage}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button className="bg-[#EE2B69] text-white px-4 py-2 rounded">
            Create Startup
          </button>
        </form>
      </div>
    </div>
  );
};

export default StartupCreation;