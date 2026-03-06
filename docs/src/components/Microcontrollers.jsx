import { useLanguage } from '../context/LanguageContext'

const Microcontrollers = () => {
  const { t, language } = useLanguage()

  const microcontrollers = [
    {
      family: 'STM32',
      series: ['STM32F0', 'STM32F1', 'STM32F4', 'STM32G0', 'STM32L0'],
      core: 'ARM Cortex-M',
      freq: '48-180MHz',
      flash: '16K-512K',
      ram: '4K-128K',
      color: 'from-blue-500 to-blue-700'
    },
    {
      family: 'PY32',
      series: ['PY32F002', 'PY32F003', 'PY32F030'],
      core: 'ARM Cortex-M0+',
      freq: '24-48MHz',
      flash: '20K-64K',
      ram: '3K-8K',
      color: 'from-purple-500 to-purple-700'
    },
    {
      family: 'RP2040/RP2350',
      series: ['RP2040', 'RP2350'],
      core: 'ARM Cortex-M0+/M33',
      freq: '133-150MHz',
      flash: 'External',
      ram: '264K-520K',
      color: 'from-pink-500 to-pink-700'
    },
    {
      family: 'ESP32',
      series: ['ESP32', 'ESP32-S2', 'ESP32-S3'],
      core: 'Xtensa LX6/LX7',
      freq: '160-240MHz',
      flash: '4M-16M',
      ram: '320K-512K',
      color: 'from-red-500 to-red-700'
    },
    {
      family: 'ESP32-C',
      series: ['ESP32-C3', 'ESP32-C5', 'ESP32-C6'],
      core: 'RISC-V',
      freq: '160MHz',
      flash: '4M-8M',
      ram: '400K',
      color: 'from-orange-500 to-orange-700'
    },
    {
      family: 'ESP32-H2',
      series: ['ESP32-H2'],
      core: 'RISC-V',
      freq: '96MHz',
      flash: '4M',
      ram: '320K',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      family: 'ATtiny',
      series: ['ATtiny85', 'ATtiny88'],
      core: 'AVR',
      freq: '8-20MHz',
      flash: '8K',
      ram: '512B',
      color: 'from-green-500 to-green-700'
    },
    {
      family: 'ATmega',
      series: ['ATmega8', 'ATmega328'],
      core: 'AVR',
      freq: '8-20MHz',
      flash: '8K-32K',
      ram: '1K-2K',
      color: 'from-teal-500 to-teal-700'
    },
    {
      family: 'CH55x',
      series: ['CH552', 'CH554', 'CH559'],
      core: '8051',
      freq: '6-56MHz',
      flash: '10K-63K',
      ram: '512B-6K',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      family: 'PIC18F',
      series: ['PIC18F25K80', 'PIC18F45K80'],
      core: 'PIC',
      freq: '16-64MHz',
      flash: '32K-64K',
      ram: '3.5K',
      color: 'from-indigo-500 to-indigo-700'
    }
  ]

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {language === 'es' ? 'Microcontroladores' : 'Microcontrollers'}
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900">
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                {language === 'es' ? 'Familia' : 'Family'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                Series
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                Core
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                {language === 'es' ? 'Frecuencia' : 'Frequency'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                Flash
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-blue-500">
                RAM
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {microcontrollers.map((mcu, index) => (
              <tr 
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r ${mcu.color} text-white font-bold text-base shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all`}>
                    {mcu.family}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {mcu.series.map((series, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                      >
                        {series}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {mcu.core}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                    </svg>
                    {mcu.freq}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                    </svg>
                    {mcu.flash}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                    </svg>
                    {mcu.ram}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats Footer */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' ? 'Familias' : 'Families'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">6</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' ? 'Arquitecturas' : 'Architectures'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">25+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' ? 'Modelos' : 'Models'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {language === 'es' ? 'Experiencia' : 'Experience'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Microcontrollers
