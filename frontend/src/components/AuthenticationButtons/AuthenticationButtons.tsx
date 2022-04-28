import DropdownMenu from "../Dropdown/Dropdown";

const AuthenticationButtons: React.FunctionComponent = () => {
  return (
    <div>
      <DropdownMenu
        mainLabel="nummer 1"
        listLabels={["element1", "element2"]}
      />
    </div>
  );
};

export default AuthenticationButtons;
