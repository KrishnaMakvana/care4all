import React, { useEffect, useState } from 'react'
import '../../styles/style.scss'
import { Link ,useNavigate} from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import logo from '../../assets/images/logo.png';
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll,setScroll] = useState(false)//jyare false hoi tyare header transparent rey 
  const [showServices, setShowServices] = useState(false); 
  const services = [
    { name: "Child Care", path: "/Childcare" },
    { name: "Senior Care", path: "/Seniorcare" },
    { name: "Pet Care", path: "/Petcare" },
    { name: "Personal Tutoring", path: "/personal-tutoring" },
    { name: "Physiotherapy", path: "/physiotherapy" },
    { name: "Housekeeping", path: "/housekeeping" }
  ];

  const email = sessionStorage.getItem('email');
  const photo = sessionStorage.getItem('photo');
  const name = sessionStorage.getItem('name');
  const navigate = useNavigate();
  useEffect(()=>{

    const handleScroll = () => {
      if(window.scrollY > 60){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  const handleClick = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('photo');
    sessionStorage.removeItem('name');
    navigate('/');
  };

  const handleLogin = () => {
    if (!email) {
      return (
        <Link to="/login">
          <FiLogIn className="fs-3" />
        </Link>
      );
    }
    
    if (photo) {
      return (
        <button onClick={() => setOpen(true)}>
          <img
            src={`http://localhost/sem-6care4all-master/care4all/src/assets/images/${photo}`}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </button>
      );
    }

    return (
      <button onClick={handleLogout}>
        <FiLogOut className="fs-3" />
      </button>
    );
  };
  
  return (
    <>
      <header className={`bg-transparent py-7 px-7 sticky z-50 w-100 top-0 transition-all duration-300 ${scroll ? 'backdrop-blur-md bg-opacity-75 bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between col-12">
                <div className="logo font-serif font-bold main-text col-4">
                  <a href="#">
                    <img src={logo} className='h-20'></img>
                  </a>
                </div>
                <div className='col-6'>
                    <ul className="flex flex-wrap w-100 justify-between m-0 items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">AboutUs</Link></li>
                        <li><Link to="/contactus">ContactUs</Link></li>
                        <li>
                            <a href="#">
                                <button className='rounded-pill px-4 py-2 accent-bg text-white'>Join Now</button>
                            </a>
                        </li>
                        <li className='relative'>
                        <button>
                        <CiMenuKebab  onClick={() => setShowServices(!showServices)}
                              className="p-1 hover:bg-gray-100 rounded-full text-4xl"/>
                        </button>
                        {showServices && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                {services.map((service, index) => (
                                  <Link
                                    key={index}
                                    to={service.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                        )}
                        </li>
                        <li>{handleLogin()}                       
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
      </header>

       {/* Modal for Profile Sidebar */}
       <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-all duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          transition: 'transform 0.3s ease-out',
          zIndex: 1000,
        }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">{name ? name : 'Guest User'}</h2>
          <button onClick={() => setOpen(false)} className="text-2xl font-bold">×</button>
        </div>

        <div className="flex items-center p-4 border-b">
          {photo ? (
            <img
              src={`http://localhost/sem-6care4all-master/care4all/src/assets/images/${photo}`}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4" />
          )}
          <h3 className="text-lg">{name ? name : 'Guest User'}</h3>
        </div>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay to close the modal when clicked outside */}
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
          style={{
            zIndex: 999,
          }}
        ></div>
      )}
      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
      >
        <Box className="modal-content w-64 bg-white p-4 rounded-md shadow-lg">
          <div className="flex items-center mb-4">
            {photo ? (
              <img
                src={`http://localhost/sem-6care4all-master/care4all/src/assets/images/${photo}`}
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-full mr-4" />
            )}
            <h2 className="text-xl font-semibold">{name ? name : 'Guest User'}</h2>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        </Box>
      </Modal> */}
    </>
    
  )
  
}

export default Header
