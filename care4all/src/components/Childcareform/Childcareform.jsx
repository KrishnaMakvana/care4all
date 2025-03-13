import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const Childcareform = () => {
  const [formData, setFormData] = useState({
    whenNeeded: '',
    careType: '',
    additionalServices: []
  });

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
      const url = 'http://localhost/sem-6care4all-master/backend/ChildCare.php';
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
      fdata.append('whenNeeded',formData.whenNeeded);
      fdata.append('careType',formData.careType);
      fdata.append('additionalServices',formData.additionalServices);
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
    <div className="container py-5">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" method='post'>
        {/* Question 1 */}
        <div className="row mb-8">
          <div className="col-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                When do you need care?
              </h2>
              <div className="row g-3">
                {['Right now', 'Within a week', 'In 1-2 months', 'Just browsing'].map((option) => (
                  <div className="col-12 col-md-6" key={option}>
                    <label className="w-full p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors flex items-center">
                      <input
                        type="radio"
                        name="whenNeeded"
                        value={option}
                        onChange={(e) => setFormData({...formData, whenNeeded: e.target.value})}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="row mb-8">
          <div className="col-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What kind of care are you looking for?
              </h2>
              <div className="row g-3">
                {[
                  {
                    title: 'Nannies / recurring sitters',
                    desc: 'Hire for regular hours, ongoing care, full or part-time'
                  },
                  {
                    title: 'One-time sitters',
                    desc: 'Instantly book for events, occasional plans or backup care'
                  },
                  {
                    title: 'Daycare centers',
                    desc: 'Find daycares, learning centers, or pre-schools near you'
                  }
                ].map((option) => (
                  <div className="col-12 col-md-6" key={option.title}>
                    <label className="w-full p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="careType"
                        value={option.title}
                        onChange={(e) => setFormData({...formData, careType: e.target.value})}
                        className="mr-3"
                        required
                      />
                      <div>
                        <span className="font-medium text-gray-800 block">{option.title}</span>
                        <span className="text-sm text-gray-500">{option.desc}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="row mb-8">
          <div className="col-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Do you need any other types of care?
              </h2>
              <div className="row g-3">
                {['Senior care', 'Pet care', 'Housekeeping', 'Tutoring'].map((service) => (
                  <div className="col-12 col-md-6" key={service}>
                    <label className="w-full p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors flex items-center">
                      <input
                        type="checkbox"
                        value={service}
                        onChange={(e) => {
                          const services = e.target.checked 
                            ? [...formData.additionalServices, service]
                            : formData.additionalServices.filter(s => s !== service);
                          setFormData({...formData, additionalServices: services});
                        }}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit" 
            name="submit"
            className="bg-red-400 hover:bg-red-500 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Childcareform;
