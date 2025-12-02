import api from "../api";

export default function LogoutButton() {
  const logout = async () => {
    await api.post("/logout"); // call backend to revoke token
    localStorage.removeItem("token"); // remove token from browser
    window.location.href = "/login"; // redirect to login page
  };

  return (
    <button
      className="btn btn-outline-light ms-auto"
      onClick={logout}
      style={{ marginLeft: "auto" }}
    >
      Logout
    </button>
  );
}
