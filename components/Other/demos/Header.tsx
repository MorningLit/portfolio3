import React from "react";
import ViewAllDemosButton from "./ViewAllDemosButton";

const Header = ({ link }: { link?: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
      }}
    >
      <ViewAllDemosButton />
      {link && (
        <span>
          Browser Support:{" "}
          <a
            style={{ textDecoration: "underline" }}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </span>
      )}
    </div>
  );
};

export default Header;
