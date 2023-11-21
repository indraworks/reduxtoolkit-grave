import { configureStore } from "@reduxjs/toolkit"; //utk config our stoe 
import counterReducer from '../features/counter/counterSlice'

 export const store = configureStore({
    reducer:{
        
        //awalnya reducer kosong
        //pamnggil nama counterReducer 
        counter:counterReducer,  
        //jadi sbgalh kiri adalah nama slice yg kita declare waktu createSlice({name:'counter'})
        //nah sblha kanan adalah nama lain dari export default counterSlice.reducer
         
    }
})


/*
store adalah smua kumpulan state2 ngumpul smuad disni ,dan didalamya ada reducer (method)
ygubah state2 tadi !jadi dalam 1 aplikasi hanya ada 1 buah 

kalau reacte store maka di index.js kita mport store dan juga Provdder ( pmbungkus) agar bisa 
utk update ke tree2 dibawahnya dari App kita 

mana sclie dalah kumpulan dari /kepingan2 state dari kumpulan dari reducer logic 
dan actionutk single feature  in the app ,sebgai contohnya blog ada :
-slice for post,slice for comments ygmasing2 tangani logic berdasarkan fucntional dari slice2 
yg tadi dibagi diatas ,
utk counter datas kita ceate slcienya 

-stlah mmbuat cpunterSlice dan import di store kita buat componentnya Counter.js
  nah pada component COunter.js atau compoennt lain paternya adalah 
  1.kita import {useSelector,useDispatch } from 'react-redux' 
      funct useSelector utk impoprt state initialState dari store dlm hal ini count (kita select state yg kita pilih)
      funct useDispatch utk mntriger reducer /methode tuk lakukan action  !


*/