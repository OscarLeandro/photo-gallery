import { signOut } from "firebase/auth";

import LayoutDashboard from "../../components/commons/dashboard/layouts/LayoutDashboard";
import ImageContextProvider from "../../context/imageContext";


export default function Dashboard({children}) {
  return (
    <ImageContextProvider>
      <LayoutDashboard>{children}</LayoutDashboard>
    </ImageContextProvider>

  );
}
