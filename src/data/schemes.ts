export interface Scheme {
    title: string;
    titleHindi: string;
    description: string;
    benefits: string;
    eligibility: string;
    link: string;
    keywords: string[];
}

export const SCHEMES_DATA: Scheme[] = [
    // Agriculture & Farmers
    {
        title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
        titleHindi: "प्रधानमंत्री किसान सम्मान निधि",
        description: "Central Sector Scheme to provide income support to all landholding farmers' families in the country.",
        benefits: "Financial benefit of ₹6,000 per year, payable in three equal installments of ₹2,000 each.",
        eligibility: "All landholding farmer families having cultivable landholding in their names.",
        link: "https://pmkisan.gov.in",
        keywords: ["kisan", "farmer", "6000", "nidhi", "samman", "agriculture", "money", "income", "support", "खेती", "किसान", "सम्मान", "निधि", "पैसा"]
    },
    {
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        titleHindi: "प्रधानमंत्री फसल बीमा योजना",
        description: "Crop insurance scheme that integrates multiple stakeholders on a single platform.",
        benefits: "Comprehensive insurance cover against failure of the crop thus helping in stabilizing the income of the farmers.",
        eligibility: "Farmers including sharecroppers and tenant farmers growing notified crops in notified areas.",
        link: "https://pmfby.gov.in",
        keywords: ["fasal", "bima", "crop", "insurance", "damage", "loss", "kheti", "nuksan", "rain", "drought", "flood", "फसल", "बीमा", "खेती", "नुकसान", "बारिश"]
    },
    {
        title: "Kisan Credit Card (KCC)",
        titleHindi: "किसान क्रेडिट कार्ड",
        description: "Scheme to provide adequate and timely credit support from the banking system to farmers.",
        benefits: "Credit to meet cultivation expenses, post-harvest expenses, and consumption requirements of farmer households.",
        eligibility: "All farmers, tenant farmers, sharecroppers, and SHGs of farmers.",
        link: "https://www.myscheme.gov.in/schemes/kcc",
        keywords: ["kic", "card", "credit", "loan", "farmer", "bank", "interest", "finance", "kisan", "credit", "card", "क्रेडिट", "लोन", "बैंक", "ब्याज"]
    },
    {
        title: "Soil Health Card Scheme",
        titleHindi: "मृदा स्वास्थ्य कार्ड योजना",
        description: "Scheme to issue soil health cards to farmers every 2 years so as to address nutrient deficiencies.",
        benefits: "Report on soil nutrient status and recommendation on appropriate dosage of fertilizers.",
        eligibility: "All farmers with land holdings.",
        link: "https://soilhealth.dac.gov.in/",
        keywords: ["soil", "health", "card", "land", "nutrient", "fertilizer", "testing", "agriculture", "miti", "mitti", "मृदा", "मिट्टी", "जांच", "खाद"]
    },
    {
        title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
        titleHindi: "प्रधानमंत्री कृषि सिंचाई योजना",
        description: "Scheme to improve on-farm water use efficiency and expand cultivable area under assured irrigation.",
        benefits: "Subsidies for drip and sprinkler irrigation systems ('Per Drop More Crop').",
        eligibility: "Farmers with cultivable land and water source.",
        link: "https://pmksy.gov.in/",
        keywords: ["irrigation", "water", "drip", "sprinkler", "sinchai", "farm", "field", "pani", "सिंचाई", "पानी", "ड्रिप", "स्प्रिंकलर"]
    },

    // Health & Nutrition
    {
        title: "Ayushman Bharat - PMJAY",
        titleHindi: "आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना",
        description: "World's largest health insurance/assurance scheme fully financed by the government.",
        benefits: "Health cover of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
        eligibility: "Families identified based on deprivation and occupational criteria as per SECC 2011 data.",
        link: "https://pmjay.gov.in",
        keywords: ["health", "insurance", "medical", "hospital", "5 lakh", "ayushman", "bharat", "swasthya", "treatment", "card", "mediclaim", "इलाज", "अस्पताल", "बीमा", "आयुष्मान", "सेहत", "कार्ड"]
    },
    {
        title: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
        titleHindi: "प्रधानमंत्री भारतीय जनऔषधि परियोजना",
        description: "Campaign to provide quality medicines at affordable prices to the masses.",
        benefits: "Generic medicines at 50% to 90% lesser prices compared to branded medicines.",
        eligibility: "Available to all. Kendra can be opened by Doctors, Pharmacists, NGOs, etc.",
        link: "http://janaushadhi.gov.in/",
        keywords: ["medicine", "pharmacy", "generic", "cheap", "drug", "store", "kendra", "dawa", "davai", "dawai", "दवा", "औषधि", "सस्ती", "दुकान"]
    },
    {
        title: "PM Poshan (Mid Day Meal Scheme)",
        titleHindi: "प्रधानमंत्री पोषण शक्ति निर्माण",
        description: "Scheme to improve the nutritional status of children in Government and Government-aided schools.",
        benefits: "Free hot cooked meal to children in primary and upper primary classes.",
        eligibility: "Children studying in classes I to VIII in eligible schools.",
        link: "https://pmposhan.education.gov.in/",
        keywords: ["food", "meal", "school", "children", "lunch", "nutrition", "mid day", "khana", "bhojan", "खाना", "भोजन", "स्कूल", "बच्चे"]
    },
    {
        title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        titleHindi: "प्रधानमंत्री मातृ वंदना योजना",
        description: "Maternity benefit program aimed at providing partial compensation for wage loss.",
        benefits: "Cash incentive of ₹5,000 in three installments directly to bank account.",
        eligibility: "Pregnant Women and Lactating Mothers (for the first living child).",
        link: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
        keywords: ["maternity", "pregnant", "mother", "women", "baby", "delivery", "cash", "incentive", "matru", "vandana", "garbhavati", "गर्भवती", "महिला", "माँ", "बच्चा"]
    },

    // Housing & Livelihood
    {
        title: "Pradhan Mantri Awas Yojana - Gramin",
        titleHindi: "प्रधानमंत्री आवास योजना - ग्रामीण",
        description: "Scheme to provide a pucca house with basic amenities to all houseless households.",
        benefits: "Financial assistance of ₹1.20 lakh in plains and ₹1.30 lakh in hilly states for house construction.",
        eligibility: "Houseless families or those living in zero, one or two room kutcha wall and kutcha roof houses.",
        link: "https://pmayg.nic.in",
        keywords: ["house", "home", "housing", "awas", "ghara", "makan", "roof", "construction", "rural", "gramin", "loan", "subsidy", "आवास", "घर", "मकान", "ग्रामीण"]
    },
    {
        title: "Pradhan Mantri Awas Yojana - Urban",
        titleHindi: "प्रधानमंत्री आवास योजना - शहरी",
        description: "Mission to provide housing for all in urban areas.",
        benefits: "Interest subsidy up to 6.5% on housing loans or direct financial assistance for construction.",
        eligibility: "EWS, LIG, and MIG families in urban areas without a pucca house.",
        link: "https://pmaymis.gov.in/",
        keywords: ["house", "home", "urban", "city", "flat", "apartment", "loan", "subsidy", "shehari", "shahar", "आवास", "शहर", "मकान"]
    },
    {
        title: "MGNREGA",
        titleHindi: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
        description: "Employment guarantee scheme ensuring at least 100 days of wage employment in a financial year.",
        benefits: "Guaranteed 100 days of wage employment to every rural household whose adult members volunteer to do unskilled manual work.",
        eligibility: "Any rural household whose adult members are willing to do unskilled manual work.",
        link: "https://nrega.nic.in",
        keywords: ["mgnrega", "nrega", "employment", "job", "work", "100 days", "wage", "labor", "mazdoor", "rozgar", "guarantee", "card", "mnrega", "मनरेगा", "रोजगार", "मजदूरी", "काम", "नरेगा"]
    },
    {
        title: "Deen Dayal Antyodaya Yojana - NRLM",
        titleHindi: "दीन दयाल अंत्योદય योजना - राष्ट्रीय ग्रामीण आजीविका मिशन",
        description: "Scheme to alleviate rural poverty by mobilizing poor rural households into SHGs.",
        benefits: "Revolving Fund and Community Investment Fund to SHGs, interest subvention on loans.",
        eligibility: "Rural poor households, aiming for one woman member from each household to join SHG.",
        link: "https://aajeevika.gov.in/",
        keywords: ["shg", "group", "self help", "women", "livelihood", "loan", "village", "samuh", "bachat", "gat", "समूह", "बचत", "आजीविका", "महिला"]
    },

    // Financial Inclusion & Social Security
    {
        title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        titleHindi: "प्रधानमंत्री जन धन योजना",
        description: "National Mission for Financial Inclusion to ensure access to financial services in an affordable manner.",
        benefits: "Zero balance bank account, RuPay debit card, accident insurance cover of ₹1 lakh (enhanced to ₹2 lakh for new accounts).",
        eligibility: "Any individual who does not have a bank account can open a Jan Dhan account.",
        link: "https://pmjdy.gov.in",
        keywords: ["jan", "dhan", "bank", "account", "money", "zero balance", "debit card", "insurance", "financial", "inclusion", "savings", "khata", "जन", "धन", "बैंक", "खाता", "बचत"]
    },
    {
        title: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
        titleHindi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
        description: "Life insurance scheme available to people between 18 and 50 years of age.",
        benefits: "Life cover of ₹2 lakh in case of death due to any reason, for a premium of ₹436 per annum.",
        eligibility: "Bank account holders between 18-50 years of age.",
        link: "https://www.jansuraksha.gov.in/",
        keywords: ["life", "insurance", "death", "cover", "policy", "premium", "jeevan", "jyoti", "term", "plan", "bima", "जीवन", "ज्योति", "बीमा", "मृत्यु"]
    },
    {
        title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
        titleHindi: "प्रधानमंत्री सुरक्षा बीमा योजना",
        description: "Accident insurance scheme available to people between 18 and 70 years of age.",
        benefits: "Accidental death and disability cover of ₹2 lakh for a premium of ₹20 per annum.",
        eligibility: "Bank account holders between 18-70 years of age.",
        link: "https://www.jansuraksha.gov.in/",
        keywords: ["accident", "insurance", "disability", "cover", "policy", "premium", "suraksha", "safety", "bima", "durghatna", "सुरक्षा", "बीमा", "दुर्घटना"]
    },
    {
        title: "Atal Pension Yojana (APY)",
        titleHindi: "अटल पेंशन योजना",
        description: "Pension scheme focused on the unorganized sector workers.",
        benefits: "Guaranteed minimum pension of ₹1,000 to ₹5,000 per month after the age of 60 years.",
        eligibility: "Any citizen of India between 18-40 years of age having a savings bank account.",
        link: "https://npscra.nsdl.co.in/scheme-details.php",
        keywords: ["pension", "old age", "retirement", "atal", "income", "monthly", "security", "60 years", "पेंशन", "बुढ़ापा", "रिटायरमेंट", "अटल", "आय"]
    },

    // Women & Child Development
    {
        title: "Sukanya Samriddhi Yojana",
        titleHindi: "सुकन्या समृद्धि योजना",
        description: "A small deposit scheme for the girl child launched as a part of the 'Beti Bachao Beti Padhao' campaign.",
        benefits: "High interest rate (currently ~8.2%), tax exemption under 80C, maturity amount tax-free.",
        eligibility: "Parents or legal guardians can open an account in the name of a girl child below 10 years of age.",
        link: "https://www.india.gov.in/spotlight/sukanya-samriddhi-yojana",
        keywords: ["sukanya", "samriddhi", "girl", "child", "daughter", "education", "marriage", "savings", "interest", "deposit", "beti", "ladki", "future", "सुकन्या", "समृद्धि", "बेटी", "लड़की", "बचत", "शादी", "पढाई"]
    },
    {
        title: "Beti Bachao Beti Padhao",
        titleHindi: "बेटी बचाओ बेटी पढ़ाओ",
        description: "Campaign to generate awareness and improve the efficiency of welfare services intended for girls.",
        benefits: "Improvement in Sex Ratio at Birth, improvement in enrollment of girls in education.",
        eligibility: "Community focused scheme, not individual beneficiary based directly (except via linked schemes like SSY).",
        link: "https://wcd.nic.in/bbbp-schemes",
        keywords: ["beti", "bachao", "padhao", "girl", "daughter", "save", "educate", "awareness", "campaign", "बेटी", "बचाओ", "पढ़ाओ"]
    },
    {
        title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
        titleHindi: "प्रधानमंत्री उज्ज्वला योजना",
        description: "Scheme to provide LPG connections to women from Below Poverty Line (BPL) households.",
        benefits: "Deposit-free LPG connection allowed with financial assistance of ₹1,600 per connection.",
        eligibility: "Adult woman of a BPL family who does not have an LPG connection in her name.",
        link: "https://pmuy.gov.in",
        keywords: ["ujjwala", "gas", "lpg", "cylinder", "cooking", "fuel", "women", "chulha", "smoke", "kitchen", "उज्ज्वला", "गैस", "सिलेंडर", "चूल्हा", "रसोई"]
    },
    {
        title: "Mahila Samman Savings Certificate",
        titleHindi: "महिला सम्मान बचत प्रमाण पत्र",
        description: "A one-time small savings scheme for women and girls.",
        benefits: "Fixed interest rate of 7.5% per annum for a 2-year tenure. Max deposit ₹2 lakh.",
        eligibility: "Any woman or girl child.",
        link: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
        keywords: ["women", "saving", "certificate", "invest", "interest", "mahila", "samman", "bachat", "महिला", "सम्मान", "बचत", "निवेश"]
    },

    // Employment, Skill & Entrepreneurship
    {
        title: "Pradhan Mantri Mudra Yojana (PMMY)",
        titleHindi: "प्रधानमंत्री मुद्रा योजना",
        description: "Scheme to fund the unfunded by bringing such enterprises to the formal financial system.",
        benefits: "Loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises (Shishu, Kishore, and Tarun categories).",
        eligibility: "Any Indian citizen who has a business plan for a non-farm sector income generating activity.",
        link: "https://www.mudra.org.in",
        keywords: ["mudra", "loan", "business", "startup", "entrepreneur", "credit", "finance", "small business", "shishu", "kishore", "tarun", "मुद्रा", "लोन", "व्यापार", "बिजनेस"]
    },
    {
        title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        titleHindi: "प्रधानमंत्री कौशल विकास योजना",
        description: "Skill development initiative scheme of the Government of India for recognition and standardization of skills.",
        benefits: "Free short-term training, recognition of prior learning, and placement assistance.",
        eligibility: "Indian youth who are dropouts or unemployed and want to improve their skills.",
        link: "https://www.pmkvyofficial.org",
        keywords: ["skill", "training", "kaushal", "vikas", "development", "job", "course", "certificate", "youth", "learning", "कौशल", "विकास", "ट्रेनिंग", "नौकरी"]
    },
    {
        title: "Prime Minister's Employment Generation Programme (PMEGP)",
        titleHindi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम",
        description: "Credit-linked subsidy programme for generation of employment opportunities through setting up of micro enterprises.",
        benefits: "Subsidy up to 35% of project cost (Max ₹50 lakh for manufacturing, ₹20 lakh for service).",
        eligibility: "Any individual above 18 years, SHGs, Societies, Co-operative societies.",
        link: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
        keywords: ["employment", "job", "business", "manufacturing", "service", "subsidy", "loan", "startup", "rozgar", "रोजगार", "सृजन", "व्यापार", "सब्सिडी"]
    },
    {
        title: "Stand Up India Scheme",
        titleHindi: "स्टैंड अप इंडिया योजना",
        description: "Scheme for financing SC/ST and/or Women Entrepreneurs.",
        benefits: "Bank loans between ₹10 lakh and ₹1 Crore to at least one SC/ST borrower and at least one woman borrower per bank branch.",
        eligibility: "SC/ST and/or Women entrepreneurs above 18 years setting up a greenfield enterprise.",
        link: "https://www.standupmitra.in",
        keywords: ["stand up", "india", "loan", "business", "sc", "st", "women", "entrepreneur", "crore", "financing", "bank", "दलित", "महिला", "व्यापार"]
    },
    {
        title: "PM SVANidhi",
        titleHindi: "पीएम स्वनिधि",
        description: "Special Micro-Credit Facility for Street Vendors.",
        benefits: "Collateral-free working capital loan up to ₹10,000 (1st tranche), then ₹20k and ₹50k on repayment.",
        eligibility: "Street vendors in urban areas.",
        link: "https://pmsvanidhi.mohua.gov.in/",
        keywords: ["street", "vendor", "loan", "hawker", "thela", "rehri", "patri", "svanidhi", "10000", "loan", "रेडी", "पटरी", "ठेला", "लोन"]
    },
    {
        title: "Agneepath Scheme",
        titleHindi: "अग्निपथ योजना",
        description: "Scheme for recruitment of youth in the Armed Forces.",
        benefits: "Opportunity to serve in Armed Forces for 4 years as Agniveers. Attractive Seva Nidhi package (~₹11.71 Lakh) on exit.",
        eligibility: "Youth between 17.5 to 21 years (upper age limit extended for first batch).",
        link: "https://www.mod.gov.in/agneepath-scheme",
        keywords: ["army", "navy", "air force", "defence", "soldier", "job", "recruitment", "agneepath", "agniveer", "bharti", "सेना", "भर्ती", "अग्निपथ", "अग्निवीर"]
    },

    // Energy & Infrastructure
    {
        title: "PM Surya Ghar: Muft Bijli Yojana",
        titleHindi: "प्रधानमंत्री सूर्य घर: मुफ्त बिजली योजना",
        description: "Scheme to provide free electricity to households by installing rooftop solar systems.",
        benefits: "Free electricity up to 300 units per month, subsidy for solar panel installation.",
        eligibility: "Households with suitable roof space.",
        link: "https://pmsuryaghar.gov.in/",
        keywords: ["solar", "sun", "electricity", "power", "roof", "panel", "free", "light", "surya", "ghar", "bijli", "सौर", "ऊर्जा", "बिजली", "मुफ्त"]
    },
    {
        title: "Jal Jeevan Mission",
        titleHindi: "जल जीवन मिशन",
        description: "Mission to provide Functional Household Tap Connection (FHTC) to every rural household.",
        benefits: "Regular and clean piped water supply to rural homes.",
        eligibility: "Rural households without tap water connection.",
        link: "https://jaljeevanmission.gov.in/",
        keywords: ["water", "tap", "pipe", "drink", "clean", "home", "rural", "jal", "jeevan", "nal", "pani", "जल", "जीवन", "नल", "पानी"]
    },
    {
        title: "Swachh Bharat Mission (Gramin)",
        titleHindi: "स्वच्छ भारत मिशन (ग्रामीण)",
        description: "Mission to accelerate universal sanitation coverage.",
        benefits: "Incentive of ₹12,000 for construction of Individual Household Latrines (IHHL).",
        eligibility: "BPL Households and identified APL households (SC/ST, defects, etc.) without toilet.",
        link: "https://swachhbharatmission.gov.in/",
        keywords: ["clean", "sanitation", "toilet", "latrine", "bathroom", "hygiene", "swachh", "bharat", "sauchalaya", "safai", "स्वच्छ", "भारत", "शौचालय", "सफाई"]
    },

    // Disability & Social Welfare
    {
        title: "Accessible India Campaign (Sugamya Bharat Abhiyan)",
        titleHindi: "सुगम्य भारत अभियान",
        description: "Nation-wide Campaign for achieving universal accessibility for Persons with Disabilities (PwDs).",
        benefits: "Creation of accessible environment in built environment, transport system and ICT ecosystem.",
        eligibility: "Persons with Disabilities (PwDs) and general public.",
        link: "http://accessibleindia.gov.in/",
        keywords: ["disability", "accessible", "wheelchair", "ramp", "sugamya", "divyang", "handicap", "विकलांग", "दिव्यांग", "सुगम्य"]
    },
    {
        title: "Deendayal Disabled Rehabilitation Scheme (DDRS)",
        titleHindi: "दीनदयाल विकलांग पुनर्वास योजना",
        description: "Scheme to provide financial assistance to NGOs working for education and rehabilitation of PwDs.",
        benefits: "Grant-in-aid to NGOs for special schools, vocational training, etc.",
        eligibility: "NGOs working in the field of disability rehabilitation.",
        link: "http://disabilityaffairs.gov.in/content/page/ddrs.php",
        keywords: ["rehabilitation", "ngo", "grant", "school", "training", "ddrs", "punarvas", "पुनर्वास", "प्रशिक्षण"]
    },
    {
        title: "Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances (ADIP)",
        titleHindi: "एडिप योजना (ADIP)",
        description: "Scheme to assist needy disabled persons in procuring durable, sophisticated and scientifically manufactured, modern, standard aids and appliances.",
        benefits: "Financial assistance for purchase of aids and appliances like tricycle, wheel chair, hearing aid etc.",
        eligibility: "PwDs with 40% or more disability and monthly income up to ₹20,000.",
        link: "http://disabilityaffairs.gov.in/content/page/adip.php",
        keywords: ["aid", "appliance", "tricycle", "hearing aid", "wheelchair", "adip", "equipment", "उपकरण", "व्हीलचेयर", "सुनने की मशीन"]
    },

    // Minority Affairs
    {
        title: "Naya Savera - Free Coaching and Allied Assistance",
        titleHindi: "नया सवेरा - मुफ्त कोचिंग",
        description: "Scheme to assist students/candidates belonging to minority communities to prepare for entrance examinations.",
        benefits: "Free coaching for technical/professional courses and competitive exams.",
        eligibility: "Students belonging to minority communities with family income less than ₹6.00 lakh.",
        link: "http://minorityaffairs.gov.in/en/schemesperformance/free-coaching-and-allied-scheme-naya-savera",
        keywords: ["minority", "coaching", "exam", "student", "free", "muslim", "christian", "sikh", "buddhist", "jain", "parsi", "naya savera", "अल्पसंख्यक", "कोचिंग"]
    },
    {
        title: "Seekho Aur Kamao (Learn & Earn)",
        titleHindi: "सीखो और कमाओ",
        description: "Skill development scheme for youth of 14 - 35 years of age and aiming at upgrading the skills of minority youths.",
        benefits: "Skill training and placement assistance (75% placement guarantee).",
        eligibility: "Youth (14-35 years) belonging to minority communities.",
        link: "http://nirt.in/seekho-aur-kamao/",
        keywords: ["skill", "learn", "earn", "job", "training", "minority", "seekho", "kamao", "सीखो", "कमाओ", "हुनर"]
    },

    // Education
    {
        title: "Samagra Shiksha Abhiyan",
        titleHindi: "समग्र शिक्षा अभियान",
        description: "Integrated Scheme for School Education extending from Pre-school to Class 12.",
        benefits: "Ensuring inclusive and equitable quality education at all levels of school education.",
        eligibility: "Students in government and aided schools.",
        link: "https://samagra.education.gov.in/",
        keywords: ["education", "school", "student", "teacher", "quality", "samagra", "shiksha", "शिक्षा", "स्कूल", "पढ़ाई"]
    },
    {
        title: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
        titleHindi: "राष्ट्रीय साधन-सह-मेधा छात्रवृत्ति",
        description: "Scholarship scheme to arrest drop out of meritorious students of economically weaker sections at class VIII.",
        benefits: "Scholarship of ₹12,000 per annum.",
        eligibility: "Students whose parental income is not more than ₹3.50 lakh per annum.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "merit", "student", "money", "study", "nmmss", "chhatravritti", "छात्रवृत्ति", "वजीफा"]
    },
    {
        title: "Post Matric Scholarship for SC Students",
        titleHindi: "अनुसूचित जाति के लिए पोस्ट मैट्रिक छात्रवृत्ति",
        description: "Scholarship for SC students studying in classes 11th and 12th and post-secondary stages.",
        benefits: "Maintenance allowance, reimbursement of compulsory non-refundable fees.",
        eligibility: "SC students whose parental income does not exceed ₹2.50 lakh per annum.",
        link: "https://scholarships.gov.in/",
        keywords: ["sc", "scholarship", "post matric", "student", "dalit", "scheduled caste", "college", "university", "छात्रवृत्ति", "अनुसूचित"]
    },
    {
        title: "Post Matric Scholarship for ST Students",
        titleHindi: "अनुसूचित जनजाति के लिए पोस्ट मैट्रिक छात्रवृत्ति",
        description: "Scholarship for ST students pursuing post-matriculation or post-secondary education.",
        benefits: "Maintenance allowance and compulsory fees reimbursement.",
        eligibility: "ST students with parental income not exceeding ₹2.50 lakh per annum.",
        link: "https://scholarships.gov.in/",
        keywords: ["st", "tribal", "scholarship", "post matric", "student", "scheduled tribe", "college", "छात्रवृत्ति", "जनजाति"]
    },
    {
        title: "Post Matric Scholarship for OBC Students",
        titleHindi: "ओबीसी छात्रों के लिए पोस्ट मैट्रिक छात्रवृत्ति",
        description: "Scholarship for OBC students to pursue higher education.",
        benefits: "Financial assistance for maintenance and fee reimbursement.",
        eligibility: "OBC students with parental income up to ₹1 lakh per annum.",
        link: "https://scholarships.gov.in/",
        keywords: ["obc", "scholarship", "backward", "student", "college", "higher education", "छात्रवृत्ति", "पिछड़ा"]
    },
    {
        title: "Central Sector Scheme of Scholarship for College and University Students",
        titleHindi: "कॉलेज और विश्वविद्यालय के छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना",
        description: "Merit-based scholarship for students from economically weaker sections.",
        benefits: "₹10,000 to ₹20,000 per year depending on the course.",
        eligibility: "Students who have secured admission in first year of undergraduate course with family income below ₹8 lakh.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "college", "university", "undergraduate", "merit", "student", "graduation", "degree", "छात्रवृत्ति", "कॉलेज"]
    },
    {
        title: "Prime Minister's Scholarship Scheme for Central Armed Police Forces",
        titleHindi: "केंद्रीय सशस्त्र पुलिस बलों के लिए प्रधानमंत्री छात्रवृत्ति योजना",
        description: "Scholarship for wards/widows of CAPF and AR personnel.",
        benefits: "₹3,000 per month for boys and ₹3,600 per month for girls.",
        eligibility: "Wards/widows of ex-CAPF/AR personnel who have secured minimum 60% marks in 12th.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "capf", "police", "defence", "student", "armed forces", "छात्रवृत्ति", "पुलिस", "सेना"]
    },
    {
        title: "National Scholarship Portal (NSP)",
        titleHindi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
        description: "One-stop solution for various scholarship schemes for students.",
        benefits: "Access to 50+ scholarship schemes from Central and State Governments.",
        eligibility: "Students from various categories - SC/ST/OBC/Minority/Disabled etc.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "portal", "student", "online", "apply", "nsp", "government", "छात्रवृत्ति", "पोर्टल"]
    },
    {
        title: "Vidyalakshmi Education Loan Portal",
        titleHindi: "विद्यालक्ष्मी शिक्षा ऋण पोर्टल",
        description: "Common education loan portal for students to apply for loans from multiple banks.",
        benefits: "Single window for education loan applications, scholarship search, and grievance redressal.",
        eligibility: "Students seeking education loans for higher studies in India or abroad.",
        link: "https://www.vidyalakshmi.co.in/",
        keywords: ["education", "loan", "student", "bank", "higher studies", "college", "university", "abroad", "study", "finance", "शिक्षा", "लोन", "ऋण"]
    },
    {
        title: "Pradhan Mantri Vidya Lakshmi Karyakram",
        titleHindi: "प्रधानमंत्री विद्या लक्ष्मी कार्यक्रम",
        description: "Interest subsidy scheme on education loans for economically weaker sections.",
        benefits: "Interest subsidy on education loans during moratorium period.",
        eligibility: "Students with parental income up to ₹4.5 lakh per annum pursuing technical/professional courses.",
        link: "https://www.vidyalakshmi.co.in/",
        keywords: ["education", "loan", "subsidy", "interest", "student", "technical", "professional", "शिक्षा", "ऋण", "सब्सिडी"]
    },
    {
        title: "INSPIRE Scholarship (Innovation in Science Pursuit for Inspired Research)",
        titleHindi: "इंस्पायर छात्रवृत्ति",
        description: "Scholarship for students pursuing Natural and Basic Sciences at Bachelor and Master level.",
        benefits: "₹80,000 per annum for 5 years (BSc-MSc integrated or BSc + MSc).",
        eligibility: "Students securing rank within top 1% in Class 12th board exam and pursuing science.",
        link: "https://online-inspire.gov.in/",
        keywords: ["science", "scholarship", "inspire", "research", "student", "physics", "chemistry", "biology", "mathematics", "विज्ञान", "छात्रवृत्ति"]
    },
    {
        title: "National Fellowship for SC Students",
        titleHindi: "अनुसूचित जाति छात्रों के लिए राष्ट्रीय फैलोशिप",
        description: "Fellowship for SC students pursuing M.Phil and Ph.D.",
        benefits: "₹31,000 per month (JRF), ₹35,000 per month (SRF) plus contingency grant.",
        eligibility: "SC students enrolled in M.Phil/Ph.D in Indian universities/institutions.",
        link: "https://ugc.ac.in/",
        keywords: ["fellowship", "sc", "phd", "research", "student", "doctoral", "mphil", "university", "शोध", "फैलोशिप"]
    },
    {
        title: "Maulana Azad National Fellowship for Minority Students",
        titleHindi: "मौलाना आजाद राष्ट्रीय फैलोशिप",
        description: "Fellowship for students from minority communities pursuing M.Phil and Ph.D.",
        benefits: "₹31,000 per month (JRF), ₹35,000 per month (SRF) plus contingency.",
        eligibility: "Students from minority communities pursuing research (M.Phil/Ph.D).",
        link: "https://ugc.ac.in/",
        keywords: ["fellowship", "minority", "phd", "research", "muslim", "christian", "sikh", "buddhist", "student", "फैलोशिप", "अल्पसंख्यक"]
    },
    {
        title: "National Overseas Scholarship for SC Students",
        titleHindi: "अनुसूचित जाति छात्रों के लिए राष्ट्रीय विदेश छात्रवृत्ति",
        description: "Scholarship for SC students to pursue Master's and Ph.D. abroad.",
        benefits: "Full tuition fees, maintenance allowance, visa fees, and airfare.",
        eligibility: "SC students with family income below ₹8 lakh per annum.",
        link: "https://socialjustice.gov.in/",
        keywords: ["scholarship", "abroad", "foreign", "sc", "student", "masters", "phd", "international", "study abroad", "विदेश", "छात्रवृत्ति"]
    },
    {
        title: "Swami Vivekananda Merit-cum-Means Scholarship",
        titleHindi: "स्वामी विवेकानंद मेरिट-कम-मीन्स छात्रवृत्ति",
        description: "Scholarship for minority community students pursuing technical and professional courses.",
        benefits: "₹20,000 per year for professional courses.",
        eligibility: "Minority students with 50% marks and family income below ₹2.5 lakh.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "minority", "technical", "professional", "engineering", "medical", "student", "छात्रवृत्ति", "अल्पसंख्यक"]
    },
    {
        title: "Begum Hazrat Mahal National Scholarship for Girls",
        titleHindi: "बेगम हज़रत महल राष्ट्रीय छात्रवृत्ति",
        description: "Scholarship for girl students from minority communities.",
        benefits: "₹5,000 to ₹12,000 per year depending on class.",
        eligibility: "Girl students from minority communities in classes 6 to 12.",
        link: "https://scholarships.gov.in/",
        keywords: ["scholarship", "girl", "minority", "female", "student", "school", "education", "बेटी", "छात्रवृत्ति", "लड़की"]
    }
];

