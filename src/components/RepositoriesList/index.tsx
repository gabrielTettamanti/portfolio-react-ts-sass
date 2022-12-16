import React from "react";
import "./styles.css";

import Repository from "../Repository";

import repositoriesData from '../../assets/data/repositoriesData'

export default () => {
  return (
    <section
      className="repositories-list"
      id="repositories-list"
    >
      <h2 className="repositories-list-title">Desarrollos</h2>
      {repositoriesData.map(data => {
        return (
          <Repository
            title = {data.title}
            description = {data.description}
            technologies = {data.technologies}
            type = {data.type}
          />
        );
      })}
      <div>
      <h2 className="repositories-list-title">Experimentos y codigo abierto</h2>
        {repositoriesData.map(data => {
          return (
            <Repository
              title = {data.title}
              description = {data.description}
              technologies = {data.technologies}
              type = {data.type}
            />
          );
        })}
      </div>
    </section>
  );
};
