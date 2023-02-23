import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_url } from "../../helpers/config";

const FetchProducts = createAsyncThunk("Products/FetchProducts",
 async (setData) => {
  try{
    const response = await axios.get(`${Base_url}/wallets`);
    const data = await response.data;
    if(!data){
        throw new Error(response.statusText);
    }
    setData(data);
    return data;
  } catch(error) {
        console.log(error);
  }
});


export default FetchProducts;