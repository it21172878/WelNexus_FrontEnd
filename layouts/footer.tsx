import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";
import { useKeyboard } from "@react-native-community/hooks";

const Footer = () => {
  const keyboard = useKeyboard(); // Hook to detect if keyboard is open

  if (keyboard.keyboardShown) return null; // Hide footer when keyboard is open

  return (
    // <View className=" w-full absolute h-16 bottom-0 z-50 left-0 bg-lime-500 flex-row items-center justify-between p-2">
    //   <TouchableOpacity
    //     onPress={() => router.navigate("/")}
    //     className=" items-center"
    //   >
    //     <AntDesign name="home" size={24} color="black" />
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={() => router.navigate("/user")}
    //     className=" items-center"
    //   >
    //     <AntDesign name="user" size={24} color="black" />
    //     <Text>User</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={() => router.navigate("/game")}
    //     className=" items-center"
    //   >
    //     <Ionicons name="game-controller-outline" size={24} color="black" />
    //     <Text>Games</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={() => router.navigate("/personalTreatment")}
    //     className=" items-center"
    //   >
    //     <AntDesign name="medicinebox" size={24} color="black" />
    //     <Text>Treatments</Text>
    //   </TouchableOpacity>
    // </View>

    <View className="w-full h-16 bg-lime-500 flex-row items-center justify-between p-2 absolute bottom-0">
      <TouchableOpacity
        onPress={() => router.navigate("/")}
        className="items-center"
      >
        <AntDesign name="home" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/personalTreatment")}
        className="items-center"
      >
        <AntDesign name="medicinebox" size={24} color="black" />
        <Text>Treatments</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.navigate("/game")}
        className="items-center"
      >
        <Ionicons name="game-controller-outline" size={24} color="black" />
        <Text>Games</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.navigate("/user")}
        className="items-center"
      >
        <AntDesign name="user" size={24} color="black" />
        <Text>User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
