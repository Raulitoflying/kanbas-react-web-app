import { AiOutlineStop } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
export default function StopIcon() {
  return (
    <span className="me-1 position-relative">
      <AiOutlineStop className="text-primary me-1 position-absolute fs-5" style={{ color: 'black', top: "2px" }} />
      <FaCircle className="text-white me-2 fs-6" />
    </span>
  );
}
