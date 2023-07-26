import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // You can use formData to send the data to your server or perform any action you need.
        console.log(formData);
      };
    
    return (
        <div id="contact-section" className="h-screen w-screen text-gray-100 px-12 py-8 bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-100">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Send Message
        </button>
      </form>
        </div>
    )
};

export default Contact;
