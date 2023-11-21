import React,{useState} from 'react'
//import fucntion pengatur state dan logic utk function reducer
import { useDispatch, useSelector } from 'react-redux' //jajgan sampai ketambahan hooks error ttp 'react-redux'
//import reducernya dari reducerSlice dlm hal ini counterSlice 
import { increment,decrement,reset,incrementByAmount } from './counterSlice'

const Counter = () => {
    //buat variable bagi func pengatur state & logic 
    //counter.count ~ namaSLice.namaInitialState 

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmout,setIncrementAmount] = useState(0)
    const AddValue = Number(incrementAmout) || 0


    const ResetAll =()=> {
        setIncrementAmount(0)
        dispatch(reset())
    }

  return (
    <section>
       <p>{count}</p>
       <div>
           
          {/*lewat tombol dispatch ditriger tk triger sliceReducer  */}
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
       </div>
          <input 
             type='text'
             value={incrementAmout}
             //payload dari sisni karena ada action onChangte ubah value 
             onChange={(e)=>setIncrementAmount(e.target.value)}
          
          />
         <div>
            <button onClick={()=>dispatch(incrementByAmount(AddValue))}>Add increment</button>
            <button onClick={ResetAll}>Reset</button>

         </div>

    </section>
  )
}

export default Counter