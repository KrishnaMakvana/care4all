import React, { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {
  FaUserMd,
  FaClock,
  FaMoneyBillWave,
  FaCommentDots,
  FaCalendarAlt,  
  FaTasks,
} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function HireSeniorCare() {
  const [formData, setFormData] = useState({
    careType: "",
    schedule: "",
    startDate: "",
    budget: "",
    specialRequirements: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
      const url = 'http://localhost/sem-6care4all-master/backend/SeniorCare.php';
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
      fdata.append('schedule',formData.schedule);
      fdata.append('careType',formData.careType);
      fdata.append('startDate',formData.startDate);
      fdata.append('budget',formData.budget);
      fdata.append('specialRequirements',formData.specialRequirements);
      fdata.append('additionalNotes',formData.additionalNotes);
      
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
    <div className="py-16 flex items-center justify-center min-h-screen relative">
      {/* Form Container */}
      <form onSubmit={handleSubmit} method="post">
      <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-green-300">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
          🌿 Hire a Senior Care Provider
        </h2>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
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
          </div> */}

          {/* Phone Number */}
          {/* <div>
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
          </div> */}

          {/* Location */}
          {/* <div>
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

          {/* Care Type */}
          <div>
            <label className="text-lg font-semibold text-green-800 flex items-center">
              <FaUserMd className="mr-2 text-green-600" /> Type of Care Needed
            </label>
            <select
              name="careType"
              className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
              value={formData.careType}
              onChange={handleChange}
            >
              <option value="">Select Care Type</option>
              <option value="companion">Companionship</option>
              <option value="personal">Personal Care</option>
              <option value="mobility">Mobility Assistance</option>
              <option value="dementia">Dementia Care</option>
            </select>
          </div>

          {/* Schedule */}
          <div>
            <label className="text-lg font-semibold text-green-800 flex items-center">
              <FaClock className="mr-2 text-green-600" /> Preferred Schedule
            </label>
            <select
              name="schedule"
              className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
              value={formData.schedule}
              onChange={handleChange}
            >
              <option value="">Select Schedule</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="overnight">Overnight</option>
              <option value="weekends">Weekends Only</option>
            </select>
          </div>

          {/* Start Date */}
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

          {/* Budget */}
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

          {/* Special Requirements */}
          <div className="col-span-2">
            <label className="text-lg font-semibold text-green-800 flex items-center">
              <FaTasks className="mr-2 text-green-600" /> Special Requirements
            </label>
            <textarea
              name="specialRequirements"
              className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
              rows="2"
              placeholder="Any specific needs?"
              value={formData.specialRequirements}
              onChange={handleChange}
            />
          </div>

          {/* Additional Notes */}
          <div className="col-span-2">
            <label className="text-lg font-semibold text-green-800 flex items-center">
              <FaCommentDots className="mr-2 text-green-600" /> Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
              rows="3"
              placeholder="Other relevant details"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" name="submit" className="w-full mt-6 py-3 text-lg font-semibold btns accent2-text border-2 border-green-700 rounded-lg transition-all hover:bg-green-700 shadow-md">
          Submit Request
        </button>
      </div>
      </form>
    </div>
    <Footer/>
    </>
  );
}
