import { Text, View } from "react-native";

interface IHeader {
  left?: React.ReactNode;
  center?: React.ReactNode;
  centerText?: string;
  right?: React.ReactNode;
}

const Header = ({ left, center, centerText, right }: IHeader) => {
  return (
    <View className="flex-row w-full justify-between items-center h-[60px] bg-lime-500 p-5">
      {left ? left : <View />}
      {center ? (
        center
      ) : centerText ? (
        <Text className=" text-2xl font-semibold">{centerText}</Text>
      ) : (
        <View />
      )}
      {right ? right : <View />}
    </View>
  );
};

export default Header;
