import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import API from '../src/api';

const Home = ({ user }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [startups, setStartups] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get('/api/posts');
        setPosts(res.data);
        const [startupRes, userRes] = await Promise.all([
          API.get('/api/startups'),
          API.get('/api/users')
        ]);
        const startupMap = {};
        startupRes.data.forEach(s => { startupMap[s.StartupID] = s; });
        setStartups(startupMap);
        const userMap = {};
        userRes.data.forEach(u => { userMap[u.UserID] = u; });
        setUsers(userMap);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar user={user} />
      <div className="relative main bg-[#EE2B69] flex flex-col pb-18">
        <div className="relative">
          <img
            className="w-full max-h-[250px] object-cover opacity-80"
            src="../public/Image.png"
            alt=""
          />
          <div className="absolute left-1/2 top-20 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FFE553] px-6 py-3 rounded shadow-lg">
            <h2 className="text-xl font-bold text-black">Pitch And Grow</h2>
          </div>
          <div className="absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black px-6 py-3 rounded shadow-lg">
            <h2 className="text-3xl font-bold text-white">
              Pitch Your Startup, Connect with Entrepreneurs
            </h2>
          </div>
          <div className="absolute left-1/2 top-55 transform -translate-x-1/2 -translate-y-1/2 z-10 px-6 py-3 rounded">
            <h2 className="text-l font-bold text-white">
              Post your ideas, Startups and get recommendations and Funding
            </h2>
          </div>
        </div>
      </div>
      <div className="container bg-[#F7F7F7]">
        <h2 className="text-3xl font-bold text-black text-center mt-10 mb-6">
          All Posts
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-4 p-2">
          {posts.map((post) => {
            const startup = startups[post.StartupID];
            const author = users[startup?.FounderID];
            return (
              <div key={post.PostID} className="bg-white shadow-lg flex flex-col justify-between items-center rounded-2xl p-6 border-2 border-[#EE2B69] max-w-xs min-w-[280px]">
                <h2 className="text-xl font-bold text-[#EE2B69] mb-2">
                  {startup ? startup.Name : "Loading..."}
                </h2>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  By: {author ? author.Name : "Loading..."}
                </p>
                <p className="text-md text-gray-800 mb-2">{post.Content}</p>
                {user?.role === "Investor" && (
                  <button
                    className="bg-[#EE2B69] text-white px-4 py-2 rounded-xl cursor-pointer mt-2 hover:bg-[#d1225b] transition"
                    onClick={() => navigate(`/funding/${post.StartupID}`)}
                  >
                    Offer Funding
                  </button>
                )}
              </div>
            );
          })}
          {posts.length === 0 && (
            <p className="text-gray-500">No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
