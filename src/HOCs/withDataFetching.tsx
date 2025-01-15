import React, { useEffect, useState } from "react"

type ErrorType = Error | null

/**
 * withDataFetchingHOC
 * 
 * @template P = Props type of the wrapped component
 * @template R  = Data type you expect to fech
 * @param WrappedComponent = The component that will receive data and error as props 
 * @param fetchFunction = An async function returning the data of type R
 * 
 * @returns A component that fetches data, handles errors and passes the results to Wrapped component 
 */

export function withDataFetching<P, R>(
    WrappedComponent: React.ComponentType<P & {data:R | null, error:ErrorType}>,
    fetchFunction : ()=> Promise<R>
):React.FC<P>{

    return (props:P) =>{
        const [data, setData] = useState<R|null>(null)
        const [error, setError] = useState<ErrorType>(null)

        useEffect(()=>{
            (async()=>{
                try {
                    const result = await fetchFunction()
                    setData(result)
                } catch(err) {
                    setError(err as ErrorType)
                }
            })()
        },[])
        return <WrappedComponent {...props} data={data} error={error}/>
    }

}