"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";
import Heading from "../components/ui/Heding";
import Hero from "@/components/Hero";

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
    <div className="max-w-7xl mx-auto p-6">
      {/* <section id="heading">
        <Heading />
      </section> */}
      <div className="min-h-screen" id="home">
        <Hero />
      </div>
      
      <h1 className="text-4xl font-bold mb-6 text-center">Data from MySQL</h1>
      <CardList data={data} />
      
    </div>
  );
};

export default HomePage;
