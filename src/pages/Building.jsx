import { useParams, Link } from "react-router-dom";
import { buildings } from "../data/mockBuildings";
import BuildingDetail from "../components/BuildingDetail";

export default function Building() {
  const { id } = useParams();
  const building = buildings.find((b) => b._id === id);

  if (!building) {
    return <div className="text-center text-red-500">Edificio no encontrado.</div>;
  }

  return (
    <div>
      <BuildingDetail building={building} />
      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Volver a la lista de edificios
        </Link>
      </div>
    </div>
  );
} 