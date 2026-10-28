import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HARYANA_OUTLETS,
  OutletLocation,
  checkLocationAvailability,
} from "../data/outletsData";

interface Props {
  onBackToHome: () => void;
  onExploreCocktails?: () => void;
}

export const FindUsPage: React.FC<Props> = ({
  onBackToHome,
  onExploreCocktails,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState<string>("All");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    matched: boolean;
    outlets: OutletLocation[];
    query: string;
  } | null>(null);

  const [notifyInput, setNotifyInput] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const zones = useMemo(() => {
    return [
      "All",
      "Cyber City & DLF",
      "MG Road & NH-8",
      "Golf Course & Sec 53-66",
      "Udyog Vihar & West",
      "Sohna Road & Central",
    ];
  }, []);

  const filteredOutlets = useMemo(() => {
    if (activeZone === "All") return HARYANA_OUTLETS;
    return HARYANA_OUTLETS.filter((o) => o.zone === activeZone);
  }, [activeZone]);

  const handleSearch = (queryOverride?: string) => {
    const q = (queryOverride !== undefined ? queryOverride : searchQuery).trim();
    if (!q) {
      setHasSearched(false);
      setSearchResult(null);
      return;
    }
    const result = checkLocationAvailability(q);
    setSearchResult({
      matched: result.matched,
      outlets: result.outlets,
      query: q,
    });
    setHasSearched(true);
    setNotifySubmitted(false);
  };

  const handleQuickChip = (chip: string) => {
    setSearchQuery(chip);
    handleSearch(chip);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setHasSearched(false);
    setSearchResult(null);
    setNotifySubmitted(false);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyInput.trim()) {
      setNotifySubmitted(true);
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Haryana / NCR latitude: ~28.4 to 28.5, longitude: ~77.0 to 77.1
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const isNearGurugram =
          lat >= 28.2 && lat <= 28.65 && lng >= 76.8 && lng <= 77.25;

        if (isNearGurugram) {
          handleQuickChip("Gurugram");
        } else {
          setSearchQuery("My Location");
          setSearchResult({
            matched: false,
            outlets: [],
            query: "Your Current Location",
          });
          setHasSearched(true);
        }
      },
      () => {
        alert("Unable to retrieve your location. Please enter your sector or landmark manually.");
      }
    );
  };

  return (
    <div className="relative w-full min-h-screen text-white font-sans selection:bg-[#CBD5E1] selection:text-black">
      
      {/* ========================================================
          1. COMPOSABLE PAGE HEADER
          ======================================================== */}
      <section className="relative w-full pt-24 pb-8 md:pt-32 md:pb-12 border-b border-white/10">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 z-20">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70 mb-6">
            <button
              onClick={onBackToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#E2E8F0] font-bold">Find Us — Store Locator</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#CBD5E1]/40 mb-4 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E2E8F0]">
                HARYANA STATE OFFICIAL DISTRIBUTION
              </span>
            </div>

            <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              Locate The <br className="hidden sm:inline" />
              <span className="italic font-light text-[#E2E8F0] drop-shadow-[0_0_35px_rgba(226,232,240,0.35)]">
                Palace Malt.
              </span>
            </h1>

            <p className="font-serif font-light text-base sm:text-xl text-[#CBD5E1]/90 leading-relaxed mt-6 max-w-2xl drop-shadow">
              Patiyala Palace Crafted Indian Malt Whisky (42.8% ABV) is currently exclusively available across 35+ prestigious liquor boutiques, hotel bars, and lifestyle clubs in Haryana.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. INTERACTIVE LOCATION CHECKER
          ======================================================== */}
      <section className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Search Box Card */}
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#041235]/85 backdrop-blur-2xl border border-[#CBD5E1]/40 shadow-2xl">
            
            <label
              htmlFor="location-input"
              className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E2E8F0] font-bold block mb-3"
            >
              Check Availability In Your Location
            </label>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  id="location-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter location, sector, or landmark (e.g., Cyber Hub, Sector 29, Galleria)..."
                  className="w-full h-14 pl-12 pr-10 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-sm sm:text-base focus:outline-none focus:border-[#CBD5E1] transition-all shadow-inner"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#CBD5E1]">
                  🔍
                </span>

                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-8 h-14 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,232,240,0.35)]"
                >
                  Check Status
                </button>

                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  title="Detect My Location"
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer text-lg shadow-md"
                >
                  📍
                </button>
              </div>
            </form>

            {/* Quick Suggestion Chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                Popular Hubs:
              </span>
              {[
                "Cyber Hub",
                "Ambience Mall",
                "Sector 29",
                "Galleria Market",
                "Golf Drive",
                "Dwarka Expressway",
                "Sector 47",
                "Subhash Chowk",
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => handleQuickChip(chip)}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 hover:bg-white/15 text-[#CBD5E1] hover:text-white border border-white/10 hover:border-[#CBD5E1]/50 transition-all cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

          </div>

          {/* Availability Result Box */}
          <AnimatePresence mode="wait">
            {hasSearched && searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                {searchResult.matched ? (
                  /* ========================================================
                      MATCH FOUND: AVAILABLE!
                      ======================================================== */
                  <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-emerald-950/40 border-2 border-emerald-500/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-500/30 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl">
                          ✨
                        </div>
                        <div>
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Available Now
                          </span>
                          <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white mt-1">
                            Patiyala Palace is Available!
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-emerald-200">
                        {searchResult.outlets.length} Hub{searchResult.outlets.length > 1 ? "s" : ""} in Gurugram, Haryana
                      </span>
                    </div>

                    <p className="font-sans text-sm text-emerald-100/90 leading-relaxed mb-6 font-light">
                      Great news! Patiyala Palace Indian Crafted Malt Whisky is available at the following authorised partner outlet{searchResult.outlets.length > 1 ? "s" : ""} matching <span className="font-bold underline text-white">"{searchResult.query}"</span>:
                    </p>

                    {/* Matched Outlets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {searchResult.outlets.map((outlet) => (
                        <div
                          key={outlet.id}
                          className="p-5 rounded-2xl bg-black/60 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs mb-2">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                                {outlet.zone}
                              </span>
                              <span className="font-mono text-[10px] text-white/50">
                                PIN: {outlet.pincode}
                              </span>
                            </div>
                            <h4 className="font-serif font-bold text-lg text-white">
                              {outlet.name}
                            </h4>
                            <p className="font-sans text-xs text-white/70 mt-1">
                              {outlet.address}
                            </p>
                            <p className="font-mono text-[11px] text-[#CBD5E1] mt-2 italic">
                              Landmark: {outlet.landmark}
                            </p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                              ● In Stock
                            </span>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                outlet.name + " " + outlet.address
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-200 text-xs font-mono font-bold uppercase transition-all"
                            >
                              Directions ↗
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ========================================================
                      NO MATCH: UNAVAILABLE HERE & WILL COME SOON
                      ======================================================== */
                  <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#030d24]/90 border-2 border-rose-500/40 backdrop-blur-2xl shadow-2xl text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-xl">
                        📍
                      </div>
                      <div>
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          Distribution Status
                        </span>
                        <h3 className="font-serif font-normal text-2xl sm:text-3xl text-white mt-1">
                          Currently we are unavailable here and will come soon.
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-light mt-3">
                      We could not find an authorised retailer directly matching <span className="font-bold underline text-white">"{searchResult.query}"</span>. Patiyala Palace Crafted Indian Malt is currently available exclusively at 35+ landmark locations in <span className="font-bold text-[#E2E8F0]">Haryana (Gurugram)</span>. We are expanding rapidly across India and will arrive in your city soon.
                    </p>

                    {/* Notify Form */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#CBD5E1] block mb-2 font-bold">
                        Get Notified When Patiyala Palace Arrives In Your Area
                      </span>

                      {notifySubmitted ? (
                        <div className="p-4 rounded-xl bg-white/10 border border-[#CBD5E1]/40 text-emerald-300 text-sm font-mono flex items-center gap-2">
                          <span>✓</span> Thank you! You have been added to the royal priority waitlist. We will notify you the moment distribution opens.
                        </div>
                      ) : (
                        <form
                          onSubmit={handleNotifySubmit}
                          className="flex flex-col sm:flex-row gap-2 mt-3"
                        >
                          <input
                            type="text"
                            required
                            value={notifyInput}
                            onChange={(e) => setNotifyInput(e.target.value)}
                            placeholder="Enter your email or phone number..."
                            className="flex-1 h-12 px-5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#CBD5E1]"
                          />
                          <button
                            type="submit"
                            className="px-6 h-12 rounded-full bg-[#CBD5E1] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                          >
                            Notify Me
                          </button>
                        </form>
                      )}
                    </div>

                    {/* Fallback Action */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#CBD5E1]/80">
                      <span>Visiting Haryana? View our full directory below:</span>
                      <button
                        onClick={() => {
                          const el = document.getElementById("all-outlets");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-white underline hover:text-[#CBD5E1] cursor-pointer"
                      >
                        Explore 35+ Haryana Outlets ↓
                      </button>
                    </div>

                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================
          3. FULL VERIFIED HARYANA OUTLETS DIRECTORY
          ======================================================== */}
      <section id="all-outlets" className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#CBD5E1]/70 block mb-1">
                COMPLETE DIRECTORY
              </span>
              <h2 className="font-serif font-normal text-3xl sm:text-5xl text-white">
                All Haryana Locations ({HARYANA_OUTLETS.length})
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/60 mt-2">
                All 35 retail vaults, mall stores, and luxury venues in Gurugram, Haryana.
              </p>
            </div>

            {/* Zone Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setActiveZone(zone)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeZone === zone
                      ? "bg-[#E2E8F0] text-[#020818] shadow-md scale-105"
                      : "bg-black/50 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          {/* Outlets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                className="group p-6 rounded-2xl sm:rounded-3xl bg-[#041235]/75 backdrop-blur-md border border-[#CBD5E1]/30 hover:border-[#E2E8F0] transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(226,232,240,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-[#CBD5E1] border border-white/10 font-bold">
                      {outlet.zone}
                    </span>
                    <span className="font-mono text-[10px] text-white/50">
                      {outlet.city}, Haryana
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug">
                    {outlet.name}
                  </h3>

                  <p className="font-sans text-xs text-white/75 mt-2 leading-relaxed">
                    {outlet.address}
                  </p>

                  <div className="mt-3 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1]/70 block">
                      Landmark
                    </span>
                    <p className="text-xs text-white/90 font-medium mt-0.5">
                      {outlet.landmark}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 font-bold">
                      Available
                    </span>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      outlet.name + " " + outlet.address
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#E2E8F0] hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    <span>Directions</span>
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#030d24]/90 border border-[#CBD5E1]/30 backdrop-blur-md text-center max-w-3xl mx-auto shadow-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#CBD5E1]/70 block mb-2">
              ROYAL SERVE & COCKTAIL CULTURE
            </span>
            <h3 className="font-serif font-normal text-2xl sm:text-4xl text-white">
              Bringing The Palace Bottle Home?
            </h3>
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-xl mx-auto mt-3 font-light">
              Explore our master-crafted cocktail serves — from the Royal Jam Sour to the Maharaja Manhattan.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {onExploreCocktails && (
                <button
                  onClick={onExploreCocktails}
                  className="px-8 py-3 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Explore Cocktails ↗
                </button>
              )}
              <button
                onClick={onBackToHome}
                className="px-8 py-3 rounded-full border border-white/30 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Back To Home
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
