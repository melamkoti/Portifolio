import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        "service_z2redit",
        "your_template_id",
        formData,
        "your_user_id"
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3"
          >
            Get In Touch
          </motion.h2>
          <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
            Have a question or want to work together? Drop me a message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                Your Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                Your Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="block text-gray-700 font-medium mb-2 text-sm md:text-base">
                Your Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-6 text-gray-400 text-lg" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm md:text-base"
                ></textarea>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <FiSend className="text-lg md:text-xl" />
              </motion.button>
            </motion.div>
          </form>

          {status && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-center font-medium text-base ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
