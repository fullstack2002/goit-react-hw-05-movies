import React from "react";
import { ErrorWrapper, ErrorText } from './Error.styled';

const PageNotFound = () => {
    return <ErrorWrapper>
        <ErrorText>Sorry, we don`t have this movie in our library</ErrorText>
    </ErrorWrapper>
}

export default PageNotFound