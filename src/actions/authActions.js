import {TEST_DISPATCH} from './types';

//register User
export const registerUser = userData =>{
    return{
        type:TEST_DISPATCH,
        payload:userData
    };
};