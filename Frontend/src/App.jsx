import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Home from '../Components/Home';
import PostCreation from '../Components/PostCreation';
import CreateUser from '../Components/CreateUser';
import StartupCreation from '../Components/StartupCreation';
import FundingReqForm from '../Components/FundingReqForm';
import RecievedFundingReq from '../Components/RecievedFundingReq';

const App = () => {
  const [user, setUser] = useState(null); // { name, role, userID }

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={<CreateUser setUser={setUser} />}
        />
        <Route
          path="/startup"
          element={
            user?.role === 'Founder'
              ? <StartupCreation user={user} />
              : <Navigate to="/" />
          }
        />
        <Route
          path="/"
          element={<Home user={user} />}
        />
        <Route
          path="/post"
          element={<PostCreation user={user} />}
        />
        <Route
          path="/funding/:startupID"
          element={<FundingReqForm user={user} />}
        />
        <Route
          path="/offers"
          element={<RecievedFundingReq user={user} />}
        />
        {/* Redirect to register if no user */}
        <Route
          path="*"
          element={<Navigate to={user ? "/" : "/register"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;