import React from "react";

interface WithLoadingProps<T> {
    data? : T
}


export const withLoading = <T, P> (
    WrappedComponent:React.ComponentType<P & WithLoadingProps<T>>

): React.FC<P & WithLoadingProps<T>> =>{
    return ({data, ...props}) => {
        if(!data ) {
            return <div>....loading</div>
        }
        return <WrappedComponent data={data} {...props as P}></WrappedComponent>
    }
}