import { motion } from "framer-motion";
import S3Image from "./S3Image";

export default function ClassroomDetail({ classroom }) {
  const features = [
    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Ubicación", value: classroom.ubicacion },
    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: "Capacidad", value: `${classroom.capacidad} personas` },
    { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Tipo de salón", value: classroom.tipoSalon },
    { icon: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", label: "Tipo de mesa", value: classroom.tipoMesa },
    { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", label: "Tipo de silla", value: classroom.tipoSilla },
  ];

  const equipment = [
    { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Equipamiento", items: classroom.equipamientoTecnologico },
    { icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Tablero", items: classroom.tablero },
  ];

  // Extraer el nombre del archivo de imagen de la URL o usar un valor por defecto
  const getImageKey = () => {
    if (classroom.imageUrl) {
      // Si la URL es completa de S3, extraer solo el nombre del archivo
      const parts = classroom.imageUrl.split('/');
      return parts[parts.length - 1];
    }
    // Imagen por defecto si no hay URL
    return 'EG 5.2.jpg';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Hero Image Section */}
      <div className="relative h-96 w-full">
        <S3Image
          imageKey={getImageKey()}
          alt={`Vista del salón ${classroom.nombre}`}
          className="w-full h-full object-cover"
          fallbackUrl="https://imagenesparcialjave.s3.us-east-2.amazonaws.com/EG+5.2.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h2 className="text-4xl font-bold mb-2">{classroom.nombre}</h2>
          <p className="text-lg opacity-90">{classroom.ubicacion}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">{feature.label}</h3>
                <p className="mt-1 text-lg font-semibold text-gray-900">{feature.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Sections */}
        <div className="space-y-8">
          {equipment.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={section.icon} />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">{section.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {section.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Power Outlet Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-gray-50 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">Toma Corriente</h3>
          </div>
          <div className="mt-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              classroom.tomaCorriente
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}>
              {classroom.tomaCorriente ? "Disponible" : "No disponible"}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 