import { Link } from "react-router-dom";

export default function BuildingList({ buildings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {buildings.map((building) => (
        <div key={building._id} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">{building.nombre}</h2>
          <p className="mb-4">{building.descripcion}</p>
          <Link
            to={`/edificio/${building._id}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
} 