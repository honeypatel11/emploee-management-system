
import { useNavigate } from "react-router-dom"

const Protectroutetwo = ({isLoggedIn, children}) => {
    const navigate = useNavigate();
    return isLoggedIn ? navigate("/employees") : children;
}

export default Protectroutetwo
