import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_a2ajauc",
        "template_8iins5n",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "6_IQAe9rO37vNbzeP",
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full pb-8 sm:pb-10 lg:pb-12 flex justify-center relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mt-2 sm:mt-3 lg:mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 lg:mt-4">
            Have a question or want to work together? Let's connect!
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Let's Talk
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                I'm currently available for freelance work or full-time
                positions. If you have a project that needs some creative
                coding, I'd love to hear about it.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <FaEnvelope className="text-white text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:sachintha.navindu@example.com"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors break-all"
                  >
                    navindus485@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <FaPhone className="text-white text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+94771234567"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +94 76 906 5380
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <FaMapMarkerAlt className="text-white text-sm sm:text-base" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Location
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Galle, Southern Province
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-white mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/sachintha-navindu-fernando/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white text-sm group-hover:text-blue-400" />
                </a>
                <a
                  href="https://github.com/sachinthaNavindu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-600/20 hover:border-gray-500/50 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-white text-sm group-hover:text-gray-400" />
                </a>
                <a
                  href="https://www.instagram.com/vo_xx__22?igsh=MTFuYW9iZXcybzQ0cw=="
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 group"
                  aria-label="instagram"
                  target="_blank"
                >
                  <FaInstagram className="text-white text-sm group-hover:text-red-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Alex"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Alex@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/10 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden rounded-xl"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-gray-400 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black rounded-xl text-white font-semibold text-sm sm:text-base">
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-xs sm:text-sm text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
