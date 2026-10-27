import React, { useState } from "react";
import mapData from "../data/indiaMapData.json";

interface StateLocation {
  id: string;
  number: string;
  name: string;
  tagline: string;
  classification: string;
  hubs: string[];
  venues: string[];
  pin: { x: number; y: number };
  leader: {
    start: { x: number; y: number };
    elbow: { x: number; y: number };
    end: { x: number; y: number };
  };
  labelPos: { x: number; y: number; anchor: "start" | "middle" | "end" };
  pathsKey: "haryana" | "delhi" | "uttar_pradesh" | "goa" | "daman_diu";
}

const LOCATIONS: StateLocation[] = [
  {
    id: "haryana",
    number: "01",
    name: "Haryana",
    tagline: "Gurugram · Panchkula · Ambala · Faridabad",
    classification: "Official Allocation",
    hubs: ["Gurugram (Golf Course Rd & DLF)", "Panchkula Sector 8", "Ambala Cantonment", "Faridabad"],
    venues: ["The Oberoi Grand Cellars", "Cyber City Connoisseur Vaults", "Ambience Luxury Outlets"],
    pin: { x: 45, y: 13 },
    leader: {
      start: { x: 45, y: 13 },
      elbow: { x: -40, y: -30 },
      end: { x: -80, y: -30 },
    },
    labelPos: { x: -90, y: -36, anchor: "end" },
    pathsKey: "haryana",
  },
  {
    id: "delhi",
    number: "02",
    name: "Delhi (NCR)",
    tagline: "Chanakyapuri · Aerocity · Connaught Place",
    classification: "Capital Allocation",
    hubs: ["The Chanakya Luxury Mall", "Aerocity Worldmark Hub", "Connaught Place Heritage Circle", "Vasant Kunj Vaults"],
    venues: ["The Imperial Vaults", "Leela Palace Connoisseur Lounge", "Aerocity Diplomatic Reserves"],
    pin: { x: 76, y: 42 },
    leader: {
      start: { x: 76, y: 42 },
      elbow: { x: 76, y: -110 },
      end: { x: 30, y: -110 },
    },
    labelPos: { x: 20, y: -116, anchor: "end" },
    pathsKey: "delhi",
  },
  {
    id: "uttar_pradesh",
    number: "03",
    name: "Uttar Pradesh",
    tagline: "Noida · Lucknow · Agra · Kanpur",
    classification: "Heritage Allocation",
    hubs: ["Noida Sector 18 & Expressway", "Lucknow Gomti Nagar", "Agra Heritage Quarter", "Kanpur Civil Lines"],
    venues: ["Taj East Gate Lounge", "Gomti Nagar Premier Cellars", "Noida Royal Malt Curators"],
    pin: { x: 240, y: 145 },
    leader: {
      start: { x: 240, y: 145 },
      elbow: { x: 420, y: 110 },
      end: { x: 470, y: 110 },
    },
    labelPos: { x: 480, y: 104, anchor: "start" },
    pathsKey: "uttar_pradesh",
  },
  {
    id: "goa",
    number: "04",
    name: "Goa",
    tagline: "Panaji · Candolim · Vagator · Assagao",
    classification: "Coastal Allocation",
    hubs: ["Panaji Waterfront Promenade", "Candolim Coastal Vault", "Vagator Hillside Lounges", "Assagao Heritage Boutiques"],
    venues: ["W Goa Coastal Cellar", "Panaji Heritage Malt Saloon", "Assagao Exclusive Cellars"],
    pin: { x: -137, y: 764 },
    leader: {
      start: { x: -137, y: 764 },
      elbow: { x: -190, y: 764 },
      end: { x: -220, y: 764 },
    },
    labelPos: { x: -230, y: 758, anchor: "end" },
    pathsKey: "goa",
  },
  {
    id: "daman_diu",
    number: "05",
    name: "Daman & Diu",
    tagline: "Nani Daman · Moti Daman · Diu Fort",
    classification: "Duty-Free & Island Reserve",
    hubs: ["Nani Daman Seaface Promenade", "Moti Daman Heritage Fortress", "Diu Coastal Fort Reserve"],
    venues: ["Arabian Sea Duty-Free Vaults", "Portuguese Heritage Outposts", "Diu Fort Connoisseur Lounge"],
    pin: { x: -178, y: 485 },
    leader: {
      start: { x: -178, y: 485 },
      elbow: { x: -210, y: 485 },
      end: { x: -240, y: 485 },
    },
    labelPos: { x: -250, y: 479, anchor: "end" },
    pathsKey: "daman_diu",
  },
];

interface Props {
  onContactClick?: () => void;
}

