import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FindingMatches() {
  const [progress, setProgress] = useState(20);
  const [services, setServices] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () =>
      {
        const Service_name = sessionStorage.getItem('Service_Name');
        const pincode = sessionStorage.getItem('userPincode');
        const cj = sessionStorage.getItem('care/job');
        let fdata = new FormData();
        fdata.append('Service_name',Service_name);
        fdata.append('pincode',pincode);
        fdata.append('cj',cj);
        const res = await axios.post("http://localhost/sem-6care4all-master/backend/FetchUsers.php", fdata);
        setServices(res.data);
      };
      fetchdata();
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval); 
          navigate("/Pricing");
        }
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [navigate]);

  const renderRating = (ratings) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < ratings ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <h1 className="text-4xl font-bold accent2-text mb-6">Care4All</h1>

      {/* Information Text */}
      <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Did you know, 100% of caregivers you see on Care.com are background
        checked?
      </p>

      {/* Caregiver Profiles */}
      <div className="flex space-x-6 mb-4">
        {/* Profile 1 */}
        {services.map((user, index) => (
        <div key={user.id} className={`flex flex-col items-center ${index === 2 ? "opacity-50" : ""}`}>
          <img
            src={`http://localhost/sem-6care4all-master/care4all/src/assets/images/${user.photo}`}
            alt={user.name}
            className={`w-20 h-20 rounded-full border-2 border-gray-300 ${index === 2 ? "blur-sm" : ""}`}
          />
          <p className="font-semibold">{user.name}</p>
          <div className="flex text-yellow-500">
            {renderRating(user.ratings)}
          </div>
        </div>
        ))}
        {/* Profile 2 (Blurred) */}
        {/* <div className="flex flex-col items-center opacity-50">
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="Lauren N."
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <p className="font-semibold">Lauren N.</p>
          <div className="flex text-gray-400">{"★★☆☆☆"}</div>
        </div> */}
      </div>

      {/* Finding Matches Message */}
      <p className="text-gray-600 mb-3">Sit tight, we're finding matches near you...</p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
