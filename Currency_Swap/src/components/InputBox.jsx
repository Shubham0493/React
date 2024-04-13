import {React, useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChnage,
  onCurrencyChange,
  currencyOption =[],
  selectCurrency = "usd",
  amountDisable = false,
  className = "",
}) {
  const amountId = useId()

  return (
      <div className={`bg-white p-3 rounded-lg text-black flex `}>
          <div className="w-1/2">
              <label htmlFor={amountId} 
               className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled ={amountDisable}
                  value={amount}
                  onChange={(e)=> onAmountChnage && onAmountChnage(Number(e.target.value)) } // it will convert string into number using Number

              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //it will  be called when the user selects a new option
                
                  
              >
                  
                      {currencyOption.map((currency) =>
                      (
                        <option key={currency}
                        value={currency}
                        >{currency}</option>
                      ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;