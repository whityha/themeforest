import React, { ErrorInfo } from 'react';

import { Description, ErrorWrapper, Title } from './styled';

interface State {
    errorText: string;
    errorInfo: ErrorInfo | undefined;
}

interface Props {
    children?: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            errorText: '',
            errorInfo: undefined,
        };
    }

    componentDidCatch(e: Error, errorInfo: ErrorInfo) {
        this.setState({
            errorText: `${e}`,
            errorInfo,
        });
    }

    render() {
        const { errorText, errorInfo } = this.state;
        const { children } = this.props;
        return errorText ? (
            <ErrorWrapper>
                <Title>Что-то пошло не так</Title>
                <Description>Упс, произошла ошибка {errorText}</Description>
                {errorInfo?.componentStack}
            </ErrorWrapper>
        ) : (
            children
        );
    }
}
