import React, { useState, useEffect } from "react";

export default function Calculator() {
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");
    const [tempResult, setTempResult] = useState("");

    function handleInputChange(value) {
      console.log(value)
        setResult("");

        if (/[+-/*]$/.test(input) && /[+-/*]/.test(value)) {
            return;
        }

        if (result) {
            setInput(result + value);
        } else {
            setInput(input + value);
        }
    }

  
  function calculate() {
      try {
          setResult(eval(input));
        } catch (error) {
            setResult("Error");
        }
    }

    function clear() {
        setInput("");
        setResult("");
    }
    function del(){
      const newInput = input.substring(0, input.length - 1);
      setInput(newInput);

    }

    useEffect(() => {
    const rawInput = input.replace(/^0+/, "");
    const rawrawInput = rawInput.replace(/([+-/*])0+/g, "$1");
    setInput(rawrawInput);
    }, [input]);

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-gradient-to-r from-indigo-400 to-cyan-400">
        <input
          type="text"
          value={result ? result : input}
          readOnly
          className="p-4  rounded-lg text-3xl font-bold bg-gray-50"
        />
        <div className="grid  grid-cols-4 gap-4 ">
            <button value="AC" className="col-span-3 py-4 px-8 rounded-lg my-2 bg-gradient-to-r from-rose-400 to-red-500 text-white font-bold" onClick={clear}>AC</button>
            <button value="DEL" className="col-span-1 py-4 px-8 rounded-lg my-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold" onClick={del}>DEL</button>
            <button value="7" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('7')}>7</button>
            <button value="8" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('8')}>8</button>
            <button value="9" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('9')}>9</button>
            <button value="*" className="py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold" onClick={() => handleInputChange('*')}>*</button>
            <button value="4" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('4')}>4</button>
            <button value="5" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('5')}>5</button>
            <button value="6" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('6')}>6</button>
            <button value="+" className="py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold" onClick={() => handleInputChange('+')}>+</button>
            <button value="1" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('1')}>1</button>
            <button value="2" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('2')}>2</button>
            <button value="3" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('3')}>3</button>
            <button value="-" className="py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold" onClick={() => handleInputChange('-')}>-</button>
            <button value="0" className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('0')}>0</button>
            <button value="." className="py-4 px-8 rounded-lg bg-gray-50 text-black font-bold" onClick={() => handleInputChange('.')}>,</button>
            <button value="/" className="py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold" onClick={() => handleInputChange('/')}>/</button>
            <button value="=" className="py-4 px-8 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
