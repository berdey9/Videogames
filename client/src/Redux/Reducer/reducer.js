import {
  GET_VIDEOGAMES,
  PAGE,
  ORDERS,
  GET_DETAIL,
  GET_GENRES,
  GET_PLATFORMS,
  SEARCH_VG,
} from "../Actions/action-types";
let initialState = {
  allVideogames: [],
  allGenres: [],
  allPlatforms: [],
  allVgBackUp: [],
  vgDetail: [],
  currentPage: 0,
};

const Reducer = (state = initialState, action) => {
  const itemsPage = 15;
  const itemsDefault = 9;
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: [...action.payload].splice(0, itemsDefault),
        allVgBackUp: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        allGenres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        allPlatforms: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        vgDetail: action.payload,
      };
    case SEARCH_VG:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case PAGE:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      const firstIndex =
        action.payload === "next" ? nextPage * itemsPage : prevPage * itemsPage;
      if (action.payload === "next" && firstIndex >= state.allVgBackUp.length)
        return state;
      else if (action.payload === "prev" && prevPage < 0) return state;
      return {
        ...state,
        allVideogames: [...state.allVgBackUp].splice(firstIndex, itemsPage),
        currentPage: action.payload === "next" ? nextPage : prevPage,
      };
    case ORDERS:
      switch (action.payload) {
        case "AZ":
          let asc = [...state.allVgBackUp].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          });
          return {
            ...state,
            allVideogames: [...asc].splice(0, itemsPage),
            allVgBackUp: asc,
            currentPage: 0,
          };
        case "ZA":
          let desc = [...state.allVgBackUp].sort((prev, next) => {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) return -1;
            if (prev.name.toLowerCase() < next.name.toLowerCase()) return 1;
            return 0;
          });
          return {
            ...state,
            allVideogames: [...desc].splice(0, itemsPage),
            allVgBackUp: desc,
            currentPage: 0,
          };
        default:
          return state;
          break;
      }
    default:
      return { ...state };
  }
};

export default Reducer;
