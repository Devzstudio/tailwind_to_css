import postcss from "postcss";
import postcssJs from "postcss-js";

export const getConvertedClasses = async (input: string) => {
    try {
        const response = await fetch('/api/generate-css', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ classes: input }),
        });

        if (!response.ok) throw new Error('Failed to generate CSS');

        const css = await response.text();
        return css;
    } catch (err) {
        return String(err.message || "Error");
    }
};

export const convertFromCssToJss = (css: string) => {
    try {
        const root = postcss.parse(css);
        const jss = JSON.stringify(postcssJs.objectify(root), null, 2)
        return jss;
    } catch (e) {
        console.log(e);
    }
};
