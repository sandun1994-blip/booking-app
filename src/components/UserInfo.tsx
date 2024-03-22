import {RouterOutputs} from '../trpc/clients/type'

export const UserInfo=({hello}:{hello:RouterOutputs})=>{
    return <div>{JSON.stringify(hello)}</div>
}