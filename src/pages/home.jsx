import React, { useState, useEffect } from 'react';
import photo1 from "../assets/photo1.png"
import { NavLink } from "react-router-dom";

import { ChevronDown, ChevronUp, Check, Twitter, Facebook, Linkedin, Info, Users, Award, X, ChevronRight, ChevronLeft } from 'lucide-react';

const VoterEducationPortal = () => {

    // Add CSS for animations
useEffect(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    .animate-slideInRight {
      animation: slideInRight 0.5s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
  
  return () => {
    document.head.removeChild(style);
  };
}, []);


  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [showCallToAction, setShowCallToAction] = useState(false);
  
  // Add a debugging log whenever activeTab changes
  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);
  
  const openModal = () => {
    setShowModal(true);
    setActiveTab(1); // Ensure we always start at tab 1
  };
  
  const closeModal = () => {
    setShowModal(false);
    setShowCallToAction(true);
  };
  
  const nextTab = () => {
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    }
  };
  
  const prevTab = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };
  
  const setTab = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* <div className="mr-4">
              <img src="/api/placeholder/80/80" alt="Logo" className="h-14 w-14" />
            </div> */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Kenya Voter Education</h1>
              <p className="text-sm md:text-base opacity-90">Empowering Citizens for Democratic Participation</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={openModal}
              className="bg-white text-red-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Learn Your Rights
            </button>
            <NavLink to="/positions" className="border-2 border-white text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
              Kenya's Elective Positions
            </NavLink>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              WHY YOU <span className="text-green-400">SHOULD <Check className="inline" size={46} /></span> VOTE
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Voting is a political entitlement for all Kenyan citizens. It provides a chance to have a say in choosing people who will represent you and address issues that affect you.
            </p>
            {/* <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Business People</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Environment</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Climate Change</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Youth</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Women</span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm">Persons with Disabilities</span>
            </div> */}
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="animate-pulse absolute -top-4 -right-4 bg-green-400 rounded-full p-6">
                <Check className="w-12 h-12 text-white" />
              </div>
              <img src={photo1} alt="Voting Illustration" className="rounded-lg shadow-xl h-150 w-150" />
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={openModal}
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center"
            >
              Learn More <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Voter Education Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-red-600 flex items-center justify-center">
                <Award className="text-white w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Political Entitlements</h3>
                <p className="text-gray-600 mb-4">Learn about your rights as a Kenyan citizen to participate in the political process.</p>
                <button 
                  onClick={() => {
                    openModal();
                    setTab(1);
                  }}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  Read More →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-red-600 flex items-center justify-center">
                <Users className="text-white w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Special Interest Groups</h3>
                <p className="text-gray-600 mb-4">Understand how persons with disabilities, youth, and women can participate effectively.</p>
                <button 
                  onClick={() => {
                    openModal();
                    setTab(2);
                  }}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  Read More →
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-red-600 flex items-center justify-center">
                <Info className="text-white w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Electoral Resources</h3>
                <p className="text-gray-600 mb-4">Access educational materials about voter registration, procedures, and election calendar.</p>
                <button 
                  onClick={() => {
                    openModal();
                    setTab(3);
                  }}
                  className="text-red-600 font-bold hover:text-red-800"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Only visible after modal is closed */}
      {showCallToAction && (
        <section 
          className="bg-white py-16 animate-fade-in-down"
          style={{
            animation: 'fadeInDown 0.8s ease-out forwards'
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make Your Voice Heard?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Your vote matters. Be informed, be prepared, and participate in shaping Kenya's future.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition duration-300">
                Check Voter Status
              </button>
              <NavLink to="/positions" className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300">
              Kenya's Elective Positions
              </NavLink>
            </div>
          </div>
        </section>
      )}
      
      {/* Footer */}
      <footer className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="mb-4">
                Developed through the Kenya Electoral Conflict Mitigation and Civic/Voter Education Support (ECCES) Program jointly implemented by Act! and Uraia Trust.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <address className="not-italic">
                <p>Jacaranda Avenue, off Gitanga Road</p>
                <p>P. O. Box 28151-00100 Nairobi, Kenya</p>
                <p>+254 (0) 20 213 5561 / 2</p>
                <p className="mt-2">Website: <a href="http://www.uraia.or.ke" className="underline hover:text-gray-200">www.uraia.or.ke</a></p>
              </address>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-200 transition-colors">Voter Registration</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Electoral Process</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Political Parties</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">Election Calendar</a></li>
                <li><a href="#" className="hover:text-gray-200 transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-red-500 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/api/placeholder/40/40" alt="Act! Logo" className="h-10 mr-4" />
              <img src="/api/placeholder/40/40" alt="Uraia Logo" className="h-10" />
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Kenya Voter Education. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {/* Modal */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
    <div className="bg-black opacity-50 w-full h-full absolute"></div>
    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden animate-fadeIn">
      {/* Modal Header */}
      <div className="flex justify-between items-center p-6 border-b bg-red-600 text-white">
        <h2 className="text-xl font-bold">Voter Education Information</h2>
        <button 
          onClick={closeModal} 
          className="text-white hover:text-gray-200"
        >
          <X size={24} />
        </button>
      </div>
      
      {/* Tabs Navigation */}
      <div className="border-b bg-gray-50">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeTab >= 1 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <span className="hidden sm:inline font-medium">Political Entitlements</span>
          </div>
          <div className="flex-grow mx-4 h-1 bg-gray-200">
            <div className={`h-full bg-red-600 ${activeTab >= 2 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeTab >= 2 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <span className="hidden sm:inline font-medium">Special Interest Groups</span>
          </div>
          <div className="flex-grow mx-4 h-1 bg-gray-200">
            <div className={`h-full bg-red-600 ${activeTab >= 3 ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeTab >= 3 ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
              3
            </div>
            <span className="hidden sm:inline font-medium">Electoral Resources</span>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
        {/* Tab 1: Political Entitlements */}
        {activeTab === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Political Entitlements</h3>
            <p className="text-lg font-semibold mb-4">Every citizen including youth, women, persons with disabilities and minorities are entitled to:</p>
            <ul className="space-y-3">
              {[
                "To form or participate in the formation of a Political Party",
                "To campaign for a Political Party or a cause",
                "Free, fair, and regular elections based on universal suffrage (the right to vote at 18 years, regardless of age, sex, wealth, income, ethnicity, political stance or any restrictions)",
                "To be informed through different mediums (be careful about misinformation)",
                "To participate in political meetings",
                "Contest for elections",
                "Be registered as a voter",
                "Vote by secret ballot on any election or referendum",
                "Be a candidate for public office or office within a Political Party of which the citizen is a member"
              ].map((item, index) => (
                <li key={index} className="flex items-start animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-green-500 mr-2 mt-1"><Check size={18} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Tab 2: Special Interest Groups */}
        {activeTab === 2 && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Special Interest Groups</h3>
            <p className="text-lg font-semibold mb-4">Special interest groups also need to:</p>
            <ul className="space-y-3">
              {[
                "Have access to all materials and devices to overcome constraints that may impede their enjoyment of political rights",
                "Have opportunities to associate, be represented and participate in political activities",
                "Persons with disabilities, youth and women have a right to be treated with dignity and respect",
                "They have the rights to have access to all places, political rallies, and information"
              ].map((item, index) => (
                <li key={index} className="flex items-start animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="text-green-500 mr-2 mt-1"><Check size={18} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-red-600 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <p className="mb-4">Political rallies need to be done in an inclusive manner, and in a manner in which there is no violence or insecurity so that women, and persons with disabilities can participate.</p>
              <p>It is also important to have meaningful participation of youth women, and persons with disabilities as active participants in the political process, not just passive.</p>
            </div>
          </div>
        )}
        
        {/* Tab 3: Electoral Resources */}
        {activeTab === 3 && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Electoral Resources</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Voter Registration",
                  description: "Learn about the registration process, required documents, and deadlines for registering as a voter."
                },
                {
                  title: "Voting Procedures",
                  description: "Understand the voting process, how to mark your ballot correctly, and what to expect on election day."
                },
                {
                  title: "Election Calendar",
                  description: "View important dates and deadlines for the upcoming election cycle."
                },
                {
                  title: "Civic Education Materials",
                  description: "Access educational resources on democracy, governance, and citizen participation."
                }
              ].map((resource, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600 hover:shadow-md transition-all animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="font-bold mb-2">{resource.title}</h4>
                  <p>{resource.description}</p>
                  <button className="mt-2 text-red-600 font-semibold hover:text-red-800 flex items-center">
                    Learn More <ChevronRight className="ml-1" size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Modal Footer */}
      <div className="border-t p-6 flex justify-between bg-gray-50">
        <button 
          onClick={prevTab}
          className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${activeTab > 1 ? 'border border-red-600 text-red-600 hover:bg-red-50' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          disabled={activeTab === 1}
        >
          <div className="flex items-center">
            <ChevronLeft size={20} className="mr-1" />
            Previous
          </div>
        </button>
        
        {activeTab !== 3 ? (
          <button 
            onClick={nextTab}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-all duration-300"
          >
            <div className="flex items-center">
              Next
              <ChevronRight size={20} className="ml-1" />
            </div>
          </button>
        ) : (
          <button 
            onClick={closeModal}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition-all duration-300"
          >
            <div className="flex items-center">
              Got it!
              <Check size={20} className="ml-1" />
            </div>
          </button>
        )}
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default VoterEducationPortal;