import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const userSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="profile">
      <div className="cover  rounded-t-xl overflow-hidden shadow-md">
        <img
          src="/assets/images/resources/slide1.jpg"
          alt="cover"
          className="h-64 w-full object-cover"
        />
      </div>
      <div className="profile-info p-4 flex justify-center items-center flex-col border-b border-x border-e border-slate-400 rounded-b-xl w-full shadow-md">
        <div className="profile-pic -mt-16">
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "/assets/images/resources/slide2.jpg"
            }
            alt="profile"
            className="h-32 w-32 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="profile-details mt-4 text-center">
          <h2 className="text-2xl font-bold">
            {user?.displayName ? user.displayName : ""}
          </h2>
          <p>
            <button
              onClick={userSignOut}
              className="bg-red-600 rounded-md px-4 py-1 text-white"
            >
              Sign Out
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
