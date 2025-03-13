import Header from '../Header/Header';
import Footer from '../footer/Footer';
import { Link,useNavigate } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import React, { useState } from 'react';

const Pincode = () => {
    const [pincode, setPincode] = useState('');
    
    const cj  = sessionStorage.getItem('care/job');
    const email = sessionStorage.getItem('email');
    const photo = sessionStorage.getItem('photo');
    const s_name  = sessionStorage.getItem('Service_Name');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        sessionStorage.setItem('userPincode',pincode);
        if(!email)
        {
            navigate('/login');
        }
        else if(!photo){
            if(cj == 'care' ){
                navigate('/ProfileFormFindCare');
            }
            else if(cj == 'job' ){
                navigate('/ProfileFormFindJob');
            }
        }
        else{
            if(cj == 'care' ){
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
            }
            else{
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
            }
        }      
        
        
    };

  return (
    <div>
        <Header />
        
        {/* Main pincode code section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-24">
            <h1 className="text-2xl md:text-3xl font-bold main-text mb-8">
                Where do you need care?
            </h1>
            <form onSubmit={handleSubmit} method='post'>
            <div className="w-full max-w-md">
            <div className="mb-2 text-gray-600">Pincode code</div>
                <div className="flex justify-between items-center border rounded-lg text-xl focus:outline-none focus:border-[#2B3467] w-full p-3">
                    <input 
                        type="text"
                        className="outline-none"
                        placeholder="Enter Your Pincode"
                        maxLength={6}
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                    <Link className=" text-gray-400">
                    <IoLocationOutline />
                    </Link>
                </div>
                
                {/* <div className="text-gray-600 mt-2 text-sm">Allston, MA</div> */}
                
                <button type="submit" name="submit"  className="w-full block text-center btns border-green-600 border-3 rounded-full py-3 mt-6 text-lg font-medium">
                    Next
                </button>
            </div>
            </form>
        </div>
        
        <Footer />
    </div>
  )
}

export default Pincode;
