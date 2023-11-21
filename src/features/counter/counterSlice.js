import { createSlice } from "@reduxjs/toolkit"; //declare dgn craeteSlice 

//kita buat slice berisi logic (action method dan statenya )
//import createSlice dari reduxtoolkit dan kita kasih nilai awal pada initialState 
const initialState = {
    count:0
}


export const counterSlice = createSlice({
  name: "counter", //jangan bungung nanti nama ini adalah nama state utk createSLice yg dipanggil di store!!!
  initialState,
  reducers: {
    //berisi method utk ubah /action state
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset:(state)=>{
      state.count = 0
    },
    //ket 3 dibawah
    incrementByAmount:(state,actions) =>{
        //intinya payload adalah ada value di inputextbox
        //jadi begitu dclikc maka payload yg ada di inputbox dimasukan ke state.count yg tadinya 0 jadi bernilai payload
        //yaitu nilai yg sekaang ada di inputtext di copykan ke text <p>{count} </p> diatas 
        state.count += actions.payload
    }
  },
});
// ada 2 yg diexpoprt function/methdo reducer namanya  2.export default "namaSlice".reducer
export const { increment, decrement,reset,incrementByAmount} = counterSlice.actions;
//kita akan mengeskport method incremnet dan decrement ini sbgai sbuah
//object actions dari counterSlice!

//ket2:namaSlice adalah counterSLice tambah .reducer
export default counterSlice.reducer //tanpa s 
//nah ini dalah nama reducer yg dipanggil oleh store kalau kita import kita boleh gunakan sebarang nana nntinya 
//cotnoh pada store adan lihat import counterReducer from '../features/counter/counterSlice 
//nama "counterReducer" adalah nama lain dari counterSlice.reducer  yg saat ini kita export ke store!


//ket 3 
/*
intinya gini kita mau pasang


*/