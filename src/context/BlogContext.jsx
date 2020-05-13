import createDataContext from './createDataContext';

const initialState = {
  blogPosts: [],
};

const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_BLOG_POST':
      return {
        ...state,
        // blogPosts: state.blogPosts.unshift(payload),
        blogPosts: [payload, ...state.blogPosts],
      };
    case 'ADD_BLOG_POST':
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          {
            id: Math.floor(Math.random() * 99999),
            title: `Blog Post #${state.blogPosts.length + 1}`,
          },
        ],
      };
    case 'DELETE_BLOG_POST':
      return {
        ...state,
        blogPosts: state.blogPosts.filter(
          (blogPost) => blogPost.id !== payload
        ),
      };
    default:
      return state;
  }
};

// @action  add blogpost to array in state
// 1. action has no access to dispatch here as it will get passed onto createDataContext where reducer logic will be handled, that's why it needs to take dispatch as param
// 2. action creators should return a function that calls dispatch
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({
      type: 'ADD_BLOG_POST',
    });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: 'DELETE_BLOG_POST',
      payload: id,
    });
  };
};

const createBlogPost = (dispatch) => {
  return (formData) => {
    dispatch({
      type: 'CREATE_BLOG_POST',
      payload: formData,
    });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, createBlogPost },
  initialState
);
