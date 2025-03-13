import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import axios from "axios";

export default function ServiceSelection() {
  const s_name = sessionStorage.getItem('Service_Name');

  const [selectedServices, setSelectedServices] = useState(s_name ? [s_name] : []);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleNextClick = () => {
    if (selectedServices.length === 1) {
      setShowModal(true);
    } else {
      navigate("/FindJobChild2");
    }
  };
  const [services, setServices] = useState([]);
  useEffect(() => {
      const fetchdata = async () =>
      {
        const res = await axios.get("http://localhost/sem-6care4all-master/backend/FetchServices.php");
        console.log("Fetched Data:", res.data);
        setServices(res.data)
      };
      fetchdata();
  
    }, []);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Do you provide any other services?</h2>
        <div className="w-full max-w-md space-y-3">
          {services.map((service) => (
            <label
              key={service.service_name}
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-3">
                <img src={`http://localhost/sem-6care4all-master/care4all/src/assets/images/${service.image}`} alt={service.service_name} className="w-6 h-6" />
                <span className="text-lg font-medium">{service.service_name}</span>
              </div>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.service_name)}
                onChange={() => toggleService(service.service_name)} 
                className="w-5 h-5 text-blue-500"
              />
            </label>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="mt-6 px-6 py-2 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600"
        >
          Next
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
              <p className="text-lg">Do you want to continue without selecting another service?</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-200"
                >
                  No, go back
                </button>
                <button
                  onClick={() => navigate("/FindJobChild2")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
