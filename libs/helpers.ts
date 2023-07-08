import postcss from "postcss";
import postcssJs from "postcss-js";
import CheatSheet from "../cheatsheet";

const arbitrarySupportedClasses = {
    pt: "padding-top",
    pb: "padding-bottom",
    pl: "padding-left",
    pr: "padding-right",
    p: "padding",
    mb: "margin-bottom",
    m: "margin",
    mt: "margin-top",
    ml: "margin-left",
    mr: "margin-right",
    w: "width",
    h: "height",
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    bg: "background",
    border: "border-color",
    text: "color",
    aspect: "aspect-ratio",
    color: "color",
    "max-w": "max-width",
    "max-h": "max-height",
};

const convertToCss = (classNames: string[]) => {
    let cssCode = ``;
    CheatSheet.forEach((element) => {
        element.content.forEach((content) => {
            content.table.forEach((list) => {
                if (classNames.includes(list[0])) {

                    cssCode += `${list[1]} \n`;
                }

                if (classNames.includes(list[1])) {
                    const semicolon = list[2][list[2].length - 1] !== ";" ? ";" : "";
                    cssCode += `${list[2]}${semicolon} \n`;
                }
            });
        });
    });

    // Check for arbitrary values

    const arbitraryClasses = classNames.filter((className) =>
        className.includes("[")
    );

    arbitraryClasses.forEach((className) => {
        try {
            const property = className.split("-[")[0].replace(".", "");

            const properyValue = className.match(/(?<=\[)[^\][]*(?=])/g)[0];
            if (arbitrarySupportedClasses[property]) {
                cssCode += `${arbitrarySupportedClasses[property]}: ${properyValue};\n`;
            }
        }
        catch (e) {
            console.log(e)
        }
    });

    return cssCode;
};

const getBreakPoints = (input: string, breakpoint: string) => {
    return input
        .replaceAll("\n", " ")
        .split(" ")
        .filter((i: string) => i.startsWith(breakpoint + ":"))
        .map((i: string) => i.substring(3));
};

const getHoverClass = (input: string) => {
    return input
        .replaceAll("\n", " ")
        .split(" ")
        .filter((i) => i.startsWith("hover:"))
        .map((i) => i.replace("hover:", ""));
};

export const getConvertedClasses = (input) => {

    if (input === "") return "";

    const classNames = input.split(/\s+/).map((i) => i.trim()).filter((i) => i !== "");
    const breakpoints = CheatSheet[0].content[1].table;

    const hoverClasses = getHoverClass(input);

    const smClasses = getBreakPoints(input, "sm");
    const mdClasses = getBreakPoints(input, "md");
    const lgClasses = getBreakPoints(input, "lg");
    const xlClasses = getBreakPoints(input, "xl");
    const _2xlClasses = getBreakPoints(input, "2xl");

    let resultCss = `${convertToCss(classNames)}
${smClasses.length !== 0
            ? breakpoints[0][1].replace("...", "\n  " + convertToCss(smClasses))
            : ""
        }
${mdClasses.length !== 0
            ? breakpoints[1][1].replace("...", "\n  " + convertToCss(mdClasses))
            : ""
        }
${lgClasses.length !== 0
            ? breakpoints[2][1].replace("...", "\n  " + convertToCss(lgClasses))
            : ""
        }
${xlClasses.length !== 0
            ? breakpoints[3][1].replace("...", "\n  " + convertToCss(xlClasses))
            : ""
        }
${_2xlClasses.length !== 0
            ? breakpoints[4][1].replace("...", "\n  " + convertToCss(_2xlClasses))
            : ""
        }
${hoverClasses.length !== 0 ? `:hover {\n ${convertToCss(hoverClasses)} }` : ""}
`;

    return resultCss;
};

export const convertFromCssToJss = (css: string) => {
    try {
        const root = postcss.parse(css);
        const jss = JSON.stringify(postcssJs.objectify(root))
        return jss;
    } catch (e) {
        console.log(e);
    }
};
