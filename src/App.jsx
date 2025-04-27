// import { useEffect, useState } from "react";
// import toast, { Toaster } from 'react-hot-toast';

// function App() {
//   const [pass, setpass] = useState("");
//   const [passlen, setpasslen] = useState(8);
//   const [caps, setcaps] = useState(false);
//   const [nums, setnums] = useState(false);
//   const [speChar, setspeChar] = useState(false);
//   const [isDark, setidDark] = useState(
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   );


//   const handleTheme = () => {
//     setidDark((e) => !e);
//     let theme = isDark?"Light Theme":"Dark Theme"
//     toast(theme);
//   };


//   let words = "abcdefghijklmnopqrstuvwxyz";

//   const passGen = () => {
//     if (caps) words += "ABCDEFGHIJKLMN0PQRSTUVWXYZ";
//     if (nums) words += "1234567890";
//     if (speChar) words += "!@#$%%^&*_-+=/";

//     let PassWord = "";

//     for (let i = 0; i < passlen; i++) {
//       let index = Math.floor(Math.random() * words.length);
//       PassWord += words[index];
//     }

//     setpass(PassWord);
//   };
//   useEffect(passGen, [passlen, caps, nums, speChar]);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text);
//     toast("Text Copied")
//   }

//   return (
//     <div
//       className={`h-screen w-screen flex justify-center items-center ${isDark ? "bg-gray-800" : "bg-[#ececec]"}`}
//     >
//       <Toaster 
//       containerStyle={{
//         position: 'fixed',
//         top: 20,
//         right: 20,
//       }}
//       toastOptions={{
//         className: '',
//         style: {
//           // left:'20px',
//           // top:'50px',
//           border: '1px solid #713200',
//           padding: '8px',
//           color: '#713200',
//         },
//     }}/>

//       {/* Theme Button */}
//       <button
//         onClick={handleTheme}
//         className={`size-10 absolute right-10 top-8 border-[1px] ${
//           isDark ? "border-white" : "border-black"
//         } rounded-xl p-1.5`}
//       >
//         {isDark ? (
//           <img
//             src="https://img.icons8.com/?size=100&id=45475&format=png&color=FFFFFF"
//             alt=""
//           />
//         ) : (
//           <img
//             src="https://img.icons8.com/?size=100&id=9313&format=png&color=000000"
//             alt=""
//           />
//         )}
//       </button>

//       {/* Heading */}
//       <h1
//         className={`text-4xl font-bold absolute top-[20px] left-[20px] ${
//           isDark ? "text-white" : "text-black"
//         }`}
//       >
//         PassForge
//       </h1>

//       {/* Container Box */}
//       <div className={`${isDark?'bg-gray-700' : 'bg-zinc-100'} w-[500px] h-[350px] p-[40px] rounded-2xl`}>
//         <div className="h-full w-full flex flex-col justify-center items-center gap-8">
//           {/* TOP Part - Pass and copy button */}
//           <div className={`flex gap-7 justify-between items-center`}>
//             <input
//               type="text"
//               value={pass}
//               className={`bg-white text-black h-[50px] w-[300px] rounded-full px-2 border-[3px] border-emerald-600`}
//               disabled
//             />
//             <button  
//                     onClick={() => handleCopy(pass)}
//                     className={`w-[70px] h-[40px] bg-orange-500 rounded-full font-bold transform transition-all duration-100 ease-linear hover:scale-110`}
//             >
//               COPY
//             </button>
//           </div>

//           {/* Middle Part - pass Length */}
//           <div className={`flex flex-col  gap-2 items-center w-full justify-between`}>

//           <p className={`${isDark?'text-white':'text-black'}`}>{`PassWord\nLength`} : {passlen}</p>

//             <div className={`flex gap-5`}>
//               <button
//                 onClick={() => {
//                   passlen > 1 ? setpasslen(Number(passlen) - 1) : setpasslen(1);
//                 }}
//                 className={`text-2xl font-bold border-2 rounded-full size-9 ${isDark?'text-white':'text-black'}`}
//               >
//                 -
//               </button>

