import React, { useCallback } from "react";
import "./MoreButton.css";
import { LARGE, CARDS_TO_ADD_LARGE_SCREEN, CARDS_TO_ADD_SMALL_SCREEN, SCREEN_1142 } from '../../utils/constants';

function MoreButton({ visibleCards, setVisibleCards }) {
  const clickMore = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= LARGE) {
      setVisibleCards(visibleCards + CARDS_TO_ADD_LARGE_SCREEN);
    } else if (windowWidth <= SCREEN_1142) {
      setVisibleCards(visibleCards + CARDS_TO_ADD_SMALL_SCREEN);
    } else {
      setVisibleCards(visibleCards + CARDS_TO_ADD_LARGE_SCREEN);
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
