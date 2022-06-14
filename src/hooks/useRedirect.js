import { useNavigate } from "react-router-dom";
const useRedirect = path => {
  const history = useNavigate();
  history.push(`/${path}`);
};

export default useRedirect;
