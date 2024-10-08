import { Button } from "@mui/material";
import "./Navbar.css";
function Nav() {
  return (
    <div className="Nav">
      <div className="divNav">
        <img
          src="/spider-white.png"
          alt="logo exploitdb"
          style={{ width: "30%", height: "auto" }}
        />
      </div>

      <div className="divNav">
        <Button size="large">Home</Button>
      </div>
      <div className="divNav">
        <Button size="large">Home</Button>
      </div>
      <div className="divNav">
        <Button size="large">Home</Button>
      </div>
      <div className="divNav">
        <Button size="large" color="error">
          Registrarse
        </Button>
      </div>
    </div>
  );
}
export default Nav;
