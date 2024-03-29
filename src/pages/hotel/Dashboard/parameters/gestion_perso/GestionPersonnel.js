import Calendar from "../../../../../components/Calendar/Calendar";
import MenuParams from "../../../../../components/MenuParams/MenuParams";
import Navbar2 from "../../../../../components/Navbar2/Navbar2";
import SideBar from "../../../../../components/SideBar/SideBar";

function GestionPersonnel() {
  return (
    <div className="App">
      <div className="flex w-full">
        <SideBar title="ESPACE HOTEL" name="Greg" variant="gold"></SideBar>

        <div className="w-full">
          <Navbar2 />
          <div className="flex items-center justify-center w-full h-28 border-t border-b border-gray-300">
            <h1 className="text-xl">Informations du compte - Général</h1>
          </div>
          <div className="my-4">
            <MenuParams />
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default GestionPersonnel;
