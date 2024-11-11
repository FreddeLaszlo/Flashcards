import { createSlice } from "@reduxjs/toolkit";

const topicsSliceOptions = {
    name: 'topicsSlice',
    initialState: { topics: {} },
    reducers: {
        // Reducer for 'addTopic' action
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] =
            {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addTopicQuiz: (state, action) => {
            const { id, quizId } = action.payload;
            state.topics[id].quizIds.push(quizId);
        }
    }
};

export const allTopicsSlice = createSlice(topicsSliceOptions);
export const allTopicsSelector = (state) => { return state.topics.topics; }

export const { addTopic, addTopicQuiz } = allTopicsSlice.actions;

export default allTopicsSlice.reducer;