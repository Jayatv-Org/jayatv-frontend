"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";
import Heading from "../components/ui/Heding";
import Hero from "@/components/Hero";
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
    <main className="min-h-screen w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="min-h-screen" id="home">
        <Hero />
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-auto text-center">
          Trending Now
        </h1>
        <div className="flex justify-center">
          <div className="w-full md:w-4/5 lg:w-3/4">
            <CardList data={data} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6 text-auto text-center">
          Teledramas
        </h1>
        <div className="flex justify-center">
          <div className="w-full md:w-4/5 lg:w-3/4">
            <CardList data={data} />
          </div>
        </div>
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
