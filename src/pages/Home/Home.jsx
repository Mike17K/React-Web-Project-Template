import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
  const [t, i18n] = useTranslation("home");
  return <div className="home">home</div>;
}
