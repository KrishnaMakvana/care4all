import { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../footer/Footer";
import {useNavigate } from 'react-router-dom';

export default function ProfileFormFindJob() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    experience: "",
    ratings:"",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const fileName = file ? file.name : "";
    setFormData({ ...formData, photo: fileName });
  };
  const s_name  = sessionStorage.getItem('Service_Name');
  const email = sessionStorage.getItem('email');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('name', formData.name);
    sessionStorage.setItem('address', formData.address);
    sessionStorage.setItem('photo', formData.photo );
    sessionStorage.setItem('experience', formData.experience );
    sessionStorage.setItem('ratings', formData.ratings );
    
    if(s_name == 'Child Care'){
      navigate('/FindJobChild2'); 
    }
    else if(s_name == 'Senior Care'){
        navigate('/SeniorFindJob'); 
    }
    else if(s_name == 'Pet Care'){
        navigate('/PetFindJob'); 
    }
    else if(s_name == 'Personal Tutoring'){
        navigate('/PersonalTutorFindJob'); 
    }
    else if(s_name == 'Housekeeping'){
        navigate('/HousekeepingFindJob'); 
    }
    else if(s_name == 'Physiotherapy'){
        navigate('/PhysiotherapyJobForm'); ``
    }
  };

  return (
   <>
    <Header/>
   <div className="py-16">
   <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border-2">
      <h2 className="text-2xl font-semibold mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4" method="post">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>


        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Ratings</label>
          <input
            type="number"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full btns border-2 border-green-700 accent2-text p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
   </div>
    <Footer/>
   </>
  );
}