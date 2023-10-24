import React, { useCallback } from "react";
import "./MoreButton.css";

function MoreButton({ visibleCards, setVisibleCards }) {
  const clickMore = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) {
      setVisibleCards(visibleCards + 3);
    } else if (windowWidth <= 1142) {
      setVisibleCards(visibleCards + 2);
    } else {
      setVisibleCards(visibleCards + 3);
    }
  }, [visibleCards, setVisibleCards]);

  return (
    <section className="cards__section">
      <button type="button" className="cards__button" onClick={clickMore}>
        Еще
      </button>
    </section>
  );
}

export default MoreButton;
