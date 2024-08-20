"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";
import Heading from "../components/ui/Heding";
import Hero from "@/components/Hero";

import TodaySpecial from "@/components/TodaySpecial";

import ContactUs from "@/components/ContactUs";
import Gallery from "@/components/Gallery";


interface Image {
  Id: number;
  Title: string;
  Description: string;
  ImageUrl: string;
}
const HomePage = () => {
  const [data, setImage] = useState<Image[]>([]);
  // const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/images");
        setImage(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="min-h-screen" id="home">
        <Hero />
      </div>
  
      <div>

    <h1 className="text-4xl font-bold mb-6 text-auto card-list-container">Trending Now</h1>
    <CardList data={data}  />
  </div>
  <div>
    <h1 className="text-4xl font-bold mb-6 text-auto card-list-container">Teledramas</h1>
    <CardList data={data}  />
  </div>

  <section>
        <TodaySpecial/>
      </section>

        <h1 className="text-4xl font-bold mb-6 text-auto card-list-container">
          Trending Now
        </h1>
        <CardList data={data} />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-auto card-list-container">
          Teledramas
        </h1>
        <CardList data={data} />
      </div>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
   

    </main>
  );
};

export default HomePage;
