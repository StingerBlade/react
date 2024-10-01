import "./Navbar.css";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
function Nav() {
  return (
    <div className="Nav">
      <div className="divNav">
        <FingerprintOutlinedIcon
          style={{ fontSize: 75 }}
        ></FingerprintOutlinedIcon>
      </div>
      <div className="divNav"><p>Home</p></div>
      <div className="divNav"><p>Cheats</p></div>
    </div>
  );
}
export default Nav;
