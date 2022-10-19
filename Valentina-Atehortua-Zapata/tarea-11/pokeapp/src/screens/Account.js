import React from "react";
import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import PanelData from "../components/Auth/PanelData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();
  return <View>{auth ? <PanelData /> : <LoginForm />}</View>;
}
