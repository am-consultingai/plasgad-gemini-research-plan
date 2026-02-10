import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Factory, ClipboardList, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import ResearchCard from './components/ResearchCard';
import ImageComparisonCarousel from './components/ImageComparisonCarousel';
import { researchData } from './data';

const imagePairs = [
  {
    title: "זיהוי מוצלח (True Positive)",
    original: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/TP.jpg?raw=true",
    processed: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/TP.jpg?raw=true"
  },
  {
    title: "התראת שווא: זיהוי צללים כפגם (False Positive)",
    original: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/orig_false_positive.jpg?raw=true",
    processed: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/false_positive.png?raw=true"
  },
  {
    title: "התראת שווא: זיהוי טקסטורה כפגם (False Positive)",
    original: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/orig_false_positive_2.jpg?raw=true",
    processed: "https://github.com/israelichamberit-cmd/images/blob/main/plsgad/false_positive_2.jpg?raw=true"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" dir="rtl">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 bg-opacity-90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
               {/* Plasgad Logo */}
              <img 
                src="https://www.plasgad.com/wp-content/uploads/2022/08/Untitled-1.svg" 
                alt="Plasgad" 
                className="h-8 md:h-10 w-auto"
              />
              <div className="hidden md:block w-px h-8 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 md:p-3 rounded-lg text-white shadow-lg hidden sm:block">
                  <Factory size={24} />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
                    הצעת מחקר: Gemini Vision
                  </h1>
                  <p className="text-slate-500 font-medium text-sm md:text-base">
                    זיהוי פגמים בקווי ייצור בפלסגד
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 md:flex-row-reverse">
               <div className="flex items-center gap-2 text-xs md:text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 whitespace-nowrap">
                <Sparkles size={14} />
                <span>מופעל על ידי Google Gemini</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-slate-200"></div>
              <a href="https://www.amconsultingai.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://github.com/israelichamberit-cmd/images/blob/main/AM_Logo.png?raw=true" 
                  alt="AM Consulting" 
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Intro Section: AI isn't the hard part */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl mx-auto text-center space-y-4"
        >
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
             AI הוא לא החלק הקשה – <span className="text-blue-600">האינטגרציה</span> היא האתגר האמיתי
           </h2>
           <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
             כבר קיבלתם את ההחלטה: בקרת איכות מבוססת AI היא העתיד של קו הייצור שלכם. אבל בין דמו מרשים לבין מערכת שפועלת באמינות במהירות ייצור מלאה, מסתתר שדה מוקשים של נעלמים. השאלה היא לא האם להטמיע Vision AI, אלא איך להטמיע אותו בלי הפתעות יקרות.
            </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageComparisonCarousel pairs={imagePairs} />
        </motion.div>

        {/* The Gap & Risks Section */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-12 mb-16 max-w-4xl mx-auto space-y-12"
        >
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-full shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">הפער שבין דמו מבטיח למערכת מוכנה לייצור</h3>
                  <p className="text-slate-700 leading-relaxed">
                    כל ספק AI יראה לכם זיהוי מושלם על תמונה מושלמת. אבל רצפת הייצור שלכם אינה מושלמת. משטחי פלסטיק מחזירים אור, משמרות מתחלפות, ומהירות הקו לא מחכה לאף אחד. מה שמבדיל בין אינטגרציית AI מוצלחת לבין ניסוי יקר הוא מה שאתם יודעים <strong>לפני</strong> שאתם מתחייבים.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">5 סיכונים שאנחנו מבטלים לפני שתוציאו דולר אחד על פריסה</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-bold text-blue-700 mb-1">1. התראות שווא ופספוסים</h4>
                    <p className="text-sm text-slate-600">אנחנו מאמתים את הדיוק בתנאי אמת כדי למנוע עצירת קו מיותרת.</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-bold text-blue-700 mb-1">2. הוצאות יתר על חומרה</h4>
                    <p className="text-sm text-slate-600">בדיקה האם חומרת מדף מספיקה לעומת מצלמות תעשייתיות יקרות.</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-bold text-blue-700 mb-1">3. "שטחים מתים" סביבתיים</h4>
                    <p className="text-sm text-slate-600">פתרון חידת התאורה וההשתקפויות על הפלסטיק.</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <h4 className="font-bold text-blue-700 mb-1">4. צווארי בקבוק בייצור</h4>
                    <p className="text-sm text-slate-600">בדיקות עומס ל-Latency כדי להבטיח עמידה בזמן המחזור.</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors md:col-span-2">
                    <h4 className="font-bold text-blue-700 mb-1">5. עלויות נסתרות (TCO)</h4>
                    <p className="text-sm text-slate-600">חישוב מדויק של API Tokens, ענן ותחזוקה ל-ROI אטום.</p>
                 </div>
              </div>
            </div>
        </motion.div>

        {/* Research Plan Intro */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mt-8 mb-10 max-w-4xl mx-auto"
        >
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <ClipboardList size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">תוכנית המחקר: מנתונים להחלטות</h2>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <p className="text-lg text-slate-700 leading-relaxed">
                  תוכנית המחקר שלנו בנויה סביב חמישה מסלולים קפדניים – כל אחד מהם נועד לבטל קטגוריה ספציפית של סיכון פריסה. המטרה: לספק לכם ראיות כמותיות, לא הבטחות.
                </p>
            </div>
        </motion.div>

        {/* Timeline/Cards Container */}
        <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute right-[3.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 to-transparent z-0 opacity-50"></div>

            <div className="space-y-4 relative z-10">
              {researchData.map((phase, index) => (
                <ResearchCard key={phase.id} phase={phase} index={index} />
              ))}
            </div>
        </div>

        {/* Bottom Section: About & Call to Action */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 max-w-4xl mx-auto space-y-12"
        >
           {/* About AM Consulting */}
           <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-10 rounded-2xl shadow-xl">
             <h3 className="text-2xl font-bold mb-4">אנחנו חיים במקום שבו ה-AI פוגש את הייצור</h3>
             <p className="text-slate-300 leading-relaxed mb-6">
               AM Consulting היא לא חברת AI שקראה על ייצור. ואנחנו לא חברת ייעוץ תעשייתי שזה עתה גילתה את ה-AI. אנחנו פועלים בנקודת המפגש – היכן שמודלים מתקדמים פוגשים מסועים, והיכן שפתרון נחשב רק אם הוא שורד את רצפת המפעל.
             </p>
             <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-teal-400" />
                  <span className="text-sm font-medium">מחקר מבוסס ראיות</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-teal-400" />
                  <span className="text-sm font-medium">שפת ייצור ותפעול</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-teal-400" />
                  <span className="text-sm font-medium">הגנה על ההשקעה</span>
                </div>
             </div>
           </div>

           {/* CTA */}
           <div className="text-center bg-blue-50 border border-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">הצעד הבא שלכם</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                אנחנו כבר מכירים את האתגרים בקו הייצור שלכם. בואו נעבור משלב התכנון לשלב הביצוע. צרו איתנו קשר לקביעת פגישת התנעה (Kick-off).
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=972544899266&text=%D7%94%D7%99%D7%99%20%D7%90%D7%91%D7%99%D7%A9%D7%99%20%F0%9F%91%8B%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%95%D7%97%D7%97%20%D7%A2%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%94%D7%9E%D7%97%D7%99%D7%A8%20%D7%9C%D7%9E%D7%97%D7%A7%D7%A8%20%D7%96%D7%99%D7%94%D7%95%D7%99%20%D7%A4%D7%92%D7%9E%D7%99%20%D7%99%D7%A6%D7%95%D7%A8.%20%0A%D7%9E%D7%AA%D7%99%20%D7%99%D7%94%D7%99%D7%94%20%D7%9C%D7%9A%20%D7%A0%D7%97%20%D7%9C%D7%A9%D7%95%D7%97%D7%97?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1 inline-flex items-center gap-2 mx-auto"
              >
                <span>בואו נתחיל ב-PoC</span>
                <ArrowLeft size={18} />
              </a>
           </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center text-slate-400 text-sm pb-8 border-t border-slate-200 pt-8"
        >
          <p>© 2024 תוכנית מחקר עבור פלסגד | AM Consulting</p>
        </motion.div>
      </main>
    </div>
  );
};

export default App;