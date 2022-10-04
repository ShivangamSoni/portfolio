interface State {
    text: string;
    count: number;
    isDeleting: boolean;
    speed: number;
}

type Action =
    | { type: "DELETE" | "TYPE"; payload: { text: string; speed: number } }
    | { type: "DELAY"; payload: number }
    | { type: "COUNT" };

const reducer = (state: State, action: Action): State => {
    const { type } = action;
    switch (type) {
        case "TYPE": {
            const {
                payload: { text, speed },
            } = action;
            return {
                ...state,
                speed,
                text: text.substring(0, state.text.length + 1),
            };
        }
        case "DELETE": {
            const {
                payload: { text, speed },
            } = action;
            return {
                ...state,
                speed,
                text: text.substring(0, state.text.length - 1),
            };
        }
        case "DELAY": {
            const { payload } = action;
            return { ...state, isDeleting: true, speed: payload };
        }
        case "COUNT": {
            return { ...state, isDeleting: false, count: state.count + 1 };
        }
        default:
            return state;
    }
};

export default reducer;
