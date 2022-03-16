import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";

function UserMailVerify() {
  const navigate = useNavigate();
  const { token } = useParams();
  const { verifyMail } = useAuth();
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (checking) {
      verifyMail(token)
        .then((user) => {
          setChecking(false);
          setUser(user.firstName + " " + user.lastName);
          setTimeout(() => navigate("/login"), 5000);
        })
        .catch((err) => {
          setChecking(false);
          alert("Something went wrong, your email hasn't been verified");
          navigate("/");
        });
    }
  }, [checking, navigate, token, verifyMail]);

  if (checking) return <h2>Verifying your email ...</h2>;
  return (
    <div>
      <h1>Welcome {user}</h1>
      <h3>Your email has been verified, you can now login</h3>
      <p>
        Redirecting to login in 5 seg, or
        <Link to="/login"> click here</Link>
      </p>
    </div>
  );
}

export default UserMailVerify;
