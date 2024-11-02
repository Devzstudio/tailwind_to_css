import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssbeautify from "cssbeautify";

import type { NextApiRequest, NextApiResponse } from "next";
import type { ProcessOptions, CssSyntaxError } from "postcss";

interface RequestBody {
  classes: string;
}

const processor = postcss([
  tailwindcss({
    config: { content: ["./*.none"], corePlugins: { preflight: false } },
  }),
  autoprefixer,
]);

const processOptions: ProcessOptions = { from: undefined };

const beautifyOptions: Parameters<typeof cssbeautify>[1] = {
  indent: "  ",
  openbrace: "end-of-line",
  autosemicolon: true,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const body: RequestBody = req.body;
  const classes: string[] = body.classes.split(" ");
  const customClasses: string[] = [];
  let doneProcessing = false;

  do {
    try {
      const css = `.generated { @apply ${classes.join(" ")}; }`;

      let result = await processor
        .process(css, processOptions)
        .then((result) => result.css);

      if (customClasses.length) {
        const classes = customClasses.join(", .");
        result = `.${classes} {\n  /* Custom classes not found in Tailwind CSS */} ${result}`;
      }

      result = cssbeautify(result, beautifyOptions);

      res.status(200).send(result);
      doneProcessing = true;

      //
    } catch (error) {
      if (error?.name === "CssSyntaxError") {
        const cssError = error as CssSyntaxError;
        const customClass = cssError.reason.match(
          /`([^`]+)` class does not exist/
        )?.[1];

        if (customClass) {
          customClasses.push(customClass);
          classes.splice(classes.indexOf(customClass), 1);

          //
        } else {
          res
            .status(200)
            .send(error.reason || error.toString() || "500 Server Error");
          doneProcessing = true;
        }

        //
      } else {
        res
          .status(200)
          .send(error?.reason || error?.toString() || "500 Server Error");
        doneProcessing = true;
      }
    }
  } while (!doneProcessing);
}
