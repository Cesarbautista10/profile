import { useLanguage } from '../context/LanguageContext'

const Interfaces = () => {
  const { t } = useLanguage()

  const interfaces = [
    {
      name: 'DVI/TMDS/HSTX',
      type: 'Video',
      speed: 'Up to 10.2 Gbps',
      pins: '4 differential pairs',
      use: 'High-speed video',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'I2C',
      type: 'Serial Bus',
      speed: '100 kHz - 3.4 MHz',
      pins: '2 (SDA, SCL)',
      use: 'Sensors, EEPROMs',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'I2S',
      type: 'Audio',
      speed: 'Up to 48 MHz',
      pins: '3-4 (SCK, WS, SD)',
      use: 'Digital audio',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'USB HID',
      type: 'USB Device',
      speed: '1.5 - 480 Mbps',
      pins: '2 (D+, D-)',
      use: 'Keyboards, mice',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      name: 'USB CDC',
      type: 'USB Device',
      speed: '12 - 480 Mbps',
      pins: '2 (D+, D-)',
      use: 'Virtual COM port',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'WiFi',
      type: 'Wireless',
      speed: '150 - 1200 Mbps',
      pins: 'Integrated',
      use: 'Wireless networking',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      name: 'BLE',
      type: 'Wireless',
      speed: '1 - 2 Mbps',
      pins: 'Integrated',
      use: 'Low-power wireless',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      name: 'CAN/TWAI',
      type: 'Industrial',
      speed: '125 kbps - 1 Mbps',
      pins: '2 (CAN_H, CAN_L)',
      use: 'Automotive, industrial',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'Ethernet W5500',
      type: 'Network',
      speed: '10/100 Mbps',
      pins: 'SPI interface',
      use: 'Wired networking',
      color: 'from-teal-500 to-teal-700'
    },
    {
      name: 'Ethernet W6100',
      type: 'Network',
      speed: '10/100 Mbps',
      pins: 'SPI interface',
      use: 'IPv6 networking',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      name: 'One Wire',
      type: 'Serial Bus',
      speed: '16 kbps',
      pins: '1 (Data)',
      use: 'DS18B20 sensors',
      color: 'from-lime-500 to-lime-700'
    },
    {
      name: 'UART 8N1',
      type: 'Serial',
      speed: '9600 - 921600 bps',
      pins: '2 (TX, RX)',
      use: 'Serial communication',
      color: 'from-sky-500 to-sky-700'
    },
    {
      name: 'RS232',
      type: 'Serial',
      speed: '300 - 115200 bps',
      pins: '2-9 (±12V)',
      use: 'Legacy serial',
      color: 'from-violet-500 to-violet-700'
    },
    {
      name: 'RS485',
      type: 'Industrial',
      speed: 'Up to 10 Mbps',
      pins: '2 (A, B)',
      use: 'Long-distance serial',
      color: 'from-pink-500 to-pink-700'
    }
  ]

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t('language') === 'es' ? 'Interfaces de Comunicación' : 'Communication Interfaces'}
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900">
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-green-500">
                {t('language') === 'es' ? 'Interfaz' : 'Interface'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-green-500">
                {t('language') === 'es' ? 'Tipo' : 'Type'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-green-500">
                {t('language') === 'es' ? 'Velocidad' : 'Speed'}
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-green-500">
                Pins
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider border-b-2 border-green-500">
                {t('language') === 'es' ? 'Uso Principal' : 'Main Use'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {interfaces.map((iface, index) => (
              <tr 
                key={index}
                className="hover:bg-green-50 dark:hover:bg-gray-700/50 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r ${iface.color} text-white font-bold text-base shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all`}>
                    {iface.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium">
                    {iface.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                    {iface.speed}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    {iface.pins}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {iface.use}
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
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">14</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t('language') === 'es' ? 'Interfaces' : 'Interfaces'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t('language') === 'es' ? 'Categorías' : 'Categories'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">4</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t('language') === 'es' ? 'Inalámbricas' : 'Wireless'}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {t('language') === 'es' ? 'Dominio' : 'Mastery'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interfaces
