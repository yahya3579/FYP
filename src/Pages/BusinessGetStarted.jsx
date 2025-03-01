import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ClipboardList } from "lucide-react";

export default function BusinessGetStarted() {
  const [activeTab, setActiveTab] = useState('Employees or individuals');
  const [activeDropDown, setActiveDropDown] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = (dropdown) => {
    if (activeDropDown === dropdown) {
      setActiveDropDown(null);
    } else {
      setActiveDropDown(dropdown);
    }
  };

  const renderOverviewDropdown = () => {
    if (activeDropDown !== 'overview') return null;
    
    return (
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 gap-8">
            {/* About Us Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-red-600 mr-2">📋</span> About us
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">The platform</h4>
                  <p className="text-sm text-gray-600">Get the best of VOC, for business—including improved cost controls and compliance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expense integrations</h4>
                  <p className="text-sm text-gray-600">Save time with automatic expense reconciliation</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sustainability</h4>
                  <p className="text-sm text-gray-600">Get clear climate metrics such as total low-emission trips and average CO₂ per mile.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Safety</h4>
                  <p className="text-sm text-gray-600">We make your health and safety top priorities.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Employee benefits</h4>
                  <p className="text-sm text-gray-600">All the advantages of VOC your employees already love, for business.</p>
                </div>
              </div>
            </div>
            
            {/* Products Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-blue-600 mr-2">⊞</span> Products
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">The dashboard</h4>
                  <p className="text-sm text-gray-600">It all starts here - manage travel and meal programs with easy to set cost controls and more.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business profiles</h4>
                  <p className="text-sm text-gray-600">Help your employees connect with your company's VOC for Business account.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delegate booking</h4>
                  <p className="text-sm text-gray-600">Enable executive assistants to arrange work transportation for executives with a delegate profile.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Central</h4>
                  <p className="text-sm text-gray-600">Request rides and deliveries on behalf of customers.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Gift cards</h4>
                  <p className="text-sm text-gray-600">Purchase VOC gift cards in bulk for simplified giving.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">VOC Health</h4>
                  <p className="text-sm text-gray-600">Reimagine the way patients access care.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">VOC One</h4>
                  <p className="text-sm text-gray-600">Offer business-class perks with an VOC One company membership.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Vouchers</h4>
                  <p className="text-sm text-gray-600">Cover the cost of rides and meals, and pay only when used.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSolutionsDropdown = () => {
    if (activeDropDown !== 'solutions') return null;
    
    return (
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 gap-8">
            {/* By use case Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-orange-600 mr-2">★</span> By use case
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Business travel</h4>
                  <p className="text-sm text-gray-600">Oversee your travel program with the flexibility and reporting you need.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Employee commute</h4>
                  <p className="text-sm text-gray-600">Set up a stress-free commute program for your employees.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Event transport</h4>
                  <p className="text-sm text-gray-600">Get attendees to and from your next event.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Courtesy rides</h4>
                  <p className="text-sm text-gray-600">Request rides for customers and guests with ease, even if they don't have the VOC site.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Meal programs</h4>
                  <p className="text-sm text-gray-600">One platform gives you the control to provide meals in multiple ways.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Employee benefits</h4>
                  <p className="text-sm text-gray-600">Recruit, retain, and reward your employees with VOC perks they want.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Corporate gifting</h4>
                  <p className="text-sm text-gray-600">Purchase VOC gift cards in bulk for simplified giving.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exec management</h4>
                  <p className="text-sm text-gray-600">Request rides and meals for leaders.</p>
                </div>
              </div>
            </div>
            
            {/* By industry Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="text-gray-600 mr-2">🏛</span> By industry
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Automotive</h4>
                  <p className="text-sm text-gray-600">Elevate customer service with on-demand rides.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Healthcare</h4>
                  <p className="text-sm text-gray-600">Improve health outcomes and the patient experience by enabling better access to care.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hospitality</h4>
                  <p className="text-sm text-gray-600">Delight your guests with rides and meals.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Consulting and financial</h4>
                  <p className="text-sm text-gray-600">Keep your employees moving and your clients happy.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Government</h4>
                  <p className="text-sm text-gray-600">Offer rides and meals to employees and constituents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCustomerSupportDropdown = () => {
    if (activeDropDown !== 'support') return null;
    
    return (
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              {/* Assuming Headphones icon is imported or available */}
              <ClipboardList className="w-6 h-6 mr-2 text-blue-600" /> Support
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Help Center</h4>
                <p className="text-sm text-gray-600">For admins and coordinators to browse tips and topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResourcesDropdown = () => {
    if (activeDropDown !== 'resources') return null;
    
    return (
      <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ClipboardList className="w-6 h-6 mr-2 text-blue-600" /> Learn
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Learning hub</h4>
                <p className="text-sm text-gray-600">Explore product education, case studies, and industry insights.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Customer stories</h4>
                <p className="text-sm text-gray-600">See how innovative companies work with us.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Blog</h4>
                <p className="text-sm text-gray-600">Get the latest news from VOC for Business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // Added top padding to avoid overlap with fixed navigation
    <div className="min-h-screen pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a className="text-xl font-bold">
                VOC<br />
                for Business
              </a>
              <div className="hidden md:flex ml-10 space-x-8">
                <button 
                  className="flex items-center text-sm font-medium hover:text-gray-300"
                  onClick={() => handleDropdownClick('overview')}
                >
                  Overview <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropDown === 'overview' ? 'rotate-180' : ''}`} />
                </button>
                <button 
                  className="flex items-center text-sm font-medium hover:text-gray-300"
                  onClick={() => handleDropdownClick('solutions')}
                >
                  Solutions <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropDown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <a href="/pricing" className="text-sm font-medium hover:text-gray-300">
                  Pricing
                </a>
                <button 
                  className="flex items-center text-sm font-medium hover:text-gray-300"
                  onClick={() => handleDropdownClick('support')}
                >
                  Customer support <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropDown === 'support' ? 'rotate-180' : ''}`} />
                </button>
                <button 
                  className="flex items-center text-sm font-medium hover:text-gray-300"
                  onClick={() => handleDropdownClick('resources')}
                >
                  Resources <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropDown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/contact" className="text-sm font-medium hover:text-gray-300">
                Contact us
              </a>
              <a href="/BusinessSignIn" className="text-sm font-medium hover:text-gray-300">
                Log in
              </a>
              <a href='/signup' className='text-sm font-medium hover:text-gray-300'>
                Sign Up
              </a>
              <a
                href="/signup"
                className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        {renderOverviewDropdown()}
        {renderSolutionsDropdown()}
        {renderCustomerSupportDropdown()}
        {renderResourcesDropdown()}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            2 ways to get started with VOC for Business
          </h1>
          {/* Two column layout */}
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="/women on computer.svg"
                alt="Women working on a computer"
                className="mb-6 w-48 md:w-56 lg:w-64"
              />
              <h2 className="text-xl font-semibold mb-4">
                1. A self-serve approach to get set up in minutes
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>The fastest way to sign up for companies for all sizes</li>
                <li>Streamlined onboarding and the ability to pay with one credit card with zero service fees</li>
                <li>Access to dashboard features, including integrations with leading expense platforms, sustainability metrics, and customer support</li>
              </ul>
              <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800" onClick={() => navigate('/signup')}>
                Sign up now
              </button>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="/man with headphones.svg"
                alt="Man with headphones"
                className="mb-6 w-48 md:w-56 lg:w-64"
              />
              <h2 className="text-xl font-semibold mb-4">
                2. A tailored experience to fit your company's needs
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>For companies with more than 250 employees</li>
                <li>Streamlined onboarding, ability to manage multiple payment methods, invoicing support, and zero service fees</li>
                <li>Access to dashboard features, including intergrations with leading expense platforms, sustainability metrics, and customer support</li>
              </ul>
              <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading & subheading */}
          <h2 className="text-2xl font-bold text-black mb-2">
            Not quite ready to get started?
          </h2>
          <p className="text-gray-700 mb-8">
            Check out these resources to learn more about how Uber for Business
            can help support your employees and customers.
          </p>

          {/* Three-column layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <img
                src="/guide.svg"
                alt="Guide icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">
                Our official product guide
              </h3>
              <p className="text-gray-700 mb-4">
                Learn more about the power of VOC for Business in every region around the world 
                and how our global platform can offer custom solutions.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <img
                src="/road.svg"
                alt="Wellbeing icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">
                Prioritizing corporate traveler well-being
              </h3>
              <p className="text-gray-700 mb-4">
                To focus on your business travelers' health and wellness and keep them
                happy on the road, try these 4 tips.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <img
                src="/leaf.svg"
                alt="Sustainability icon"
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">
                Let’s rise to the challenge of sustainability
              </h3>
              <p className="text-gray-700 mb-4">
                Tackling climate change is a team effort. As a proud sustainability
                partner of companies worldwide, we can help turn climate goals into
                ongoing impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
