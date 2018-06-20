import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import Panama from '../../assets/panama.jpg';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: 'i' + Math.random(),
          name: action.placeName,
          image: Panama
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.key;
        })
      };
    default:
      return state;
  }
};

export default reducer;
