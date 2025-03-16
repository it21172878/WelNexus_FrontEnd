import { View, Text, TouchableOpacity } from "react-native";
import "../global.css";
import Header from "@/layouts/header";
import AntDesign from "@expo/vector-icons/AntDesign";
import useDrawer from "@/context/contextHooks/useDrawer";
import { Image } from "react-native";

const Index = () => {
  const { drawer } = useDrawer();

  // Card data array
  const cards = [
    { id: 1, title: "24/7 Service", description: "see more..." },
    { id: 2, title: "Expression Model Facility", description: "see more..." },
    { id: 3, title: "Treatment Plan Support", description: "see more..." },
    { id: 4, title: "Online Doctor Channeling", description: "see more..." },
  ];

  return (
    <View className="flex-1 items-center w-full bg-lime-100">
      <Header
        left={
          <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
            <AntDesign name="menu-fold" size={24} color="black" />
          </TouchableOpacity>
        }
        centerText="Home"
      />
      <View className="flex-1 items-center justify-center -mt-20">
        {/* Load PNG Image */}
        <Image
          source={require("../assets/images/myimg.png")} //  Correct path
          className="w-52 h-52"
          resizeMode="contain" // Ensures image fits well
        />
        <Text className="text-5xl font-bold ">
          <Text className="text-lime-800">Well</Text>
          <Text className="text-lime-600">Nexus</Text>
        </Text>
        {/* Cards Section */}
        <View className="flex-row flex-wrap justify-center gap-2 mt-8">
          {cards.map((card) => (
            <View
              key={card.id}
              className=" w-[45%] h-32 bg-lime-300 border border-lime-950 rounded-lg p-4"
            >
              <Text className="text-lg font-bold text-lime-950">
                {card.title}
              </Text>
              <Text className="text-sm text-lime-600">{card.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Index;
