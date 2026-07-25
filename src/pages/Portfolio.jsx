import React, { useState } from "react";
import './Portfolio.css' 

const projects = [
  { title: "Modern Living Room", image: "/images/living-room.jpg" },
  { title: "Minimalist Kitchen", image: "/images/kitchen.jpg" },
  { title: "Cozy Bedroom", image: "/images/bedroom.jpg" },
  { title: "Outdoor Patio", image: "/images/patio.jpg" },
  
  { title: "Luxury Bathroom", image: "/images/bathroom.jpeg" },
];

export default function Portfolio() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Sarah J.",
      message: "Absolutely loved the design! My house feels like a dream.",
      image: "/images/user1.jpg",
    },
    {
      name: "Michael B.",
      message: "Professional and creative. Highly recommended!",
      image: "/images/user2.jpg",
    },
    {
      name: "Emma W.",
      message: "Their attention to detail is amazing. Great experience!",
      image: "/images/user3.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    image: null,
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message && formData.imageUrl) {
      const newFeedback = {
        name: formData.name,
        message: formData.message,
        image: formData.imageUrl,
      };
      setFeedbacks([newFeedback, ...feedbacks]);
      setFormData({ name: "", message: "", image: null, imageUrl: "" });
    } else {
      alert("Please fill out all fields and upload an image.");
    }
  };

  return (
    <div className="portfolio-wrapper">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
          <a href="#feedback">Feedback</a>
        </nav>
      </header>

      <section className="gallery-section">
        <h2>Our Work</h2>
        <div className="gallery">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <img src={project.image} alt={project.title} className="project-image"/>
              <div className="card-content"><h3>{project.title}</h3></div>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback-form-section">
        <h2 className="section-title">Leave Your Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="preview-image"
            />
          )}
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <section id="feedback" className="feedback-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="feedback-list">
          {feedbacks.map((fb, i) => (
            <div key={i} className="feedback-card">
              <div className="testimonial">
                <img src={fb.image} alt={fb.name} className="testimonial-img" />
                <div className="testimonial-text">
                <h4>{fb.name}</h4>
              </div>
              <p>"{fb.message}"</p>
            </div>
            </div>
          ))}
        </div>
      </section>
</div>
);
}
