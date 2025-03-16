import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserID = () => {
  const param = useLocalSearchParams();
  console.log(param);

  return (
    <View>
      <Text>User Page</Text>
      <Text>{param.userID}</Text>
      <Text>{param.city}</Text>
    </View>
  );
};

export default UserID;
