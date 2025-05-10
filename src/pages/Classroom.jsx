import { useParams, Link } from "react-router-dom";
import { buildings } from "../data/mockBuildings";
import { classrooms } from "../data/mockClassrooms";
import ClassroomDetail from "../components/ClassroomDetail";

export default function Classroom() {
  const { id, salonId } = useParams();
  let classroom;

  // Si viene de la ruta /salon/:salonId
  if (salonId && !id) {
    classroom = classrooms.find((s) => s.id === salonId);
  } 
  // Si viene de la ruta /edificio/:id/salon/:salonId
  else if (id && salonId) {
    const building = buildings.find((b) => b._id === id);
    classroom = building?.salones.find((s) => s.id === salonId);
  }

  if (!classroom) {
    return <div className="text-center text-red-500">Salón no encontrado.</div>;
  }

  return (
    <div>
      <ClassroomDetail classroom={classroom} />
      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
} 