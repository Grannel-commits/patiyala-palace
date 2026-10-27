import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Private Concierge & Allocation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-40 bg-white text-[#07173E] overflow-hidden border-b border-[#00248B]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Royal Concierge Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#00248B]" />
                <span className="font-sans text-[11px] tracking-[0.35em] text-[#00248B] uppercase font-semibold">
                  PRIVATE ALLOCATION
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#00248B] font-light leading-tight uppercase">
                Enter the<br />
                <span className="italic text-[#C8A85B] font-normal">Inner Circle.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#45516E] leading-relaxed font-light">
              For private cellar acquisitions, corporate allocations, and bespoke tasting experiences, connect with our royal concierge.
            </p>

            <div className="space-y-5 pt-6 border-t border-[#00248B]/10 font-sans text-xs">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#00248B] font-semibold block mb-1">
                  OFFICIAL ENQUIRIES
                </span>
                <span className="text-[#07173E] font-medium">contact@patialapalace.in</span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#00248B] font-semibold block mb-1">
                  MARKETING & DISTRIBUTION
                </span>
                <span className="text-[#45516E] font-light">
                  Saksham Spirits Private Limited • Gurugram, Haryana
                </span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#00248B] font-semibold block mb-1">
                  REGULATORY JURISDICTION
                </span>
                <span className="text-[#C8A85B] font-medium">
                  For Sale in Haryana Only • Product of India
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 border border-[#00248B]/15 bg-[#F0F2FC] rounded-sm shadow-md">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-[#00248B] flex items-center justify-center mx-auto text-[#00248B] text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-serif text-3xl text-[#00248B] font-light">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs text-[#45516E] max-w-sm mx-auto leading-relaxed">
                    Our concierge representative will respond with discretion and priority.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#00248B] mb-2 font-semibold">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#00248B]/20 text-[#07173E] text-xs font-sans placeholder-[#45516E]/40 focus:border-[#00248B] focus:outline-none transition-colors rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#00248B] mb-2 font-semibold">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#00248B]/20 text-[#07173E] text-xs font-sans placeholder-[#45516E]/40 focus:border-[#00248B] focus:outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#00248B] mb-2 font-semibold">
                      TOPIC OF INQUIRY
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#00248B]/20 text-[#07173E] text-xs font-sans focus:border-[#00248B] focus:outline-none transition-colors rounded-sm"
                    >
                      <option value="Private Concierge & Allocation">Private Concierge & Allocation</option>
                      <option value="Tasting Events & Hospitality">Tasting Events & Hospitality</option>
                      <option value="Press & Media Relations">Press & Media Relations</option>
                      <option value="Trade & Distribution">Trade & Distribution (Haryana Only)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] tracking-[0.25em] uppercase text-[#00248B] mb-2 font-semibold">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Detail your request or cellar requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#00248B]/20 text-[#07173E] text-xs font-sans placeholder-[#45516E]/40 focus:border-[#00248B] focus:outline-none transition-colors resize-none rounded-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="SUBMIT"
                    className="w-full py-4 bg-[#00248B] text-white font-sans text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#0F51CF] transition-all duration-300 shadow-md hover:shadow-xl rounded-sm"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
