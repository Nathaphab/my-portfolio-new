import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      console.log("Form submitted:", formData);
      // TODO: เชื่อม API หรือ service เช่น EmailJS
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border rounded-lg p-2 mt-1"
              rows="4"
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 mt-2">
              ✅ Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>

      {/* Contact Info + Socials */}
      <div className="mt-8 text-center">
        <p className="text-lg">Or reach me at:</p>
        <p className="font-semibold">your.email@example.com</p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Nathaphab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-black" />
          </a>
          <a
            href="https://linkedin.com/in/Nathaphab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="mailto:your.email@example.com">
            <Mail className="w-6 h-6 hover:text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
