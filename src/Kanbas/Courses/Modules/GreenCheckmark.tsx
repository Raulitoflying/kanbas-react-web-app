import { FaCheckCircle } from "react-icons/fa";
import { FaCircle, FaTimesCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }} className="text-success me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}

export function RedCrossMark() {
  return (
    <span className="me-1 position-relative">
      <FaTimesCircle style={{ top: "2px" }} className="text-danger me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
