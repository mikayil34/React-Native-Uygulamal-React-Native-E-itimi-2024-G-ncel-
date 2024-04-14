import { createContext, useReducer } from 'react';

const COURSES = [
    {
        id: '1',
        description: 'C Programlama',
        amount: 69,
        date: new Date('2024-04-10'),
    },
    {
        id: '2',
        description: 'C# Programlama',
        amount: 69,
        date: new Date('2023-04-10'),
    },
    {
        id: '3',
        description: 'Angular',
        amount: 69,
        date: new Date('2022-12-08'),
    },
    {
        id: '4',
        description: 'Bootstrap 5',
        amount: 69,
        date: new Date('2022-10-10'),
    },
    {
        id: '5',
        description: 'React Js',
        amount: 69,
        date: new Date('2023-05-20'),
    },
    {
        id: '6',
        description: 'React Native',
        amount: 69,
        date: new Date('2023-07-30'),
    },
    {
        id: '7',
        description: 'Javascript',
        amount: 69,
        date: new Date('2023-06-12'),
    },
    {
        id: '8',
        description: 'Komple Web',
        amount: 69,
        date: new Date('2021-10-22'),
    },
    {
        id: '9',
        description: 'Frontend',
        amount: 69,
        date: new Date('2022-11-25'),
    },
];

export const CoursesContext = createContext({
    courses: [],
    addCourse: (description, id, amount, data) => { },
    deleteCourse: (id) => { },
    updateCourse: (id, { description, amount, data }) => { }, 
});
function coursesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            console.log(action.payload);
            
            return [...state, action.payload];
        case 'DELETE':
            return state.filter((course) => course.id !== action.payload);
        case 'UPDATE':

            const courseIndex = state.findIndex((course) => course.id === action.payload.id);
            const updatedCourse = { ...state[courseIndex], ...action.payload.course };
            const updatedCourses = [...state];
            updatedCourses[courseIndex] = updatedCourse;
            return updatedCourses;
        default:
            return state;
    }
}
function CoursesContextProvider({ children }) {
    const [coursesState, dispatch] = useReducer(coursesReducer, COURSES)
    function addCourse(description, amount, date) {
        dispatch({
            type: 'ADD',
            payload: {
                id:new Date().toString()+ Math.random().toString(),
                description,
                amount,
                date,
            },
        });
    }

    function deleteCourse(id) {
        dispatch({
            type: 'DELETE',
            payload: id,
        });
    }

    function updateCourse(id, course) {
        dispatch({
            type: 'UPDATE',
            payload: {
                id,
                course,
            },
        });
    }
    const contextValue = {
        courses: coursesState,
        addCourse,
        deleteCourse,
        updateCourse,
    };
    return (
        <CoursesContext.Provider value={contextValue}>
        { children }
        </CoursesContext.Provider>
    );
}

export default CoursesContextProvider;
