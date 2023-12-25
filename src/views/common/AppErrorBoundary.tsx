import {PropsWithChildren} from "react";
import {ErrorBoundary as ReactErrorBoundary} from "react-error-boundary";

const AppErrorBoundary = ({children}: PropsWithChildren) => {
    const logError = (error: Error, info: { componentStack: string }) => {
        console.error('error name : %s', error.name)
        console.error('error message : %s', error.message)
        console.error('error stack : %s', error.stack)
        // console.error('error cause : %s', error.cause)
        console.error('info component stack : %s', info.componentStack)
    };

    return (
        // <ReactErrorBoundary onError={(error: Error, info: { componentStack: string }) => {
        //     logError(error, info)
        // }} FallbackComponent={errorPage}>
        <ReactErrorBoundary onError={(error: Error, info: { componentStack: string }) => {
            logError(error, info)
        }}>
            {children}
        </ReactErrorBoundary>
    );
};
export default AppErrorBoundary;