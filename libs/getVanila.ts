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
// }

import { Base64 } from './base64';
import { classesTailwind } from './classesTailwind';
import { getConvertedClasses } from './helpers';

const getRidHtmlAndStyle = (htmlString) => {
  var insideHead = htmlString.match(/(?<=\<head\>\s*).*?(?=\s*\<\/head\>)/gs);
  var insideHtmlTag = htmlString.match(/(?<=\<html\s*).*?(?=\s*\>)/gs);
  htmlString = htmlString.replace(insideHead, '');
  htmlString = htmlString
    .replace(insideHead, '')
    .replace(insideHtmlTag, '')
    .replace('<head>', '')
    .replace('</head>', '')
    .replace('<html>', '')
    .replace('</html>', '')
    .replace('<body>', '')
    .replace('</body>', '')
    .replace('<!DOCTYPE html>', '');

  return htmlString;
};

const getFirstElement = (input) => {
  let html = document.createElement('div');
  html.innerHTML = getRidHtmlAndStyle(input);
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

function generateHash1(string) {
  var hash = 0,
    i,
    chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

const generateHash2 = function (str, seed = 0) {
  // const cyrb53 = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const generateClassCode = (classes: any = undefined) => {
  if (!classes)
    return `${getRandomString(4)}-${getRandomString(4)}-${getRandomString(4)}`;
  let hash = `${Base64.fromNumber(generateHash1(classes))}$${Base64.fromNumber(
    generateHash2(classes)
  )}`;
  hash = hash.replace('-', classes.charAt(0));
  hash = hash.replace('+', classes.charAt(1));
  hash = hash.replace('/', classes.charAt(2));
  hash = hash.replace('\\', classes.charAt(3));
  hash = hash.replace('$', '-');
  hash = `${classes.charAt(0)}${hash}`;
  return hash;
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
    let itemKey;
    let classCode = classesMap.some((item) => {
      if (item.value === stringTailwindClasses) {
        itemKey = item.key;
        return item.value === stringTailwindClasses;
      }
      return false;
    });

    console.log('HEROOOOO');
    console.log(classCode);
    if (stringTailwindClasses && !classCode) {
      let pendingObject = {
        key: generateClassCode(stringTailwindClasses),
        value: stringTailwindClasses,
      };
      classesMap.push(pendingObject);
      node.classList.add(pendingObject.key);
    } else if (stringTailwindClasses) {
      node.classList.add(itemKey);
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
.${cm.key} {
${classStyle.trim()}
}
        `;
    else
      style += `
.${cm.key} {
${classStyle.split('\n\n')[0].trim()}
}
${formatForMediaQuery(cm.key, classStyle.split('\n\n')[1].trim())}
`;
  }
  return [readingEl.outerHTML, style];
};

//a();

// export const getVanila = () => {};