//               <input
//                 className="w-[150px]"
//                 type="range"
//                 min={1}
//                 max={50}
//                 value={passlen}
//                 onChange={(e) => setpasslen(e.target.value)}
//               />

//               <button
//                 onClick={() => {
//                   passlen < 50
//                   ? setpasslen(Number(passlen) + 1)
//                   : setpasslen(50);
//                 }}
//                 className={`text-2xl font-bold border-2 rounded-full size-9 ${isDark?'text-white':'text-black'}`}
//               >
//                 +
//               </button>

//             </div>
//           </div>

//           {/* Last Past - Pass Options */}

//           <div className={`w-full flex flex-col gap-2 justify-center items-center`}>

//             <p className={`${isDark?'text-white':'text-black'}`}>Character Options : </p>
            
//             <div className={`flex w-full justify-evenly items-center`}>

//               <label className={`${isDark?'text-white':'text-black'}`}>
//                 <input
//                   type="checkbox"
//                   value={caps}
//                   onChange={() => {
//                     setcaps((e) => !e);
//                   }}
//                 />
//                 ABC
//               </label>

//               <label className={`${isDark?'text-white':'text-black'}`}>
//                 <input
//                   type="checkbox"
//                   value={nums}
//                   onChange={() => setnums((e) => !e)}
//                 />
//                 123
//               </label>

//               <label className={`${isDark?'text-white':'text-black'} `}>
//                 <input
//                   type="checkbox"
//                   value={speChar}
//                   onChange={() => setspeChar((e) => !e)}
//                 />
//                 @#$%^
//               </label>

//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Copy, Moon, Sun, Shield, RefreshCw } from "lucide-react"

