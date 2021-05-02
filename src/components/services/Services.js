import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../title/Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Безплатни коктейли",
                info:
                    "Коктейли, направени от професионални бармани и барманки."
            },
            {
                icon: <FaHiking />,
                title: "Безкраен туризъм",
                info:
                    "Безкраен туризъм във вечната красота на град Копривщица и областта."
            },
            {
                icon: <FaShuttleVan />,
                title: "Безплатен превоз",
                info:
                    "Община Копривщица е осигурила безплатен превоз за всички туристи в града."
            },
            {
                icon: <FaBeer />,
                title: "Най-добрата напитка",
                info:
                    "Традиционно приготвени напитки в Копривщица."
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="Услуги" />
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}