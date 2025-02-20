import { useState } from "react";
import "../css/signup.css"

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Registration Successful!");
            console.log("Form Submitted:", formData);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter First Name" />
                {errors.firstName && <small className="error-message">{errors.firstName}</small>}

                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter Last Name" />
                {errors.lastName && <small className="error-message">{errors.lastName}</small>}

                <label>Email ID:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
                {errors.email && <small className="error-message">{errors.email}</small>}

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Password" />
                {errors.password && <small className="error-message">{errors.password}</small>}

                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
                {errors.confirmPassword && <small className="error-message">{errors.confirmPassword}</small>}

                <button type="submit">SIGN UP</button>
            </form> 
        </div>
    );
};

export default SignUp;
