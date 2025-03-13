import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    address: '',
    age: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!/^[0-9]{10}$/.test(formData.contact)) {
      setError('Contact number must be exactly 10 digits.');
      return;
    }
    if (parseInt(formData.age) < 18) {
      setError('You must be at least 18 years old to register.');
      return;
    }    
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(formData.password)) {
      setError('Password must be at least 6 characters and contain both letters and numbers.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const emailurl = 'http://localhost/sem-6care4all-master/backend/CheckEmail.php';
    let emaildata = new FormData();
    emaildata.append('email',formData.email);
    
    const response = await axios.post(emailurl, emaildata);

    if (response.data.exists) {
      setError('Email is already registered.');
      return;
    }
    else{
      const url = 'http://localhost/sem-6care4all-master/backend/signup.php';
      let fdata = new FormData();
      fdata.append('firstname',formData.firstname);
      fdata.append('lastname',formData.lastname);
      fdata.append('email',formData.email);
      fdata.append('contact',formData.contact);
      fdata.append('age',formData.age);
      fdata.append('address',formData.address);
      fdata.append('password',formData.password);
      axios.post(url,fdata).then(response=> alert(response.data)).catch(error=> alert(error));
      navigate('/login');
    }
  };
  

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="w-5/12 fixed left-0 h-screen accent-bg text-white p-12 justify-center">
        <div className="w-100 mx-auto">
          {/* <img src="/" alt="Logo" className="h-12 mb-8" /> */}
          <h2>Care4All</h2>
          <h1 className="text-4xl font-bold my-6 ">
          Caring for Every Heart, Every Home, Every Life.
          </h1>
          <p className="text-lg">
          Where Compassion Meets Care for All Generations..
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-7/12 ml-auto bg-white p-8 lg:p-12">
        <div className="w-100">
          <h2 className="text-3xl font-bold mb-2">Registration</h2>
          <p className="text-gray-600 mb-8">Enter your details to register</p>
          
          <form onSubmit={handleSubmit} className="space-y-6" method='post'>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  required
                  name='firstname'
                  value={formData.firstname}
                  onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  required
                  name='lastname'
                  value={formData.lastname}
                  onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
                required
                name='email'
                value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
                required
                name='contact'
                maxLength={10}
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your age"
                min="0"
                required
                name='age'
                value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
                rows="3"
                required
                name='address'
                value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              ></textarea>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                maxLength={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name='password'
                value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                maxLength={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
              </label>
            </div>

            {error && <p className="text-red-500 text-center my-4"> * {error}</p>}

            {/* Submit Button */}
            <button 
              type="submit" name='submit'
              className="w-full accent-bg text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Sign up
            </button>
          </form>

          {/* Social Sign In */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign in with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaGoogle  className="h-5 w-5" />
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <FaFacebook className="h-5 w-5" />
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <FaTwitter  className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
