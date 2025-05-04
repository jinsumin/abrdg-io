import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              자산과 금융을 연결하는<br />
              새로운 패러다임
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              증권으로 카드 대금을 납부하는 혁신적인 금융 서비스
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              서비스 시작하기
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About abrdg.x</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              자산과 금융을 연결하는 팀. 사람들이 가진 다양한 자산을,<br />
              실질적인 금융 행동(결제, 납부, 투자 등)과 연결한다는 철학을 가진 팀입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              카드 대금, 예적금, 대출상환액, 보험료 등을<br />
              현금이 아닌 증권으로 납부하는 혁신적인 서비스를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">증권 결제</h3>
              <p className="text-gray-600 dark:text-gray-300">
                보유한 증권을 활용하여 카드 대금을 납부할 수 있습니다.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">자산 관리</h3>
              <p className="text-gray-600 dark:text-gray-300">
                다양한 자산을 효율적으로 관리하고 활용할 수 있습니다.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">금융 연결</h3>
              <p className="text-gray-600 dark:text-gray-300">
                자산과 금융 서비스를 원활하게 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              더 자세한 정보가 필요하신가요?<br />
              언제든지 문의해 주세요.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
