import React, { useEffect, useReducer } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import Card from "./Card";
import { reducer, cardList, shuffleCardList } from "./reducer";

library.add(fas);

function App() {
  const [state, dispatch] = useReducer(reducer, {
      firstCard: { id: undefined, name: "" },
      secondCard: { id: undefined, name: "" },
      cards: [...shuffleCardList(cardList)],
      matchedCards: [],
      mismatchedCards: [],
      flippedCards: [],
      isModalOpen: false,
      isBoardLocked: false
    }
  );

  function handleCardClick(id, name) {
    const isMatched = state.matchedCards.find(matched => matched.id === id);
    const isMismatched = state.mismatchedCards.find(mismatched => mismatched.id === id);

    if (state.isBoardLocked || id === state.firstCard.id || id === state.secondCard.id || isMatched || isMismatched) {
      return;
    }

    if (state.mismatchedCards.length > 0) {
      dispatch({ type: 'UNSET_MISMATCHES' });
    }

    if (!state.firstCard.id) {
      dispatch({ type: "SET_FIRST_CARD", firstCard: { id, name } });
    } else {
      dispatch({ type: "SET_SECOND_CARD", secondCard: { id, name } });
    }
  }

  function checkForMatchingCards() {
    if (!state.firstCard.id || !state.secondCard.id) {
      return;
    }

    dispatch({ type: "SET_BOARD_LOCK", isBoardLocked: true });

    if (state.firstCard.name === state.secondCard.name) {
      dispatch({ type: "SET_MATCHES" });
      dispatch({ type: "SET_BOARD_LOCK", isBoardLocked: false })
    } else {
      dispatch({ type: "SET_MISMATCHES" })
      dispatch({ type: "SET_BOARD_LOCK", isBoardLocked: false })
    }

    dispatch({ type: "SET_FIRST_CARD", firstCard: { id: undefined, name: "" } })
    dispatch({ type: "SET_SECOND_CARD", secondCard: { id: undefined, name: "" } })
  }

  useEffect(checkForMatchingCards, [state.firstCard, state.secondCard]);

  useEffect(() => {
    if (state.matchedCards.length === state.cards.length) {
      dispatch({ type: "OPEN_MODAL" });
    }
  }, [state.matchedCards, state.cards]);

  console.log(state);
  return (
    <div className="container">
      <header>
        <h1>Memory Game</h1>
      </header>
      <Modal
        isOpen={state.isModalOpen}
        className="modal"
        ariaHideApp={false}
      >
        <div className="message">
          <button onClick={() => dispatch({ type: "RESET_GAME" })}>Close</button>
          <h1>You Win!</h1>
          <FontAwesomeIcon icon="trophy"/>
        </div>
      </Modal>
      <section>
        <ul className="board">
          {
            state.cards.map(card => {
              const isMatch = state.matchedCards.find(matched => matched.name === card.name);
              const isMismatch = state.mismatchedCards.find(mismatched => mismatched.id === card.id);
              const isFlipped = state.flippedCards.find(flipped => flipped.id === card.id);

              return (
                <li key={card.id}>
                  <Card
                    handleCardClick={handleCardClick}
                    card={card}
                    isMatch={isMatch}
                    isMismatch={isMismatch}
                    isFlipped={isFlipped}
                  />
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default App;