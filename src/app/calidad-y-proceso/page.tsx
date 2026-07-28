import { redirect } from "next/navigation";

// Esta ruta ha sido migrada a /calidad y /proceso
export default function CalidadYProceso() {
  redirect("/calidad");
}
