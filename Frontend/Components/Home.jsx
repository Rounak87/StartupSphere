import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[#F7F7F7] h-100vh">
      <div>
        <Navbar />
      </div>
      <div className="relative main bg-[#EE2B69] flex flex-col">
        <div className="relative">
          <img
            className="w-full max-h-[350px] object-cover"
            src="../public/Image.png"
            alt=""
          />

          <div className="absolute  left-1/2  top-20 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FFE553] px-6 py-3 rounded shadow-lg">
            <h2 className="text-xl font-bold text-black">Pitch And Grow</h2>
          </div>
          <div className="absolute  left-1/2  top-40 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black  px-6 py-3 rounded shadow-lg">
            <h2 className="text-3xl font-bold text-white">
              Pitch Your startup , Connect with Entrepreneurs
            </h2>
          </div>
          <div className="absolute  left-1/2  top-55 transform -translate-x-1/2 -translate-y-1/2 z-10   px-6 py-3 rounded ">
            <h2 className="text-l font-bold text-white">
              Posts your ideas, Startups and get recommendation and Funding
            </h2>
          </div>

          <div className="absolute flex flex-col justify-center items-center left-1/2  top-70 transform -translate-x-1/2 -translate-y-1/2 z-10  p-3 rounded ">
            <h2 className="text-xl font-bold text-black">Search By Domains</h2>
            <div className="flex gap-4 mt-4 z-20">
              <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer ">
                HealthTech
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                Agriculture
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                Eductaion
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                Technology
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-[#F7F7F7]">
        <div>
            <h2 className="text-3xl font-bold text-black text-center mt-10">
                All Posts
            </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10 p-2">
            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                       
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                        
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                       
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                        <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            View Post
                        </button>
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardcontainer flex flex-col justify-center items-center border-black-500 rounded-2xl p-2  border-4">
                
                <div className="cardcontent flex flex-col max-w-[300px] justify-center items-center">
                    <div className="card flex  flex-col justify-center items-center">
                        
                        <h2 className="text-xl font-bold text-black">Post Title</h2>
                        <p className="text-s font-bold text-black">Author</p>
                        <p className="text-l font-bold text-black">Post Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam voluptates provident modi maxime sapiente. Corrupti numquam tempora, ab nulla inventore earum debitis neque obcaecati.</p>
                        <div className="flex gap-4 mt-4">

                        
                        <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            View Post
                        </button>
                         <button className="bg-black text-white px-4 py-2 rounded-xl cursor-pointer">
                            Offer Funding
                        </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>


      </div>
    </div>
  );
};

export default Home;
