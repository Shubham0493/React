import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data , setData] = useState({}) //It will return object
  useEffect(() => {
    const fetchData = ()=>{
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
            
          )
          .then((res) =>res.json()) //It will conver data into json file
            .then((res) => setData (res)[currency])
    }
    fetchData();
  }, [currency]); //when you want to call  the api again then put it inside array it is known as dependinces
  return data
}

export default useCurrencyInfo;