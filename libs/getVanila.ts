// function bullshit() {
//   //   let testEl = document.createElement('div');
//   //   testEl.innerHTML = `<div class="a">
//   //     <div class="b"></div>
//   //     <div class="b"></div>
//   //     <div class="b"></div>
//   //     <div class="b">
//   //         <div class="c"></div>
//   //         <div class="c"></div>
//   //     </div>
//   //   </div>`;
//   //   console.log('ALO?');
//   //   console.log(testEl);
//   //   console.log(getNodes(testEl));
// }

import { classesTailwind } from './classesTailwind';
import { getConvertedClasses } from './helpers';

const getFirstElement = (input) => {
  let html = document.createElement('div');
  html.innerHTML = input;
  if (html.querySelector('body')) return html.querySelector('body').children[0];
  return html.children[0];
  //   return 'section';
};

const getRandomString = (length) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const generateClassCode = () => {
  return `${getRandomString(4)}-${getRandomString(4)}-${getRandomString(4)}`;
};

const getNodes = (element, nodesArray = []) => {
  //   if (!nodesArray) nodesArray = [];
  if (element.children.length === 0) {
    nodesArray.unshift(element);
    return [element, nodesArray];
  }
  for (const child of element.children) {
    let [responseElement, responseNodesArray] = getNodes(child, nodesArray);
    nodesArray = responseNodesArray;
  }
  nodesArray.unshift(element);
  return [element, nodesArray];
};

const isTailwindClass = (className) => {
  if (className.search(':') == -1)
    return classesTailwind.find((e) => e == className);
  return isTailwindClass(className.split(':')[1]);
};

const getClassesOrdered = (classList) => {
  //const classArray = [...document.querySelector('section').classList.values()];
  const classArray = [...classList.values()];
  classArray.sort();
  return classArray;
};

const getSortedTailwindClasses = (classList) => {
  const classArray = getClassesOrdered(classList);
  let tailwindClasses = [];
  let normalClasses = [];
  for (let c of classArray) {
    if (isTailwindClass(c)) tailwindClasses.push(c);
    else normalClasses.push(c);
  }
  tailwindClasses.sort();
  let stringTailwindClasses = '';
  for (let c of tailwindClasses) {
    stringTailwindClasses += `${c} `;
  }

  let stringNormalClasses = '';
  for (let c of normalClasses) {
    stringNormalClasses += `${c} `;
  }
  return [
    tailwindClasses,
    stringTailwindClasses.trim(),
    stringNormalClasses.trim(),
  ];
};

const formatForMediaQuery = (className: string, classStyle: string) => {
  let insertSelector = false;
  let insideMedia = false;
  //   let closeBlock = false;
  let formattedStyles = ``;
  for (const line of classStyle.split('\n')) {
    if (line.search('@media') !== -1) {
      insertSelector = true;
    } else if (insertSelector) {
      insertSelector = false;
      insideMedia = true;
      formattedStyles += `\t.${className} {\n`;
    } else if (insideMedia && line.search('}') !== -1) {
      insideMedia = false;
      formattedStyles += `\t}\n`;
    }
    formattedStyles += `${insideMedia ? '\t\t' : ''}${line}\n`;
  }
  return formattedStyles.trim();
};

export const getVanila = (htmlInput) => {
  // const a = (htmlInput) => {
  let readingEl = getFirstElement(htmlInput);
  let classesMap = [];
  let [el, nodes] = getNodes(readingEl);

  for (let node of nodes) {
    let [tailwindClasses, stringTailwindClasses, stringNormalClasses] =
      getSortedTailwindClasses(node.classList);
    let classCode = classesMap.some(
      (item) => item.value === stringTailwindClasses
    );
    if (stringTailwindClasses && !classCode) {
      let pendingObject = {
        key: generateClassCode(),
        value: stringTailwindClasses,
      };
      classesMap.push(pendingObject);
      node.classList.add(pendingObject.key);
    } else if (stringTailwindClasses) {
      node.classList.add(classCode);
    }
    for (let c of tailwindClasses) {
      node.classList.remove(c);
    }
  }

  let style = ``;
  // classesMap = [...,
  //     {
  //   key: 'asdf-hgff-GFDf',
  //   value: 'font-semibold mb-4 text-blue-600'
  // }, ...]
  for (let cm of classesMap) {
    let classStyle = getConvertedClasses(cm.value);
    if (classStyle.search('@media') == -1)
      style += `
.${cm.key}: {
${classStyle.trim()}
}
        `;
    else
      style += `
.${cm.key}: {
${classStyle.split('\n\n')[0].trim()}
}
${formatForMediaQuery(cm.key, classStyle.split('\n\n')[1].trim())}
`;
  }
  return [readingEl.outerHTML, style];
};

//a();

// export const getVanila = () => {};
