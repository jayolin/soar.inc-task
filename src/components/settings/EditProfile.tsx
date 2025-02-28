import { useApp } from "../../context/AppContext";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import { EditIcon } from "../Icons";
import Input from "../Input/Input";

const EditProfile = () => {
  const { userData } = useApp();

  if (!userData) {
    return <></>;
  }

  return (
    <div className="flex flex-col md:flex-row lg:p-8 py-8 gap-10">
      <div className="mx-auto">
        <Avatar
          src={userData.photo}
          size="xxl"
          className="relative inline-block"
        >
          <IconButton
            theme="black"
            size="sm"
            className="absolute -bottom-1 -right-1"
          >
            <EditIcon size="custom" className="h-3 w-3" />
          </IconButton>
        </Avatar>
      </div>

      <form className="flex-1 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            required
            value={userData.name}
            className="flex-1"
            label="Your Name"
            placeholder="Charlene Reed"
          />
          <Input
            required
            value={userData.username}
            className="flex-1"
            label="Username"
            placeholder="charlenereed"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            value={userData.email}
            className="flex-1"
            label="Email"
            placeholder="charlenereed@gmail.com"
          />
          <Input
            type="password"
            pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$"
            required
            className="flex-1"
            label="Password"
            placeholder="********"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            required
            value={userData.dob.toUTCString()}
            className="flex-1"
            label="Date of Birth"
            placeholder="25 January 2025"
          />
          <Input
            required
            value={userData.address.presentAddress}
            className="flex-1"
            label="Present Address"
            placeholder="San Jose, California, USA"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            required
            value={userData.address.permanentAddress}
            className="flex-1"
            label="Permanent Address"
            placeholder="San Jose, California, USA"
          />
          <Input
            required
            value={userData.address.city}
            className="flex-1"
            label="City"
            placeholder="San Jose"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            required
            value={userData.address.postalCode}
            className="flex-1"
            label="Postal Code"
            placeholder="45674"
          />
          <Input
            required
            value={userData.address.country}
            className="flex-1"
            label="Country"
            placeholder="USA"
          />
        </div>

        <div className="flex justify-end">
          <Button className="w-[190px]" text="Save" />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
