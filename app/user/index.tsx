import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import Header from "@/layouts/header";
import Ionicons from "@expo/vector-icons/Ionicons";

const Product = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Header
        left={
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </Link>
        }
        centerText="Users"
      />
      <Text>Users</Text>
      <Text>{params.id}</Text>
      <Text>{params.name}</Text>
    </View>
  );
};

export default Product;
