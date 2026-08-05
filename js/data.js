/* =========================================================
   Community Food & Assistance Guide — data
   Single source of truth for the whole site.
   Source: official "Community Food & Assistance Guide" PDF.
   ========================================================= */

// "*" marks a service that is available everywhere (not area-specific).
const ALL = "*";

/* ---- Level 1: the 7 municipalities ------------------- */
const AREAS = [
  { name: "Yarra Ranges", slug: "yarra-ranges", color: "yarra" },
  { name: "Knox", slug: "knox", color: "knox" },
  { name: "Boroondara", slug: "boroondara", color: "boroondara" },
  { name: "Monash", slug: "monash", color: "monash" },
  { name: "Maroondah", slug: "maroondah", color: "maroondah" },
  { name: "Whitehorse", slug: "whitehorse", color: "whitehorse" },
  { name: "Manningham", slug: "manningham", color: "manningham" }
];

/* ---- Level 2: service categories (same for every area) ---- */
const CATEGORIES = [
  { id: "emergency-relief", label: "Emergency Relief" },
  { id: "community-meals", label: "Community Meals" },
  { id: "housing", label: "Housing" },
  { id: "hygiene-services", label: "Hygiene Services" },
  { id: "technology-communication", label: "Technology and Communication" },
  { id: "aboriginal", label: "Aboriginal and Torres Strait Islander People" },
  { id: "nils", label: "No Interest Loans" },
  { id: "utilities", label: "Utilities" },
  { id: "legal", label: "Legal" },
  { id: "pet-care", label: "Pet Care" },
  { id: "health-ability", label: "Health Ability" },
  { id: "no-money-no-time", label: "No Money No Time" },
  { id: "dental-clinics", label: "Dental Clinics" },
  { id: "health-direct", label: "Health Direct" },
  { id: "homeless-entry-points", label: "Homeless Entry Points" },
  { id: "family-violence", label: "Family Violence Emergency Contacts" },
  { id: "covid", label: "COVID" },
  { id: "useful-contacts", label: "Useful Contacts" }
];

