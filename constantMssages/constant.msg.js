const constantMessage = {
    /** 
     * this is for user login & logout
    */
    USER_REGISTERD: {
        "status_code": 201,
        "status_message": "user registration successfully"
    },
    USER_LOGGED_IN: {
        "status_code": 202,
        "status_message": "user logged-In"
    },

    USER_LOGGED_OUT: {
        "status_code": 301,
        "status_message": "uesr logged-Out"
    },

    /**
     * USER UPDATE, DELETE & FETCH ALL USER 
    */
    GET_ALL_USER: {
        "status_code": 200,
        "status_message": "All user data"
    },

    UPDATE_USER: {
        "status_code": 201,
        "status_message": "Updation successfully "
    },

    NOT_UPDATE: {
        "status_code": 304,
        "status_message": "Not Modified"
    },    

    DELETE_USER: {
        "status_code": 204,
        "status_message": "user deleted successfully (No content.) "
    },

    /**
     * PASSWORD RELATED HERE.
    */
    PASSWORD_NOT_MATCHED: {
        "status_code": 406,
        "status_message": "password not matched"
    },
    RESET_PASSWORD: {
        "status_code": 205,
        "status_message": "password reset successfully (password changed.)"
    },
    PASSWORD_NOT_ACCEPTABLE: {
        "status_code": 406,
        "status_message": "password reset un-successfully (Not Acceptable. required atleast min 5 characters) "
    },
    

    /**
     * SEARCH DATA 
    */
    SEARCH_DATA: {
        "status_code": 302,
        "status_message": "user data found"
    },
    NOT_FOUND:{
        "status_code": 404,
        "status_message": "user not found"
    },
    
    /**
     * IF USER NOT LOG-IN SUCCESSFULLY.
    */
    UNAUTHORIZED_USER: {
        "status_code": 401,
        "status_message": "user unauthenticated"
    }
}

module.exports = constantMessage