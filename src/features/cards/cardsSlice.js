import { createSlice } from "@reduxjs/toolkit";

const cardsSliceOptions = {
    name: 'cardsSlice',
    initialState: { cards: {} },
    reducers: {
        // Reducer for 'addTopic' action
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] =
            {
                id: id,
                front: front,
                back: back
            }
        }
    }
};

export const allCardsSlice = createSlice(cardsSliceOptions);
export const allCardsSelector = (state) => {
    return state.cards.cards;
}
export const cardSelector = (state, id) => { return state.cards.cards[id]; }

export const { addCard } = allCardsSlice.actions;

export default allCardsSlice.reducer;