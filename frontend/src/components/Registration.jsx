import React from 'react';
import './css/Registration.css';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    collegeName: '',
    collegeCity: '',
    Degree: '',
    yearOfStudy: '',
    dateOfBirth: '',
    gender: ''
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('https://paryavarnam.onrender.com/user/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      if (response.data.success) {
        toast.success('Registration successful!');
        navigate('/');  // Redirect to home page
      } else {
        toast.error(response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h1 className="form-title">Student Registration</h1>
        
        <form onSubmit={handleSubmit} className="registration-form">
          {/* Personal Information Section */}
          <section className="form-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
          </section>

          {/* Address Section */}
          <section className="form-section">
            <h2 className="section-title">Address</h2>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter street address"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter zip code"
                  required
                />
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="form-section">
            <h2 className="section-title">Education</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="collegeName">College Name</label>
                <input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="Enter college name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="collegeCity">College City</label>
                <input
                  id="collegeCity"
                  name="collegeCity"
                  type="text"
                  value={formData.collegeCity}
                  onChange={handleChange}
                  placeholder="Enter college city"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="degree">Degree</label>
                <input
                  id="Degree"
                  name="Degree"
                  type="text"
                  value={formData.Degree}
                  onChange={handleChange}
                  placeholder="Enter Degree"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study</label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </section>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="spinner" />
                Submitting...
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;