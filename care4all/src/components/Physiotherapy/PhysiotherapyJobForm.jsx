import React, { useState } from "react";
import { FaUserMd, FaClock, FaHandsHelping } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export default function PhysiotherapyJobForm() {
  const [availability, setAvailability] = useState("");
  const [services, setServices] = useState([]);
  const [experience, setExperience] = useState("");

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (services.length === 0) {
      setError("Please select at least one physiotherapy service.");
      return;
    }
      const url = 'http://localhost/sem-6care4all-master/backend/PhysiotherapyJob.php';
      let fdata = new FormData();
      const email = sessionStorage.getItem('email');
      const name = sessionStorage.getItem('name');
      const pincode = sessionStorage.getItem('userPincode');
      const address = sessionStorage.getItem('address');
      const photo = sessionStorage.getItem('photo');
      const ratings = sessionStorage.getItem('ratings');
      fdata.append('name',name);
      fdata.append('email',email);
      fdata.append('pincode',pincode);
      fdata.append('address',address);
      fdata.append('photo',photo);
      fdata.append('experience',experience);
      fdata.append('ratings',ratings);
      fdata.append('availability',availability);
      fdata.append('services',services.join(','));
      try {
        const response = await axios.post(url, fdata);
        alert(response.data);
        navigate('/FindingMatches');
      } catch (error) {
          alert('Error: ' + error.message);
      }
  };

  return (
    <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
        <FaUserMd className="text-purple-500 mr-2" />
        Find a Physiotherapy Job
      </h1>
      <p className="text-gray-700 text-lg mb-6">Answer a few questions to find the best physiotherapy jobs.</p>

      {/* Form Container */}
      <form method="post" onSubmit={handleSubmit}>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {/* Question 1: Availability */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            When are you available to work?
          </label>
          <select
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          >
            <option value="">Select availability</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
            <option value="weekends">Weekends Only</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Question 2: Services Offered */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaHandsHelping className="mr-2 text-green-500" />
            What physiotherapy services can you offer?
          </label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[
              "Pain Management",
              "Rehabilitation",
              "Post-Surgery Care",
              "Sports Therapy",
              "Neurological Therapy",
              "Geriatric Physiotherapy",
            ].map((service) => (
              <div
                key={service}
                onClick={() => toggleService(service)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  services.includes(service)
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-gray-100 text-gray-800 border-gray-300"
                } transition duration-300`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Question 3: Experience */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaUserMd className="mr-2 text-yellow-500" />
            How many years of physiotherapy experience do you have?
          </label>
          <input
            type="number"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter years of experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-center my-4"> * {error}</p>}
        {/* Submit Button */}
        <button type="submit" className="btns border-2 border-green-700 accent2-text text-lg font-semibold px-6 py-3 rounded-full w-full mt-6 hover:bg-purple-600 transition">
          Find Jobs
        </button>
      </div>
      </form>
    </div>
        <Footer/>
    </>
  );
}
