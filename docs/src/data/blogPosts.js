export const blogPosts = [
  {
    id: 1,
    slug: 'esp32-mqtt-iot',
    title: {
      es: 'Implementando MQTT en ESP32 para IoT Industrial',
      en: 'Implementing MQTT on ESP32 for Industrial IoT'
    },
    excerpt: {
      es: 'Guía completa para implementar comunicación MQTT en proyectos IoT industriales usando ESP32',
      en: 'Complete guide to implement MQTT communication in industrial IoT projects using ESP32'
    },
    content: {
      es: `
# Implementando MQTT en ESP32 para IoT Industrial

En este artículo, exploraremos cómo implementar el protocolo MQTT en el ESP32 para crear sistemas IoT robustos y escalables.

## ¿Por qué MQTT?

MQTT (Message Queuing Telemetry Transport) es ideal para dispositivos embebidos porque:

- **Bajo consumo de ancho de banda**: Perfecto para redes con limitaciones
- **Calidad de servicio (QoS)**: Garantiza la entrega de mensajes
- **Publish/Subscribe**: Arquitectura desacoplada y escalable

## Implementación en ESP32

### 1. Configuración del Cliente

\`\`\`c
#include "mqtt_client.h"

esp_mqtt_client_config_t mqtt_cfg = {
    .uri = "mqtt://broker.hivemq.com",
    .port = 1883
};

esp_mqtt_client_handle_t client = esp_mqtt_client_init(&mqtt_cfg);
esp_mqtt_client_start(client);
\`\`\`

### 2. Manejo de Eventos

\`\`\`c
static void mqtt_event_handler(void *handler_args, esp_event_base_t base, 
                               int32_t event_id, void *event_data) {
    esp_mqtt_event_handle_t event = event_data;
    
    switch (event->event_id) {
        case MQTT_EVENT_CONNECTED:
            ESP_LOGI(TAG, "MQTT_EVENT_CONNECTED");
            esp_mqtt_client_subscribe(client, "sensor/data", 0);
            break;
        case MQTT_EVENT_DATA:
            printf("Mensaje recibido: %.*s\\n", 
                   event->data_len, event->data);
            break;
    }
}
\`\`\`

## Casos de Uso

1. **Monitoreo de sensores industriales**
2. **Control remoto de actuadores**
3. **Telemetría en tiempo real**

## Conclusión

MQTT + ESP32 es una combinación poderosa para proyectos IoT profesionales.
      `,
      en: `
# Implementing MQTT on ESP32 for Industrial IoT

In this article, we'll explore how to implement the MQTT protocol on ESP32 to create robust and scalable IoT systems.

## Why MQTT?

MQTT (Message Queuing Telemetry Transport) is ideal for embedded devices because:

- **Low bandwidth consumption**: Perfect for constrained networks
- **Quality of Service (QoS)**: Guarantees message delivery
- **Publish/Subscribe**: Decoupled and scalable architecture

## ESP32 Implementation

### 1. Client Configuration

\`\`\`c
#include "mqtt_client.h"

esp_mqtt_client_config_t mqtt_cfg = {
    .uri = "mqtt://broker.hivemq.com",
    .port = 1883
};

esp_mqtt_client_handle_t client = esp_mqtt_client_init(&mqtt_cfg);
esp_mqtt_client_start(client);
\`\`\`

### 2. Event Handling

\`\`\`c
static void mqtt_event_handler(void *handler_args, esp_event_base_t base, 
                               int32_t event_id, void *event_data) {
    esp_mqtt_event_handle_t event = event_data;
    
    switch (event->event_id) {
        case MQTT_EVENT_CONNECTED:
            ESP_LOGI(TAG, "MQTT_EVENT_CONNECTED");
            esp_mqtt_client_subscribe(client, "sensor/data", 0);
            break;
        case MQTT_EVENT_DATA:
            printf("Message received: %.*s\\n", 
                   event->data_len, event->data);
            break;
    }
}
\`\`\`

## Use Cases

1. **Industrial sensor monitoring**
2. **Remote actuator control**
3. **Real-time telemetry**

## Conclusion

MQTT + ESP32 is a powerful combination for professional IoT projects.
      `
    },
    date: '2026-03-01',
    author: 'Cesar Bautista',
    tags: ['ESP32', 'MQTT', 'IoT', 'Embedded'],
    readTime: '5 min',
    category: 'Tutorial'
  },
  {
    id: 2,
    slug: 'stm32-foc-motor-control',
    title: {
      es: 'Control FOC de Motores BLDC con STM32',
      en: 'BLDC Motor FOC Control with STM32'
    },
    excerpt: {
      es: 'Implementación de algoritmo Field-Oriented Control para motores sin escobillas usando STM32',
      en: 'Field-Oriented Control algorithm implementation for brushless motors using STM32'
    },
    content: {
      es: `
# Control FOC de Motores BLDC con STM32

El control Field-Oriented Control (FOC) permite un control preciso y eficiente de motores BLDC.

## Ventajas del FOC

- **Mayor eficiencia**: Hasta 95% de eficiencia
- **Control suave**: Menos vibración y ruido
- **Par constante**: A cualquier velocidad

## Componentes Necesarios

1. STM32F4 (mínimo 72MHz)
2. Driver de motor (ej: DRV8305)
3. Sensores de corriente
4. Encoder o sensores hall

## Implementación

### Lectura de Corrientes

\`\`\`c
void ADC_ReadCurrents(float *Ia, float *Ib) {
    HAL_ADC_Start(&hadc1);
    HAL_ADC_PollForConversion(&hadc1, 10);
    *Ia = (HAL_ADC_GetValue(&hadc1) - 2048) * 0.0161;
    
    HAL_ADC_Start(&hadc2);
    HAL_ADC_PollForConversion(&hadc2, 10);
    *Ib = (HAL_ADC_GetValue(&hadc2) - 2048) * 0.0161;
}
\`\`\`

### Transformada de Clarke y Park

\`\`\`c
void Clarke_Park_Transform(float Ia, float Ib, float theta,
                           float *Id, float *Iq) {
    // Clarke
    float I_alpha = Ia;
    float I_beta = (Ia + 2*Ib) / sqrt(3);
    
    // Park
    *Id = I_alpha * cos(theta) + I_beta * sin(theta);
    *Iq = -I_alpha * sin(theta) + I_beta * cos(theta);
}
\`\`\`

## Resultados

Con FOC logramos:
- Reducción del 40% en consumo energético
- Control de velocidad con error < 1%
- Operación silenciosa

## Recursos

- [STM32 Motor Control SDK](https://www.st.com/motor-control)
- Código completo en GitHub
      `,
      en: `
# BLDC Motor FOC Control with STM32

Field-Oriented Control (FOC) enables precise and efficient control of BLDC motors.

## FOC Advantages

- **Higher efficiency**: Up to 95% efficiency
- **Smooth control**: Less vibration and noise
- **Constant torque**: At any speed

## Required Components

1. STM32F4 (minimum 72MHz)
2. Motor driver (e.g., DRV8305)
3. Current sensors
4. Encoder or hall sensors

## Implementation

### Current Reading

\`\`\`c
void ADC_ReadCurrents(float *Ia, float *Ib) {
    HAL_ADC_Start(&hadc1);
    HAL_ADC_PollForConversion(&hadc1, 10);
    *Ia = (HAL_ADC_GetValue(&hadc1) - 2048) * 0.0161;
    
    HAL_ADC_Start(&hadc2);
    HAL_ADC_PollForConversion(&hadc2, 10);
    *Ib = (HAL_ADC_GetValue(&hadc2) - 2048) * 0.0161;
}
\`\`\`

### Clarke and Park Transform

\`\`\`c
void Clarke_Park_Transform(float Ia, float Ib, float theta,
                           float *Id, float *Iq) {
    // Clarke
    float I_alpha = Ia;
    float I_beta = (Ia + 2*Ib) / sqrt(3);
    
    // Park
    *Id = I_alpha * cos(theta) + I_beta * sin(theta);
    *Iq = -I_alpha * sin(theta) + I_beta * cos(theta);
}
\`\`\`

## Results

With FOC we achieve:
- 40% reduction in energy consumption
- Speed control with error < 1%
- Silent operation

## Resources

- [STM32 Motor Control SDK](https://www.st.com/motor-control)
- Full code on GitHub
      `
    },
    date: '2026-02-28',
    author: 'Cesar Bautista',
    tags: ['STM32', 'Motor Control', 'FOC', 'Embedded'],
    readTime: '8 min',
    category: 'Advanced'
  },
  {
    id: 3,
    slug: 'raspberry-pi-modbus-gateway',
    title: {
      es: 'Gateway Modbus-MQTT con Raspberry Pi',
      en: 'Modbus-MQTT Gateway with Raspberry Pi'
    },
    excerpt: {
      es: 'Construcción de un gateway industrial para conectar dispositivos Modbus a la nube',
      en: 'Building an industrial gateway to connect Modbus devices to the cloud'
    },
    content: {
      es: `
# Gateway Modbus-MQTT con Raspberry Pi

Aprende a crear un gateway industrial para integrar equipos legacy con sistemas IoT modernos.

## Arquitectura del Sistema

\`\`\`
[Sensores Modbus RTU] <--RS485--> [RPi Gateway] <--MQTT--> [Cloud/Broker]
\`\`\`

## Configuración

### 1. Instalación de Dependencias

\`\`\`bash
sudo apt-get update
sudo apt-get install python3-pip
pip3 install pymodbus paho-mqtt
\`\`\`

### 2. Código del Gateway

\`\`\`python
from pymodbus.client import ModbusSerialClient
import paho.mqtt.client as mqtt
import time

# Configurar Modbus
modbus_client = ModbusSerialClient(
    method='rtu',
    port='/dev/ttyUSB0',
    baudrate=9600,
    timeout=1
)

# Configurar MQTT
mqtt_client = mqtt.Client()
mqtt_client.connect("broker.hivemq.com", 1883)

# Loop principal
while True:
    if modbus_client.connect():
        result = modbus_client.read_holding_registers(0, 10, unit=1)
        if not result.isError():
            mqtt_client.publish("industrial/sensor1", str(result.registers))
    time.sleep(5)
\`\`\`

## Casos de Uso

1. Monitoreo de PLCs industriales
2. Integración con sistemas SCADA
3. Modernización de plantas antiguas

## Optimizaciones

- Implementar caché local
- Manejo de reconexión automática
- Logs y alertas
      `,
      en: `
# Modbus-MQTT Gateway with Raspberry Pi

Learn to create an industrial gateway to integrate legacy equipment with modern IoT systems.

## System Architecture

\`\`\`
[Modbus RTU Sensors] <--RS485--> [RPi Gateway] <--MQTT--> [Cloud/Broker]
\`\`\`

## Configuration

### 1. Dependencies Installation

\`\`\`bash
sudo apt-get update
sudo apt-get install python3-pip
pip3 install pymodbus paho-mqtt
\`\`\`

### 2. Gateway Code

\`\`\`python
from pymodbus.client import ModbusSerialClient
import paho.mqtt.client as mqtt
import time

# Configure Modbus
modbus_client = ModbusSerialClient(
    method='rtu',
    port='/dev/ttyUSB0',
    baudrate=9600,
    timeout=1
)

# Configure MQTT
mqtt_client = mqtt.Client()
mqtt_client.connect("broker.hivemq.com", 1883)

# Main loop
while True:
    if modbus_client.connect():
        result = modbus_client.read_holding_registers(0, 10, unit=1)
        if not result.isError():
            mqtt_client.publish("industrial/sensor1", str(result.registers))
    time.sleep(5)
\`\`\`

## Use Cases

1. Industrial PLC monitoring
2. SCADA system integration
3. Legacy plant modernization

## Optimizations

- Implement local cache
- Automatic reconnection handling
- Logging and alerts
      `
    },
    date: '2026-02-20',
    author: 'Cesar Bautista',
    tags: ['Raspberry Pi', 'Modbus', 'MQTT', 'Python'],
    readTime: '6 min',
    category: 'Tutorial'
  },
  {
    id: 4,
    slug: 'usb-hid-ch55x',
    title: {
      es: 'Creando un Dispositivo USB HID con CH55x',
      en: 'Creating a USB HID Device with CH55x'
    },
    excerpt: {
      es: 'Tutorial para desarrollar dispositivos USB personalizados usando microcontroladores CH55x',
      en: 'Tutorial for developing custom USB devices using CH55x microcontrollers'
    },
    content: {
      es: `
# Creando un Dispositivo USB HID con CH55x

Los CH55x son microcontroladores económicos con USB nativo perfecto para proyectos custom.

## Ventajas del CH55x

- **USB nativo**: No requiere chips externos
- **Bajo costo**: < $0.50 por unidad
- **Flexible**: Puede emular teclado, mouse, joystick

## Configuración del Descriptor USB

\`\`\`c
const uint8_t HID_ReportDescriptor[] = {
    0x05, 0x01,  // Usage Page (Generic Desktop)
    0x09, 0x06,  // Usage (Keyboard)
    0xA1, 0x01,  // Collection (Application)
    
    // Modifier keys
    0x05, 0x07,  // Usage Page (Key Codes)
    0x19, 0xE0,  // Usage Minimum (Left Control)
    0x29, 0xE7,  // Usage Maximum (Right GUI)
    0x15, 0x00,  // Logical Minimum (0)
    0x25, 0x01,  // Logical Maximum (1)
    0x75, 0x01,  // Report Size (1)
    0x95, 0x08,  // Report Count (8)
    0x81, 0x02,  // Input (Data, Variable, Absolute)
    
    0xC0         // End Collection
};
\`\`\`

## Enviando Datos

\`\`\`c
void USB_SendKey(uint8_t key) {
    uint8_t report[8] = {0};
    report[2] = key;  // Keycode
    
    while(DevEP1_IN_Busy);
    memcpy(Ep1Buffer, report, 8);
    DevEP1_IN_Deal(8);
}
\`\`\`

## Proyectos Prácticos

1. Teclado macro personalizado
2. Joystick para simulación
3. Dispositivo de autenticación

## Herramientas

- SDCC Compiler
- CH55x Programmer
- USB HID Descriptor Tool
      `,
      en: `
# Creating a USB HID Device with CH55x

CH55x are low-cost microcontrollers with native USB perfect for custom projects.

## CH55x Advantages

- **Native USB**: No external chips required
- **Low cost**: < $0.50 per unit
- **Flexible**: Can emulate keyboard, mouse, joystick

## USB Descriptor Configuration

\`\`\`c
const uint8_t HID_ReportDescriptor[] = {
    0x05, 0x01,  // Usage Page (Generic Desktop)
    0x09, 0x06,  // Usage (Keyboard)
    0xA1, 0x01,  // Collection (Application)
    
    // Modifier keys
    0x05, 0x07,  // Usage Page (Key Codes)
    0x19, 0xE0,  // Usage Minimum (Left Control)
    0x29, 0xE7,  // Usage Maximum (Right GUI)
    0x15, 0x00,  // Logical Minimum (0)
    0x25, 0x01,  // Logical Maximum (1)
    0x75, 0x01,  // Report Size (1)
    0x95, 0x08,  // Report Count (8)
    0x81, 0x02,  // Input (Data, Variable, Absolute)
    
    0xC0         // End Collection
};
\`\`\`

## Sending Data

\`\`\`c
void USB_SendKey(uint8_t key) {
    uint8_t report[8] = {0};
    report[2] = key;  // Keycode
    
    while(DevEP1_IN_Busy);
    memcpy(Ep1Buffer, report, 8);
    DevEP1_IN_Deal(8);
}
\`\`\`

## Practical Projects

1. Custom macro keyboard
2. Simulation joystick
3. Authentication device

## Tools

- SDCC Compiler
- CH55x Programmer
- USB HID Descriptor Tool
      `
    },
    date: '2026-02-15',
    author: 'Cesar Bautista',
    tags: ['CH55x', 'USB', 'HID', 'C'],
    readTime: '7 min',
    category: 'Tutorial'
  }
];
