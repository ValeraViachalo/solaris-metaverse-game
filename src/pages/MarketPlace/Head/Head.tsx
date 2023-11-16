import React, { useState, useEffect } from "react";

import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";

import headBg from "../../../images/MarketPlace/marketplace.jpg";
import "./Head.scss";

const Head = () => {
  const [daysToOpening, setDaysToOpening] = useState(216);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonContent = isClicked ? "***********" : "Натисни мене";

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysToOpening((prevDays) => Math.max(0, prevDays - 1));
    }, 86400000); // 1 день в мілісекундах

    return () => clearInterval(interval);
  }, []);

  const marketplaceData = {
    title: "Solaris Metaverse eco system Marketplace",
    expectText: "Expect in 2024",
    openingText: `Opening of trading in ${daysToOpening} days`,
    description:
      "Sell and buy spaceships, rare weapons, resources and much more.",
    redemptionInfo:
      'Rare "Platinum" tokens are automatically redeemed by our system with a fixed payout of 1.5 ETH.',
    temporarily:
      "This page is not the final solution for the visual design and functionality of the Solaris MetaVerse Marketplace.",
    trading:
      "On the day of release, more than 1,000 ETH and 50 bitcoins will be introduced into circulation on the trading platform.",
  };

  const partners = ["MEXC", "Binance", "Bybit", "PROJECT PARTNERS"];

  return (
    <section>
      {true && (
        <div className="subheader">
          <div className="subheader__logo">
            <h2>MARCKETPLACE SMV</h2>
          </div>
          <div className="subheader__menu">
            <ul className="subheader__list">
              <li className="subheader__list_item">
                <a href="/" className="bold subheader__link">
                  Buy resources
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  Buy weapons
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  Buy a spaceship
                </a>
              </li>
            </ul>
            <ul className="subheader__list">
              <li className="subheader__list_item">
                <a href="/" className="bold subheader__link">
                  Auction
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  Dividends
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  Sell
                </a>
              </li>
            </ul>
            <ul className="subheader__list">
              <li className="subheader__list_item">
                <a href="/" className="bold subheader__link">
                  ACCESSORIES
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  COMPANIONS
                </a>
              </li>
              <li className="subheader__list_item">
                <a href="/" className="subheader__link">
                  COSMETICS
                </a>
              </li>
            </ul>
            <button className="subheader__button" onClick={handleClick}>
              {buttonContent}
            </button>
          </div>
        </div>
      )}
      <FullWidthBg
        url={headBg}
        type="image"
        classSection="head"
        customClass="head__image"
      >
        <div className="head__body">
          <div className="head__expect">
            <h2>{marketplaceData.title}</h2>
            <div>
              <h2 className="head__lock">{marketplaceData.expectText}</h2>
              <p>{marketplaceData.openingText}</p>
            </div>
          </div>
          <div className="head__text">
            <h1>{marketplaceData.description}</h1>
            <h2>{marketplaceData.redemptionInfo}</h2>
          </div>
        </div>
      </FullWidthBg>
      <div className="temporarily">
        <div className="temporarily__cube"></div>
        <p>{marketplaceData.temporarily}</p>
      </div>
      <div className="trading">
        <h3 className="trading-text">{marketplaceData.trading}</h3>
        <div className="trading__partners">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`partner ${
                index === partners.length - 1 ? "small-text" : ""
              }`}
              style={index === partners.length - 1 ? { margin: "0 auto" } : {}}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Head;
