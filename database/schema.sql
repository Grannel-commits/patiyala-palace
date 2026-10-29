-- =============================================================================
-- PATIYALA PALACE PRODUCTION DATABASE SCHEMA (MySQL 5.7+ / 8.0+ / MariaDB)
-- Hostinger phpMyAdmin & MySQL Ready
-- =============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -----------------------------------------------------------------------------
-- 1. Table structure for 'outlets' (Verified retail distribution network)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `outlets`;
CREATE TABLE `outlets` (
  `id` VARCHAR(64) NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `area` VARCHAR(150) NOT NULL,
  `zone` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL DEFAULT 'Gurugram',
  `state` VARCHAR(100) NOT NULL DEFAULT 'Haryana',
  `pincode` VARCHAR(20) NOT NULL,
  `type` VARCHAR(150) NOT NULL,
  `landmark` VARCHAR(255) NOT NULL,
  `address` TEXT NOT NULL,
  `keywords` TEXT NOT NULL,
  `lat` DECIMAL(10, 7) NOT NULL,
  `lng` DECIMAL(10, 7) NOT NULL,
  `in_stock` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_zone` (`zone`),
  KEY `idx_city` (`city`),
  KEY `idx_coords` (`lat`, `lng`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 2. Table structure for 'waitlist_notifications' (Customer Area Requests)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `waitlist_notifications`;
CREATE TABLE `waitlist_notifications` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `searched_location` VARCHAR(200) NOT NULL,
  `contact_info` VARCHAR(150) NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `status` ENUM('pending', 'notified', 'archived') NOT NULL DEFAULT 'pending',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_contact` (`contact_info`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- 3. Table structure for 'royal_circle_members' (VIP Cellar & Tasting Club)
-- -----------------------------------------------------------------------------
DROP TABLE IF EXISTS `royal_circle_members`;
CREATE TABLE `royal_circle_members` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(150) NOT NULL,
  `status` ENUM('active', 'pending', 'unsubscribed') NOT NULL DEFAULT 'active',
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------------------------------
-- Pre-seeding 35 Official Distribution Outlets
-- -----------------------------------------------------------------------------
INSERT INTO `outlets` (`id`, `name`, `area`, `zone`, `city`, `state`, `pincode`, `type`, `landmark`, `address`, `keywords`, `lat`, `lng`, `in_stock`) VALUES
('shankar-chowk-cyber-hub', 'Shankar Chowk — Cyber Hub', 'Cyber City, DLF Phase II', 'Cyber City & DLF', 'Gurugram', 'Haryana', '122002', 'Premium Palace Retail & Lounges', 'Opposite Shankar Chowk Flyover, Cyber Hub Entry', 'DLF Cyber City, Building 10 & Shankar Chowk, Gurugram 122002', '["shankar chowk","cyber hub","cyberhub","cyber city","cybercity","dlf cyber","phase 2","nh 8","nh-8"]', 28.4986, 77.0898, 1),
('jmd-central-arcade', 'JMD Central Arcade', 'Sector 28, Mehrauli-Gurgaon Road', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Luxury Liquor Boutique', 'Near Sikanderpur Metro, Main MG Road', 'JMD Central Arcade, Mehrauli-Gurgaon Rd, Gurugram 122002', '["jmd","jmd central","central arcade","arcade","sikanderpur","mg road","sector 28"]', 28.4815, 77.0925, 1),
('ambience-mall-nh8', 'Ambience Mall NH-8', 'Ambience Island, DLF Phase III', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Flagship Luxury Spirits Vault', 'NH-8 Delhi-Gurgaon Toll Border', 'Ambience Mall, NH-8, DLF Phase 3, Sector 24, Gurugram 122002', '["ambience mall","ambience","nh 8","nh-8","delhi border","ambience island","leela"]', 28.5042, 77.0967, 1),
('moulsary-arcade-dlf-2', 'Moulsary Arcade DLF Phase-II', 'DLF Phase II', 'Cyber City & DLF', 'Gurugram', 'Haryana', '122008', 'Neighbourhood Wine & Malt Merchant', 'Near Moulsari Avenue Rapid Metro', 'Moulsari Arcade, DLF Phase 2, Gurugram 122008', '["moulsary","moulsari","moulsary arcade","dlf 2","dlf-2","dlf ii","dlf-ii","dlf phase 2"]', 28.4912, 77.0945, 1),
('dlf-hubs', 'DLF Cyber City & Commercial Hubs', 'DLF Phases I - V', 'Cyber City & DLF', 'Gurugram', 'Haryana', '122002', 'Authorised Palace Retailers', 'Across DLF Phase 1, 2, 3, 4, 5', 'DLF City Complex, Gurugram 122002', '["dlf","dlef","dlf city","dlf phase 1","dlf phase 2","dlf phase 3","dlf phase 4","dlf phase 5"]', 28.495, 77.089, 1),
('udyog-vihar-phase-2-3', 'Udyog Vihar Phase-II / III (Rajokari Border)', 'Udyog Vihar', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122016', 'Highway Reserve Vault', 'Delhi-Gurgaon Rajokari Toll Junction', 'Udyog Vihar Phase 2/3, Adjacent to Rajokari Border, Gurugram 122016', '["udyog vihar","udyog vihar phase 2","udyog vihar phase 3","rajokari","rajokari border","rajokri","phase-ii","phase-iii"]', 28.5085, 77.0875, 1),
('udyog-vihar-phase-5', 'Udyog Vihar Phase-V', 'Udyog Vihar Phase 5', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122016', 'Corporate District Cellar', 'Near Trident & Oberoi Corporate Belt', 'Udyog Vihar Phase 5, Gurugram 122016', '["udyog vihar 5","phase 5","phase v","udyog vihar phase-v","corporate park"]', 28.502, 77.078, 1),
('electronic-city', 'Electronic City', 'Sector 18', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122015', 'Technology Corridor Wine & Spirits', 'Electronic City Gate, Old Delhi Gurgaon Road', 'Electronic City, Sector 18, Gurugram 122015', '["electronic city","sector 18","sec 18","electronic city sector 18"]', 28.498, 77.075, 1),
('hyatt-place-regency', 'Hyatt Palace / Place Enclave', 'Old Delhi Gurgaon Road, Udyog Vihar', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122015', 'Luxury Hotel Corridor Cellar', 'Near Hyatt Place & Maruti Suzuki Plant', 'Old Delhi Gurgaon Rd, Electronic City, Gurugram 122015', '["hyatt","hyatt palace","hyatt place","old delhi gurgaon road"]', 28.507, 77.065, 1),
('bajghera-chowk', 'Bajghera Chowk', 'Sector 112 / 113', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122017', 'Expressway Gateway Store', 'Bajghera Flyover & Chowk', 'Bajghera Chowk, Near Sector 112, Gurugram 122017', '["bajghera","bajgera","bajgera chowk","bajghera chowk","sector 112","sector 113"]', 28.52, 77.03, 1),
('dwarka-expressway', 'Dwarka Expressway Corridor', 'Sector 109 - 110', 'Udyog Vihar & West', 'Gurugram', 'Haryana', '122017', 'Grand Expressway Wine Megastore', 'Northern Peripheral Road (NPR)', 'Dwarka Expressway, Sector 109/110 Junction, Gurugram 122017', '["dwarka expressway","dwarka","expressway","npr","sector 109","sector 110","sector 104"]', 28.515, 77.018, 1),
('trade-tower-hyde', 'Trade Tower (Hyde Park & Unitech)', 'Sector 47 / South City II', 'Sohna Road & Central', 'Gurugram', 'Haryana', '122018', 'Corporate Towers Vault', 'Unitech Trade Tower, Sohna Road', 'Trade Tower, Block C, South City II, Sector 47, Gurugram 122018', '["trade tower","hyde","hyde park","unitech","sohna road","sector 47"]', 28.423, 77.046, 1),
('mehrauli-border', 'Mehrauli Border (Aya Nagar Junction)', 'Mehrauli-Gurgaon Road', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Interstate Border Luxury Spirits', 'Delhi Toll Checkpoint', 'MG Road, Mehrauli Border, Gurugram 122002', '["mehrauli border","mehrauli","aya nagar","delhi border","mg road border"]', 28.487, 77.126, 1),
('garden-estate-mg-road', 'Garden Estate, MG Road', 'Sector 28, MG Road', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Residential Enclave Wine Shop', 'Opposite Garden Estate Metro Station', 'Garden Estate, Mehrauli-Gurgaon Rd, Gurugram 122002', '["garden estate","mg road","guru dronacharya metro","sector 28"]', 28.483, 77.106, 1),
('dlf-rapid-metro-station', 'DLF Rapid Metro Station Corridors', 'DLF Phase I & II', 'Cyber City & DLF', 'Gurugram', 'Haryana', '122002', 'Transit Hub Wine Pavilion', 'Phase 1 / Belvedere Towers Metro', 'Rapid Metro Corridors, DLF City, Gurugram 122002', '["rapid metro","dlf rapid metro","metro station","belvedere","phase 1 metro"]', 28.48, 77.09, 1),
('bristol-hotel', 'Bristol Hotel Enclave', 'Sikanderpur, MG Road', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Luxury Hospitality Spirits Lounge', 'Bristol Chowk & Sikanderpur Crossing', 'Near Sikanderpur Metro, Bristol Chowk, MG Road, Gurugram 122002', '["bristol","bristol hotel","bristol chowk","sikanderpur"]', 28.482, 77.095, 1),
('sahara-mall', 'Sahara Mall, MG Road', 'Sector 28, MG Road', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122002', 'Mall Flagship Liquor Boutique', 'Opposite DLF Beverly Park, Main MG Road', 'Sahara Mall, Main MG Road, Gurugram 122002', '["sahara mall","sahara","mg road","beverly park"]', 28.4795, 77.088, 1),
('sector-29', 'Sector-29 Leisure & Pub Valley', 'Sector 29', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122001', 'Culinary & Nightlife Epicentre', 'Leisure Valley Park & IFFCO Chowk Metro', 'Sector 29 Main Commercial Market, Gurugram 122001', '["sector 29","sector-29","sec 29","sec-29","leisure valley","iffco chowk"]', 28.468, 77.064, 1),
('signature-tower', 'Signature Tower Crossing', 'Sector 30 / NH-8', 'MG Road & NH-8', 'Gurugram', 'Haryana', '122001', 'Expressway Landmark Spirits Retail', 'Signature Tower Flyover, NH-8', 'Signature Tower Complex, Sector 30, Gurugram 122001', '["signature tower","signature","sector 30","nh 8","star mall"]', 28.4675, 77.054, 1),
('galleria-market-dlf-4', 'Galleria Market DLF Phase-IV', 'DLF Phase IV', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122009', 'Open-Air Luxury Shopping Arcade', 'Fountain Plaza, Galleria Market', 'Galleria Market, DLF Phase 4, Gurugram 122009', '["galleria","galaria","galaria mkt","galleria market","dlf 4","dlf-4","dlf-iv","dlf iv","dlf-v"]', 28.467, 77.082, 1),
('bestech-centre', 'Bestech Centre Point', 'Sector 27, Sushant Lok 1', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122009', 'Neighbourhood Premium Spirits', 'Near Hamilton Court & Galleria', 'Bestech Center Point, A-Block, Sushant Lok 1, Gurugram 122009', '["bestech","bestech centre","bestech center","sushant lok","sector 27"]', 28.465, 77.077, 1),
('sushant-vyapar-kendra', 'Sushant Vyapar Kendra', 'Sushant Lok Phase 1', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122009', 'Iconic Traditional Market Merchant', 'Central Vyapar Kendra Roundabout', 'Sushant Vyapar Kendra, Sushant Lok 1, Gurugram 122009', '["sushant vyapar","vyapar kendra","vyapar kender","sushant lok 1","kender"]', 28.462, 77.081, 1),
('dlf-golf-drive', 'DLF Golf Drive & Horizon', 'DLF Phase V, Golf Course Road', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122009', 'Ultra-Luxury Connoisseur Vault', 'DLF Golf and Country Club & One Horizon', 'Golf Drive, DLF Phase 5, Sector 42, Gurugram 122009', '["golf drive","dlf golf drive","golf course road","the camellias","the magnolias","the aralias","one horizon"]', 28.452, 77.098, 1),
('round-about-sector-53-54', 'Round About Sector 53-54', 'Golf Course Road, Sector 53/54', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122002', 'Central Golf Course Wine Pavilion', 'Sector 53-54 Rapid Metro Underpass', 'Round About Sector 53-54, Golf Course Road, Gurugram 122002', '["sector 53-54","round about sector 53-54","sec 53","sec 54","sector 53","sector 54","roundabout"]', 28.448, 77.102, 1),
('central-plaza', 'Central Plaza Mall', 'Golf Course Road, Sector 53', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122002', 'Luxury Mall Wine Cellar', 'Next to Parsvnath Exotica', 'Central Plaza Mall, Sector 53, Golf Course Rd, Gurugram 122002', '["central plaza","central plaza mall","sector 53","golf course rd"]', 28.447, 77.1, 1),
('ardee-city', 'Ardee City & Ardee Mall', 'Sector 52', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122011', 'Mall & Residential Wine Store', 'Ardee Mall, Sector 52', 'Ardee City, Sector 52, Gurugram 122011', '["ardee city","ardee mall","ardee","sector 52","sec 52"]', 28.441, 77.079, 1),
('maidawas', 'Maidawas Sector 64', 'Sector 64 / Maidawas', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122102', 'Southern Peripheral Highway Outlet', 'Maidawas Chowk, Golf Course Extension Road', 'Maidawas, Sector 64, Gurugram 122102', '["maidawas","medawas","sector 64","sec 64","spr"]', 28.406, 77.068, 1),
('sector-65-tigra', 'Sector - 65 (Tigra)', 'Sector 65 / Golf Course Ext.', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122102', 'Emerging Luxury Residential Spirits Merchant', 'Tigra Road, Near WorldMark Sector 65', 'Sector 65, Tigra Crossing, Gurugram 122102', '["sector 65","sector-65","sec 65","tigra","tigra 65","worldmark 65"]', 28.401, 77.072, 1),
('the-forest-sector-62', 'The Forest (Sector 62)', 'Sector 62', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122102', 'Boutique Forest District Spirits', 'Near Pioneer Urban Square & Heritage School', 'The Forest Complex, Sector 62, Gurugram 122102', '["the forest","forest sector 62","sector 62","sec 62","pioneer urban"]', 28.415, 77.088, 1),
('tigra-sector-56', 'Tigra Sector-56', 'Sector 56', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122011', 'Metro Terminus Spirits Depot', 'Sector 56 Rapid Metro Station & Huda Market', 'Tigra Mod, Sector 56, Gurugram 122011', '["tigra sector 56","sector 56","sec 56","tigra 56","huda market 56"]', 28.431, 77.105, 1),
('sector-40', 'Sector 40 Main Market', 'Sector 40', 'Sohna Road & Central', 'Gurugram', 'Haryana', '122001', 'Residential Hub Spirits Store', 'Sector 40 Community Centre & Huda Market', 'Sector 40 Commercial Market, Gurugram 122001', '["sector 40","sector-40","sec 40","sec-40"]', 28.452, 77.058, 1),
('sector-47-bakhtawar-chowk', 'Sector-47 (Bakhtawar Chowk)', 'Sector 47', 'Sohna Road & Central', 'Gurugram', 'Haryana', '122018', 'Major Junction Spirits Hub', 'Bakhtawar Chowk, Near Medanta Medicity', 'Bakhtawar Chowk, Sector 47, Gurugram 122018', '["sector 47","sector-47","bakhtawar chowk","bakhtawar","sec 47","medanta"]', 28.428, 77.048, 1),
('spaze-mall-sohna-road', 'Spaze Mall, Sohna Road', 'Sector 49, Sohna Road', 'Sohna Road & Central', 'Gurugram', 'Haryana', '122018', 'Commercial Corridor Wine Pavilion', 'Spaze I-Tech Park & Mall, Sohna Road', 'Spaze Mall, Sector 49, Sohna Road, Gurugram 122018', '["spaze mall","spaze","sohna road","sector 49","sec 49"]', 28.416, 77.046, 1),
('ramgarh-chowk-sector-65-66', 'Ramgarh Chowk Sector-65/66', 'Sector 65 & 66 Junction', 'Golf Course & Sec 53-66', 'Gurugram', 'Haryana', '122102', 'Southern Peripheral Spirits Depot', 'Ramgarh Crossing, Golf Course Ext Road', 'Ramgarh Chowk, Sector 65/66, Gurugram 122102', '["ramgarh","ramgarh chowk","sector 65","sector 66","sec 65","sec 66"]', 28.398, 77.065, 1),
('subhash-chowk', 'Subhash Chowk, Sohna Road', 'Sector 38 / 47 Junction', 'Sohna Road & Central', 'Gurugram', 'Haryana', '122001', 'Major Junction Flagship Cellar', 'Subhash Chowk Underpass & Market', 'Subhash Chowk, Main Sohna Road, Gurugram 122001', '["subhash chowk","subhash","sohna road","isckon","sector 38"]', 28.435, 77.039, 1);

SET FOREIGN_KEY_CHECKS = 1;
