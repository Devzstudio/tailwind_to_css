import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  ClipboardCopyIcon,
  PlayIcon,
  RefreshIcon,
} from '@heroicons/react/outline';
import GitHubButton from 'react-github-button';
import CodeKeep from '../public/CodeKeep.svg';
import CheatSheet from '../cheatsheet';


const convertToCss = (classNames: string[]) => {
  let cssCode = ``;
  CheatSheet.forEach((element) => {
    element.content.forEach((content) => {
      content.table.forEach((list) => {
        if (classNames.includes(list[0])) {
          const semicolon = list[1][list[1].length - 1] !== ';' ? ';' : '';
          if (list.length === 3) cssCode += `${list[1]}${semicolon} \n`;
          else cssCode += `${list[2]}${semicolon} \n`;
        }

        if (classNames.includes(list[1])) {
          const semicolon = list[2][list[2].length - 1] !== ';' ? ';' : '';
          cssCode += `${list[2]}${semicolon} \n`;
        }
      });
    });
  });
  return cssCode;
};

const getBreakPoints = (input:String, breakpoint:String) => {
  return input
    .split(' ')
    .filter((i:String) => i.startsWith(breakpoint + ':'))
    .map((i:String) => '.' + i.substring(3));
};

export default function App() {
  const [input, setInput] = useState('');

  const [result, setResult] = useState('');

  const processInput = () => {
    const classNames = input.split(/\s+/).map((i) => '.' + i.trim());
    const breakpoints = CheatSheet[0].content[3].table;

    const smClasses = getBreakPoints(input, 'sm');
    const mdClasses = getBreakPoints(input, 'md');
    const lgClasses = getBreakPoints(input, 'lg');
    const xlClasses = getBreakPoints(input, 'xl');
    const _2xlClasses = getBreakPoints(input, '2xl');

    let resultCss = `${convertToCss(classNames)}
${
  smClasses.length !== 0
    ? breakpoints[0][1].replace('...', '\n  ' + convertToCss(smClasses))
    : ''
}
${
  mdClasses.length !== 0
    ? breakpoints[1][1].replace('...', '\n  ' + convertToCss(mdClasses))
    : ''
}
${
  lgClasses.length !== 0
    ? breakpoints[2][1].replace('...', '\n  ' + convertToCss(lgClasses))
    : ''
}
${
  xlClasses.length !== 0
    ? breakpoints[3][1].replace('...', '\n  ' + convertToCss(xlClasses))
    : ''
}
${
  _2xlClasses.length !== 0
    ? breakpoints[4][1].replace('...', '\n  ' + convertToCss(_2xlClasses))
    : ''
}
`;

    setResult(resultCss);
  };

  return (
    <main>
      <nav className="w-full">
        <Head>
          <title>Tailwind To CSS</title>
          <meta name="description" content="Tailwind To CSS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-gray-900 flex p-2">
          <h1 className="flex-grow font-bold	flex items-center text-gray-300 mr-2">
            <RefreshIcon className="text-gray-300 md:mr-1 w-6 h-6" />{' '}
            <span className="hidden md:flex">Tailwind To CSS</span>
          </h1>

          <div className="space-x-2 flex items-center">
            <GitHubButton
              type="stargazers"
              namespace="Devzstudio"
              repo="tailwind_to_css"
              className="sm:mr-2"
            />

            <button
              className="flex items-center bg-blue-500 hover:bg-blue-600 rounded-md text-white px-3 py-2"
              onClick={() => processInput()}
            >
              <PlayIcon className="w-6 h-6 md:h-4 md:w-4 text-gray-100 mr-1" />{' '}
              <span className="hidden md:flex">Convert</span>
            </button>

            <CopyToClipboard
              text={result}
              onCopy={() => toast.success('Copied!')}
            >
              <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-400 hover:text-gray-900 rounded">
                <ClipboardCopyIcon className="w-6 h-6 md:h-4 md:w-4 text-gray-500 mr-1" />{' '}
                <span className="hidden md:flex">Copy</span>
              </button>
            </CopyToClipboard>

            <div className="bg-gray-800 hover:bg-gray-700 rounded py-2 px-3 cursor-pointer ">
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
                <span className="pl-1">CodeKeep</span>
              </a>
            </div>
          </div>
        </header>
      </nav>

      <section className="flex flex-row bg-gray-900 w-full">
        <textarea
          className="w-full h-screen resize-none border-gray-700 border-none flex-grow p-3 bg-gray-800 text-gray-300  outline-none "
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tailwind class names"
        ></textarea>

        <div className="w-full h-full border-l border-gray-700 flex-grow ">
          <textarea
            className="w-full h-screen resize-none border flex-grow p-3 bg-gray-800 text-gray-300 border-none outline-none"
            placeholder="Result"
            value={result}
            readOnly
          ></textarea>
        </div>
      </section>
    </main>
  );
}
