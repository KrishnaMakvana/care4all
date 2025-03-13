import React, { useState } from "react";
import {
  FaBroom,
  FaClock,
  FaMoneyBillWave,
  FaCommentDots,
  FaCalendarAlt,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaTasks,
} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export default function HireHousekeeping() {
  const [formData, setFormData] = useState({
    serviceType: "",
    cleaningFrequency: "",
    startDate: "",
    budget: "",
    specialInstructions: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
      const url = 'http://localhost/sem-6care4all-master/backend/HireHouseKeeping.php';
      let fdata = new FormData();
      const email = sessionStorage.getItem('email');
      const name = sessionStorage.getItem('name');
      const pincode = sessionStorage.getItem('userPincode');
      const address = sessionStorage.getItem('address');
      const photo = sessionStorage.getItem('photo');
      fdata.append('name',name);
      fdata.append('email',email);
      fdata.append('pincode',pincode);
      fdata.append('address',address);
      fdata.append('photo',photo);
      fdata.append('serviceType',formData.serviceType);
      fdata.append('cleaningFrequency',formData.cleaningFrequency);
      fdata.append('startDate',formData.startDate);
      fdata.append('budget',formData.budget);
      fdata.append('specialInstructions',formData.specialInstructions);
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
      <Header />
      <div className="py-16 flex items-center justify-center min-h-screen relative">
        <form onSubmit={handleSubmit} method="post">
        <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-green-300">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
            🌿 Hire a Housekeeper
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaUser className="mr-2 text-green-600" /> Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaPhoneAlt className="mr-2 text-green-600" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-600" /> Location
              </label>
              <input
                type="text"
                name="location"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                placeholder="City/State or Zip Code"
                value={formData.location}
                onChange={handleChange}
              />
            </div> */}

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaBroom className="mr-2 text-green-600" /> Type of Cleaning Service
              </label>
              <select
                name="serviceType"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select Service Type</option>
                <option value="deep-cleaning">Deep Cleaning</option>
                <option value="regular-maintenance">Regular Maintenance</option>
                <option value="move-in-out">Move-in/Move-out Cleaning</option>
                <option value="laundry">Laundry & Ironing</option>
              </select>
            </div>

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaClock className="mr-2 text-green-600" /> Cleaning Frequency
              </label>
              <select
                name="cleaningFrequency"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                value={formData.cleaningFrequency}
                onChange={handleChange}
              >
                <option value="">Select Frequency</option>
                <option value="one-time">One-time</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-600" /> Start Date
              </label>
              <input
                type="date"
                name="startDate"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaMoneyBillWave className="mr-2 text-green-600" /> Hourly Budget ($)
              </label>
              <input
                type="number"
                name="budget"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                placeholder="Enter budget per hour"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaTasks className="mr-2 text-green-600" /> Special Instructions
              </label>
              <textarea
                name="specialInstructions"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                rows="2"
                placeholder="Any specific requirements?"
                value={formData.specialInstructions}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" name="submit" className="w-full mt-6 py-3 text-lg font-semibold border-2 border-green-700 rounded-lg transition-all hover:bg-green-700 shadow-md">
            Submit Request
          </button>
        </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
