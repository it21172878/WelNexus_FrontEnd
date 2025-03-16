import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Header from "@/layouts/header";

const Nav = () => {
  return (
    <View className=" w-full flex-1 bg-lime-700">
      <Header
        right={
          <TouchableOpacity>
            <AntDesign name="menu-unfold" size={24} color="black" />
          </TouchableOpacity>
        }
        centerText="WellNexus"
      />
      <Text className="text-2xl font-semibold text-lime-200">Link 1</Text>
      <Text className="text-2xl font-semibold text-lime-200">Link 2</Text>
      <Text className="text-2xl font-semibold text-lime-200">Link 3</Text>
    </View>
  );
};

export default Nav;
