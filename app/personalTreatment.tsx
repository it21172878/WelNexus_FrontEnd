import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "@/layouts/header";
import { Link } from "expo-router";

const PersonalTreatment = () => {
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
        centerText="Personal Treatments"
      />
      <Text>Personal Treatment Screen</Text>
    </View>
  );
};

export default PersonalTreatment;
