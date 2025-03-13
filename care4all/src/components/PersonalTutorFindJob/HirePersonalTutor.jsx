import React, { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBook,
  FaClock,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCommentDots,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

export default function HirePersonalTutor() {
  const [formData, setFormData] = useState({
    subject: "",
    schedule: "",
    startDate: "",
    budget: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
      const url = 'http://localhost/sem-6care4all-master/backend/HirePersonalTutor.php';
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
      fdata.append('subject',formData.subject);
      fdata.append('schedule',formData.schedule);
      fdata.append('startDate',formData.startDate);
      fdata.append('budget',formData.budget);
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
      <Header />
      <div className="py-16 flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} method="post">
        <div className="w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-green-300">
          {/* Title */}
          <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
            📚 Hire a Personal Tutor
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

            {/* Phone */}
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

            {/* Subject */}
            <div>
              <label className="text-lg font-semibold text-green-800 flex items-center">
                <FaBook className="mr-2 text-green-600" /> Subject Needed
              </label>
              <input
                type="text"
                name="subject"
                className="w-full mt-2 px-4 py-3 border border-green-300 rounded-lg bg-white focus:ring-2 focus:ring-green-400 text-green-800"
                placeholder="E.g. Math, Science, English"
                value={formData.subject}
                onChange={handleChange}
                required
              />
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
                required
              >
                <option value="">Select Schedule</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
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
                required
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
                required
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
          <button type="submit" name="submit" className="w-full mt-6 py-3 text-lg font-semibold btns accent2-text border-2 border-green-700 rounded-lg transition-all hover:bg-green-800 shadow-md">
            Submit Request
          </button>
        </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
