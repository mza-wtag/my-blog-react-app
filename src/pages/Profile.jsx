import UserDatails from "../components/UserDetails/UserDatails";
import EditProfileForm from "../components/EditProfileForm/EditProfileForm";
import BlogList from "../components/BlogList/BlogList";
import BlogForm from "../components/BlogForm/BlogForm";

const Profile = () => {
  return (
    <>
      <UserDatails />
      <EditProfileForm />
      <BlogForm />
      <BlogList />
    </>
  );
};

export default Profile;
