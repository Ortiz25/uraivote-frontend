import React, { useState, useEffect } from "react";
import {
  Check,
  Info,
  ChevronRight,
  Users,
  Award,
  X,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const ElectivePositionsPortal = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // Add CSS for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
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
      
      @keyframes pulseScale {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
      }
      
      .animate-slideInRight {
        animation: slideInRight 0.5s ease-out forwards;
      }
      
      .animate-pulseScale {
        animation: pulseScale 2s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const openModal = (tabIndex) => {
    setActiveTab(tabIndex);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const electivePositions = [
    {
      title: "The President",
      description:
        "This is the head of State and National Government. The President is elected by voters of the Republic of Kenya.",
    },
    {
      title: "Member of National Assembly",
      description:
        "Members of Parliament (MP), are elected to represent a Constituency in the National Assembly.",
    },
    {
      title: "Senator",
      description:
        "Member of Parliament elected to represent a County in the Senate.",
    },
    {
      title: "County Woman member of the National Assembly",
      description:
        "Member of Parliament elected to represent a County in the National assembly.",
    },
    {
      title: "County Governor",
      description: "The Elected Chief Executive of the County Government.",
    },
    {
      title: "Member of the County Assembly (MCA)",
      description: "An elected member representing an electoral ward.",
    },
  ];

  const positionsStats = [
    { title: "President", count: 1 },
    { title: "Governors", count: 47 },
    { title: "Senators", count: 47 },
    { title: "National Assembly", count: "290 + 47 women reps" },
    { title: "County Assembly", count: "1450+" },
  ];

  const nominatedStats = [
    {
      title: "Senate",
      description:
        "20 nominated to include women, 2 youth (Male and Female) and 2 Persons with disability (Male and female).",
    },
    {
      title: "National Assembly",
      description:
        "12 nominated including 2 youth (Male and Female) as well as 2 persons with disability (Male and female).",
    },
    {
      title: "County Assembly",
      description:
        "The number varies to comply with the 2/3rds gender rule as provided in Article 177 of the Constitution of Kenya 2010.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Kenya Elective Positions
            </h1>
            <p className="text-sm md:text-base opacity-90">
              Understanding Kenya's Democratic Structure
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <button
              onClick={() => openModal(1)}
              className="bg-white text-red-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Learn About Positions
            </button>

            <NavLink
              to="/"
              className="border-2 border-white text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Learn Your Rights
            </NavLink>
          </div>
        </div>
      </header>

{/* Hero Section */}
<section className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                ELECTIVE <span className="relative inline-block">
                  POSITIONS
                  <Check className="absolute -right-2 -top-2 text-black w-12 h-12" />
                </span> IN KENYA
              </h2>
              <p className="text-xl mb-8">
                The Elective positions in the National and County Government are:
              </p>
              <ul className="space-y-2 mb-8">
                {electivePositions.map((position, index) => (
                  <li key={index} className="flex items-center animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="font-bold mr-2 text-green-400">{index + 1}.</span>
                    <span>{position.title};</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => openModal(1)}
                className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center"
              >
                Learn More <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative animate-pulseScale">
                <div className="bg-yellow-300 absolute top-0 right-0 w-1/4 h-full"></div>
                <div className="relative z-10 bg-orange-300 p-8 rounded-lg shadow-xl">
                  <div className="bg-white border-4 border-orange-400 p-4 rounded mb-2 flex flex-col items-center justify-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full mb-2 flex items-center justify-center">
                      <div className="bg-red-500 w-8 h-8 rounded-full"></div>
                    </div>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                      <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                    </div>
                    <div className="text-center font-bold mt-2">VOTE</div>
                  </div>
                  <div className="absolute -top-2 -left-2 bg-green-400 rounded-full p-3">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 tracking-tight text-gray-800">
            HOW MANY ELECTIVE POSITIONS DO WE HAVE IN KENYA?
          </h2>

          <div className="bg-green-500 text-white rounded-xl overflow-hidden shadow-xl">
            <div className="p-6 md:p-10 space-y-6">
              {/* President */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="bg-white text-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">President</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-green-600 bg-opacity-40 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
              </div>

              {/* Governors */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="bg-white text-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Governors</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-green-600 bg-opacity-40 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    47
                  </div>
                </div>
              </div>

              {/* Senators */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="bg-white text-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold">Senators</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-green-600 bg-opacity-40 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    47
                  </div>
                </div>
              </div>

              {/* National Assembly */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="bg-white text-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold">National Assembly</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-green-600 bg-opacity-40 text-white rounded-full px-4 py-2 inline-flex items-center justify-center text-lg font-bold">
                    290 + 47 women reps
                  </div>
                </div>
              </div>

              {/* County Assembly */}
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="bg-white text-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    5
                  </div>
                  <h3 className="text-2xl font-bold">County Assembly</h3>
                </div>
                <div className="ml-16">
                  <div className="bg-green-600 bg-opacity-40 text-white p-4 rounded-lg">
                    <span className="font-bold text-lg">1450+</span>{" "}
                    representing wards elected and plus nominated to comply with{" "}
                    <span className="font-bold">Article 177 (1) (b)</span> on
                    the 2/3rd gender rule
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-green-700 p-4 mt-8 text-center rounded-lg">
                <p className="text-xl italic">
                  <span className="font-medium">Total:</span>{" "}
                  <span className="font-bold">1,835+</span> elected and
                  nominated positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nominated Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">
                NOMINATED POSITIONS
              </h2>
              <p className="text-lg mb-6 font-medium">
                Nominated Positions include:
              </p>

              <div className="space-y-6">
                {nominatedStats.map((item, index) => (
                  <div
                    key={index}
                    className="animate-slideInRight"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-xl font-bold text-green-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="pl-4 border-l-4 border-green-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">
                PROMOTING YOUTH WOMEN AND PERSONS WITH DISABILITIES IN ELECTIVE
                POSITIONS
              </h2>
              <p className="mb-6">
                Youth, women and persons with disability face barriers in
                political participation and representation.
              </p>
              <p className="mb-6">
                As we go to vote, let us remember that Kenya should be an
                inclusive country and we need representation of different
                groups, including women, youth and persons with disabilities.
              </p>
              <p className="font-bold text-green-600 text-lg">
                Let us vote in women, youth and persons with disabilities for
                enhanced inclusiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="mb-4">
                Developed through the Kenya Electoral Conflict Mitigation and
                Civic/Voter Education Support (ECCES) Program jointly
                implemented by Act! and Uraia Trust.
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
                <p className="mt-2">
                  Website:{" "}
                  <a
                    href="http://www.uraia.or.ke"
                    className="underline hover:text-gray-200"
                  >
                    www.uraia.or.ke
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Voter Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Electoral Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Political Parties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    Election Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-200 transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-red-500 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/api/placeholder/40/40"
                alt="Act! Logo"
                className="h-10 mr-4"
              />
              <img
                src="/api/placeholder/40/40"
                alt="Uraia Logo"
                className="h-10"
              />
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Kenya Voter Education. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto">
          <div
            className="bg-black opacity-50 w-full h-full absolute"
            onClick={closeModal}
          ></div>
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b bg-red-600 text-white">
              <h2 className="text-lg sm:text-xl font-bold">
                Kenya's Elective Positions
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b bg-gray-50 overflow-x-auto scrollbar-hide">
              <div className="flex p-2 sm:p-4 min-w-max">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-lg mr-2 transition-colors ${
                    activeTab === 1
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  National Positions
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-lg mr-2 transition-colors ${
                    activeTab === 2
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  County Positions
                </button>
                <button
                  onClick={() => setActiveTab(3)}
                  className={`px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-2 rounded-lg transition-colors ${
                    activeTab === 3
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  Nominated Positions
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
              {/* National Positions Tab */}
              {activeTab === 1 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-red-600">
                    National Government Elective Positions
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {electivePositions.slice(0, 4).map((position, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-600 hover:shadow-md transition-all animate-slideInRight"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start sm:items-center">
                          <span className="bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 inline-flex items-center justify-center mr-3 mt-1 sm:mt-0">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-bold text-base sm:text-lg mb-1">
                              {position.title}
                            </h4>
                            <p className="text-sm sm:text-base">
                              {position.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-600 mt-6 sm:mt-8">
                      <h4 className="font-bold mb-2 text-base sm:text-lg">
                        National Elective Positions - Statistics
                      </h4>
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                            <Check size={16} />
                          </span>
                          <span>President: 1</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                            <Check size={16} />
                          </span>
                          <span>
                            National Assembly: 290 representing Constituencies
                            plus 47 women from counties
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                            <Check size={16} />
                          </span>
                          <span>Senators: 47</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* County Positions Tab */}
              {activeTab === 2 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-red-600">
                    County Government Elective Positions
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {electivePositions.slice(4, 6).map((position, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-600 hover:shadow-md transition-all animate-slideInRight"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start sm:items-center">
                          <span className="bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 inline-flex items-center justify-center mr-3 mt-1 sm:mt-0">
                            {index + 5}
                          </span>
                          <div>
                            <h4 className="font-bold text-base sm:text-lg mb-1">
                              {position.title}
                            </h4>
                            <p className="text-sm sm:text-base">
                              {position.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border-l-4 border-green-600 mt-6 sm:mt-8">
                      <h4 className="font-bold mb-2 text-base sm:text-lg">
                        County Elective Positions - Statistics
                      </h4>
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                            <Check size={16} />
                          </span>
                          <span>Governors: 47</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1 flex-shrink-0">
                            <Check size={16} />
                          </span>
                          <span>
                            Member of County Assembly: 1450+ representing wards
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Nominated Positions Tab */}
              {activeTab === 3 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-red-600">
                    Nominated Positions
                  </h3>

                  <div className="space-y-4 sm:space-y-6">
                    {nominatedStats.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-red-600 hover:shadow-md transition-all animate-slideInRight"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h4 className="font-bold text-base sm:text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    ))}

                    <div
                      className="bg-yellow-50 p-3 sm:p-5 rounded-lg border-l-4 border-yellow-600 mt-6 sm:mt-8 animate-fadeIn"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <h4 className="font-bold mb-2 text-base sm:text-lg">
                        Promoting Inclusivity
                      </h4>
                      <p className="mb-3 text-sm sm:text-base">
                        Youth, women and persons with disability face barriers
                        in political participation and representation.
                      </p>
                      <p className="mb-3 text-sm sm:text-base">
                        As we go to vote, let us remember that Kenya should be
                        an inclusive country and we need representation of
                        different groups, including women, youth and persons
                        with disabilities.
                      </p>
                      <p className="font-bold text-green-600 text-sm sm:text-base">
                        Let us vote in women, youth and persons with
                        disabilities for enhanced inclusiveness.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t p-3 sm:p-4 bg-gray-50 flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-gray-400 transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center"
              >
                <Check size={16} className="mr-1" /> Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectivePositionsPortal;
