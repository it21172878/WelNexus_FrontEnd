import { View, Text, TouchableOpacity } from "react-native";
import "../global.css";
import Header from "@/layouts/header";
import AntDesign from "@expo/vector-icons/AntDesign";
import useDrawer from "@/context/contextHooks/useDrawer";

const Index = () => {
  const { drawer } = useDrawer();

  return (
    <View className="flex-1 items-center w-full ">
      <Header
        left={
          <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
            <AntDesign name="menu-fold" size={24} color="black" />
          </TouchableOpacity>
        }
        centerText="Home"
      />
      <Text className=" text-2xl p-5 text-lime-800 text-center">
        Hello, Welcome to
      </Text>
      <Text className=" text-3xl font-bold text-lime-600">WellNexus</Text>
    </View>
  );
};

export default Index;
