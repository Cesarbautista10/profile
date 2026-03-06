import { useLanguage } from '../context/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      title: t('programmingLanguages'),
      icon: '💻',
      skills: [
        { name: 'C', desc: t('firmware') },
        { name: 'Python', desc: t('scriptsAutomation') },
        { name: 'Assembly', desc: t('lowLevel') },
      ],
    },
    {
      title: t('hardwareInterfaces'),
      icon: '🔌',
      skills: [
        { name: 'UART', desc: t('serialComm') },
        { name: 'SPI', desc: t('syncProtocol') },
        { name: 'I2C', desc: t('dataBus') },
        { name: 'GPIO', desc: t('pinControl') },
      ],
    },
    {
      title: t('tools'),
      icon: '🛠️',
      skills: [
        { name: 'Keil', desc: t('ideArm') },
        { name: 'GCC', desc: t('gnuCompiler') },
        { name: 'PlatformIO', desc: t('iotFramework') },
        { name: 'JTAG', desc: t('debugging') },
      ],
    },
    {
      title: t('platforms'),
      icon: '🔧',
      skills: [
        { name: 'ESP32', desc: t('wifiBluetooth') },
        { name: 'STM32', desc: t('armCortex') },
        { name: 'RP2040', desc: t('raspberryPi') },
        { name: 'CH55x', desc: t('microcontrollers') },
      ],
    },
    {
      title: t('protocols'),
      icon: '📡',
      skills: [
        { name: 'MQTT', desc: t('iotMessaging') },
        { name: 'HTTP', desc: t('webProtocol') },
        { name: 'Modbus', desc: t('industrial') },
      ],
    },
  ]

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {t('skillsTitle')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
            <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
              <span className="mr-2">{category.icon}</span> {category.title}
            </h3>
            <ul className="space-y-1.5">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 text-xs">
                  <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400"> • {skill.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
