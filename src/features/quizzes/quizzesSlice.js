import { createSlice } from "@reduxjs/toolkit";

const quizzesSliceOptions = {
    name: 'quizzesSlice',
    initialState: { quizzes: {} },
    reducers: {
        // Reducer for 'addTopic' action
        addQuiz: (state, action) => {
            const { id, name, icon, topicId, cardIds } = action.payload;
            state.quizzes[id] =
            {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
};

export const allQuizzesSlice = createSlice(quizzesSliceOptions);
export const allQuizzesSelector = (state) => { return state.quizzes.quizzes; }

export const { addQuiz } = allQuizzesSlice.actions;

export default allQuizzesSlice.reducer;