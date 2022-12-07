import { ClipboardCopyIcon, PlayIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GitHubButton from "react-github-button";
import toast from "react-hot-toast";
import { convertFromCssToJss, getConvertedClasses } from "../libs/helpers";
import CodeKeep from "../public/CodeKeep.svg";
import Logo from "../public/logo.svg";

export default function App() {
  const [input, setInput] = useState("");

  const [result, setResult] = useState("");

  const [resultJSS, setResultJSS] = useState("");

  const processInput = () => {
    const resultCss = getConvertedClasses(input);
    const resultJSS = convertFromCssToJss(resultCss);
    setResult(resultCss);
    setResultJSS(resultJSS);
  };

  return (
    <main>
      <nav className="w-full">
        <Head>
          <title>Tailwind To CSS</title>
          <meta name="description" content="Tailwind To CSS" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <header className="bg-gray-900 flex py-2 px-1 md:p-2">
          <h1 className="flex-grow font-bold flex items-center text-gray-300 md:mr-2">
            <div className="mx-2">
              <Image
                src={Logo}
                alt="Tailwind-to-CSS logo"
                height={24}
                width={24}
              />
            </div>
            <span className="hidden md:flex">Tailwind To CSS</span>
          </h1>

          <section className="space-x-1 md:space-x-2 flex items-center">
            <GitHubButton
              type="stargazers"
              namespace="Devzstudio"
              repo="tailwind_to_css"
              className="sm:mr-2"
            />

            <button
              className="flex items-center bg-blue-500 hover:bg-blue-600 rounded text-white px-2.5 py-2"
              onClick={() => processInput()}
            >
              <PlayIcon className="w-6 h-6 text-gray-100 md:mr-1" />
              <span className="hidden md:flex">Convert</span>
            </button>

            <CopyToClipboard
              text={result}
              onCopy={() => toast.success("Copied!")}
            >
              <button className="flex items-center px-2.5 py-2 bg-gray-100 text-gray-600 hover:bg-gray-400 hover:text-gray-900 rounded">
                <ClipboardCopyIcon className="w-6 h-6 text-gray-500 md:mr-1" />
                <span className="hidden md:flex">Copy</span>
              </button>
            </CopyToClipboard>

            <button className="bg-gray-800 hover:bg-gray-700 rounded py-2 px-2">
              <a
                target="_BLANK"
                href="https://codekeep.io?ref=tailwind-to-css"
                rel="noreferrer noopener"
                className="flex items-center text-gray-400"
              >
                <span className="pr-1 text-sm hidden md:flex">
                  Sponsored by
                </span>
                <Image alt="CodeKeep" height={24} width={24} src={CodeKeep} />
                <span className="pl-1 text-sm">CodeKeep</span>
              </a>
            </button>
          </section>
        </header>
      </nav>

      <section className="flex flex-row bg-gray-900 h-screen">
        <textarea
          className="w-full resize-none  border-none flex-grow p-3 bg-gray-800 text-gray-300  outline-none "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tailwind class names"
        ></textarea>

        {/* CSS */}
        <div className="border-l border-gray-700" />
        <textarea
          className="w-full resize-none flex-grow p-3 bg-gray-800 text-gray-300 border-none outline-none"
          placeholder="CSS"
          value={result}
          readOnly
        ></textarea>

        {/* JSS */}
        <div className="border-l border-gray-700" />
        <textarea
          className="w-full resize-none flex-grow p-3 bg-gray-800 text-gray-300 border-none outline-none"
          placeholder="JSS"
          value={resultJSS}
          readOnly
        ></textarea>
      </section>
    </main>
  );
}
