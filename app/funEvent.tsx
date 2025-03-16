import { View, Text, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";
import React, { useState } from "react";
import Header from "@/layouts/header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const FunEvent = () => {
  const [review, setReview] = useState("");
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!review.trim()) return;

    try {
      setLoading(true);
      const response = await axios.post("http://192.168.85.85:5000/predict", {
        review: review,
      });
      console.log("response", response);

      setSentiment(response.data.sentiment);
    } catch (error: any) {
      console.log(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      setSentiment(
        "Error: " + (error.response ? error.response.data.error : error.message)
      );

      // setSentiment("Error predicting sentiment");
    }
    setLoading(false);
  };

  return (
    <View className=" flex-1 w-full bg-lime-100">
      <Header
        left={
          <Link href={"/"} asChild>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          </Link>
        }
        centerText="Fun Events"
      />

      <View className=" items-center justify-center m-2">
        <Text className=" text-xl/2 text-justify mt-5 font-semibold text-lime-700">
          Please feel to free your experiences with us regarding this event. It
          will help us gain some insight into your health status.
        </Text>
        <TextInput
          placeholder="Enter your review..."
          className=" items-center justify-center w-full border border-lime-500 rounded-lg text-base mt-4 focus:border-lime-600 focus:ring-1 focus:ring-lime-500"
          value={review}
          onChangeText={setReview}
        />
      </View>
      <View className=" items-center justify-center m-2">
        <TouchableOpacity
          onPress={handlePredict}
          className="bg-lime-300 rounded-md p-3 mt-2 w-full items-center border border-lime-500"
        >
          <Text className=" text-lime-950 font-semibold">
            Share your Expression{" "}
          </Text>
        </TouchableOpacity>
      </View>

      {/* {sentiment && (
        <View className=" items-center justify-center m-2 bg-lime-200 shadow-md rounded-lg p-4 mt-4">
          <Text>Sentiment: {sentiment}</Text>
        </View>
      )} */}

      {/* Sentiment Result Card with Dynamic Colors */}
      {sentiment && (
        <View
          className={` m-2 shadow-md rounded-lg p-4 mt-4 ${
            sentiment === "positive"
              ? "bg-lime-200 border border-lime-900"
              : "bg-red-200 border border-e-red-900"
          }`}
        >
          <Text
            className={`font-semibold text-lg ${
              sentiment === "positive" ? "text-lime-600" : "text-red-600"
            }`}
          >
            Your Progress is {sentiment}
          </Text>
          <Text
            className={`mt-2 ${
              sentiment === "positive" ? "text-lime-700" : "text-red-700"
            }`}
          >
            {sentiment === "positive"
              ? "Great! Keep it up"
              : "Oops! You need to work on it"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FunEvent;
