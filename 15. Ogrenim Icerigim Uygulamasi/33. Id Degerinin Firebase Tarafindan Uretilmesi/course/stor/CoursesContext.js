import { createContext, useReducer } from 'react';

 

export const CoursesContext = createContext({
    courses: [],
    addCourse: ({ description, amount, date,id }) => {},
    deleteCourse: (id) => { },
    updateCourse: (id, { description, amount, data }) => { },
    setCourses: (courses) => { },

});
function coursesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
        //   const id = new Date().toString() + Math.random().toString();
        console.log("coursesReducer"+action.payload);
          return [ action.payload, ...state];
        case 'DELETE':
          return state.filter((course) => course.id !== action.payload);
          case 'SET':
            const revarsedCourses = action.payload.reverse();

            return revarsedCourses;

        case 'UPDATE':
            
          const updatableCourseIndex = state.findIndex(
            (course) => course.id === action.payload.id
          );
          const updatableCourse = state[updatableCourseIndex];
          const updatedItem = { ...updatableCourse, ...action.payload.course };
          const updatedCourses = [...state];
          updatedCourses[updatableCourseIndex] = updatedItem;
          console.log(updatedItem)
          return updatedCourses;
        default:
          return state;
      }
}
function CoursesContextProvider({ children }) {
    const [coursesState, dispatch] = useReducer(coursesReducer, [])
    function addCourse(courseData) {
        dispatch({
            type: 'ADD',
            payload:  courseData
        });
    }

    function deleteCourse(id) {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    }

    function setCourses(Courses) {
        dispatch({
            type: 'SET' ,
            payload: Courses,
        });
    }

    function updateCourse(id, course) {
        dispatch({
            type: 'UPDATE',
            payload: {
                id: id,
                course: course,
            },
        });
    }
    const contextValue = {
        courses: coursesState,
        addCourse,
        deleteCourse,
        updateCourse,
        setCourses
    };
    return (
        <CoursesContext.Provider value={contextValue}>
        { children }
        </CoursesContext.Provider>
    );
}

export default CoursesContextProvider;
