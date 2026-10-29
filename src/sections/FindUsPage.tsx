
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PALACE_OUTLETS,
  OutletLocation,
  checkLocationAvailability,
  sortOutletsByDistance,
} from "../data/outletsData";
import { submitWaitlistNotification } from "../services/api";

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

  // Geolocation state for "Closest to Me"
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "detecting" | "granted" | "denied">("idle");
  const [sortByDistanceActive, setSortByDistanceActive] = useState<boolean>(false);

  const [notifyInput, setNotifyInput] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  // Request user location automatically on mount to show closest area first
  const detectUserLocation = useCallback((isManual = false) => {
    if (!navigator.geolocation) {
      if (isManual) alert("Geolocation is not supported by your browser.");
      return;
    }
    setGeoStatus("detecting");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserCoords(coords);
        setGeoStatus("granted");
        setSortByDistanceActive(true);
      },
      () => {
        setGeoStatus("denied");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Attempt automatic proximity detection
    detectUserLocation(false);
  }, [detectUserLocation]);

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

  // Compute all outlets, sorted by distance if user coords are available
  const allSortedOutlets = useMemo(() => {
    if (userCoords && sortByDistanceActive) {
      return sortOutletsByDistance(PALACE_OUTLETS, userCoords.lat, userCoords.lng);
    }
    return PALACE_OUTLETS;
  }, [userCoords, sortByDistanceActive]);

  // Filtered outlets based on selected zone tab
  const filteredOutlets = useMemo(() => {
    if (activeZone === "All") return allSortedOutlets;
    return allSortedOutlets.filter((o) => o.zone === activeZone);
  }, [activeZone, allSortedOutlets]);

  // Nearest outlet to the user
  const nearestOutlet = useMemo(() => {
    if (userCoords && allSortedOutlets.length > 0 && (allSortedOutlets[0].distanceKm !== undefined)) {
      return allSortedOutlets[0];
    }
    return null;
  }, [userCoords, allSortedOutlets]);

  const handleSearch = (queryOverride?: string) => {
    const q = (queryOverride !== undefined ? queryOverride : searchQuery).trim();
    if (!q) {
      setHasSearched(false);
      setSearchResult(null);
      return;
    }
    const result = checkLocationAvailability(q, userCoords ?? undefined);
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

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const contact = notifyInput.trim();
    if (contact) {
      setNotifySubmitted(true);
      await submitWaitlistNotification(searchResult?.query || searchQuery || "Unspecified Area", contact);
    }
  };

  const formatDistance = (km?: number) => {
    if (km === undefined) return null;
    if (km < 1) {
      return `${Math.round(km * 1000)} m away`;
    }
    return `${km.toFixed(1)} km away`;
  };

  return (
    <div className="relative w-full min-h-screen text-white font-sans selection:bg-[#CBD5E1] selection:text-black">
      
      {/* ========================================================
          1. COMPOSABLE PAGE HEADER
          ======================================================== */}
      <section className="relative w-full pt-20 pb-6 sm:pt-28 sm:pb-8 md:pt-32 md:pb-12 border-b border-white/10">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 z-20">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70 mb-4 sm:mb-6">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#CBD5E1]/40 mb-3 sm:mb-4 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-[#E2E8F0]">
                OFFICIAL DISTRIBUTION NETWORK
              </span>
            </div>

            <h1 className="font-serif font-normal text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              Locate The <br className="hidden sm:inline" />
              <span className="italic font-light text-[#E2E8F0] drop-shadow-[0_0_35px_rgba(226,232,240,0.35)]">
                Palace Malt.
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 font-sans text-xs sm:text-base md:text-lg text-white/80 max-w-2xl font-light leading-relaxed">
              Patiyala Palace Crafted Indian Malt Whisky (42.8% ABV) is available across 35+ prestigious partner retail boutiques, hotel lounges, and premium vaults. Enter your location below to check availability or explore outlets closest to you.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. CLOSEST TO ME STATUS & INTERACTIVE CHECKER
          ======================================================== */}
      <section className="relative w-full py-6 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-5xl mx-auto">

          {/* Closest to Me Banner (if location granted) */}
          {nearestOutlet && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 sm:mb-6 p-3.5 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-emerald-300 font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                      Closest Outlet To You
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-white font-bold">
                      {formatDistance(nearestOutlet.distanceKm)}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-lg text-white mt-0.5">
                    {nearestOutlet.name}
                  </h4>
                  <p className="font-sans text-[11px] sm:text-xs text-white/70">
                    {nearestOutlet.landmark} • {nearestOutlet.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    nearestOutlet.name + " " + nearestOutlet.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Directions ↗
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById(nearestOutlet.id);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          )}

          {/* Location Checker Card */}
          <div className="p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#041235]/90 border border-[#CBD5E1]/30 backdrop-blur-2xl shadow-2xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <div>
                <span className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#CBD5E1] block">
                  AVAILABILITY VERIFICATION
                </span>
                <h2 className="font-serif font-normal text-xl sm:text-3xl text-white mt-1">
                  Enter Your Location
                </h2>
              </div>

              {/* Show Closest Area To Me Button */}
              <button
                type="button"
                onClick={() => detectUserLocation(true)}
                className={`inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border w-full sm:w-auto ${
                  geoStatus === "granted"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : "bg-white/10 hover:bg-white/20 text-[#CBD5E1] hover:text-white border-white/20"
                }`}
              >
                <span className="text-sm">📍</span>
                <span>
                  {geoStatus === "detecting"
                    ? "Locating..."
                    : geoStatus === "granted"
                    ? "Closest Area Active"
                    : "Show Closest Area To Me"}
                </span>
              </button>
            </div>

            {/* Location Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  maxLength={80}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your sector, mall, or landmark..."
                  className="w-full h-12 sm:h-14 pl-4 sm:pl-5 pr-10 sm:pr-12 rounded-full bg-black/60 border border-white/25 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#CBD5E1] transition-colors shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs sm:text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 sm:px-8 h-12 sm:h-14 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.15em] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(226,232,240,0.35)]"
                >
                  Check Status
                </button>

                <button
                  type="button"
                  onClick={() => detectUserLocation(true)}
                  title="Detect Closest to Me"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer text-base sm:text-lg shadow-md flex-shrink-0"
                >
                  📍
                </button>
              </div>
            </form>

            {/* Quick Suggestion Chips (Swipeable on mobile) */}
            <div className="mt-4 sm:mt-5 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white/50 flex-shrink-0">
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
                  className="whitespace-nowrap flex-shrink-0 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-white/5 hover:bg-white/15 text-[#CBD5E1] hover:text-white border border-white/10 hover:border-[#CBD5E1]/50 transition-all cursor-pointer"
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
                  <div className="p-4 sm:p-8 rounded-xl sm:rounded-3xl bg-emerald-950/40 border-2 border-emerald-500/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-emerald-500/30 pb-3 sm:pb-4 mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                          ✨
                        </div>
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Available Now
                          </span>
                          <h3 className="font-serif font-normal text-xl sm:text-3xl text-white mt-0.5 sm:mt-1">
                            Patiyala Palace is Available!
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-emerald-200">
                        {searchResult.outlets.length} Authorised Location{searchResult.outlets.length > 1 ? "s" : ""} Available
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4 sm:mb-6 font-light">
                      Great news! Patiyala Palace Indian Crafted Malt Whisky is available at the following authorised partner outlet{searchResult.outlets.length > 1 ? "s" : ""} matching <span className="font-bold underline text-white">"{searchResult.query}"</span>:
                    </p>

                    {/* Matched Outlets Grid (Sorted with closest first) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {searchResult.outlets.map((outlet, idx) => (
                        <div
                          key={outlet.id}
                          className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs mb-2">
                              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                                {outlet.zone}
                              </span>
                              <div className="flex items-center gap-2">
                                {idx === 0 && (
                                  <span className="font-mono text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 font-bold">
                                    ★ Top Match
                                  </span>
                                )}
                                {formatDistance(outlet.distanceKm) && (
                                  <span className="font-mono text-[9px] sm:text-[10px] text-emerald-300 font-bold">
                                    📍 {formatDistance(outlet.distanceKm)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                              {outlet.name}
                            </h4>
                            <p className="font-sans text-[11px] sm:text-xs text-white/70 mt-1">
                              {outlet.address}
                            </p>
                            <p className="font-mono text-[10px] sm:text-[11px] text-[#CBD5E1] mt-1.5 italic">
                              Landmark: {outlet.landmark}
                            </p>
                          </div>

                          <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                              ● In Stock
                            </span>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                outlet.name + " " + outlet.address
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-200 text-[11px] sm:text-xs font-mono font-bold uppercase transition-all"
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
                  <div className="p-4 sm:p-8 md:p-10 rounded-xl sm:rounded-3xl bg-[#030d24]/90 border-2 border-rose-500/40 backdrop-blur-2xl shadow-2xl text-white">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                        📍
                      </div>
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          Distribution Status
                        </span>
                        <h3 className="font-serif font-normal text-xl sm:text-3xl text-white mt-0.5 sm:mt-1">
                          Currently we are unavailable here and will come soon.
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light mt-2 sm:mt-3">
                      We could not find an authorised retailer directly matching <span className="font-bold underline text-white">"{searchResult.query}"</span>. Patiyala Palace Crafted Indian Malt is currently available across our selected flagship outlets. We are expanding rapidly across India and will arrive in your area soon.
                    </p>

                    {/* Nearest Available Outlet Notice */}
                    {nearestOutlet && (
                      <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                        <div>
                          <span className="text-[#CBD5E1] block text-[11px]">Your nearest available outlet:</span>
                          <span className="font-bold text-white text-xs sm:text-sm font-serif">
                            {nearestOutlet.name} ({formatDistance(nearestOutlet.distanceKm)})
                          </span>
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            nearestOutlet.name + " " + nearestOutlet.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all text-center text-xs"
                        >
                          View Directions ↗
                        </a>
                      </div>
                    )}

                    {/* Notify Form */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#CBD5E1] block mb-2 font-bold">
                        Get Notified When Patiyala Palace Arrives In Your Area
                      </span>

                      {notifySubmitted ? (
                        <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-[#CBD5E1]/40 text-emerald-300 text-xs sm:text-sm font-mono flex items-center gap-2">
                          <span>✓</span> Thank you! You have been added to the royal priority waitlist. We will notify you the moment distribution opens.
                        </div>
                      ) : (
                        <form
                          onSubmit={handleNotifySubmit}
                          className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-3"
                        >
                          <input
                            type="text"
                            required
                            maxLength={100}
                            value={notifyInput}
                            onChange={(e) => setNotifyInput(e.target.value)}
                            placeholder="Enter your email or phone number..."
                            className="flex-1 h-11 sm:h-12 px-4 sm:px-5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#CBD5E1]"
                          />
                          <button
                            type="submit"
                            className="px-6 h-11 sm:h-12 rounded-full bg-[#CBD5E1] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md w-full sm:w-auto"
                          >
                            Notify Me
                          </button>
                        </form>
                      )}
                    </div>

                    {/* Fallback Action */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs font-mono text-[#CBD5E1]/80">
                      <span>Explore our full directory of authorised locations:</span>
                      <button
                        onClick={() => {
                          const el = document.getElementById("all-outlets");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-white underline hover:text-[#CBD5E1] cursor-pointer"
                      >
                        Explore All Outlets ↓
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
          3. FULL VERIFIED OUTLETS DIRECTORY (Closest First)
          ======================================================== */}
      <section id="all-outlets" className="relative w-full py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#CBD5E1]/70">
                  COMPLETE DIRECTORY
                </span>
                {sortByDistanceActive && userCoords && (
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase">
                    Sorted: Closest First
                  </span>
                )}
              </div>
              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl text-white">
                All Outlets ({PALACE_OUTLETS.length})
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/60 mt-1 sm:mt-2">
                All 35 retail vaults, mall stores, and luxury partner venues. Showing the closest areas first.
              </p>
            </div>

            {/* Zone Filter Tabs (Swipeable on mobile) */}
            <div className="flex overflow-x-auto no-scrollbar py-1 gap-1.5 sm:gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {zones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setActiveZone(zone)}
                  className={`whitespace-nowrap flex-shrink-0 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredOutlets.map((outlet, index) => {
              const isClosest = index === 0 && sortByDistanceActive && userCoords;
              return (
                <motion.div
                  id={outlet.id}
                  key={outlet.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                  className={`group p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-[#041235]/75 backdrop-blur-md border transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(226,232,240,0.15)] flex flex-col justify-between ${
                    isClosest
                      ? "border-emerald-500/60 ring-2 ring-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                      : "border-[#CBD5E1]/30 hover:border-[#E2E8F0]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2 sm:mb-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-[#CBD5E1] border border-white/10 font-bold">
                        {outlet.zone}
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        {isClosest && (
                          <span className="font-mono text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/30">
                            ★ Closest To You
                          </span>
                        )}
                        {formatDistance(outlet.distanceKm) && (
                          <span className="font-mono text-[9px] sm:text-[10px] text-emerald-300 font-bold bg-black/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            📍 {formatDistance(outlet.distanceKm)}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-[#E2E8F0] transition-colors leading-snug">
                      {outlet.name}
                    </h3>

                    <p className="font-sans text-xs text-white/75 mt-1.5 sm:mt-2 leading-relaxed">
                      {outlet.address}
                    </p>

                    <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-white/10">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1]/70 block">
                        Landmark
                      </span>
                      <p className="text-[11px] sm:text-xs text-white/90 font-medium mt-0.5">
                        {outlet.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-white/80 font-bold">
                        Available
                      </span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        outlet.name + " " + outlet.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#E2E8F0] hover:text-white hover:underline transition-colors cursor-pointer"
                    >
                      <span>Directions</span>
                      <span>↗</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#030d24]/90 border border-[#CBD5E1]/30 backdrop-blur-md text-center max-w-3xl mx-auto shadow-2xl">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#CBD5E1]/70 block mb-2">
              ROYAL SERVE & COCKTAIL CULTURE
            </span>
            <h3 className="font-serif font-normal text-xl sm:text-4xl text-white">
              Bringing The Palace Bottle Home?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto mt-2 sm:mt-3 font-light">
              Explore our master-crafted cocktail serves — from the Royal Jam Sour to the Maharaja Manhattan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {onExploreCocktails && (
                <button
                  onClick={onExploreCocktails}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#E2E8F0] hover:bg-white text-[#020818] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
                >
                  Explore Cocktails ↗
                </button>
              )}
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/30 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
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
