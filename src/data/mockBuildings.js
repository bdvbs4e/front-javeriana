export const buildings = [
  {
    _id: "eg2",
    nombre: "Edificio EG-2",
    descripcion: "Edificio de la Universidad Javeriana",
    imageUrl: "https://tu-bucket-aws.s3.amazonaws.com/buildings/eg2.jpg", // URL de AWS
    salones: [
      {
        id: "eg2-4",
        nombre: "EG-2.4",
        capacidad: 90,
        tipoSalon: "Plano",
        tipoMesa: "Móvil para dos personas",
        tipoSilla: "Móvil",
        tablero: ["Fijo", "Móvil pequeño"],
        equipamientoTecnologico: ["Videobeam", "PC", "Cámara", "Mic", "Sonido", "TV"],
        tomaCorriente: false,
        imageUrl: "https://imagenesparcialjave.s3.us-east-2.amazonaws.com/EG+3.1.jpg"
      }
    ]
  }
];