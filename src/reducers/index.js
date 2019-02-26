import { UPVOTE, DOWNVOTE, CREATEPOST} from '../constants'
// uncomment to import your constants into your reducer
// import {  } from '../constants';


/**
 *    You may define your initialState as any data structure you'd like
 *    I have scaffolded it as an array of objects but you may choose to 
 *    do otherwise.
 */
const initialState = 
    [
      {
        id: '0',
        subreddit: 'Fortnite',
        poster: 'bdot',
        time: 'Sat Sep 08 2018 9:38:38 GMT-0700 (Pacific Daylight Time)',
        title: 'Fortnite planes suck',
        link: 'https://www.theverge.com/2018/12/6/18128962/fortnite-plane-season-seven-epic-games-sniping-battlefield',
        imgUrl: 'https://cdn.gamerant.com/wp-content/uploads/Fortnite-season-7-Fighter-Plane.jpg.optimal.jpg',
        downvotes: 100,
        upvotes: 1000,
      },
      {
        id: '1',
          title: 'Cutting through branches like butter.',
          subreddit: 'oddlysatisfying',
          poster: 'GrizzledTheGrizzly',
          time: 'Sat Sep 08 2018 11:38:38 GMT-0700 (Pacific Daylight Time)',
          src: 'https://i.imgur.com/VCVGSKJ.mp4',
          upvotes: 10000,
          downvotes: 300
      },
      {
        id: '2',
          title: 'Boston Red Sox fan gives a foul ball to a young Yankees fan',
          subreddit: 'gifs',
          poster: 'TooShiftyForYou',
          time: 'Sat Sep 08 2018 9:38:38 GMT-0700 (Pacific Daylight Time)',
          src: 'https://i.imgur.com/JoTagfI.mp4',
          upvotes: 20000,
          downvotes: 700
      }
    ];
 

/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {
  let index;
  let updatedState;

  switch (action.type) {
    case UPVOTE:
      index = state.findIndex(x => x.id === action.id);

      updatedState = [...state];
      updatedState[index].upvotes++;

      return updatedState;
    case DOWNVOTE:
      index = state.findIndex(x => x.id === action.id);
      
      updatedState = [...state];
      updatedState[index].downvotes++;

      return updatedState;
    case CREATEPOST: {
      updatedState = [...state, action.post];

      return updatedState;
    }
    default:
      return state;
  }
}


export default rootReducer;