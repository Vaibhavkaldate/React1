import {create} from 'zustand'
const useCountStore= create((set)=>({
    count:0,
    increaseCount:(x)=>set((state)=>({count:state.count+x.value})),
    decreaseCount:(x)=>set((state)=>({count:state.count-x.value}))
}))

export default useCountStore;
