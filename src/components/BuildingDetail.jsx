import { Link } from "react-router-dom";

export default function BuildingDetail({ building }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{building.nombre}</h2>
      <p className="mb-4">{building.descripcion}</p>
      <h3 className="text-lg font-semibold mb-2">Salones:</h3>
      <ul className="space-y-2">
        {building.salones.map((salon) => (
          <li key={salon.id} className="flex items-center justify-between bg-gray-100 rounded p-3">
            <span>{salon.nombre} (Capacidad: {salon.capacidad})</span>
            <Link
              to={`/edificio/${building._id}/salon/${salon.id}`}
              className="text-blue-600 hover:underline"
            >
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 