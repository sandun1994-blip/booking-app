import {RouterOutputs} from '../trpc/clients/types'

export const UserInfo=({hello}:{hello:RouterOutputs})=>{
    
    return <div>{JSON.stringify(hello)}</div>
}