import React, { useState } from 'react';
import './css/Registration.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
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
        Degree:'',
        yearOfStudy: '',
        dateOfBirth: '',
        gender: '',
        
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Log the data being sent
        console.log('Sending form data:', formData);
        
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5001/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            
            console.log('Response:', response.data);
            
            if (response.data.success) {
                toast.success('Registration successful!');
                navigate("/");
            }
        } catch (error) {
            // More detailed error logging
            console.error('Error details:', {
                message: error.response?.data?.message,
                status: error.response?.status,
                data: error.response?.data
            });
            
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registration-container">
            <h2 className='registration-heading'>Student Registration Form</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>College Name:</label>
                    <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>College City:</label>
                    <input
                        type="text"
                        name="collegeCity"
                        value={formData.collegeCity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Degree:</label>
                    <input
                        type="text"
                        name="Degree"
                        value={formData.Degree}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Year of Study:</label>
                    <select
                        name="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;