/* ---- Level 3: service providers ---------------------- */
const SERVICES = {

  /* ================= EMERGENCY RELIEF ================= */
  "emergency-relief": [

    // ---- Yarra Ranges ----
    {
      name: "CIS Yarra Ranges",
      areas: ["Yarra Ranges"],
      address: "214 Main St, Lilydale, VIC 3140",
      phone: "9735 1311",
      website: "https://www.cisvic.org.au/getting-help/cis-yarra-ranges",
      desc: "Information & referral service, food vouchers and material aid.",
      hours: "Wed, Thurs & Fri 10.00am–3.00pm",
      cost: "Free",
      notes: "For local residents."
    },
    {
      name: "Discovery Community Care Inc",
      areas: ["Yarra Ranges"],
      address: "Factory 1, 122–124 Beresford Rd, Lilydale VIC 3140",
      phone: "9739 6801",
      website: "http://discoverycc.org.au",
      desc: "Food & material aid, community information & referrals.",
      hours: "Call for opening hours",
      cost: "Free",
      notes: "Call to arrange an appointment and confirm eligibility."
    },
    {
      name: "Mustard Tree Food Bank",
      areas: ["Yarra Ranges"],
      address: "3/28 John St, Lilydale",
      phone: "9735 3500",
      website: "https://lb.org.au/the-mustrard-tree",
      desc: "Food pantry.",
      hours: "Food bank: Mon–Fri 10.00am–2.00pm",
      cost: "Free",
      notes: "Call to make an appointment."
    },
    {
      name: "The Basement Food Hub",
      areas: ["Yarra Ranges"],
      address: "193–197 Main St, Lilydale 3140",
      phone: "9735 4419",
      website: "http://www.turningpointchurch.org.au/lilydale",
      desc: "Food support program.",
      hours: "Mon 9.00am–2.00pm",
      cost: "Free",
      notes: "For local residents."
    },
    {
      name: "ADRA Community Care Centre — Redwood",
      areas: ["Yarra Ranges"],
      address: "3505 Warburton Hwy, Warburton 3799",
      phone: "5966 2320",
      website: "http://www.adra.org.au/redwood",
      desc: "Food parcels, material aid, community information & referrals.",
      hours: "Call for opening hours",
      cost: "Free",
      notes: "Contact for appointment time."
    },
    {
      name: "The Salvation Army — Mooroolbark",
      areas: ["Yarra Ranges"],
      address: "305 Manchester Rd, Chirnside Park",
      phone: "9727 4777",
      desc: "Food parcels & material support.",
      hours: "Mon & Wed 10.00am–12.00pm & 1.00pm–2.00pm",
      cost: "Free",
      notes: "Mooroolbark and surrounding area."
    },
    {
      name: "Oonah",
      areas: ["Yarra Ranges"],
      address: "1A Badger Creek Rd, Healesville 3777",
      phone: "5962 2940",
      website: "http://oonah.org.au",
      desc: "Food parcels, social & emotional support, community information & referrals.",
      hours: "Mon–Fri 9.00am–5.00pm",
      cost: "Free",
      notes: "By appointment. Oonah mainly provides services to the indigenous community, however welcomes the whole community of Healesville."
    },
    {
      name: "Victorian Aboriginal Child Care Agency",
      areas: ["Yarra Ranges"],
      address: "1 East Ridge Dr, Chirnside Park",
      phone: "8727 0200",
      website: "http://www.vacca.org",
      desc: "Emergency financial relief, food parcels, material aid & other support services, information & referrals.",
      hours: "Every second Fri 6.00pm",
      cost: "Free",
      notes: "A welcoming & culturally friendly space for any Aboriginal community member."
    },
    {
      name: "Empower Australia Ringwood",
      areas: ["Yarra Ranges"],
      address: "251 Maroondah Hwy, Ringwood VIC 3134",
      phone: "(03) 9896 7999",
      desc: "Food support program.",
      hours: "Sunday 8.30am–9.30am",
      cost: "Free",
      notes: "For local residents."
    },
    {
      name: "Mi Place Drop In Centre — Dandenong Ranges Emergency Relief Service",
      areas: ["Yarra Ranges"],
      address: "Belgrave Community Hub, 1616–1624 Burwood Highway, Belgrave",
      phone: "9754 7777",
      website: "http://www.drers.org.au",
      desc: "Food pantry, material aid, crisis counselling referrals, advocacy & information.",
      hours: "Mon–Fri 9.00am–12.30pm",
      cost: "Free",
      notes: "Present ID that shows current address."
    },

    // ---- Knox ----
    {
      name: "Knox Info Link",
      areas: ["Knox"],
      address: "136 Boronia Road, Boronia",
      phone: "9761 1325",
      website: "http://knoxinfolink.org.au",
      desc: "Food parcels, material aid, Op Shop referrals, Telco assistance, community information & referrals.",
      hours: "Mon–Thurs 10.00am–3.00pm",
      cost: "Free",
      notes: "For residents of the City of Knox."
    },
    {
      name: "CityLife Community Care",
      areas: ["Knox"],
      address: "1248 High Street Rd, Wantirna South 3152",
      phone: "9871 8900",
      website: "http://www.citylife.care",
      desc: "Food parcels, material aid, information, advocacy & referrals. Limited food / walk-in emergency bag of food.",
      hours: "Mon, Wed & Fri 10.00am–4.30pm. Tues & Thurs 10.00am–9.00pm",
      cost: "Free",
      notes: "Call to arrange an appointment."
    },
    {
      name: "Restore Community Care",
      areas: ["Knox"],
      address: "24 Laser Drive, Rowville",
      phone: "8736 7053",
      website: "http://www.restorecommunitycare.org",
      desc: "Food parcels, budgeting advice, material aid, transport, PBS script assistance & referrals.",
      hours: "Tues–Thurs 11.00am–2.30pm",
      cost: "Free",
      notes: "By appointment. For residents within the City of Knox."
    },
    {
      name: "Salvation Army Ferntree Gully Corps",
      areas: ["Knox"],
      address: "37 Wattletree Rd, Ferntree Gully 3156",
      phone: "9752 2682",
      website: "http://www.salvationarmy.org.au/locations",
      desc: "Bread, fruit & vegetables available.",
      hours: "Wed 9.30am–11.00am",
      cost: "Free",
      notes: "No appointment required. For residents within the City of Knox."
    },
    {
      name: "Temple Society Australia — CHAMPION",
      areas: ["Knox"],
      address: "51 Elizabeth St, Bayswater",
      phone: "0433 335 815",
      website: "http://templesociety.org.au/champion",
      desc: "Food pantry, computer & internet access (for job searching), budgeting assistance, advocacy & referrals.",
      hours: "Mon 9.30am–12.30pm. Wed 1.00pm–3.00pm",
      cost: "Free",
      notes: "Fresh bread, fruit & vegetables available every Wed."
    },
    {
      name: "Salvation Army Boronia Corps",
      areas: ["Knox"],
      address: "2 Liverpool Rd, Boronia 3155",
      phone: "9762 7604",
      website: "http://www.salvationarmy.org.au/locations",
      desc: "Food parcels & material aid, financial counselling, community information & referrals.",
      hours: "Tues & Thurs 10.00am–1.00pm",
      cost: "Free",
      notes: "By appointment."
    },
    {
      name: "CHAMPION — Temple Society",
      areas: ["Knox"],
      address: "51 Elizabeth St, Bayswater",
      phone: "0468 375 808",
      desc: "Food pantry, community hub, referrals, information & advocacy.",
      hours: "Monday 10.00am–12.30pm. Wednesday 12.30pm–3.00pm",
      cost: "Free"
    },
    {
      name: "Adracare",
      areas: ["Knox"],
      address: "3–5 Railway Ave, Upper Ferntree Gully",
      desc: "Meals / emergency relief packs.",
      hours: "Monday 1.00pm–3.00pm. Bookings required",
      cost: "Free",
      notes: "Call to arrange an appointment."
    },
    {
      name: "Australia for Christ",
      areas: ["Knox"],
      address: "1079 Stud Road, Rowville",
      phone: "0438 039 391",
      desc: "Community meals and pantry access.",
      hours: "Every 1st and 3rd Thursday of the month (5.30pm onwards)",
      cost: "Free"
    },
    {
      name: "RAFT Anglican — Church",
      areas: ["Knox"],
      address: "131 Taylors Lane, Rowville",
      phone: "9764 2573",
      desc: "Meals / emergency relief packs.",
      hours: "Monday 1.00pm–4.00pm, Wednesday to Friday 9.00am–4.00pm",
      cost: "Free",
      notes: "By appointment."
    },

    // ---- Boroondara ----
    {
      name: "The Camberwell Salvation Army",
      areas: ["Boroondara"],
      address: "7–11 Bowen Street, Camberwell 3124",
      phone: "9889 2468",
      website: "http://www.salvationarmy.org.au/camberwell",
      desc: "Food parcels, material aid, financial counselling, community information & referrals, including support & referral to other services as appropriate.",
      hours: "Mon, Wed & Fri 9.30am–12.00pm",
      cost: "Free",
      notes: "By appointment. Phone in advance to make appointment."
    },
    {
      name: "Camcare (Camberwell)",
      areas: ["Boroondara"],
      address: "51 St Johns Avenue, Camberwell 3124",
      phone: "9831 1900",
      website: "http://camcare.org.au",
      desc: "Food pantry, food drives & Camcare's kitchen garden.",
      hours: "Mon–Fri 10.00am–2.30pm",
      cost: "Free",
      notes: "Eligibility requirements. By appointment."
    },
    {
      name: "Camcare (Ashburton)",
      areas: ["Boroondara"],
      address: "4 Y St, Ashburton 3147",
      phone: "9831 1900",
      website: "http://camcare.org.au",
      desc: "Food pantry, material aid.",
      hours: "Mon–Fri 10.00am–2.30pm",
      cost: "Free",
      notes: "Eligibility requirements. By appointment."
    },
    {
      name: "Boroondara Community Outreach",
      areas: ["Boroondara"],
      address: "Uniting Church Hall, 23 Highbury Grove, Kew 3101",
      phone: "0409 019 269",
      website: "http://www.bcokew.org",
      desc: "Take away meals & food pantry.",
      hours: "Mon & Fri 11.00am–3.00pm",
      cost: "Free"
    },
    {
      name: "Kew Neighbourhood Centre",
      areas: ["Boroondara"],
      address: "2–12 Derby St, Kew 3101",
      phone: "9853 3216",
      website: "http://kewnlc.org.au",
      desc: "Take away meals & community programs.",
      hours: "Call for hours",
      notes: "For marginalised members of the community, in particular, those living with a serious mental illness or disability."
    },
    {
      name: "Surrey Hills Neighbourhood Centre",
      areas: ["Boroondara"],
      address: "157 Union Rd, Surrey Hills",
      phone: "9890 2467",
      website: "http://surreyhillsnc.org.au",
      desc: "Take away meals & community programs.",
      hours: "Mon–Thurs 9.00am–3.30pm. Fri 9.00am–2.30pm",
      cost: "Free",
      notes: "By appointment. Phone in advance to make appointment."
    },

    // ---- Monash ----
    {
      name: "Power Neighbourhood House",
      areas: ["Monash"],
      address: "54 Power Ave, Ashwood 3147",
      phone: "8849 9707",
      website: "http://www.powernh.org.au",
      desc: "Donated bread, frozen meals & small amount of fruit & non-perishables.",
      hours: "Mon–Fri 9.00am–5.00pm",
      notes: "For Emergency Relief services, appointments are arranged with Lisa Nguyen at the centre."
    },
    {
      name: "Salvation Army — Waverley Temple",
      areas: ["Monash"],
      address: "958 High Street Rd, Glen Waverley",
      phone: "9803 2587",
      website: "http://www.salvationarmy.org.au/waverleytemple",
      desc: "Community meal. Lunch.",
      hours: "Fri 12.00pm",
      cost: "Free",
      notes: "Call to confirm information during lockdown."
    },
    {
      name: "Waverley Community Information & Support Services",
      areas: ["Monash"],
      address: "47 Miller Crescent, Mount Waverley 3149",
      phone: "9807 9844",
      website: "http://monashwaverleycrs.org.au",
      desc: "Food parcels, material aid, advocacy & referrals.",
      hours: "Mon–Fri 10.00am–1.00pm",
      cost: "Free",
      notes: "For people living in postcodes 3149, 3150, 3170 and parts of 3125, 3147, 3148 & 3168."
    },
    {
      name: "Monash Oakleigh Community Support & Information Service",
      areas: ["Monash"],
      address: "25 Downing St, Oakleigh",
      phone: "9568 4533",
      website: "http://mocsics.org.au",
      desc: "Food parcels, material aid, advocacy & referrals.",
      hours: "Mon–Fri 10.00am–3.30pm",
      cost: "Free",
      notes: "For people living in postcodes 3166, 3167, 3168, 3169 and parts of 3148."
    },

    // ---- Whitehorse ----
    {
      name: "Box Hill Community Information Support",
      areas: ["Whitehorse"],
      address: "1/27 Bank Street, Box Hill 3128",
      phone: "9285 4806",
      website: "http://www.boxhillcils.org.au",
      desc: "Food parcels, material aid, case work, counselling, advocacy & referrals.",
      hours: "Mon & Wed 11.00am–3.00pm, Fri 11.00am–3.00pm",
      cost: "Free",
      notes: "For residents within parts of the City of Whitehorse. Call for eligibility. By appointment."
    },
    {
      name: "Crossways Life Care",
      areas: ["Whitehorse"],
      address: "708 Highbury Rd, Burwood East 3151",
      phone: "9886 3899",
      website: "http://www.crosswaylifecare.org.au",
      desc: "Counselling, community mentoring, food pantry, financial assistance, financial mentoring and more.",
      hours: "Mon 3.00pm–5.00pm. Thurs 10.00am–12.00pm",
      cost: "Free",
      notes: "By appointment."
    },
    {
      name: "Uniting Emergency Relief",
      areas: ["Whitehorse"],
      address: "220 Burwood Hwy, Burwood East 3151",
      phone: "9803 3400",
      desc: "Food pantry, material aid, prescription support, community information, referrals, homelessness support.",
      hours: "Mon–Wed 9.30am–2.00pm",
      cost: "Free",
      notes: "For residents within parts of the City of Whitehorse. Call for eligibility."
    },
    {
      name: "New Hope Care",
      areas: ["Whitehorse"],
      address: "3 Springfield Rd, Blackburn North",
      phone: "9890 7999",
      website: "http://newhopecare.net.au",
      desc: "Food parcels, material aid, community information & referrals.",
      hours: "Mon–Fri 10.00am–2.00pm",
      cost: "Free",
      notes: "Call for eligibility."
    },

    // ---- Manningham ----
    {
      name: "Donecare",
      areas: ["Manningham"],
      address: "687 Doncaster Rd, Doncaster 3108",
      phone: "9856 1500",
      website: "http://doncare.org.au",
      desc: "Limited food vouchers, food pantry, material aid, advocacy, counselling, community information & referrals.",
      hours: "Wed 1.00pm–3.00pm",
      cost: "Free",
      notes: "For residents within the City of Manningham."
    },
    {
      name: "MCC CareNet",
      areas: ["Manningham"],
      address: "143–145 Parker St, Templestowe",
      phone: "9846 7244",
      website: "http://www.manninghamcc.org/carenet",
      desc: "Food parcels.",
      hours: "Tues 10.00am–2.00pm",
      cost: "Free",
      notes: "For residents within the City of Manningham."
    },
    {
      name: "Warrandyte Neighbourhood House",
      areas: ["Manningham"],
      address: "1/168 Yarra St, Warrandyte 3113",
      phone: "9844 1839",
      website: "http://www.warrandyteighbourhoodhouse.org.au",
      desc: "Food & toiletry packs.",
      hours: "Wed 10.00am–12.00pm",
      cost: "Free",
      notes: "For residents within the City of Manningham. Call for appointment. Eligibility requirements. By appointment."
    },
    {
      name: "Living and Learning @ Ajani",
      areas: ["Manningham"],
      address: "Ted Ajani Reserve, 2/284 Thompson Rd, Lower Templestowe 3107",
      phone: "9850 3687",
      website: "http://www.livelearnajani.org.au",
      desc: "Food pantry & community café.",
      hours: "Mon–Thurs 9.00am–3.00pm",
      cost: "Free",
      notes: "Set up at rear of car park, or at reception if raining."
    },

    // ---- Maroondah ----
    {
      name: "Uniting Homelessness Services Emergency Relief",
      areas: ["Maroondah"],
      address: "291A Maroondah Hwy, Ringwood",
      phone: "8870 4020",
      desc: "Food pantry, material aid, community information, referrals, homelessness support, crisis accommodation services & tenancy support.",
      hours: "Mon–Fri 9.30am–1.00pm",
      cost: "Free",
      notes: "Eligibility requirements for vouchers."
    },
    {
      name: "Maroondah Community Assist — Croydon",
      areas: ["Maroondah"],
      address: "214 Mt Dandenong Rd, Croydon",
      phone: "9725 7920",
      desc: "Advocacy & referrals, budget assistance, community information & food parcels.",
      hours: "Mon–Fri 9.30am–1.30pm",
      cost: "Free",
      notes: "For residents within the City of Maroondah."
    },
    {
      name: "Maroondah Community Assist — Ringwood",
      areas: ["Maroondah"],
      address: "2A Ringwood St, Ringwood",
      phone: "9870 3233",
      desc: "Food parcels, advocacy & referrals, budget assistance & community information.",
      hours: "Mon–Fri 9.30am–1.30pm",
      cost: "Free",
      notes: "For residents within the City of Maroondah."
    },
    {
      name: "North Ringwood Care",
      areas: ["Maroondah"],
      address: "14 Dickson Cres, North Ringwood",
      phone: "9876 5625",
      website: "http://www.nruc.org.au",
      desc: "Food parcels, prescription support, budgeting, advocacy & referrals.",
      hours: "Mon–Fri 10.00am–1.00pm",
      cost: "Free",
      notes: "By appointment."
    },
    {
      name: "The Freedom Initiative",
      areas: ["Maroondah"],
      address: "98 Railway Ave, Ringwood East",
      phone: "9879 3114",
      desc: "Food parcels.",
      hours: "Thurs 9.30am–1.30pm",
      cost: "Free",
      notes: "By appointment."
    },
    {
      name: "Planet Shakers",
      areas: ["Maroondah"],
      address: "251 Maroondah Hwy 3134",
      phone: "1300 883 321",
      website: "http://www.empoweraustralia.com.au",
      desc: "Food pantry.",
      hours: "Sun 12.30pm–2.00pm",
      cost: "Free"
    },
    {
      name: "Truth & Liberation (TLC)",
      areas: ["Maroondah"],
      address: "265 Canterbury Rd, Bayswater North 3153",
      phone: "9729 6555",
      website: "http://www.tlccchurch.org.au/tlc-support",
      desc: "Food pantry.",
      hours: "Mon & Tues 1.00pm–4.00pm",
      cost: "Free",
      notes: "For residents in Bayswater & Bayswater North."
    },
    {
      name: "Hope City Mission",
      areas: ["Maroondah"],
      address: "51 Lusher Rd, Croydon",
      phone: "1800 865 299",
      website: "http://www.hopecitymission.com",
      desc: "Drive-through Foodbank, food home deliveries, financial literacy & advocacy.",
      hours: "Thurs 9.00am–4.00pm",
      cost: "Free",
      notes: "Available to Maroondah, Knox & Yarra Ranges areas. Call for appointment."
    }
  ],

  /* ================= COMMUNITY MEALS ================= */
  "community-meals": [

    // ---- Yarra Ranges ----
    {
      name: "Dinner at Darron's — HICCI",
      areas: ["Yarra Ranges"],
      address: "Darron Honey Centre, Healesville Uniting Church, Maroondah Hwy",
      desc: "Community meal.",
      hours: "Tues 5.30pm–6.30pm",
      cost: "Free",
      notes: "Closed during COVID."
    },
    {
      name: "FoodStop Community Meals",
      areas: ["Yarra Ranges"],
      address: "Lilydale Showground, Main St, Lilydale. Winter months: F1/122–124 Beresford Rd, Lilydale",
      phone: "9739 6801",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Thurs 7.00pm–9.00pm",
      cost: "Free"
    },
    {
      name: "Koha Community Café",
      areas: ["Yarra Ranges"],
      address: "25A Dammans Rd, Warburton 3799",
      phone: "0403 185 580",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Thurs 6.00pm–8.00pm",
      cost: "Free"
    },
    {
      name: "Hope on a Friday — Warm Breakfast",
      areas: ["Yarra Ranges"],
      address: "3 Clifford Grove, Tecoma",
      phone: "9754 6809",
      desc: "Community meal. Breakfast take-away meals during COVID-19.",
      hours: "Fri 8.30am–9.30am",
      cost: "Free"
    },
    {
      name: "Holy Fools Street Angels Lunch",
      areas: ["Yarra Ranges"],
      address: "Market St, Lilydale (beside the Lilydale swimming pool)",
      phone: "1300 133 889",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Wed 12.00pm",
      cost: "Free"
    },
    {
      name: "Mi Place Drop In Centre / Community Hub",
      areas: ["Yarra Ranges"],
      address: "1616–1624 Burwood Hwy, Belgrave 3160",
      phone: "9754 7777",
      desc: "School breakfast for school-aged children & parent/guardian. Community hot drink — cup of tea, coffee or hot chocolate.",
      hours: "Mon–Fri 9.00am–12.30pm",
      cost: "Free",
      notes: "Hub open from 8.00am."
    },
    {
      name: "Mooroolbark People's Pantry",
      areas: ["Yarra Ranges"],
      address: "St Margaret's Church, 219 Hull Rd, Mooroolbark 3138",
      phone: "9723 7323",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Every second Fri 6.00pm",
      cost: "Free",
      notes: "Call or message on Facebook to confirm takeaway pick-up."
    },
    {
      name: "Mustard Tree Community Table",
      areas: ["Yarra Ranges"],
      address: "3/28 John St, Lilydale",
      phone: "9735 3500",
      website: "https://lb.org.au/the-mustrard-tree",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Tues 12.00pm–1.00pm",
      cost: "Free",
      notes: "During school terms only."
    },

    // ---- Knox ----
    {
      name: "Foothills Community Care Dinner",
      areas: ["Knox"],
      address: "62 Main Street, Upwey (above the IGA — entry via rear car park)",
      phone: "8711 8677",
      website: "http://www.foothillscare.org.au",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Mondays 4.00pm–6.00pm",
      cost: "Free"
    },
    {
      name: "St Paul's Church — Combined Churches of Boronia",
      areas: ["Knox"],
      address: "273 Dorset Rd, Boronia 3155",
      phone: "9761 1797",
      desc: "Drop-in lunch. Take-away meals during COVID-19.",
      hours: "Wed 1.00pm–3.00pm",
      cost: "Free"
    },
    {
      name: "Boronia Progress Hall",
      areas: ["Knox"],
      address: "134 Boronia Rd, Boronia 3155",
      desc: "Community breakfast.",
      hours: "Mon, Tues, Thurs & Fri",
      cost: "Free"
    },
    {
      name: "Saint Paul's Church",
      areas: ["Knox"],
      address: "273 Dorset Rd, Boronia",
      desc: "Community breakfast.",
      hours: "Wed",
      cost: "Free"
    },
    {
      name: "One Hope Community Church",
      areas: ["Knox"],
      address: "15–17 Cavell Street, Scoresby",
      desc: "Community meal.",
      hours: "Wednesday 6.00pm–7.00pm (closed during school holidays)",
      cost: "Free"
    },
    {
      name: "Share Space Inc — The Sanctuary Group Lunch",
      areas: ["Knox"],
      address: "61 Turramurra Drive, Rowville",
      email: "info@sharespace.org.au",
      desc: "Community meal.",
      hours: "Tuesdays 12.00pm–2.00pm",
      cost: "Free"
    },

    // ---- Boroondara ----
    {
      name: "Boroondara Community Outreach — Uniting Church Hall",
      areas: ["Boroondara"],
      address: "23 Highbury Grove, Kew 3101",
      phone: "0409 019 269",
      website: "http://www.bcokew.org",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Mon & Fri 11.00am–3.00pm",
      cost: "Free"
    },
    {
      name: "Hawthorn Community House",
      areas: ["Boroondara"],
      address: "32 Henry Street, Hawthorn",
      phone: "(03) 9819 5758",
      website: "http://www.hch.org.au",
      desc: "Drop-in lunch. Take-away meals during COVID-19.",
      hours: "Wed 1.00pm–3.00pm",
      cost: "Free"
    },

    // ---- Whitehorse ----
    {
      name: "Mitcham Community Meal",
      areas: ["Whitehorse"],
      address: "18 Edward Street, Mitcham",
      phone: "9873 1210",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Sun 5.30pm",
      cost: "Free",
      notes: "For residents within the City of Whitehorse."
    },
    {
      name: "Feast Community Meal",
      areas: ["Whitehorse"],
      address: "171 Rooks Road, Vermont 3133 — Stairway Church",
      phone: "9837 2900",
      website: "https://www.stairway.org.au/calendar",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Wed 5.45pm",
      cost: "Free",
      notes: "For residents within the City of Whitehorse."
    },
    {
      name: "Box Hill Community Bakehouse @ The Barn",
      areas: ["Whitehorse"],
      address: "3 Ellington Pde, Box Hill 3128",
      desc: "Bread, rolls, scrolls, fruit & vegetables. More info via the Box Hill Baptist Church Facebook page & The Orchard.",
      hours: "Sat 7.30am–8.30am. Thurs 1.30pm–2.30pm",
      cost: "Free",
      notes: "Bring your own bread bag and container for food."
    },

    // ---- Manningham ----
    {
      name: "Living and Learning @ Ajani",
      areas: ["Manningham"],
      address: "Ted Ajani Reserve, 2/284 Thompson Rd, Lower Templestowe 3107",
      phone: "9850 3687",
      website: "http://www.livelearnajani.org.au",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Mon & Fri 11.00am–3.00pm",
      cost: "Free",
      notes: "By referral from Doncare. For residents within the City of Manningham. Call for appointment."
    },

    // ---- Maroondah ----
    {
      name: "ADRA Community Care — Croydon",
      areas: ["Maroondah"],
      address: "17–19 Surrey Rd West, Croydon 3136",
      phone: "1800 242 372",
      website: "http://www.adra.org.au",
      desc: "Community meal. Take-away meals and fresh fruit & vegetables during COVID-19.",
      hours: "Thurs 5.15pm–6.15pm",
      cost: "Free",
      notes: "For residents within the City of Maroondah."
    },
    {
      name: "The Dining Room Mission",
      areas: ["Maroondah"],
      address: "St John the Divine Anglican Church, Toorak Ave, Croydon",
      desc: "Community meal. Take-away meals during COVID-19.",
      cost: "Free"
    },
    {
      name: "Maroondah Winter Shelter (Croydon)",
      areas: ["Maroondah"],
      address: "St Johns the Divine Anglican Church, Toorak Ave, Croydon",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Wed 5.30pm–6.00pm",
      cost: "Free"
    },
    {
      name: "Maroondah Winter Shelter (Ringwood)",
      areas: ["Maroondah"],
      address: "143 Maroondah Hwy, Ringwood (next to Urban Life)",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Fri 5.30pm–6.00pm",
      cost: "Free"
    },
    {
      name: "Ringwood Church of Christ Lunch",
      areas: ["Maroondah"],
      address: "13 Bedford Rd, Ringwood",
      phone: "9870 8169",
      website: "http://www.ringwoodchurch.org.au",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Thurs 12.00pm–1.00pm",
      cost: "Gold coin donation"
    },
    {
      name: "The Kiosk — Croydon Soup Kitchen",
      areas: ["Maroondah"],
      address: "Keystone Hall, 9 Civic Square, Croydon",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Sat 5.00pm–6.30pm",
      cost: "Free"
    },
    {
      name: "Mullum Mullum Indigenous Gathering Place",
      areas: ["Maroondah"],
      address: "3 Croydon Way, Croydon 3136 & 47–49 Patterson St, Ringwood East 3135",
      phone: "9725 2166",
      website: "http://mmgip.org.au",
      desc: "Community meal. Lunch.",
      hours: "Food pantry: Wed 11.00am–1.30pm. Lunch Wed 12.30pm–1.30pm",
      cost: "Free",
      notes: "To register for pantry or lunch, contact Steve Beeby."
    },
    {
      name: "Croydon North Uniting Church Lunch",
      areas: ["Maroondah"],
      address: "387A Maroondah Hwy, Croydon North",
      phone: "0419 260 158",
      website: "http://croydonorth.unitingchurch.org.au",
      desc: "Community meal. Take-away meals during COVID-19.",
      hours: "Tues 12.00pm",
      cost: "Free"
    }
  ],

  /* ================= HOUSING ================= */
  "housing": [
    {
      name: "Uniting Housing & Support",
      areas: ["Knox"],
      address: "291A Maroondah Hwy, Ringwood",
      phone: "8870 4020",
      desc: "Housing support service.",
      hours: "Monday–Friday service (all ages) 9.00am–5.00pm",
      cost: "Free"
    },
    {
      name: "SalvoCare Eastern — Homeless Outreach Program",
      areas: ["Knox"],
      address: "353 Whitehorse Road, Nunawading VIC 3131",
      phone: "9890 7144",
      desc: "Homeless outreach program.",
      hours: "Monday–Friday service (all ages) 9.00am–5.00pm",
      cost: "Free"
    },
    {
      name: "Statewide Homelessness Line",
      areas: ALL,
      phone: "1800 825 955",
      desc: "Statewide after-hours homelessness support.",
      hours: "5.00pm–9.00am, weekends & public holidays",
      cost: "Free"
    }
  ],

  /* ================= HYGIENE SERVICES ================= */
  "hygiene-services": [
    {
      name: "ADRA Croydon & Orange Sky",
      areas: ALL,
      address: "17–19 Surrey Rd, Croydon 3136",
      desc: "Laundry — washing machine & dryers.",
      hours: "Thurs 9th Sep, Thurs 7th/21st Oct, 5.00pm–7.00pm",
      cost: "Free"
    },
    {
      name: "Uniting Homelessness Services",
      areas: ALL,
      address: "291A Maroondah Hwy",
      phone: "8870 4020",
      desc: "Laundry & showers — washing machine & dryers.",
      hours: "Mon–Fri 9.30am–1.00pm",
      notes: "Unavailable due to COVID."
    },
    {
      name: "Knox Info Link",
      areas: ALL,
      address: "136 Boronia Road, Boronia",
      phone: "9761 1325",
      desc: "Showers & laundry tokens available for the coin laundry in Boronia. Free bus shuttle to Rowville Community Centre, returning from Knox Info Link at 12.30pm & 1.30pm.",
      hours: "Showers: Mon & Thurs 11.00am–2.00pm",
      cost: "Free"
    },
    {
      name: "Rowville Community Centre",
      areas: ALL,
      address: "40 Fulham Rd, Rowville 3178",
      phone: "9763 7400",
      desc: "Showers.",
      hours: "Mon & Thurs 11.00am–2.00pm",
      cost: "Free",
      notes: "Contact for appointment time."
    },
    {
      name: "Dandenong Ranges Emergency Relief Service",
      areas: ALL,
      address: "1616/1624 Burwood Hwy, Belgrave 3160",
      phone: "9754 7777",
      desc: "Showers.",
      hours: "Mon, Wed & Fri. Fri 9.00am–1.00pm",
      cost: "Free"
    },
    {
      name: "Orange Sky Mobile Service",
      areas: ALL,
      desc: "Mobile laundry — washing machine & dryers.",
      hours: "Mobile service",
      cost: "Free"
    },
    {
      name: "One Voice Mobile Service",
      areas: ALL,
      desc: "Mobile showers.",
      website: "http://onevoice.org.au",
      hours: "Mobile service",
      cost: "Free",
      notes: "Visit the website for locations & times."
    },
    {
      name: "Foothills Community Care",
      areas: ALL,
      address: "62 Main Street, Upwey (above the IGA — entry via rear car park)",
      phone: "0493 846 017",
      desc: "Laundry.",
      hours: "Wednesday 3.00pm–5.30pm",
      cost: "Free"
    },
    {
      name: "Community @ Cavell",
      areas: ALL,
      address: "15 Cavell Street, Scoresby",
      phone: "(03) 9759 9155",
      desc: "Laundry.",
      hours: "(During school term) Tuesday 2.00pm–6.00pm",
      cost: "Free"
    }
  ],

  /* ================= TECHNOLOGY & COMMUNICATION (placeholder) ================= */
  "technology-communication": [],

  /* ================= ABORIGINAL & TORRES STRAIT ISLANDER PEOPLE ================= */
  "aboriginal": [
    {
      name: "13 YARN",
      areas: ALL,
      desc: "National service. Confidential one-on-one over-the-phone yarning opportunity and support with a trained Lifeline Aboriginal & Torres Strait Islander Crisis Supporter for mob who are feeling overwhelmed or having difficulty coping.",
      cost: "Free"
    },
    {
      name: "Yarning SafeNStrong (VAHS)",
      areas: ALL,
      desc: "Free and confidential counselling service.",
      list: [
        "Social and emotional wellbeing",
        "Financial wellbeing",
        "Medical support including COVID-19 testing",
        "Drug and alcohol counselling and rehab services"
      ],
      cost: "Free"
    }
  ],

  /* ================= NO INTEREST LOANS (NILS) ================= */
  "nils": [
    {
      name: "No Interest Loans (NILS)",
      areas: ALL,
      desc: "Interest-free loans for the purchase of essential goods and services.",
      list: [
        "Car repairs",
        "Household items and essentials",
        "Medical or dental expenses",
        "Education products"
      ],
      notes: "Cannot be used for food, rent, bills, cash, or debts."
    },
    {
      name: "Eligibility",
      areas: ALL,
      desc: "You may be eligible for a NILS loan if you:",
      list: [
        "Hold a Health Care Card / Pension Card, OR earn less than $45,000 a year after tax ($60,000 for couples or people with dependants)",
        "Have lived at your current or previous address for at least 3 months",
        "Can show capacity to repay the loan"
      ]
    },
    {
      name: "Find a NILS provider",
      areas: ALL,
      phone: "13 6457",
      website: "https://nils.com.au/find-a-provider/",
      desc: "Search for a NILS provider near you, or call 13 NILS (13 6457).",
      hours: "Mon–Fri 9.00am–4.00pm",
      cost: "Free"
    }
  ],

  /* ================= UTILITIES (placeholder) ================= */
  "utilities": [],

  /* ================= LEGAL ================= */
  "legal": [
    {
      name: "Eastern Community Legal Centre",
      areas: ALL,
      phone: "1300 32 52 00",
      website: "https://eclc.org.au",
      desc: "Free and confidential legal help for people in Melbourne's east."
    },
    {
      name: "ECLC — Box Hill Office",
      areas: ["Boroondara", "Manningham", "Whitehorse"],
      address: "Suite 3, Town Hall Hub, 27 Bank Street, Box Hill VIC 3128",
      desc: "Serves Boroondara, Manningham and Whitehorse. Outreach to Ashburton, Bulleen, Deakin University, Hawthorn and Ringwood Magistrates' Court.",
      hours: "Monday–Friday 9.00am–5.00pm. Tuesday–Thursday evenings by appointment only"
    },
    {
      name: "ECLC — Boronia Office",
      areas: ["Knox", "Maroondah"],
      address: "Suite B, 6 Floriston Road, Boronia VIC 3155 (PO Box 747, Boronia VIC 3155)",
      desc: "Serves Knox and Maroondah. Outreach to Ringwood Family Relationship Centre, Ringwood Magistrates' Court and Rowville.",
      hours: "Monday–Thursday 9.00am–5.00pm. Tuesday evenings by appointment only"
    },
    {
      name: "ECLC — Healesville Community Link",
      areas: ["Yarra Ranges"],
      address: "110 River Street, Healesville VIC 3777 (PO Box 79, Healesville VIC 3777)",
      desc: "Serves Yarra Ranges. Outreach to Lilydale, Monbulk, Ringwood Magistrates' Court and Yarra Junction.",
      hours: "Tuesday, Wednesday & Thursday 9.00am–5.00pm"
    }
  ],

  /* ================= PET CARE ================= */
  "pet-care": [
    {
      name: "Pets in the Park",
      areas: ALL,
      website: "http://www.petsinthepark.org.au",
      desc: "Free preventative health care programs — health checks, vaccinations, flea treatment, worming treatment and basic medication — for pets of people experiencing homelessness.",
      hours: "Monthly clinics",
      cost: "Free",
      notes: "Referral letter from case worker required."
    },
    {
      name: "Pets of the Homeless",
      areas: ALL,
      website: "http://petsofthehomeless.org.au",
      email: "hello@petsofthehomeless.org.au",
      desc: "Provide pet food, supplies, veterinary care and emergency boarding.",
      notes: "Referral letter from case worker required for veterinary care and emergency boarding."
    }
  ],

  /* ================= HEALTH ABILITY ================= */
  "health-ability": [
    {
      name: "Health Ability",
      areas: ALL,
      phone: "1300 003 509",
      desc: "Chat with a mental health team in person, over the phone, or via telehealth. Provides someone to listen, help you decide what to do next, check in on you, and recommend ongoing mental health support services.",
      hours: "Phone 1300 003 509. Also: 03 9430 9100",
      cost: "Free"
    }
  ],

  /* ================= NO MONEY NO TIME ================= */
  "no-money-no-time": [
    {
      name: "No Money No Time",
      areas: ALL,
      website: "https://nomoneynotime.com.au",
      desc: "Go-to source for quick, affordable and healthy meal ideas."
    }
  ],

  /* ================= DENTAL CLINICS ================= */
  "dental-clinics": [
    {
      name: "Royal Dental Hospital",
      areas: ALL,
      address: "720 Swanston Street, Carlton VIC 3053",
      phone: "(03) 9341 1000",
      website: "http://dhsv.org.au",
      desc: "Dental care. For dental emergencies outside Melbourne metro: 1800 833 039.",
      hours: "Open every day 8.30am–5.00pm"
    },
    {
      name: "Inspiro Community Health Service",
      areas: ALL,
      address: "17 Clarke Street, Lilydale 3140",
      phone: "9738 8801",
      desc: "Community health & dental care."
    },
    {
      name: "EACH (Ringwood East)",
      areas: ALL,
      address: "Building C1, 46–48 Warrantyde Road, Ringwood 3134",
      phone: "9259 4900",
      desc: "Community health & dental care."
    }
  ],

  /* ================= HEALTH DIRECT ================= */
  "health-direct": [
    {
      name: "Health Direct",
      areas: ALL,
      phone: "1800 022 222",
      desc: "National virtual public health information service. 24/7 health information, advice and referral for all Australians.",
      hours: "24 hours, 7 days",
      cost: "Free"
    }
  ],

  /* ================= HOMELESS ENTRY POINTS ================= */
  "homeless-entry-points": [
    {
      name: "Anchor — Homelessness Support (Lilydale)",
      areas: ALL,
      phone: "9760 6400",
      address: "Lilydale — serves the Yarra Ranges area",
      website: "https://anchor.org.au",
      desc: "Crisis response and homelessness support for individuals and families facing homelessness.",
      hours: "Mon–Fri 9.00am–5.00pm",
      cost: "Free",
      notes: "Opening Doors access point for the Yarra Ranges area."
    },
    {
      name: "Community Housing Ltd (Blackburn)",
      areas: ALL,
      phone: "9856 0098",
      address: "Blackburn",
      website: "https://chl.org.au",
      desc: "Homelessness entry point and housing support.",
      hours: "Mon–Fri 9.00am–5.00pm",
      cost: "Free"
    },
    {
      name: "The Salvation Army — Homelessness East (Nunawading)",
      areas: ALL,
      phone: "9890 7144",
      address: "Level 1, 353 Whitehorse Road, Nunawading VIC 3131",
      website: "https://www.salvationarmy.org.au",
      desc: "Homelessness support — intake and assessment for crisis accommodation, rent and referral support.",
      hours: "Mon–Fri 9.00am–5.00pm",
      cost: "Free"
    },
    {
      name: "Uniting — Homelessness Crisis Entry Point (Ringwood)",
      areas: ALL,
      phone: "8870 4020",
      address: "291A Maroondah Highway, Ringwood",
      website: "https://www.unitingvictas.org.au",
      desc: "Homelessness crisis entry point, crisis accommodation and tenancy support.",
      hours: "Mon–Fri 9.00am–5.00pm",
      cost: "Free"
    },
    {
      name: "Statewide After Hours Homelessness Line",
      areas: ALL,
      phone: "1800 825 955",
      desc: "After-hours homelessness support — calls outside business hours are diverted to crisis services.",
      hours: "5.00pm–9.00am, weekends & public holidays",
      cost: "Free"
    }
  ],

  /* ================= FAMILY VIOLENCE EMERGENCY CONTACTS ================= */
  "family-violence": [
    {
      name: "Emergency — Immediate Danger",
      areas: ALL,
      phone: "000",
      desc: "Call the police (000) if you are in immediate danger.",
      emergency: true
    },
    {
      name: "FVREE (formerly EDVOS)",
      areas: ALL,
      phone: "9259 4200",
      desc: "Eastern region family violence response.",
      hours: "9.00am–8.00pm Mon–Fri, 9.00am–5.00pm Sat"
    },
    {
      name: "Safe Steps",
      areas: ALL,
      phone: "1800 015 188",
      desc: "24/7 crisis support & accommodation."
    },
    {
      name: "1800 Respect",
      areas: ALL,
      phone: "1800 737 732",
      desc: "Phone help & referrals."
    },
    {
      name: "Djirra",
      areas: ALL,
      phone: "1800 105 303",
      desc: "Support for Aboriginal & Torres Strait Islander women."
    },
    {
      name: "W|Respect",
      areas: ALL,
      phone: "1800 542 847",
      desc: "Support for LGBTIQ communities."
    },
    {
      name: "MensLine Australia",
      areas: ALL,
      phone: "1300 78 99 78",
      desc: "Support for men."
    }
  ],

  /* ================= COVID ================= */
  "covid": [
    {
      name: "Find a COVID-19 testing site",
      areas: ALL,
      website: "https://www.coronavirus.vic.gov.au/where-get-tested-covid-19",
      phone: "1300 651 160",
      desc: "Find a testing site near you, or call for more information."
    },
    {
      name: "Victorian Government Coronavirus Hotline",
      areas: ALL,
      phone: "1800 675 398",
      website: "https://dhhs.vic.gov.au/coronavirus",
      desc: "Official COVID-19 information and support.",
      hours: "24 hours"
    },
    {
      name: "Food Parcels & Personal Hygiene Packages",
      areas: ALL,
      desc: "Free food parcels and personal hygiene packages.",
      cost: "Free",
      notes: "Available to anyone in mandatory self-isolation due to Coronavirus, living in Victoria, with no family or friends to support them. Can be delivered. Call to apply."
    }
  ],

  /* ================= USEFUL CONTACTS ================= */
  "useful-contacts": [
    {
      name: "Ask Izzy",
      areas: ALL,
      website: "https://askizzy.org.au",
      desc: "Find food, housing, health and more — search by postcode."
    },
    {
      name: "Centrelink",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/centrelink",
      desc: "Payments and services."
    },
    {
      name: "Medicare",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/medicare",
      desc: "Health care programs."
    },
    {
      name: "Child Support",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/child-support",
      desc: "Assesses, collects & transfers child support payments."
    },
    {
      name: "Services Australia — Indigenous Australians",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/indigenous-australians",
      desc: "Information and services for Aboriginal and Torres Strait Islander people."
    },
    {
      name: "Help in an Emergency",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/help-emergency",
      desc: "Immediate help when you need it most."
    },
    {
      name: "Services Australia — Online Estimators",
      areas: ALL,
      website: "http://www.servicesaustralia.gov.au/individuals/topics/online-estimators/28456",
      desc: "Estimate payments you may be able to get."
    }
  ]
};
