import "./index.css";
import { NavLink, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const{cid} = useParams();
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    isActive ? "list-group-item active border-0" : "list-group-item text-danger border border-0";
  const links = [
    "Home", 
    "Modules", 
    "Piazza", 
    "Zoom", 
    "Assignments", 
    "Quizzes", 
    "People",
    "Grades"];

  return (
    <div id="wd-courses-navigation"  className="list-group fs-5 rounded-0 ">
      {links.map(link => (
        <NavLink
          key={link}
          to={`${link}`}
          className={getNavLinkClass}
          end
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}