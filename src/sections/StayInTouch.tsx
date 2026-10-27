import { useState } from "react";
import { motion } from "framer-motion";

export const StayInTouch = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="w-full py-20 md:py-28 bg-white text-[#07173E] border-b border-[#00248B]/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        <div className="space-y-4 mb-10">
          <span className="font-sans text-[11px] tracking-[0.35em] text-[#C8A85B] uppercase font-semibold block">
            PALACE DISPATCHES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#00248B] font-light uppercase tracking-tight">
            Stay In Touch
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#45516E] max-w-lg mx-auto leading-relaxed font-light">
            Subscribe to receive private notices of limited barrel reserves, tasting salon invitations, and stories from the royal cellar.
          </p>
        </div>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-[#F0F2FC] border border-[#00248B]/20 rounded-sm max-w-md mx-auto"
          >
            <span className="font-serif text-lg text-[#00248B] block mb-1">
              Thank You for Joining
            </span>
            <p className="font-sans text-xs text-[#45516E]">
              You will receive our next palace dispatch directly to your inbox.
            </p>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 bg-[#F0F2FC] border border-[#00248B]/20 text-[#07173E] text-xs font-sans placeholder-[#45516E]/60 focus:border-[#00248B] focus:bg-white focus:outline-none transition-all rounded-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#00248B] text-white font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#0F51CF] transition-colors rounded-sm shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-8 text-[10px] font-sans tracking-wider text-[#45516E]/60 uppercase">
          By subscribing you confirm you are 25 years of age or older and agree to our Privacy Policy.
        </div>

      </div>
    </section>
  );
};
