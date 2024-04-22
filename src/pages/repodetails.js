import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "../App.css";
import { FaCodeFork, FaEye, FaGithub, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});


  useEffect(() => {
    fetch(`https://api.github.com/repos/cheesecakes21/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, [id]);


  return (
    <div id="repodetail">
      <Navbar />
      <div className="repodetail-card">
        <section className="repo_card">
          <h1 className="repo-name">{details.name}</h1>
          <div className="repo-mini-details">
            <p className="repo-stats">
              <FaRegStar />
              Stars: {details.stargazers_count}
            </p>
            <p className="repo-stats">
              <FaEye />
              Watch: {details.watchers}
            </p>
            <p className="repo-stats">
              <FaCodeFork />
              Forks: {details.forks}
            </p>
          </div>
          <p>
            Main Language:{" "}
            {details.language === null ? "none" : details.language}
          </p>
          <p>License: {details.license === null ? "none" : details.license}</p>
          <p>Date created: {details.created_at}</p>
          <p>Visibility: {details.visibility}</p>

          <div className="buttondiv">
            <button className="page_buttons">
              <a
                href={`https://github.com/${details.full_name}`}
                target="_blank"
                rel="noreferrer"
                className="viewongit"
              >
                View on Github
              </a>
            </button>
            <Link to={"/"} className="viewongit">
              <button className="page_buttons">Home</button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default RepoDetails;
