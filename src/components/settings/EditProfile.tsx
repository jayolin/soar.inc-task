const EditProfile = () => {
  return (
    <div className="flex">
      <img src="/path/to/avatar" alt="Avatar" className="rounded-full w-24 h-24" />
      <form className="flex-1">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
