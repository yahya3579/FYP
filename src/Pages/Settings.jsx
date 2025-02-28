import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Key, Mail, User } from "lucide-react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import settingsService from "../API/settingsService";

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        setIsLoading(true);
        const userData = await settingsService.getSettings();
        
        // Update form with user data from API
        setFormData(prevData => ({
          ...prevData,
          name: userData.name || "",
          email: userData.email || ""
        }));
        
        setErrorMessage("");
      } catch (error) {
        console.error("Failed to fetch user settings:", error);
        setErrorMessage(error.message || "Failed to load user settings");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");
    
    // Basic validation
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setErrorMessage("New passwords do not match");
      return;
    }
    
    if (formData.newPassword && !formData.currentPassword) {
      setErrorMessage("Current password is required to set a new password");
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Prepare data to send to API
      const updateData = {
        name: formData.name,
        email: formData.email
      };
      
      // Only include password fields if user is changing password
      if (formData.newPassword && formData.currentPassword) {
        updateData.currentPassword = formData.currentPassword;
        updateData.newPassword = formData.newPassword;
      }
      
      // Send updated data to API
      await settingsService.updateUserSettings(updateData);
      
      setSuccessMessage("Settings updated successfully");
      
      // Reset password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      }));
    } catch (error) {
      console.error("Failed to update settings:", error);
      setErrorMessage(error.message || "Failed to update settings");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Settings" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl border border-gray-700 shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-6">User Settings</h2>
              
              {isLoading && (
                <div className="mb-6 p-3 bg-blue-500 bg-opacity-20 border border-blue-500 rounded text-blue-400">
                  Loading your settings...
                </div>
              )}
              
              {successMessage && (
                <div className="mb-6 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded text-green-400">
                  {successMessage}
                </div>
              )}
              
              {errorMessage && (
                <div className="mb-6 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded text-red-400">
                  {errorMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-300 border-b border-gray-700 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                      <User size={16} className="mr-2" style={{ color: "#6EE7B7" }} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                      <Mail size={16} className="mr-2" style={{ color: "#3B82F6" }} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>
                
                {/* Password Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-300 border-b border-gray-700 pb-2">
                    Change Password
                  </h3>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                      <Key size={16} className="mr-2" style={{ color: "#F59E0B" }} />
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                      <Key size={16} className="mr-2" style={{ color: "#EC4899" }} />
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
                      <Key size={16} className="mr-2" style={{ color: "#8B5CF6" }} />
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:hover:bg-blue-600"
                  >
                    <Save size={18} className="mr-2" />
                    {isLoading ? "Saving..." : "Save Changes"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;