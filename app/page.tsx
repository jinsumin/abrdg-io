'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import { useTheme } from './providers';
import { translations } from './translations';

export default function Home() {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t.services.cards.card1.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.services.cards.card1.description}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t.services.cards.card2.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.services.cards.card2.description}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{t.services.cards.card3.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.services.cards.card3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 whitespace-pre-line">
              {t.contact.subtitle}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.contact.cta}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
