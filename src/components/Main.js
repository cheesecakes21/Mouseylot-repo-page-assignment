import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import "../App.css";

function Main() {
  const [repo, setUserRepo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setPrevPage] = useState(currentPage);

  /* API fetch to return 4 repos on the current page */
  const fetchMyRepos = () => {
    fetch(
      `https://api.github.com/users/cheesecakes21/repos?per_page=4&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserRepo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* useEffect calling the fetched repo */
  useEffect(() => {
    fetchMyRepos();
  });

  /* Mapping through the fetched repos and returning them in articles  */
  const repoElements = repo.map((repoElement) => {
    return (
      <Link
        key={repoElement.id}
        to={`/repodetails/${repoElement.name}`}
        className="repolink"
      >
        <article className="card" key={repoElement.id}>
          <div className="just">
            <FaGithub className="justimg" />
          </div>

          <h2 className="repoheader">{repoElement.name}</h2>
          {/* <div className="buttondiv">
            <button className="page_buttons">View details</button>
          </div> */}
        </article>
      </Link>
    );
  });

  return (
    <section className="repos">
      <section className="repo-container">{repoElements}</section>

      <div className="buttondiv">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setPrevPage(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
          className="page_buttons"
        >
          Previous page
        </button>

        <button
          onClick={() => {
            if (currentPage < 2) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className="page_buttons"
        >
          next page
        </button>
      </div>
    </section>
  );
}

export default Main;
