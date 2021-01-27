const cardList = [
  { id: 1, name: "dog" },
  { id: 2, name: "dog" },
  { id: 3, name: "dragon" },
  { id: 4, name: "dragon" },
  { id: 5, name: "fish" },
  { id: 6, name: "fish" },
  { id: 7, name: "frog" },
  { id: 8, name: "frog" },
  { id: 9, name: "hippo" },
  { id: 10, name: "hippo" },
  { id: 11, name: "kiwi-bird" },
  { id: 12, name: "kiwi-bird" },
  { id: 13, name: "horse-head" },
  { id: 14, name: "horse-head" },
  { id: 15, name: "cat" },
  { id: 16, name: "cat" }
];

function shuffleCardList(cardList) {
  for (let i = cardList.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cardList[i];
      cardList[i] = cardList[j];
      cardList[j] = temp;
  }

  return cardList;
}

const initialState = {
  firstCard: { id: undefined, name: "" },
  secondCard: { id: undefined, name: "" },
  cards: shuffleCardList(cardList),
  matchedCards: [],
  mismatchedCards: [],
  flippedCards: [],
  isModalOpen: false,
  isLocked: false
};

function reducer(state, action) {
  switch(action.type) {
    case "SET_FIRST_CARD":
      return {
        ...state,
        firstCard: action.firstCard,
        flippedCards: [action.firstCard]
      }
    case "SET_SECOND_CARD":
      return {
        ...state,
        secondCard: action.secondCard,
        flippedCards: [...state.flippedCards, action.secondCard]
      }
    case "SET_BOARD_LOCK":
      return {
        ...state,
        isLocked: action.isLocked
      }
    case "SET_MATCHES":
      return {
        ...state,
        matchedCards: [
          ...state.matchedCards,
          ...state.cards.filter(card => card.name === state.firstCard.name)
        ]
      }
    case "SET_MISMATCHES":
      return {
        ...state,
        mismatchedCards: state.cards.filter(card => card.id === state.firstCard.id || card.id === state.secondCard.id)
      }
    case "UNSET_MISMATCHES":
      return {
        ...state,
        mismatchedCards: []
      }
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true
      }
    case "RESET_GAME":
      return {
        firstCard: { id: undefined, name: "" },
        secondCard: { id: undefined, name: "" },
        cards: shuffleCardList(cardList),
        matchedCards: [],
        mismatchedCards: [],
        flippedCards: [],
        isModalOpen: false,
        isLocked: false
      }
    default:
      return state
  }
}

export { initialState, reducer };