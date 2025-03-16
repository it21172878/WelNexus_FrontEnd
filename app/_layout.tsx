import { Slot } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Footer from "@/layouts/footer";
import DrawerProvider from "@/context/drawer";

const RootLayout = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <DrawerProvider>
          <View className=" relative flex-1 bg-lime-100 justify-between">
            <Slot />
            <Footer />
          </View>
        </DrawerProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RootLayout;
