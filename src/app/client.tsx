'use client'

import About from "@/component/layout/About";
import Footer from "@/component/layout/Footer";
import Hero from "@/component/layout/Hero";
import Modal from "@/component/layout/Modal";
import Navbar from "@/component/layout/Navbar";
import Projects from "@/component/layout/Projects";
import Services from "@/component/layout/Services";
import BurgerMenu from "@/component/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";

export function Client() {
  return (
    <GlobalStateProvider >
      <Modal />
      <BurgerMenu />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>)
}

export default Client;