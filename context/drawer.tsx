import { DrawerLayoutAndroid } from "react-native";
import React, { createContext, useRef } from "react";
import Nav from "@/layouts/nav";

interface IDrawerContextType {
  drawer: React.RefObject<DrawerLayoutAndroid> | null;
}

export const DrawerContext = createContext<IDrawerContextType>({
  drawer: null,
});
const DrawerProvider = ({ children }: { children: React.JSX.Element }) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  return (
    <DrawerContext.Provider value={{ drawer }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={Nav}
      >
        {children}
      </DrawerLayoutAndroid>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