function App() {
  const [pass, setpass] = useState("")
  const [passlen, setpasslen] = useState(8)
  const [caps, setcaps] = useState(false)
  const [nums, setnums] = useState(false)
  const [speChar, setspeChar] = useState(false)
  const [isDark, setidDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  const handleTheme = () => {
    setidDark((e) => !e)
    const theme = isDark ? "Light Mode Activated" : "Dark Mode Activated"
    toast(theme, {
      icon: isDark ? "🌞" : "🌙",
    })
  }

  // const words = "abcdefghijklmnopqrstuvwxyz"

  const passGen = () => {
    let tempWords = "abcdefghijklmnopqrstuvwxyz"
    if (caps) tempWords += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (nums) tempWords += "1234567890"
    if (speChar) tempWords += "!@#$%^&*_-+=/"

    let PassWord = ""

    for (let i = 0; i < passlen; i++) {
      const index = Math.floor(Math.random() * tempWords.length)
      PassWord += tempWords[index]
    }

    setpass(PassWord)
  }

  useEffect(() => {
    passGen()
  }, [passlen, caps, nums, speChar])

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    toast.success("Password copied to clipboard!", {
      duration: 2000,
      position: "top-right",
    })
  }

  const regeneratePassword = () => {
    passGen()
    toast("New password generated", {
      icon: "🔄",
    })
  }

  const strengthClass = () => {
    let strength = 0
    if (passlen > 8) strength++
    if (caps) strength++
    if (nums) strength++
    if (speChar) strength++

    switch (strength) {
      case 0:
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-yellow-500"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-emerald-500"
      default:
        return "bg-red-500"
    }
  }

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center transition-colors duration-300 ${
        isDark ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-rose-100 to-teal-100"
      }`}
    >
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            borderRadius: "10px",
          },
        }}
      />

      {/* Theme Button */}
      <button
        onClick={handleTheme}
        className={`size-12 absolute right-10 top-8 rounded-full p-3 transition-all duration-300 ${
          isDark
            ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
            : "bg-white text-gray-800 hover:bg-gray-100 shadow-md"
        }`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Heading */}
      <div className="absolute top-8 left-10 flex items-center gap-3">
        <Shield className={`size-8 ${isDark ? "text-teal-400" : "text-teal-600"}`} />
        <h1 className={`text-4xl font-bold transition-colors ${isDark ? "text-white" : "text-gray-800"}`}>PassForge</h1>
      </div>

      {/* Container Box */}
      <div
        className={`w-[90%] max-w-[550px] p-8 rounded-2xl transition-all duration-300 shadow-xl ${
          isDark ? "bg-gray-800 border border-gray-700" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full flex flex-col gap-8">
          {/* TOP Part - Pass and copy button */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className={`font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>Your secure password</p>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${strengthClass()} text-white`}>
                {passlen < 6 ? "Weak" : passlen < 10 ? "Medium" : "Strong"}
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <div
                className={`flex-1 p-4 rounded-xl font-mono text-lg overflow-x-auto whitespace-nowrap ${
                  isDark
                    ? "bg-gray-900 text-teal-400 border border-gray-700"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {pass}
              </div>

              <button
                onClick={() => handleCopy(pass)}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
                aria-label="Copy password"
              >
                <Copy size={20} />
              </button>

              <button
                onClick={regeneratePassword}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-rose-600 text-white hover:bg-rose-700"
                }`}
                aria-label="Generate new password"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>

          {/* Middle Part - pass Length */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className={`font-medium ${isDark ? "text-white" : "text-gray-800"}`}>Password Length</p>
              <span
                className={`text-xl font-bold px-4 py-1 rounded-lg ${
                  isDark ? "bg-gray-700 text-teal-400" : "bg-teal-100 text-teal-800"
                }`}
              >
                {passlen}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  passlen > 1 ? setpasslen(Number(passlen) - 1) : setpasslen(1)
                }}
                className={`flex justify-center items-center text-xl font-bold rounded-full size-10 transition-all ${
                  isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                -
              </button>

              <input
                className={`flex-1 h-2 rounded-lg appearance-none cursor-pointer ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
                type="range"
                min={1}
                max={50}
                value={passlen}
                onChange={(e) => setpasslen(e.target.value)}
              />

              <button
                onClick={() => {
                  passlen < 50 ? setpasslen(Number(passlen) + 1) : setpasslen(50)
                }}
                className={`flex justify-center items-center text-xl font-bold rounded-full size-10 transition-all ${
                  isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                +
              </button>
            </div>
          </div>

          {/* Last Part - Pass Options */}
          <div className="flex flex-col gap-4">
            <p className={`font-medium ${isDark ? "text-white" : "text-gray-800"}`}>Character Options</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                  caps
                    ? isDark
                      ? "bg-teal-900/50 border-teal-700"
                      : "bg-teal-100 border-teal-300"
                    : isDark
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-100 border-gray-200"
                } border`}
              >
                <input type="checkbox" checked={caps} onChange={() => setcaps((e) => !e)} className="sr-only" />
                <div
                  className={`size-5 rounded flex items-center justify-center ${
                    caps ? (isDark ? "bg-teal-500" : "bg-teal-600") : isDark ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  {caps && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={isDark ? "text-white" : "text-gray-800"}>Uppercase (ABC)</span>
              </label>

              <label
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                  nums
                    ? isDark
                      ? "bg-teal-900/50 border-teal-700"
                      : "bg-teal-100 border-teal-300"
                    : isDark
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-100 border-gray-200"
                } border`}
              >
                <input type="checkbox" checked={nums} onChange={() => setnums((e) => !e)} className="sr-only" />
                <div
                  className={`size-5 rounded flex items-center justify-center ${
                    nums ? (isDark ? "bg-teal-500" : "bg-teal-600") : isDark ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  {nums && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={isDark ? "text-white" : "text-gray-800"}>Numbers (123)</span>
              </label>

              <label
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                  speChar
                    ? isDark
                      ? "bg-teal-900/50 border-teal-700"
                      : "bg-teal-100 border-teal-300"
                    : isDark
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-100 border-gray-200"
                } border`}
              >
                <input type="checkbox" checked={speChar} onChange={() => setspeChar((e) => !e)} className="sr-only" />
                <div
                  className={`size-5 rounded flex items-center justify-center ${
                    speChar ? (isDark ? "bg-teal-500" : "bg-teal-600") : isDark ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  {speChar && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={isDark ? "text-white" : "text-gray-800"}>Special (@#$%)</span>
              </label>
            </div>
          </div>

          <div className="mt-2 text-center">
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Generate strong, secure passwords with PassForge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
