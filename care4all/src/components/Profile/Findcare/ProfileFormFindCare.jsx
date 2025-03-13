import { useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../footer/Footer";
import {useNavigate } from 'react-router-dom';

export default function ProfileFormFindCare() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    photo: null,
  });

  const s_name  = sessionStorage.getItem('Service_Name');
  const email = sessionStorage.getItem('email');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const fileName = file ? file.name : "";
    setFormData({ ...formData, photo: fileName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('name', formData.name);
    sessionStorage.setItem('address', formData.address);
    sessionStorage.setItem('photo', formData.photo );

    if(s_name == 'Child Care'){
        navigate('/Childcareform'); 
    }
    else if(s_name == 'Senior Care'){
        navigate('/HireSeniorCareForm'); 
    }
    else if(s_name == 'Pet Care'){
        navigate('/HirePetCare'); 
    }
    else if(s_name == 'Personal Tutoring'){
        navigate('/HirePersonalTutor'); 
    }
    else if(s_name == 'Housekeeping'){
        navigate('/HireHousekeeping'); 
    }
    else if(s_name == 'Physiotherapy'){
        navigate('/Physiotherapycareform'); 
    }


  };

  return (
   <>
    <Header/>
   <div className="py-16">
   <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border-2">
      <h2 className="text-2xl font-semibold mb-4">Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            // onChange={handleChange}
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