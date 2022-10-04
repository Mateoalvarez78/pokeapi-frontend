import "./abouts-component.css"


import './abouts-component'
import React from "react";

const Porcentajes = ({pokemon, stats}) => {

  let statPokemon = stats.filter((poke) => {
    return poke.id == pokemon.id
  })

  const item = statPokemon
 

  return (
    <section>
      
            <div className="card">
              <div className="skills">
                <p
                  className={`skills-tech ${pokemon.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  HP
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].hp}</p>
                  
                  <div className="container-skills-bar">
                    <div
                      className={`skills-bar ${pokemon.tipo1}` }
                      
                    >
                    </div>
                      <div
                        className={`barra-porcentaje ${pokemon.tipo1}`}
                        style={{ width: `${item[0].hp}px` }}
                      ></div>
                  </div>

                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  ATK
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].atk}</p>
                  <div>

                <div>
                  <div
                    className={`barra-porcentaje ${pokemon.tipo1}`}
                    style={{ width: `${item[0].atk}px` }}
                    ></div>
                  <div className={`skills-bar ${pokemon.tipo1}` }>
                  </div>
                </div>
                    
                    
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  DEF
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].def}</p>
                  <div>
                    <div
                      className={`barra-porcentaje ${pokemon.tipo1}`}
                      style={{ width: `${item[0].def}px` }}
                    ></div>
                  <div className={`skills-bar ${pokemon.tipo1}` }>
                  </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  SATK
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].satk}</p>
                <div>
                    <div
                      className={`barra-porcentaje ${pokemon.tipo1}`}
                      style={{ width: `${item[0].satk}px` }}
                    ></div>
                  <div className={`skills-bar ${pokemon.tipo1}` }>
                  </div>

                </div>

                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${pokemon.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  SDEF
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].sdef}</p>

                  <div>
                    <div
                      className={`barra-porcentaje ${pokemon.tipo1}`}
                      style={{ width: `${item[0].sdef}px` }}
                    ></div>
                  <div className={`skills-bar ${pokemon.tipo1}` }>
                  </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <p
                  className={`skills-tech ${item.tipo1}`}
                  style={{ background: "whitesmoke" }}
                >
                  SPD
                </p>
                <div className="container-porcentaje">
                  <p>{item[0].spd}</p>
                  <div>
                    <div
                      className={`barra-porcentaje ${pokemon.tipo1}`}
                      style={{ width: `${item[0].spd}px` }}
                    ></div>
                  <div className={`skills-bar ${pokemon.tipo1}` }>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>

    </section>
  );
};

export default Porcentajes