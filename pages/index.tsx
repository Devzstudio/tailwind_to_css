import { useState } from 'react';
import Head from 'next/head';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClipboardCopyIcon, PlayIcon, RefreshIcon } from '@heroicons/react/outline';
import GitHubButton from 'react-github-button';

import CheatSheet from '../cheatsheet';
import toast from 'react-hot-toast';
import { useHotkeys } from 'react-hotkeys-hook';

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

const getBreakPoints = (input, breakpoint) => {
	return input
		.split(' ')
		.filter((i) => i.startsWith(breakpoint + ':'))
		.map((i) => '.' + i.substring(3));
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
${smClasses.length !== 0 ? breakpoints[0][1].replace('...', '\n  ' + convertToCss(smClasses)) : ''}
${mdClasses.length !== 0 ? breakpoints[1][1].replace('...', '\n  ' + convertToCss(mdClasses)) : ''}
${lgClasses.length !== 0 ? breakpoints[2][1].replace('...', '\n  ' + convertToCss(lgClasses)) : ''}
${xlClasses.length !== 0 ? breakpoints[3][1].replace('...', '\n  ' + convertToCss(xlClasses)) : ''}
${_2xlClasses.length !== 0 ? breakpoints[4][1].replace('...', '\n  ' + convertToCss(_2xlClasses)) : ''}
`;

		setResult(resultCss);
	};

	useHotkeys('ctrl+k', () => processInput());
	useHotkeys('cmd+k', () => processInput());

	return (
		<div>
			<Head>
				<title>Tailwind To CSS</title>
				<meta name="description" content="Tailwind To CSS" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="bg-gray-900 flex p-2">
				<h1 className="flex-grow font-bold	flex items-center text-gray-300">
					<RefreshIcon className="text-gray-300 mr-1 w-6 h-6" /> <span className="hidden sm:flex">Tailwind To CSS</span>
				</h1>

				<div className="space-x-5 flex items-center">
					<button
						className="flex items-center bg-blue-500 hover:bg-blue-600 rounded-md text-white px-5 py-2"
						onClick={() => processInput()}
					>
						<PlayIcon className="h-4 w-4 text-gray-100 mr-1" /> Convert
					</button>

					<CopyToClipboard text={result} onCopy={() => toast.success('Copied!')}>
						<button className="flex items-center px-5 py-2 bg-gray-100 text-gray-600 hover:bg-gray-400 hover:text-gray-900 rounded">
							<ClipboardCopyIcon className="h-4 w-4 text-gray-500 mr-1" /> Copy
						</button>
					</CopyToClipboard>

					<GitHubButton type="stargazers" namespace="Devzstudio" repo="tailwind_to_css" />

					<div className="bg-gray-800 hover:bg-gray-700 rounded p-2 px-5 cursor-pointer">
						<a
							target="_BLANK"
							href="https://codekeep.io?ref=tailwind-to-css"
							rel="noreferrer noopener"
							className="flex items-center text-gray-400"
						>
							<span className="pr-2 text-sm">Sponsored by</span>
							<img
								height="24px"
								width="24px"
								className="pr-2"
								src="https://camo.githubusercontent.com/691d71c68074e37ce9cffaf09e050cd645f2e65e/68747470733a2f2f636f64656b6565702e696f2f6173736574732f69636f6e2e737667"
							/>
							<span>CodeKeep</span>
						</a>
					</div>
				</div>
			</header>

			<section className="flex flex-row bg-gray-900 w-full h-full ">
				<textarea
					className="w-full resize-none h-full border flex-grow p-3 bg-gray-800 text-gray-300 border-none outline-none border-r"
					style={{ height: '100vh' }}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Tailwind class names"
				></textarea>

				<div className="w-full h-full border-l border-gray-700 flex-grow ">
					<textarea
						style={{ height: '100vh' }}
						className="w-full resize-none h-full border flex-grow p-3 bg-gray-800 text-gray-300 border-none outline-none"
						placeholder="Result"
						value={result}
						readOnly
					></textarea>
				</div>
			</section>
		</div>
	);
}
