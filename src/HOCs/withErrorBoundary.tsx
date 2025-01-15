import { Component, ComponentType, ReactNode } from "react"

interface ErrorBoundaryState {
    hasError: boolean;
    error:Error|null;
}

export const withErrorBoundary = <P extends object> (
    WrappedComponent:ComponentType<P>, 
    fallBackUI?:ReactNode
):ComponentType<P> => {
    return class  WithErrorBoundary extends Component<P> {
        state: ErrorBoundaryState = {
            hasError:false,
            error: null
        }

        componentDidCatch(error:Error){
            this.setState({hasError:true, error})
        }

        render() {
            if(this.state.hasError) {
                return fallBackUI || <div>Something went wrong.</div>
            }

            return (
                <WrappedComponent {...this.props}/>
            )
        }
    }
}