export const IndiaMapSection: React.FC<Props> = ({ onContactClick: _onContactClick }) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const activeId = hoveredLocation || selectedLocation;

  const handleStateClick = (id: string) => {
    setSelectedLocation((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="stores"
      data-type="india-map"
      className="relative w-full overflow-hidden bg-[#111111] py-20 sm:py-28 border-t border-b border-white/10 select-none z-20"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E6501E]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C6A865]/40 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E7C97C] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#E7C97C]">
              REGIONAL ALLOCATIONS
            </span>
          </div>

          <h2 className="font-sans font-black uppercase tracking-tight text-4xl sm:text-6xl text-white leading-none">
            REGIONAL <span className="text-[#E7C97C]">PRESENCE.</span>
          </h2>

          <p className="mt-4 font-sans text-xs sm:text-sm md:text-base text-[#F1E6DA]/80 leading-relaxed font-light max-w-2xl mx-auto">
            Find Patiyala Palace at premier luxury boutique vaults, authorized state curators, and top cocktail lounges across <strong className="text-white font-bold">5 key regions</strong>.
          </p>

          {/* Interactive State Selector Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setSelectedLocation(null)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-black tracking-[0.14em] uppercase transition-all duration-300 border cursor-pointer ${
                activeId === null
                  ? "bg-[#E6501E] text-black font-black border-[#E6501E] shadow-[0_4px_20px_rgba(230,80,30,0.4)]"
                  : "bg-[#1A1A1A] text-white/80 border-white/10 hover:border-[#E6501E]/50 hover:bg-white/10"
              }`}
            >
              All Regions (5)
            </button>

            {LOCATIONS.map((loc) => {
              const isSelected = activeId === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => handleStateClick(loc.id)}
                  onMouseEnter={() => setHoveredLocation(loc.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`px-4 py-2.5 rounded-full text-xs font-sans font-black tracking-[0.14em] uppercase transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#E6501E] text-black font-black border-[#E6501E] shadow-[0_4px_20px_rgba(230,80,30,0.5)] scale-105"
                      : "bg-[#1A1A1A] text-white/80 border-white/15 hover:border-[#E6501E] hover:bg-[#E6501E]/15"
                  }`}
                >
                  <span className="opacity-60 text-[10px] font-mono">{loc.number}.</span>
                  <span>{loc.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Centered SVG Map */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[1670/1720] rounded-3xl bg-[#1A1A1A] border-2 border-white/10 p-3 sm:p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden group">
            {/* Radial gradient subtle glow behind map */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,80,30,0.08)_0%,_transparent_70%)] pointer-events-none" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-620 -420 1670 1720"
                className="w-full h-full block filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                aria-label="Map of India showing Patiyala Palace distribution across Haryana, Delhi, Uttar Pradesh, Goa, and Daman & Diu"
              >
                <defs>
                  {/* Subtle blur glow for gold states */}
                  <filter id="gold-glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* High radiant glow for active state */}
                  <filter id="gold-glow-active" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="12" result="blur1" />
                    <feGaussianBlur stdDeviation="4" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur1" />
                      <feMergeNode in="blur2" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Pulsing Beacon Gradients */}
                  <radialGradient id="pulse-beacon-active">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="30%" stopColor="#FFE082" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#C8A85B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C8A85B" stopOpacity="0" />
                  </radialGradient>

                  <radialGradient id="pulse-beacon-regular">
                    <stop offset="0%" stopColor="#FFE082" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#C8A85B" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#C8A85B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Base Non-Indicated States of India */}
                <g
                  fill="rgba(145, 190, 211, 0.08)"
                  stroke="#91BED3"
                  strokeWidth="0.75"
                  strokeOpacity="0.3"
                  strokeLinejoin="round"
                  className="transition-opacity duration-300"
                  style={{ opacity: activeId ? 0.6 : 1 }}
                >
                  {mapData.other_states.map((d, i) => (
                    <path key={`other-${i}`} d={d} />
                  ))}
                </g>

                {/* 2. Highlighted 5 States (Haryana, Delhi, Uttar Pradesh, Goa, Daman & Diu) */}
                {LOCATIONS.map((loc) => {
                  const isHighlighted = activeId === null || activeId === loc.id;
                  const isFocused = activeId === loc.id;
                  const paths = mapData[loc.pathsKey] as string[];

                  return (
                    <g
                      key={`state-group-${loc.id}`}
                      id={`state-${loc.id}`}
                      onClick={() => handleStateClick(loc.id)}
                      onMouseEnter={() => setHoveredLocation(loc.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      className="cursor-pointer transition-all duration-300"
                      filter={isFocused ? "url(#gold-glow-active)" : isHighlighted ? "url(#gold-glow-subtle)" : undefined}
                      style={{
                        fill: isFocused
                          ? "#E5A828"
                          : isHighlighted
                          ? loc.id === "delhi" || loc.id === "goa" || loc.id === "daman_diu"
                            ? "#E5A828"
                            : "rgba(200, 168, 91, 0.55)"
                          : "rgba(200, 168, 91, 0.2)",
                        stroke: isFocused ? "#FFFFFF" : isHighlighted ? "#FFE082" : "rgba(200, 168, 91, 0.4)",
                        strokeWidth: isFocused ? 3 : isHighlighted ? 2 : 1,
                        strokeLinejoin: "round",
                      }}
                    >
                      {paths.map((d, idx) => (
                        <path key={`${loc.id}-${idx}`} d={d} />
                      ))}
                    </g>
                  );
                })}

                {/* 3. Outer Ocean & Surrounding Land Mask (cuts out anything outside official border with midnight navy #04153B) */}
                <g fill="#04153B" stroke="none">
                  <path d={mapData.national_mask} />
                  <path d={mapData.water_mask} />
                </g>

                {/* 4. Fine National & Coastal Outline for clean definition */}
                <g fill="none" stroke="#91BED3" strokeWidth="0.8" strokeOpacity="0.4">
                  <path d={mapData.national_mask} />
                  <path d={mapData.water_mask} />
                </g>

                {/* 5. Pins, Animated Beacons, Leader Lines & Callout Labels */}
                {LOCATIONS.map((loc) => {
                  const isFocused = activeId === loc.id;
                  const isDimmed = activeId !== null && activeId !== loc.id;

                  return (
                    <g
                      key={`pin-${loc.id}`}
                      id={`pin-${loc.id}`}
                      onClick={() => handleStateClick(loc.id)}
                      onMouseEnter={() => setHoveredLocation(loc.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      className="cursor-pointer transition-opacity duration-300"
                      style={{ opacity: isDimmed ? 0.35 : 1 }}
                    >
                      {/* Animated Pulse Beacon */}
                      <circle
                        cx={loc.pin.x}
                        cy={loc.pin.y}
                        r={isFocused ? 32 : 22}
                        fill={isFocused ? "url(#pulse-beacon-active)" : "url(#pulse-beacon-regular)"}
                        className={isFocused ? "animate-ping" : ""}
                        style={{ animationDuration: "2.4s" }}
                      />

                      {/* Second Beacon Ring for Daman & Diu secondary point (Diu Island) */}
                      {loc.id === "daman_diu" && (
                        <>
                          <circle
                            cx={-195}
                            cy={473}
                            r={isFocused ? 22 : 16}
                            fill="url(#pulse-beacon-regular)"
                          />
                          <circle
                            cx={-195}
                            cy={473}
                            r={isFocused ? 7 : 5}
                            fill="#FFFFFF"
                            stroke="#E5A828"
                            strokeWidth={isFocused ? 3 : 2}
                          />
                        </>
                      )}

                      {/* Solid Center Bullseye */}
                      <circle
                        cx={loc.pin.x}
                        cy={loc.pin.y}
                        r={isFocused ? 8 : 6}
                        fill="#FFFFFF"
                        stroke={isFocused ? "#FFE082" : "#C8A85B"}
                        strokeWidth={isFocused ? 3.5 : 2.5}
                      />

                      {/* Leader Line */}
                      <polyline
                        points={`${loc.leader.start.x},${loc.leader.start.y} ${loc.leader.elbow.x},${loc.leader.elbow.y} ${loc.leader.end.x},${loc.leader.end.y}`}
                        fill="none"
                        stroke={isFocused ? "#FFFFFF" : "#C8A85B"}
                        strokeWidth={isFocused ? 2.2 : 1.6}
                        strokeDasharray={isFocused ? undefined : "3,3"}
                      />

                      {/* Leader Line Terminal Dot */}
                      <circle
                        cx={loc.leader.end.x}
                        cy={loc.leader.end.y}
                        r={isFocused ? 4.5 : 3.5}
                        fill={isFocused ? "#FFFFFF" : "#C8A85B"}
                      />

                      {/* State Title */}
                      <text
                        x={loc.labelPos.x}
                        y={loc.labelPos.y}
                        textAnchor={loc.labelPos.anchor}
                        fill={isFocused ? "#FFFFFF" : "#FFE082"}
                        fontSize={isFocused ? "30" : "26"}
                        fontFamily="'Cormorant Garamond', Georgia, serif"
                        fontStyle="italic"
                        fontWeight="bold"
                        letterSpacing="0.08em"
                        className="transition-all duration-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                      >
                        {loc.number}. {loc.name}
                      </text>

                      {/* State Tagline / Hubs */}
                      <text
                        x={loc.labelPos.x}
                        y={loc.labelPos.y + 24}
                        textAnchor={loc.labelPos.anchor}
                        fill={isFocused ? "#FFE082" : "#91BED3"}
                        fontSize="15"
                        fontFamily="Montserrat, system-ui, sans-serif"
                        letterSpacing="0.12em"
                        fontWeight={isFocused ? "600" : "400"}
                        className="transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      >
                        {loc.tagline.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  };
