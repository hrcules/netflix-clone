import React, { useEffect, useState } from "react";
import "react-icons/ri";
import api from "../../services/api";

import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie";

import netflixLoading from "../../assets/netflix-loading.gif";

import "./styles.css";
import Header from "../../components/Header";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await api.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className="page">
      <Header scroll={scrollHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>
          feito com{" "}
          <i className="ri-heart-fill" style={{ color: "#D81F26" }}></i> por
          Hércules
        </p>
        <p>
          <i class="ri-copyright-line"></i>All rights reserved for netflix.
        </p>
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img src={netflixLoading} alt="Loading" />
        </div>
      )}
    </div>
  );
}
