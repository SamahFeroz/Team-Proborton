// languageSwitcher.js
const translations = {
    en: {
        logoTitle: "FarmBuddy",
        navHome: "Home",
        navFeatures: "Features",
        navAbout: "About",
        navContact: "Contact",
        navLogin: "Login",
        mobileHome: "Home",
        mobileFeatures: "Features",
        mobileAbout: "About",
        mobileContact: "Contact",
        mobileLogin: "Login",
        heroTitle: "Empowering Farmers with Data-Driven Solutions",
        heroText: "Leverage NASA datasets to optimize water usage, predict weather changes, and safeguard crops from pests and diseases.",
        exploreFeatures: "Explore Features",
        featuresHeading: "Key Features",
        predictiveClimate: "Predictive Climate Analytics",
        predictiveClimateDesc: "Real-time analysis and forecasts of weather and natural disasters.",
        soilHealth: "Soil Health Assessment",
        soilHealthDesc: "Comprehensive insights into soil conditions and crop suitability.",
        plantDisease: "Plant Disease Detection",
        plantDiseaseDesc: "AI-based identification of plant diseases to prevent crop failures.",
        pestControl: "Pest Control Hardware",
        pestControlDesc: "Innovative hardware to manage pests and reduce pesticide usage.",
        landUtilization: "Land Utilization",
        landUtilizationDesc: "Platform to lend or rent unused fertile lands, promoting growth.",
        footerContact: "Contact",
        footerAddress: "Address: Chittagong, Bangladesh.",
        footerPhone: "Phone: +8801823456789",
        footerFollow: "Follow us",
        footerAbout: "About",
        footerAboutUs: "About us",
        footerPrivacy: "Privacy Policy",
        footerContactUs: "Contact Us",
        footerAccount: "My Account",
        footerSignIn: "Sign In",
        footerHelp: "Help",
        copyright: "©2024 Team Proborton. All rights reserved."
    },
    bn: {
        logoTitle: "ফার্মবাডি",
        navHome: "হোম",
        navFeatures: "বৈশিষ্ট্য",
        navAbout: "আমাদের সম্পর্কে",
        navContact: "যোগাযোগ",
        navLogin: "লগইন",
        mobileHome: "হোম",
        mobileFeatures: "বৈশিষ্ট্য",
        mobileAbout: "আমাদের সম্পর্কে",
        mobileContact: "যোগাযোগ",
        mobileLogin: "লগইন",
        heroTitle: "তথ্যনির্ভর সমাধান দ্বারা কৃষকদের ক্ষমতায়ন",
        heroText: "নাসা ডেটাসেট ব্যবহার করে জল ব্যবহার অপ্টিমাইজ করুন, আবহাওয়া পরিবর্তনের পূর্বাভাস দিন এবং কীটপতঙ্গ ও রোগ থেকে ফসলকে রক্ষা করুন।",
        exploreFeatures: "বৈশিষ্ট্য দেখুন",
        featuresHeading: "মূল বৈশিষ্ট্য",
        predictiveClimate: "পূর্বাভাস জলবায়ু বিশ্লেষণ",
        predictiveClimateDesc: "আবহাওয়া এবং প্রাকৃতিক দুর্যোগের বাস্তব-সময়ের বিশ্লেষণ এবং পূর্বাভাস।",
        soilHealth: "মাটির স্বাস্থ্য মূল্যায়ন",
        soilHealthDesc: "মাটির অবস্থা এবং ফসলের উপযোগিতা সম্পর্কে বিস্তারিত তথ্য।",
        plantDisease: "গাছের রোগ সনাক্তকরণ",
        plantDiseaseDesc: "গাছের রোগের AI-ভিত্তিক সনাক্তকরণ ফসল ক্ষতি প্রতিরোধ করে।",
        pestControl: "কীটপতঙ্গ নিয়ন্ত্রণ হার্ডওয়্যার",
        pestControlDesc: "কীটপতঙ্গ নিয়ন্ত্রণ এবং কীটনাশক ব্যবহারের পরিমাণ কমাতে উদ্ভাবনী হার্ডওয়্যার।",
        landUtilization: "ভূমি ব্যবহার",
        landUtilizationDesc: "অব্যবহৃত উর্বর জমি লিজ বা ভাড়া দেওয়ার জন্য প্ল্যাটফর্ম, প্রবৃদ্ধি প্রচার করছে।",
        footerContact: "যোগাযোগ",
        footerAddress: "ঠিকানা: চট্টগ্রাম, বাংলাদেশ।",
        footerPhone: "ফোন: +৮৮০১৮২৩৪৫৬৭৮৯",
        footerFollow: "আমাদের অনুসরণ করুন",
        footerAbout: "আমাদের সম্পর্কে",
        footerAboutUs: "আমাদের সম্পর্কে",
        footerPrivacy: "গোপনীয়তা নীতি",
        footerContactUs: "যোগাযোগ করুন",
        footerAccount: "আমার অ্যাকাউন্ট",
        footerSignIn: "সাইন ইন করুন",
        footerHelp: "সাহায্য",
        copyright: "©২০২৪ টিম প্রবর্তন। সকল স্বত্ব সংরক্ষিত।"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-key]");
    
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[lang][key];
    });
}

// Attach event listeners to language buttons
document.getElementById("lang-en").addEventListener("click", function() {
    setLanguage('en');
});
document.getElementById("lang-bn").addEventListener("click", function() {
    setLanguage('bn');
});
