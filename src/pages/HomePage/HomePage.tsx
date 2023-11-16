"use client";
import Hero from "./Hero/Hero";
import Future from "./Future/Future";
import Download from "./Download/Download";
import AboutProject from "./AboutProject/AboutProject";
import Story from "./Story/Story";
import AboutGame from "./AboutGame/AboutGame";
import Leviathan from "./Leviathans/Leviathan";
import { Transition } from "../../components/Transition/Transition";
import Technology from "./Technology/Technology";

function Home() {
  return (
    <main>
      <Hero />
      <Technology />
      <Future />
      <Download />
      <AboutProject />
      <AboutGame />
      <Story />
      <Leviathan />
    </main>
  );
}

const TransitionedHome = Transition(Home);

export default TransitionedHome;
