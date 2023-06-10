import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const articles = [
  {
    title: "PSA: Try Out This New Property To Colorize Your Form Inputs!",
    date: "2023-09-06",
    description:
      "A new property has been added that allows you to colorize your form inputs. Say goodbye to boring gray inputs and designing your own inputs!",
    link: "accent-color",
  },
];

const Blog: NextPage = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {articles.map((article) => {
        return (
          <article key={article.title} style={{ marginBottom: "16px" }}>
            <Link href={"/blog/" + article.link}>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {article.title}
              </h2>
            </Link>
            <span>{article.date}</span>
            <p>{article.description}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Blog;
