import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import langData from "./data";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Browse = () => {
  const [query, setquery] = useState("");
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="bg-[#00203FFF] w-full h-screen flex">
      <div className="p-28 h-screen overflow-y-auto  space-y-4">
        <Icon
          icon="material-symbols:arrow-back"
          className="absolute hover:cursor-pointer top-4 left-4 text-5xl text-[#ADEFD1FF]"
          onClick={() => navigation.navigate("/")}
        />
        <button
          onClick={() => {
            document.querySelector(".scroll")?.scrollTo({ top: 0 });
          }}
        >
          <Icon
            className="absolute  bottom-4 right-10 text-5xl border-2 p-3 border-[#ADEFD1FF] text-[#ADEFD1FF]"
            icon="material-symbols:arrow-back-ios-new-rounded"
            rotate={1}
          />
        </button>
        <div className="flex flex-row items-center gap-2 border-2 border-[#ADEFD1FF]">
          <input
            className="w-full p-4  text-[#ADEFD1FF] placeholder-[#ADEFD1FF] bg-[#00203FFF] focus:outline-none"
            placeholder="Enter Language"
            onChange={(e) => setquery(e.target.value)}
            value={query}
          />
          <Icon
            icon="ic:round-search"
            className="text-5xl p-2 text-[#ADEFD1FF]"
          />
        </div>
        <div className="flex items-center px-2 pt-4 flex-row w-full justify-between text-[#a4cfbc]">
          <div className="text-3xl">ALL</div>
          {Array.from("#abcdefghijklmnopqrstuvwxyz").map((e) => (
            <div className="text-3xl">{e.toUpperCase()}</div>
          ))}
        </div>
        <>
          {langData
            .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
            .map((e) => (
              <div className="overflow-x-hidden" id={`lang-${e.id}`}>
                <div className="text-[#00203FFF] mt-6 w-1/6 text-center p-2 bg-[#ADEFD1FF]">
                  {e.title}
                </div>
                <div
                  className={`${
                    e.description
                      ? "text-[#00203FFF] bg-[#ADEFD1FF] p-4"
                      : "hidden"
                  }`}
                >
                  {e.description}
                </div>
                <div className="w-full p-4 border border-1 text-[#ADEFD1FF] border-[#ADEFD1FF]">
                  <pre>
                    <code>{e.code}</code>
                  </pre>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

const LanguageList = () => {
  return (
    <div className="bg-[#00203FFF] w-full h-screen flex">
      <Icon
        icon="material-symbols:arrow-back"
        className="absolute hover:cursor-pointer top-4 left-4 text-5xl text-[#ADEFD1FF]"
        onClick={() => navigation.navigate("/")}
      />
      <div className="p-28 overflow-y-auto w-full text-[#ADEFD1FF]">
        {Array.from("#abcdefghijklmnopqrstuvwxyz").map((e) => (
          <>
            <div className="flex items-center flex-row gap-5 mt-10">
              <div className="text-5xl">{e.toLocaleUpperCase()}</div>
              <div className="bg-[#ADEFD1FF] w-full h-0.5"></div>
            </div>
            <div className="grid grid-cols-3 mt-5">
              {langData
                .filter(
                  (f) =>
                    (e === "#" && f.title.toLowerCase()[0].match(/[^a-z]/)) ||
                    f.title.toLocaleLowerCase().startsWith(e)
                )
                .map((f) => (
                  <button
                    onClick={() => navigation.navigate(`browse#lang-${f.id}`)}
                    className="p-2"
                  >
                    {f.title}
                  </button>
                ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center h-screen bg-[#00203FFF] text-[#ADEFD1FF]">
      <div className="flex flex-col items-center gap-2">
        <Icon icon="ri:terminal-box-line" className="text-9xl" />
        <div className="text-7xl font-bold">HELLO WORLD</div>
        <div className="text-xl">in 1080 languages</div>
      </div>
      <div className="flex flex-row gap-6 mt-10">
        <div
          onClick={() => navigation.navigate("/browse")}
          className="bg-[#ADEFD1FF] hover:cursor-pointer text-[#00203FFF] text-center w-96 py-6 text-2xl"
        >
          Browse
        </div>
        <div
          onClick={() => navigation.navigate("/languageList")}
          className="text-[#ADEFD1FF] hover:cursor-pointer border-2 border-[#ADEFD1FF] bg-[#00203FFF] text-center w-96 py-6 text-2xl"
        >
          Language List
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/languageList" element={<LanguageList />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
