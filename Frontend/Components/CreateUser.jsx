import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../src/api';

const CreateUser = ({ setUser }) => {
  const [form, setForm] = useState({ name: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/users', form);
      let user = { ...form, userID: res.data.userID };
      // If investor, fetch InvestorID and add to user object
      if (form.role === 'Investor') {
        const investorRes = await API.get(`/api/users/investorid/${res.data.userID}`);
        user = { ...user, investorID: investorRes.data.InvestorID };
      }
      setUser(user);
      if (form.role === 'Founder') {
        navigate('/startup');
      } else {
        navigate('/');
      }
    } catch (err) {
      alert('Error creating user',err);
    }
  };

  return (
    <div className="bg-[#f7f7f7] h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md flex flex-col w-96">
        <h2 className="text-xl font-bold mb-4 text-[#EE2B69]">Create Your Account</h2>
        <input
          name="name"
          placeholder="Username"
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mb-4"
        />
        <select
          name="role"
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 mb-4"
        >
          <option value="">Select Role</option>
          <option value="Founder">Founder</option>
          <option value="Investor">Investor</option>
        </select>
        <button type="submit" className="bg-[#EE2B69] text-white px-4 py-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateUser;