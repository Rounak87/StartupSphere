import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import API from "../src/api";

const PostCreation = ({ user }) => {
  const [content, setContent] = useState("");
  const [startupID, setStartupID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the founder's startup
    const fetchStartup = async () => {
      try {
        const res = await API.get("/api/startups");
        const myStartup = res.data.find(
          (s) => s.FounderID === user.userID
        );
        if (myStartup) setStartupID(myStartup.StartupID);
      } catch (err) {
        alert("Error fetching startup",err);
      }
    };
    fetchStartup();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startupID) {
      alert("No startup found for this user.");
      return;
    }
    try {
      await API.post("/api/posts", {
        startupID,
        content,
      });
      navigate("/");
    } catch (err) {
      alert("Error creating post",err);
    }
  };

  return (
    <div className="bg-[#f7f7f7] h-screen">
      <Navbar />
      <div>
        <div className="relative main bg-[#EE2B69] flex flex-col">
          <div className="relative">
            <img
              className="w-full max-h-[150px] object-cover"
              src="../public/Image.png"
              alt=""
            />
            <div className="absolute  left-1/2  top-20 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black  px-6 py-3 rounded shadow-lg">
              <h2 className="text-xl font-bold text-white">
                Pitch Your startup , Connect with Entrepreneurs
              </h2>
            </div>
          </div>
        </div>
        <div className="form">
          <form
            className="flex flex-col items-center justify-center mt-10"
            onSubmit={handleSubmit}
          >
            <textarea
              placeholder="Write your pitch here..."
              className="border border-gray-300 rounded p-2 mb-4 w-1/2 h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <button className="bg-[#EE2B69] text-white px-4 py-2 rounded">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
