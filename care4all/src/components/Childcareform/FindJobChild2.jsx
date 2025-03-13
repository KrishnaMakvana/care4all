import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export default function FindJobChild2() {
  const [NumberOfChild, setNumberOfChild] = useState(1);
  const [selectedAges, setSelectedAges] = useState([]);
  const [hourlyRate, setHourlyRate] = useState(17);

  const ageGroups = ["0 - 11 mos", "1 - 3 yrs", "4 - 5 yrs", "6 - 11 yrs", "12+ yrs"];

  const toggleAgeSelection = (age) => {
    setSelectedAges((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age]
    );
  };

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
      const url = 'http://localhost/sem-6care4all-master/backend/ChildJob.php';
      let fdata = new FormData();
      const email = sessionStorage.getItem('email');
      const name = sessionStorage.getItem('name');
      const pincode = sessionStorage.getItem('userPincode');
      const address = sessionStorage.getItem('address');
      const photo = sessionStorage.getItem('photo');
      const experience = sessionStorage.getItem('experience');
      const ratings = sessionStorage.getItem('ratings');
      fdata.append('name',name);
      fdata.append('email',email);
      fdata.append('pincode',pincode);
      fdata.append('address',address);
      fdata.append('photo',photo);
      fdata.append('experience',experience);
      fdata.append('ratings',ratings);
      fdata.append('NumberOfChild',NumberOfChild);
      fdata.append('selectedAges',selectedAges.join(','));
      fdata.append('hourlyRate',hourlyRate);
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
    <form method="post" onSubmit={handleSubmit}>
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Who would you like to care for?</h2>
      <p className="text-lg mb-2">I'm comfortable caring for:</p>
      <div className="flex items-center space-x-4 mb-4">
        <div 
          className="px-4 py-2 bg-gray-300 rounded-full text-xl"
          onClick={() => setNumberOfChild((prev) => Math.max(1, prev - 1))}
        >
          -
        </div>
        <span className="text-xl font-bold">{NumberOfChild}</span>
        <div 
          className="px-4 py-2 bg-gray-300 rounded-full text-xl"
          onClick={() => setNumberOfChild((prev) => prev + 1)}
        >
          +
        </div>
      </div>
      <p className="text-lg">Child</p>
      
      <h3 className="text-lg font-semibold mt-6">Ages</h3>
      <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
      <div className="flex flex-wrap gap-3">
        {ageGroups.map((age) => (
          <div
            key={age}
            className={`px-4 py-2 border rounded-full ${selectedAges.includes(age) ? "bg-blue-500 text-white" : "bg-white"}`}
            onClick={() => toggleAgeSelection(age)}
          >
            {age}
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">My hourly rate</h3>
      <div className="flex items-center space-x-3 mt-2">
        <span className="text-2xl font-bold text-blue-600">${hourlyRate}</span>
        <span className="text-gray-500">/hr</span>
      </div>
      <input 
        type="range" 
        min="10" max="50" 
        value={hourlyRate} 
        onChange={(e) => setHourlyRate(e.target.value)} 
        className="w-64 mt-2"
      />
      
      <button type="submit" className="mt-6 px-6 py-3 btns border-2 border-green-700 accent-text text-lg rounded-lg hover:bg-red-600">
        Next
      </button>
    </div>
    </form>
    <Footer/>
   </>
  );
}
