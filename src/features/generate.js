import { createSlice } from '@reduxjs/toolkit';

const data = require('./quotes.json');

function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }

export const generateSlice = createSlice({
    name: "quote",
    initialState: { value: { text: data["quotes"][Math.floor(Math.random() * 101)].quote, author: data["quotes"][Math.floor(Math.random() * 101)].author, color: getColor() } },
    reducers: {
         newQuote: (state, action) => {
            if (action.type === 'quote/newQuote') {
                const index = Math.floor(Math.random() * 101);
                const randomQuote = [data["quotes"][index].quote, data["quotes"][index].author];
                state.value = { text: randomQuote[0], author: randomQuote[1], color: getColor() };
            }
         },
    },
});

export const { newQuote } = generateSlice.actions;

export default generateSlice.reducer;