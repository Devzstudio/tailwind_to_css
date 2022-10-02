const CheatSheet = [
    {
        "title": "Layout",
        "content": [
            {
                "title": "Container",
                "docs": "https://tailwindcss.com/docs/container",
                "description": "Sets the max-width to match the min-width of the current breakpoint.",
                "table": [
                    [
                        ".container",
                        "none",
                        "width: 100%",
                        ""
                    ],
                    [
                        "",
                        "sm:",
                        "max-width: 640px;",
                        ""
                    ],
                    [
                        "",
                        "md:",
                        "max-width: 768px;",
                        ""
                    ],
                    [
                        "",
                        "lg:",
                        "max-width: 1024px;",
                        ""
                    ],
                    [
                        "",
                        "xl:",
                        "max-width: 1280px;",
                        ""
                    ],
                    [
                        "",
                        "2xl:",
                        "max-width: 1536px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Box Decoration Break",
                "docs": "https://tailwindcss.com/docs/box-decoration-break",
                "description": "Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.",
                "table": [
                    [
                        ".decoration-slice",
                        "box-decoration-break: slice;",
                        ""
                    ],
                    [
                        ".decoration-clone",
                        "box-decoration-break: clone;",
                        ""
                    ]
                ]
            },
            {
                "title": "Box Sizing",
                "docs": "https://tailwindcss.com/docs/box-sizing",
                "description": "Sets how the total width and height of an element is calculated.",
                "table": [
                    [
                        ".box-border",
                        "box-sizing: border-box;",
                        ""
                    ],
                    [
                        ".box-content",
                        "box-sizing: content-box;",
                        ""
                    ]
                ]
            },
            {
                "title": "Breakpoints",
                "docs": "https://tailwindcss.com/docs/responsive-design",
                "description": "Breakpoints (screen sizes) that wrap utility classes.",
                "table": [
                    [
                        "sm:",
                        "@media (min-width: 640px) { ... }",
                        ""
                    ],
                    [
                        "md:",
                        "@media (min-width: 768px) { ... }",
                        ""
                    ],
                    [
                        "lg:",
                        "@media (min-width: 1024px) { ... }",
                        ""
                    ],
                    [
                        "xl:",
                        "@media (min-width: 1280px) { ... }",
                        ""
                    ],
                    [
                        "2xl:",
                        "@media (min-width: 1536px) { ... }",
                        ""
                    ]
                ]
            },
            {
                "title": "Display",
                "docs": "https://tailwindcss.com/docs/display",
                "description": "Sets the display box type of an element.",
                "table": [
                    [
                        ".hidden",
                        "display: none;",
                        ""
                    ],
                    [
                        ".contents",
                        "display: contents;",
                        ""
                    ],
                    [
                        ".list-item",
                        "display: list-item;",
                        ""
                    ],
                    [
                        ".block",
                        "display: block;",
                        ""
                    ],
                    [
                        ".inline-block",
                        "display: inline-block;",
                        ""
                    ],
                    [
                        ".flex",
                        "display: flex;",
                        ""
                    ],
                    [
                        ".inline-flex",
                        "display: inline-flex;",
                        ""
                    ],
                    [
                        ".inline",
                        "display: inline;",
                        ""
                    ],
                    [
                        ".table",
                        "display: table;",
                        ""
                    ],
                    [
                        ".inline-table",
                        "display: inline-table;",
                        ""
                    ],
                    [
                        ".table-cell",
                        "display: table-cell;",
                        ""
                    ],
                    [
                        ".table-caption",
                        "display: table-caption;",
                        ""
                    ],
                    [
                        ".table-column",
                        "display: table-column;",
                        ""
                    ],
                    [
                        ".table-column-group",
                        "display: table-column-group;",
                        ""
                    ],
                    [
                        ".table-footer-group",
                        "display: table-footer-group;",
                        ""
                    ],
                    [
                        ".table-header-group",
                        "display: table-header-group;",
                        ""
                    ],
                    [
                        ".table-row-group",
                        "display: table-row-group;",
                        ""
                    ],
                    [
                        ".table-row",
                        "display: table-row;",
                        ""
                    ],
                    [
                        ".flow-root",
                        "display: flow-root",
                        ""
                    ],
                    [
                        ".grid",
                        "display: grid",
                        ""
                    ],
                    [
                        ".inline-grid",
                        "display: inline-grid",
                        ""
                    ]
                ]
            },
            {
                "title": "Float",
                "docs": "https://tailwindcss.com/docs/floats",
                "description": "Sets an element's placement to a side of its container and allows content to wrap around it.",
                "table": [
                    [
                        ".float-right",
                        "float: right;",
                        ""
                    ],
                    [
                        ".float-left",
                        "float: left;",
                        ""
                    ],
                    [
                        ".float-none",
                        "float: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Clear",
                "docs": "https://tailwindcss.com/docs/clear",
                "description": "Sets whether an element is moved below preceding floated elements.",
                "table": [
                    [
                        ".clear-left",
                        "clear: left;",
                        ""
                    ],
                    [
                        ".clear-right",
                        "clear: right;",
                        ""
                    ],
                    [
                        ".clear-both",
                        "clear: both;",
                        ""
                    ],
                    [
                        ".clear-none",
                        "clear: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Isolation",
                "docs": "https://tailwindcss.com/docs/isolation",
                "description": "Sets whether an element is moved below preceding floated elements.",
                "table": [
                    [
                        ".isolate",
                        "isolation: isolate;",
                        ""
                    ],
                    [
                        ".isolate-auto",
                        "isolation: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Object Fit",
                "docs": "https://tailwindcss.com/docs/object-fit",
                "description": "Sets how the content of a replaced element (img or video tag) should be resized.",
                "table": [
                    [
                        ".object-contain",
                        "object-fit: contain;",
                        ""
                    ],
                    [
                        ".object-cover",
                        "object-fit: cover;",
                        ""
                    ],
                    [
                        ".object-fill",
                        "object-fit: fill;",
                        ""
                    ],
                    [
                        ".object-none",
                        "object-fit: none;",
                        ""
                    ],
                    [
                        ".object-scale-down",
                        "object-fit: scale-down;",
                        ""
                    ]
                ]
            },
            {
                "title": "Object Position",
                "docs": "https://tailwindcss.com/docs/object-position",
                "description": "Sets the alignment of the selected replaced element.",
                "table": [
                    [
                        ".object-bottom",
                        "object-position: bottom;",
                        ""
                    ],
                    [
                        ".object-center",
                        "object-position: center;",
                        ""
                    ],
                    [
                        ".object-left",
                        "object-position: left;",
                        ""
                    ],
                    [
                        ".object-left-bottom",
                        "object-position: left bottom;",
                        ""
                    ],
                    [
                        ".object-left-top",
                        "object-position: left top;",
                        ""
                    ],
                    [
                        ".object-right",
                        "object-position: right;",
                        ""
                    ],
                    [
                        ".object-right-bottom",
                        "object-position: right bottom;",
                        ""
                    ],
                    [
                        ".object-right-top",
                        "object-position: right top;",
                        ""
                    ],
                    [
                        ".object-top",
                        "object-position: top;",
                        ""
                    ]
                ]
            },
            {
                "title": "Overflow",
                "docs": "https://tailwindcss.com/docs/overflow",
                "description": "Sets how to handle content that's too big for its container.",
                "table": [
                    [
                        ".overflow-auto",
                        "overflow: auto;",
                        ""
                    ],
                    [
                        ".overflow-x-auto",
                        "overflow-x: auto;",
                        ""
                    ],
                    [
                        ".overflow-y-auto",
                        "overflow-y: auto;",
                        ""
                    ],
                    [
                        ".overflow-hidden",
                        "overflow: hidden;",
                        ""
                    ],
                    [
                        ".overflow-x-hidden",
                        "overflow-x: hidden;",
                        ""
                    ],
                    [
                        ".overflow-y-hidden",
                        "overflow-y: hidden;",
                        ""
                    ],
                    [
                        ".overflow-visible",
                        "overflow: visible;",
                        ""
                    ],
                    [
                        ".overflow-x-visible",
                        "overflow-x: visible;",
                        ""
                    ],
                    [
                        ".overflow-y-visible",
                        "overflow-y: visible;",
                        ""
                    ],
                    [
                        ".overflow-scroll",
                        "overflow: scroll;",
                        ""
                    ],
                    [
                        ".overflow-x-scroll",
                        "overflow-x: scroll;",
                        ""
                    ],
                    [
                        ".overflow-y-scroll",
                        "overflow-y: scroll;",
                        ""
                    ],
                    [
                        ".scrolling-touch",
                        "-webkit-overflow-scrolling: touch;",
                        ""
                    ],
                    [
                        ".scrolling-auto",
                        "-webkit-overflow-scrolling: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Overscroll Behavior",
                "docs": "https://tailwindcss.com/docs/overscroll-behavior",
                "description": "Sets of utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.",
                "table": [
                    [
                        ".overscroll-auto",
                        "overscroll-behavior: auto;",
                        ""
                    ],
                    [
                        ".overscroll-y-auto",
                        "overscroll-behavior-y: auto;",
                        ""
                    ],
                    [
                        ".overscroll-x-auto",
                        "overscroll-behavior-x: auto;",
                        ""
                    ],
                    [
                        ".overscroll-contain",
                        "overscroll-behavior: contain;",
                        ""
                    ],
                    [
                        ".overscroll-y-contain",
                        "overscroll-behavior-y: contain;",
                        ""
                    ],
                    [
                        ".overscroll-x-contain",
                        "overscroll-behavior-x: contain;",
                        ""
                    ],
                    [
                        ".overscroll-none",
                        "overscroll-behavior: none;",
                        ""
                    ],
                    [
                        ".overscroll-y-none",
                        "overscroll-behavior-y: none;",
                        ""
                    ],
                    [
                        ".overscroll-x-none",
                        "overscroll-behavior-x: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Position",
                "docs": "https://tailwindcss.com/docs/positioning",
                "description": "Sets an element's position.",
                "table": [
                    [
                        ".static",
                        "position: static;",
                        ""
                    ],
                    [
                        ".fixed",
                        "position: fixed;",
                        ""
                    ],
                    [
                        ".absolute",
                        "position: absolute;",
                        ""
                    ],
                    [
                        ".relative",
                        "position: relative;",
                        ""
                    ],
                    [
                        ".sticky",
                        "position: sticky;",
                        ""
                    ]
                ]
            },
            {
                "title": "Top / Right / Bottom / Left",
                "docs": "https://tailwindcss.com/docs/top-right-bottom-left",
                "description": "Sets the placement of a positioned element.",
                "table": [
                    [
                        ".inset-0",
                        "top: 0;\nright: 0;\nbottom: 0;\nleft: 0;",
                        ""
                    ],
                    [
                        ".-inset-0",
                        "top: 0;\nright: 0;\nbottom: 0;\nleft: 0;",
                        ""
                    ],
                    [
                        ".inset-y-0",
                        "top: 0;\nbottom: 0;",
                        ""
                    ],
                    [
                        ".-inset-y-0",
                        "top: 0;\nbottom: 0;",
                        ""
                    ],
                    [
                        ".inset-x-0",
                        "right: 0;\nleft: 0;",
                        ""
                    ],
                    [
                        ".-inset-x-0",
                        "right: 0;\nleft: 0;",
                        ""
                    ],
                    [
                        ".top-0",
                        "top: 0;",
                        ""
                    ],
                    [
                        ".right-0",
                        "right: 0;",
                        ""
                    ],
                    [
                        ".bottom-0",
                        "bottom: 0;",
                        ""
                    ],
                    [
                        ".left-0",
                        "left: 0;",
                        ""
                    ],
                    [
                        ".-top-0",
                        "top: 0;",
                        ""
                    ],
                    [
                        ".-right-0",
                        "right: 0;",
                        ""
                    ],
                    [
                        ".-bottom-0",
                        "bottom: 0;",
                        ""
                    ],
                    [
                        ".-left-0",
                        "left: 0;",
                        ""
                    ],
                    [
                        ".inset-0.5",
                        "top: 0.125rem;\nright: 0.125rem;\nbottom: 0.125rem;\nleft: 0.125rem;",
                        ""
                    ],
                    [
                        ".-inset-0.5",
                        "top: -0.125rem;\nright: -0.125rem;\nbottom: -0.125rem;\nleft: -0.125rem;",
                        ""
                    ],
                    [
                        ".inset-y-0.5",
                        "top: 0.125rem;\nbottom: 0.125rem;",
                        ""
                    ],
                    [
                        ".-inset-y-0.5",
                        "top: -0.125rem;\nbottom: -0.125rem;",
                        ""
                    ],
                    [
                        ".inset-x-0.5",
                        "right: 0.125rem;\nleft: 0.125rem;",
                        ""
                    ],
                    [
                        ".-inset-x-0.5",
                        "right: -0.125rem;\nleft: -0.125rem;",
                        ""
                    ],
                    [
                        ".top-0.5",
                        "top: 0.125rem;",
                        ""
                    ],
                    [
                        ".right-0.5",
                        "right: 0.125rem;",
                        ""
                    ],
                    [
                        ".bottom-0.5",
                        "bottom: 0.125rem;",
                        ""
                    ],
                    [
                        ".left-0.5",
                        "left: 0.125rem;",
                        ""
                    ],
                    [
                        ".-top-0.5",
                        "top: -0.125rem;",
                        ""
                    ],
                    [
                        ".-right-0.5",
                        "right: -0.125rem;",
                        ""
                    ],
                    [
                        ".-bottom-0.5",
                        "bottom: -0.125rem;",
                        ""
                    ],
                    [
                        ".-left-0.5",
                        "left: -0.125rem;",
                        ""
                    ],
                    [
                        ".inset-1",
                        "top: 0.25rem;\nright: 0.25rem;\nbottom: 0.25rem;\nleft: 0.25rem;",
                        ""
                    ],
                    [
                        ".-inset-1",
                        "top: -0.25rem;\nright: -0.25rem;\nbottom: -0.25rem;\nleft: -0.25rem;",
                        ""
                    ],
                    [
                        ".inset-y-1",
                        "top: 0.25rem;\nbottom: 0.25rem;",
                        ""
                    ],
                    [
                        ".-inset-y-1",
                        "top: -0.25rem;\nbottom: -0.25rem;",
                        ""
                    ],
                    [
                        ".inset-x-1",
                        "right: 0.25rem;\nleft: 0.25rem;",
                        ""
                    ],
                    [
                        ".-inset-x-1",
                        "right: -0.25rem;\nleft: -0.25rem;",
                        ""
                    ],
                    [
                        ".top-1",
                        "top: 0.25rem;",
                        ""
                    ],
                    [
                        ".right-1",
                        "right: 0.25rem;",
                        ""
                    ],
                    [
                        ".bottom-1",
                        "bottom: 0.25rem;",
                        ""
                    ],
                    [
                        ".left-1",
                        "left: 0.25rem;",
                        ""
                    ],
                    [
                        ".-top-1",
                        "top: -0.25rem;",
                        ""
                    ],
                    [
                        ".-right-1",
                        "right: -0.25rem;",
                        ""
                    ],
                    [
                        ".-bottom-1",
                        "bottom: -0.25rem;",
                        ""
                    ],
                    [
                        ".-left-1",
                        "left: -0.25rem;",
                        ""
                    ],
                    [
                        ".inset-1.5",
                        "top: 0.375rem;\nright: 0.375rem;\nbottom: 0.375rem;\nleft: 0.375rem;",
                        ""
                    ],
                    [
                        ".-inset-1.5",
                        "top: -0.375rem;\nright: -0.375rem;\nbottom: -0.375rem;\nleft: -0.375rem;",
                        ""
                    ],
                    [
                        ".inset-y-1.5",
                        "top: 0.375rem;\nbottom: 0.375rem;",
                        ""
                    ],
                    [
                        ".-inset-y-1.5",
                        "top: -0.375rem;\nbottom: -0.375rem;",
                        ""
                    ],
                    [
                        ".inset-x-1.5",
                        "right: 0.375rem;\nleft: 0.375rem;",
                        ""
                    ],
                    [
                        ".-inset-x-1.5",
                        "right: -0.375rem;\nleft: -0.375rem;",
                        ""
                    ],
                    [
                        ".top-1.5",
                        "top: 0.375rem;",
                        ""
                    ],
                    [
                        ".right-1.5",
                        "right: 0.375rem;",
                        ""
                    ],
                    [
                        ".bottom-1.5",
                        "bottom: 0.375rem;",
                        ""
                    ],
                    [
                        ".left-1.5",
                        "left: 0.375rem;",
                        ""
                    ],
                    [
                        ".-top-1.5",
                        "top: -0.375rem;",
                        ""
                    ],
                    [
                        ".-right-1.5",
                        "right: -0.375rem;",
                        ""
                    ],
                    [
                        ".-bottom-1.5",
                        "bottom: -0.375rem;",
                        ""
                    ],
                    [
                        ".-left-1.5",
                        "left: -0.375rem;",
                        ""
                    ],
                    [
                        ".inset-2",
                        "top: 0.5rem;\nright: 0.5rem;\nbottom: 0.5rem;\nleft: 0.5rem;",
                        ""
                    ],
                    [
                        ".-inset-2",
                        "top: -0.5rem;\nright: -0.5rem;\nbottom: -0.5rem;\nleft: -0.5rem;",
                        ""
                    ],
                    [
                        ".inset-y-2",
                        "top: 0.5rem;\nbottom: 0.5rem;",
                        ""
                    ],
                    [
                        ".-inset-y-2",
                        "top: -0.5rem;\nbottom: -0.5rem;",
                        ""
                    ],
                    [
                        ".inset-x-2",
                        "right: 0.5rem;\nleft: 0.5rem;",
                        ""
                    ],
                    [
                        ".-inset-x-2",
                        "right: -0.5rem;\nleft: -0.5rem;",
                        ""
                    ],
                    [
                        ".top-2",
                        "top: 0.5rem;",
                        ""
                    ],
                    [
                        ".right-2",
                        "right: 0.5rem;",
                        ""
                    ],
                    [
                        ".bottom-2",
                        "bottom: 0.5rem;",
                        ""
                    ],
                    [
                        ".left-2",
                        "left: 0.5rem;",
                        ""
                    ],
                    [
                        ".-top-2",
                        "top: -0.5rem;",
                        ""
                    ],
                    [
                        ".-right-2",
                        "right: -0.5rem;",
                        ""
                    ],
                    [
                        ".-bottom-2",
                        "bottom: -0.5rem;",
                        ""
                    ],
                    [
                        ".-left-2",
                        "left: -0.5rem;",
                        ""
                    ],
                    [
                        ".inset-2.5",
                        "top: 0.625rem;\nright: 0.625rem;\nbottom: 0.625rem;\nleft: 0.625rem;",
                        ""
                    ],
                    [
                        ".-inset-2.5",
                        "top: -0.625rem;\nright: -0.625rem;\nbottom: -0.625rem;\nleft: -0.625rem;",
                        ""
                    ],
                    [
                        ".inset-y-2.5",
                        "top: 0.625rem;\nbottom: 0.625rem;",
                        ""
                    ],
                    [
                        ".-inset-y-2.5",
                        "top: -0.625rem;\nbottom: -0.625rem;",
                        ""
                    ],
                    [
                        ".inset-x-2.5",
                        "right: 0.625rem;\nleft: 0.625rem;",
                        ""
                    ],
                    [
                        ".-inset-x-2.5",
                        "right: -0.625rem;\nleft: -0.625rem;",
                        ""
                    ],
                    [
                        ".top-2.5",
                        "top: 0.625rem;",
                        ""
                    ],
                    [
                        ".right-2.5",
                        "right: 0.625rem;",
                        ""
                    ],
                    [
                        ".bottom-2.5",
                        "bottom: 0.625rem;",
                        ""
                    ],
                    [
                        ".left-2.5",
                        "left: 0.625rem;",
                        ""
                    ],
                    [
                        ".-top-2.5",
                        "top: -0.625rem;",
                        ""
                    ],
                    [
                        ".-right-2.5",
                        "right: -0.625rem;",
                        ""
                    ],
                    [
                        ".-bottom-2.5",
                        "bottom: -0.625rem;",
                        ""
                    ],
                    [
                        ".-left-2.5",
                        "left: -0.625rem;",
                        ""
                    ],
                    [
                        ".inset-3",
                        "top: 0.75rem;\nright: 0.75rem;\nbottom: 0.75rem;\nleft: 0.75rem;",
                        ""
                    ],
                    [
                        ".-inset-3",
                        "top: -0.75rem;\nright: -0.75rem;\nbottom: -0.75rem;\nleft: -0.75rem;",
                        ""
                    ],
                    [
                        ".inset-y-3",
                        "top: 0.75rem;\nbottom: 0.75rem;",
                        ""
                    ],
                    [
                        ".-inset-y-3",
                        "top: -0.75rem;\nbottom: -0.75rem;",
                        ""
                    ],
                    [
                        ".inset-x-3",
                        "right: 0.75rem;\nleft: 0.75rem;",
                        ""
                    ],
                    [
                        ".-inset-x-3",
                        "right: -0.75rem;\nleft: -0.75rem;",
                        ""
                    ],
                    [
                        ".top-3",
                        "top: 0.75rem;",
                        ""
                    ],
                    [
                        ".right-3",
                        "right: 0.75rem;",
                        ""
                    ],
                    [
                        ".bottom-3",
                        "bottom: 0.75rem;",
                        ""
                    ],
                    [
                        ".left-3",
                        "left: 0.75rem;",
                        ""
                    ],
                    [
                        ".-top-3",
                        "top: -0.75rem;",
                        ""
                    ],
                    [
                        ".-right-3",
                        "right: -0.75rem;",
                        ""
                    ],
                    [
                        ".-bottom-3",
                        "bottom: -0.75rem;",
                        ""
                    ],
                    [
                        ".-left-3",
                        "left: -0.75rem;",
                        ""
                    ],
                    [
                        ".inset-3.5",
                        "top: 0.875rem;\nright: 0.875rem;\nbottom: 0.875rem;\nleft: 0.875rem;",
                        ""
                    ],
                    [
                        ".-inset-3.5",
                        "top: -0.875rem;\nright: -0.875rem;\nbottom: -0.875rem;\nleft: -0.875rem;",
                        ""
                    ],
                    [
                        ".inset-y-3.5",
                        "top: 0.875rem;\nbottom: 0.875rem;",
                        ""
                    ],
                    [
                        ".-inset-y-3.5",
                        "top: -0.875rem;\nbottom: -0.875rem;",
                        ""
                    ],
                    [
                        ".inset-x-3.5",
                        "right: 0.875rem;\nleft: 0.875rem;",
                        ""
                    ],
                    [
                        ".-inset-x-3.5",
                        "right: -0.875rem;\nleft: -0.875rem;",
                        ""
                    ],
                    [
                        ".top-3.5",
                        "top: 0.875rem;",
                        ""
                    ],
                    [
                        ".right-3.5",
                        "right: 0.875rem;",
                        ""
                    ],
                    [
                        ".bottom-3.5",
                        "bottom: 0.875rem;",
                        ""
                    ],
                    [
                        ".left-3.5",
                        "left: 0.875rem;",
                        ""
                    ],
                    [
                        ".-top-3.5",
                        "top: -0.875rem;",
                        ""
                    ],
                    [
                        ".-right-3.5",
                        "right: -0.875rem;",
                        ""
                    ],
                    [
                        ".-bottom-3.5",
                        "bottom: -0.875rem;",
                        ""
                    ],
                    [
                        ".-left-3.5",
                        "left: -0.875rem;",
                        ""
                    ],
                    [
                        ".inset-4",
                        "top: 1rem;\nright: 1rem;\nbottom: 1rem;\nleft: 1rem;",
                        ""
                    ],
                    [
                        ".-inset-4",
                        "top: -1rem;\nright: -1rem;\nbottom: -1rem;\nleft: -1rem;",
                        ""
                    ],
                    [
                        ".inset-y-4",
                        "top: 1rem;\nbottom: 1rem;",
                        ""
                    ],
                    [
                        ".-inset-y-4",
                        "top: -1rem;\nbottom: -1rem;",
                        ""
                    ],
                    [
                        ".inset-x-4",
                        "right: 1rem;\nleft: 1rem;",
                        ""
                    ],
                    [
                        ".-inset-x-4",
                        "right: -1rem;\nleft: -1rem;",
                        ""
                    ],
                    [
                        ".top-4",
                        "top: 1rem;",
                        ""
                    ],
                    [
                        ".right-4",
                        "right: 1rem;",
                        ""
                    ],
                    [
                        ".bottom-4",
                        "bottom: 1rem;",
                        ""
                    ],
                    [
                        ".left-4",
                        "left: 1rem;",
                        ""
                    ],
                    [
                        ".-top-4",
                        "top: -1rem;",
                        ""
                    ],
                    [
                        ".-right-4",
                        "right: -1rem;",
                        ""
                    ],
                    [
                        ".-bottom-4",
                        "bottom: -1rem;",
                        ""
                    ],
                    [
                        ".-left-4",
                        "left: -1rem;",
                        ""
                    ],
                    [
                        ".inset-5",
                        "top: 1.25rem;\nright: 1.25rem;\nbottom: 1.25rem;\nleft: 1.25rem;",
                        ""
                    ],
                    [
                        ".-inset-5",
                        "top: -1.25rem;\nright: -1.25rem;\nbottom: -1.25rem;\nleft: -1.25rem;",
                        ""
                    ],
                    [
                        ".inset-y-5",
                        "top: 1.25rem;\nbottom: 1.25rem;",
                        ""
                    ],
                    [
                        ".-inset-y-5",
                        "top: -1.25rem;\nbottom: -1.25rem;",
                        ""
                    ],
                    [
                        ".inset-x-5",
                        "right: 1.25rem;\nleft: 1.25rem;",
                        ""
                    ],
                    [
                        ".-inset-x-5",
                        "right: -1.25rem;\nleft: -1.25rem;",
                        ""
                    ],
                    [
                        ".top-5",
                        "top: 1.25rem;",
                        ""
                    ],
                    [
                        ".right-5",
                        "right: 1.25rem;",
                        ""
                    ],
                    [
                        ".bottom-5",
                        "bottom: 1.25rem;",
                        ""
                    ],
                    [
                        ".left-5",
                        "left: 1.25rem;",
                        ""
                    ],
                    [
                        ".-top-5",
                        "top: -1.25rem;",
                        ""
                    ],
                    [
                        ".-right-5",
                        "right: -1.25rem;",
                        ""
                    ],
                    [
                        ".-bottom-5",
                        "bottom: -1.25rem;",
                        ""
                    ],
                    [
                        ".-left-5",
                        "left: -1.25rem;",
                        ""
                    ],
                    [
                        ".inset-6",
                        "top: 1.5rem;\nright: 1.5rem;\nbottom: 1.5rem;\nleft: 1.5rem;",
                        ""
                    ],
                    [
                        ".-inset-6",
                        "top: -1.5rem;\nright: -1.5rem;\nbottom: -1.5rem;\nleft: -1.5rem;",
                        ""
                    ],
                    [
                        ".inset-y-6",
                        "top: 1.5rem;\nbottom: 1.5rem;",
                        ""
                    ],
                    [
                        ".-inset-y-6",
                        "top: -1.5rem;\nbottom: -1.5rem;",
                        ""
                    ],
                    [
                        ".inset-x-6",
                        "right: 1.5rem;\nleft: 1.5rem;",
                        ""
                    ],
                    [
                        ".-inset-x-6",
                        "right: -1.5rem;\nleft: -1.5rem;",
                        ""
                    ],
                    [
                        ".top-6",
                        "top: 1.5rem;",
                        ""
                    ],
                    [
                        ".right-6",
                        "right: 1.5rem;",
                        ""
                    ],
                    [
                        ".bottom-6",
                        "bottom: 1.5rem;",
                        ""
                    ],
                    [
                        ".left-6",
                        "left: 1.5rem;",
                        ""
                    ],
                    [
                        ".-top-6",
                        "top: -1.5rem;",
                        ""
                    ],
                    [
                        ".-right-6",
                        "right: -1.5rem;",
                        ""
                    ],
                    [
                        ".-bottom-6",
                        "bottom: -1.5rem;",
                        ""
                    ],
                    [
                        ".-left-6",
                        "left: -1.5rem;",
                        ""
                    ],
                    [
                        ".inset-7",
                        "top: 1.75rem;\nright: 1.75rem;\nbottom: 1.75rem;\nleft: 1.75rem;",
                        ""
                    ],
                    [
                        ".-inset-7",
                        "top: -1.75rem;\nright: -1.75rem;\nbottom: -1.75rem;\nleft: -1.75rem;",
                        ""
                    ],
                    [
                        ".inset-y-7",
                        "top: 1.75rem;\nbottom: 1.75rem;",
                        ""
                    ],
                    [
                        ".-inset-y-7",
                        "top: -1.75rem;\nbottom: -1.75rem;",
                        ""
                    ],
                    [
                        ".inset-x-7",
                        "right: 1.75rem;\nleft: 1.75rem;",
                        ""
                    ],
                    [
                        ".-inset-x-7",
                        "right: -1.75rem;\nleft: -1.75rem;",
                        ""
                    ],
                    [
                        ".top-7",
                        "top: 1.75rem;",
                        ""
                    ],
                    [
                        ".right-7",
                        "right: 1.75rem;",
                        ""
                    ],
                    [
                        ".bottom-7",
                        "bottom: 1.75rem;",
                        ""
                    ],
                    [
                        ".left-7",
                        "left: 1.75rem;",
                        ""
                    ],
                    [
                        ".-top-7",
                        "top: -1.75rem;",
                        ""
                    ],
                    [
                        ".-right-7",
                        "right: -1.75rem;",
                        ""
                    ],
                    [
                        ".-bottom-7",
                        "bottom: -1.75rem;",
                        ""
                    ],
                    [
                        ".-left-7",
                        "left: -1.75rem;",
                        ""
                    ],
                    [
                        ".inset-8",
                        "top: 2rem;\nright: 2rem;\nbottom: 2rem;\nleft: 2rem;",
                        ""
                    ],
                    [
                        ".-inset-8",
                        "top: -2rem;\nright: -2rem;\nbottom: -2rem;\nleft: -2rem;",
                        ""
                    ],
                    [
                        ".inset-y-8",
                        "top: 2rem;\nbottom: 2rem;",
                        ""
                    ],
                    [
                        ".-inset-y-8",
                        "top: -2rem;\nbottom: -2rem;",
                        ""
                    ],
                    [
                        ".inset-x-8",
                        "right: 2rem;\nleft: 2rem;",
                        ""
                    ],
                    [
                        ".-inset-x-8",
                        "right: -2rem;\nleft: -2rem;",
                        ""
                    ],
                    [
                        ".top-8",
                        "top: 2rem;",
                        ""
                    ],
                    [
                        ".right-8",
                        "right: 2rem;",
                        ""
                    ],
                    [
                        ".bottom-8",
                        "bottom: 2rem;",
                        ""
                    ],
                    [
                        ".left-8",
                        "left: 2rem;",
                        ""
                    ],
                    [
                        ".-top-8",
                        "top: -2rem;",
                        ""
                    ],
                    [
                        ".-right-8",
                        "right: -2rem;",
                        ""
                    ],
                    [
                        ".-bottom-8",
                        "bottom: -2rem;",
                        ""
                    ],
                    [
                        ".-left-8",
                        "left: -2rem;",
                        ""
                    ],
                    [
                        ".inset-9",
                        "top: 2.25rem;\nright: 2.25rem;\nbottom: 2.25rem;\nleft: 2.25rem;",
                        ""
                    ],
                    [
                        ".-inset-9",
                        "top: -2.25rem;\nright: -2.25rem;\nbottom: -2.25rem;\nleft: -2.25rem;",
                        ""
                    ],
                    [
                        ".inset-y-9",
                        "top: 2.25rem;\nbottom: 2.25rem;",
                        ""
                    ],
                    [
                        ".-inset-y-9",
                        "top: -2.25rem;\nbottom: -2.25rem;",
                        ""
                    ],
                    [
                        ".inset-x-9",
                        "right: 2.25rem;\nleft: 2.25rem;",
                        ""
                    ],
                    [
                        ".-inset-x-9",
                        "right: -2.25rem;\nleft: -2.25rem;",
                        ""
                    ],
                    [
                        ".top-9",
                        "top: 2.25rem;",
                        ""
                    ],
                    [
                        ".right-9",
                        "right: 2.25rem;",
                        ""
                    ],
                    [
                        ".bottom-9",
                        "bottom: 2.25rem;",
                        ""
                    ],
                    [
                        ".left-9",
                        "left: 2.25rem;",
                        ""
                    ],
                    [
                        ".-top-9",
                        "top: -2.25rem;",
                        ""
                    ],
                    [
                        ".-right-9",
                        "right: -2.25rem;",
                        ""
                    ],
                    [
                        ".-bottom-9",
                        "bottom: -2.25rem;",
                        ""
                    ],
                    [
                        ".-left-9",
                        "left: -2.25rem;",
                        ""
                    ],
                    [
                        ".inset-10",
                        "top: 2.5rem;\nright: 2.5rem;\nbottom: 2.5rem;\nleft: 2.5rem;",
                        ""
                    ],
                    [
                        ".-inset-10",
                        "top: -2.5rem;\nright: -2.5rem;\nbottom: -2.5rem;\nleft: -2.5rem;",
                        ""
                    ],
                    [
                        ".inset-y-10",
                        "top: 2.5rem;\nbottom: 2.5rem;",
                        ""
                    ],
                    [
                        ".-inset-y-10",
                        "top: -2.5rem;\nbottom: -2.5rem;",
                        ""
                    ],
                    [
                        ".inset-x-10",
                        "right: 2.5rem;\nleft: 2.5rem;",
                        ""
                    ],
                    [
                        ".-inset-x-10",
                        "right: -2.5rem;\nleft: -2.5rem;",
                        ""
                    ],
                    [
                        ".top-10",
                        "top: 2.5rem;",
                        ""
                    ],
                    [
                        ".right-10",
                        "right: 2.5rem;",
                        ""
                    ],
                    [
                        ".bottom-10",
                        "bottom: 2.5rem;",
                        ""
                    ],
                    [
                        ".left-10",
                        "left: 2.5rem;",
                        ""
                    ],
                    [
                        ".-top-10",
                        "top: -2.5rem;",
                        ""
                    ],
                    [
                        ".-right-10",
                        "right: -2.5rem;",
                        ""
                    ],
                    [
                        ".-bottom-10",
                        "bottom: -2.5rem;",
                        ""
                    ],
                    [
                        ".-left-10",
                        "left: -2.5rem;",
                        ""
                    ],
                    [
                        ".inset-11",
                        "top: 2.75rem;\nright: 2.75rem;\nbottom: 2.75rem;\nleft: 2.75rem;",
                        ""
                    ],
                    [
                        ".-inset-11",
                        "top: -2.75rem;\nright: -2.75rem;\nbottom: -2.75rem;\nleft: -2.75rem;",
                        ""
                    ],
                    [
                        ".inset-y-11",
                        "top: 2.75rem;\nbottom: 2.75rem;",
                        ""
                    ],
                    [
                        ".-inset-y-11",
                        "top: -2.75rem;\nbottom: -2.75rem;",
                        ""
                    ],
                    [
                        ".inset-x-11",
                        "right: 2.75rem;\nleft: 2.75rem;",
                        ""
                    ],
                    [
                        ".-inset-x-11",
                        "right: -2.75rem;\nleft: -2.75rem;",
                        ""
                    ],
                    [
                        ".top-11",
                        "top: 2.75rem;",
                        ""
                    ],
                    [
                        ".right-11",
                        "right: 2.75rem;",
                        ""
                    ],
                    [
                        ".bottom-11",
                        "bottom: 2.75rem;",
                        ""
                    ],
                    [
                        ".left-11",
                        "left: 2.75rem;",
                        ""
                    ],
                    [
                        ".-top-11",
                        "top: -2.75rem;",
                        ""
                    ],
                    [
                        ".-right-11",
                        "right: -2.75rem;",
                        ""
                    ],
                    [
                        ".-bottom-11",
                        "bottom: -2.75rem;",
                        ""
                    ],
                    [
                        ".-left-11",
                        "left: -2.75rem;",
                        ""
                    ],
                    [
                        ".inset-12",
                        "top: 3rem;\nright: 3rem;\nbottom: 3rem;\nleft: 3rem;",
                        ""
                    ],
                    [
                        ".-inset-12",
                        "top: -3rem;\nright: -3rem;\nbottom: -3rem;\nleft: -3rem;",
                        ""
                    ],
                    [
                        ".inset-y-12",
                        "top: 3rem;\nbottom: 3rem;",
                        ""
                    ],
                    [
                        ".-inset-y-12",
                        "top: -3rem;\nbottom: -3rem;",
                        ""
                    ],
                    [
                        ".inset-x-12",
                        "right: 3rem;\nleft: 3rem;",
                        ""
                    ],
                    [
                        ".-inset-x-12",
                        "right: -3rem;\nleft: -3rem;",
                        ""
                    ],
                    [
                        ".top-12",
                        "top: 3rem;",
                        ""
                    ],
                    [
                        ".right-12",
                        "right: 3rem;",
                        ""
                    ],
                    [
                        ".bottom-12",
                        "bottom: 3rem;",
                        ""
                    ],
                    [
                        ".left-12",
                        "left: 3rem;",
                        ""
                    ],
                    [
                        ".-top-12",
                        "top: -3rem;",
                        ""
                    ],
                    [
                        ".-right-12",
                        "right: -3rem;",
                        ""
                    ],
                    [
                        ".-bottom-12",
                        "bottom: -3rem;",
                        ""
                    ],
                    [
                        ".-left-12",
                        "left: -3rem;",
                        ""
                    ],
                    [
                        ".inset-14",
                        "top: 3.5rem;\nright: 3.5rem;\nbottom: 3.5rem;\nleft: 3.5rem;",
                        ""
                    ],
                    [
                        ".-inset-14",
                        "top: -3.5rem;\nright: -3.5rem;\nbottom: -3.5rem;\nleft: -3.5rem;",
                        ""
                    ],
                    [
                        ".inset-y-14",
                        "top: 3.5rem;\nbottom: 3.5rem;",
                        ""
                    ],
                    [
                        ".-inset-y-14",
                        "top: -3.5rem;\nbottom: -3.5rem;",
                        ""
                    ],
                    [
                        ".inset-x-14",
                        "right: 3.5rem;\nleft: 3.5rem;",
                        ""
                    ],
                    [
                        ".-inset-x-14",
                        "right: -3.5rem;\nleft: -3.5rem;",
                        ""
                    ],
                    [
                        ".top-14",
                        "top: 3.5rem;",
                        ""
                    ],
                    [
                        ".right-14",
                        "right: 3.5rem;",
                        ""
                    ],
                    [
                        ".bottom-14",
                        "bottom: 3.5rem;",
                        ""
                    ],
                    [
                        ".left-14",
                        "left: 3.5rem;",
                        ""
                    ],
                    [
                        ".-top-14",
                        "top: -3.5rem;",
                        ""
                    ],
                    [
                        ".-right-14",
                        "right: -3.5rem;",
                        ""
                    ],
                    [
                        ".-bottom-14",
                        "bottom: -3.5rem;",
                        ""
                    ],
                    [
                        ".-left-14",
                        "left: -3.5rem;",
                        ""
                    ],
                    [
                        ".inset-16",
                        "top: 4rem;\nright: 4rem;\nbottom: 4rem;\nleft: 4rem;",
                        ""
                    ],
                    [
                        ".-inset-16",
                        "top: -4rem;\nright: -4rem;\nbottom: -4rem;\nleft: -4rem;",
                        ""
                    ],
                    [
                        ".inset-y-16",
                        "top: 4rem;\nbottom: 4rem;",
                        ""
                    ],
                    [
                        ".-inset-y-16",
                        "top: -4rem;\nbottom: -4rem;",
                        ""
                    ],
                    [
                        ".inset-x-16",
                        "right: 4rem;\nleft: 4rem;",
                        ""
                    ],
                    [
                        ".-inset-x-16",
                        "right: -4rem;\nleft: -4rem;",
                        ""
                    ],
                    [
                        ".top-16",
                        "top: 4rem;",
                        ""
                    ],
                    [
                        ".right-16",
                        "right: 4rem;",
                        ""
                    ],
                    [
                        ".bottom-16",
                        "bottom: 4rem;",
                        ""
                    ],
                    [
                        ".left-16",
                        "left: 4rem;",
                        ""
                    ],
                    [
                        ".-top-16",
                        "top: -4rem;",
                        ""
                    ],
                    [
                        ".-right-16",
                        "right: -4rem;",
                        ""
                    ],
                    [
                        ".-bottom-16",
                        "bottom: -4rem;",
                        ""
                    ],
                    [
                        ".-left-16",
                        "left: -4rem;",
                        ""
                    ],
                    [
                        ".inset-20",
                        "top: 5rem;\nright: 5rem;\nbottom: 5rem;\nleft: 5rem;",
                        ""
                    ],
                    [
                        ".-inset-20",
                        "top: -5rem;\nright: -5rem;\nbottom: -5rem;\nleft: -5rem;",
                        ""
                    ],
                    [
                        ".inset-y-20",
                        "top: 5rem;\nbottom: 5rem;",
                        ""
                    ],
                    [
                        ".-inset-y-20",
                        "top: -5rem;\nbottom: -5rem;",
                        ""
                    ],
                    [
                        ".inset-x-20",
                        "right: 5rem;\nleft: 5rem;",
                        ""
                    ],
                    [
                        ".-inset-x-20",
                        "right: -5rem;\nleft: -5rem;",
                        ""
                    ],
                    [
                        ".top-20",
                        "top: 5rem;",
                        ""
                    ],
                    [
                        ".right-20",
                        "right: 5rem;",
                        ""
                    ],
                    [
                        ".bottom-20",
                        "bottom: 5rem;",
                        ""
                    ],
                    [
                        ".left-20",
                        "left: 5rem;",
                        ""
                    ],
                    [
                        ".-top-20",
                        "top: -5rem;",
                        ""
                    ],
                    [
                        ".-right-20",
                        "right: -5rem;",
                        ""
                    ],
                    [
                        ".-bottom-20",
                        "bottom: -5rem;",
                        ""
                    ],
                    [
                        ".-left-20",
                        "left: -5rem;",
                        ""
                    ],
                    [
                        ".inset-24",
                        "top: 6rem;\nright: 6rem;\nbottom: 6rem;\nleft: 6rem;",
                        ""
                    ],
                    [
                        ".-inset-24",
                        "top: -6rem;\nright: -6rem;\nbottom: -6rem;\nleft: -6rem;",
                        ""
                    ],
                    [
                        ".inset-y-24",
                        "top: 6rem;\nbottom: 6rem;",
                        ""
                    ],
                    [
                        ".-inset-y-24",
                        "top: -6rem;\nbottom: -6rem;",
                        ""
                    ],
                    [
                        ".inset-x-24",
                        "right: 6rem;\nleft: 6rem;",
                        ""
                    ],
                    [
                        ".-inset-x-24",
                        "right: -6rem;\nleft: -6rem;",
                        ""
                    ],
                    [
                        ".top-24",
                        "top: 6rem;",
                        ""
                    ],
                    [
                        ".right-24",
                        "right: 6rem;",
                        ""
                    ],
                    [
                        ".bottom-24",
                        "bottom: 6rem;",
                        ""
                    ],
                    [
                        ".left-24",
                        "left: 6rem;",
                        ""
                    ],
                    [
                        ".-top-24",
                        "top: -6rem;",
                        ""
                    ],
                    [
                        ".-right-24",
                        "right: -6rem;",
                        ""
                    ],
                    [
                        ".-bottom-24",
                        "bottom: -6rem;",
                        ""
                    ],
                    [
                        ".-left-24",
                        "left: -6rem;",
                        ""
                    ],
                    [
                        ".inset-28",
                        "top: 7rem;\nright: 7rem;\nbottom: 7rem;\nleft: 7rem;",
                        ""
                    ],
                    [
                        ".-inset-28",
                        "top: -7rem;\nright: -7rem;\nbottom: -7rem;\nleft: -7rem;",
                        ""
                    ],
                    [
                        ".inset-y-28",
                        "top: 7rem;\nbottom: 7rem;",
                        ""
                    ],
                    [
                        ".-inset-y-28",
                        "top: -7rem;\nbottom: -7rem;",
                        ""
                    ],
                    [
                        ".inset-x-28",
                        "right: 7rem;\nleft: 7rem;",
                        ""
                    ],
                    [
                        ".-inset-x-28",
                        "right: -7rem;\nleft: -7rem;",
                        ""
                    ],
                    [
                        ".top-28",
                        "top: 7rem;",
                        ""
                    ],
                    [
                        ".right-28",
                        "right: 7rem;",
                        ""
                    ],
                    [
                        ".bottom-28",
                        "bottom: 7rem;",
                        ""
                    ],
                    [
                        ".left-28",
                        "left: 7rem;",
                        ""
                    ],
                    [
                        ".-top-28",
                        "top: -7rem;",
                        ""
                    ],
                    [
                        ".-right-28",
                        "right: -7rem;",
                        ""
                    ],
                    [
                        ".-bottom-28",
                        "bottom: -7rem;",
                        ""
                    ],
                    [
                        ".-left-28",
                        "left: -7rem;",
                        ""
                    ],
                    [
                        ".inset-32",
                        "top: 8rem;\nright: 8rem;\nbottom: 8rem;\nleft: 8rem;",
                        ""
                    ],
                    [
                        ".-inset-32",
                        "top: -8rem;\nright: -8rem;\nbottom: -8rem;\nleft: -8rem;",
                        ""
                    ],
                    [
                        ".inset-y-32",
                        "top: 8rem;\nbottom: 8rem;",
                        ""
                    ],
                    [
                        ".-inset-y-32",
                        "top: -8rem;\nbottom: -8rem;",
                        ""
                    ],
                    [
                        ".inset-x-32",
                        "right: 8rem;\nleft: 8rem;",
                        ""
                    ],
                    [
                        ".-inset-x-32",
                        "right: -8rem;\nleft: -8rem;",
                        ""
                    ],
                    [
                        ".top-32",
                        "top: 8rem;",
                        ""
                    ],
                    [
                        ".right-32",
                        "right: 8rem;",
                        ""
                    ],
                    [
                        ".bottom-32",
                        "bottom: 8rem;",
                        ""
                    ],
                    [
                        ".left-32",
                        "left: 8rem;",
                        ""
                    ],
                    [
                        ".-top-32",
                        "top: -8rem;",
                        ""
                    ],
                    [
                        ".-right-32",
                        "right: -8rem;",
                        ""
                    ],
                    [
                        ".-bottom-32",
                        "bottom: -8rem;",
                        ""
                    ],
                    [
                        ".-left-32",
                        "left: -8rem;",
                        ""
                    ],
                    [
                        ".inset-36",
                        "top: 9rem;\nright: 9rem;\nbottom: 9rem;\nleft: 9rem;",
                        ""
                    ],
                    [
                        ".-inset-36",
                        "top: -9rem;\nright: -9rem;\nbottom: -9rem;\nleft: -9rem;",
                        ""
                    ],
                    [
                        ".inset-y-36",
                        "top: 9rem;\nbottom: 9rem;",
                        ""
                    ],
                    [
                        ".-inset-y-36",
                        "top: -9rem;\nbottom: -9rem;",
                        ""
                    ],
                    [
                        ".inset-x-36",
                        "right: 9rem;\nleft: 9rem;",
                        ""
                    ],
                    [
                        ".-inset-x-36",
                        "right: -9rem;\nleft: -9rem;",
                        ""
                    ],
                    [
                        ".top-36",
                        "top: 9rem;",
                        ""
                    ],
                    [
                        ".right-36",
                        "right: 9rem;",
                        ""
                    ],
                    [
                        ".bottom-36",
                        "bottom: 9rem;",
                        ""
                    ],
                    [
                        ".left-36",
                        "left: 9rem;",
                        ""
                    ],
                    [
                        ".-top-36",
                        "top: -9rem;",
                        ""
                    ],
                    [
                        ".-right-36",
                        "right: -9rem;",
                        ""
                    ],
                    [
                        ".-bottom-36",
                        "bottom: -9rem;",
                        ""
                    ],
                    [
                        ".-left-36",
                        "left: -9rem;",
                        ""
                    ],
                    [
                        ".inset-40",
                        "top: 10rem;\nright: 10rem;\nbottom: 10rem;\nleft: 10rem;",
                        ""
                    ],
                    [
                        ".-inset-40",
                        "top: -10rem;\nright: -10rem;\nbottom: -10rem;\nleft: -10rem;",
                        ""
                    ],
                    [
                        ".inset-y-40",
                        "top: 10rem;\nbottom: 10rem;",
                        ""
                    ],
                    [
                        ".-inset-y-40",
                        "top: -10rem;\nbottom: -10rem;",
                        ""
                    ],
                    [
                        ".inset-x-40",
                        "right: 10rem;\nleft: 10rem;",
                        ""
                    ],
                    [
                        ".-inset-x-40",
                        "right: -10rem;\nleft: -10rem;",
                        ""
                    ],
                    [
                        ".top-40",
                        "top: 10rem;",
                        ""
                    ],
                    [
                        ".right-40",
                        "right: 10rem;",
                        ""
                    ],
                    [
                        ".bottom-40",
                        "bottom: 10rem;",
                        ""
                    ],
                    [
                        ".left-40",
                        "left: 10rem;",
                        ""
                    ],
                    [
                        ".-top-40",
                        "top: -10rem;",
                        ""
                    ],
                    [
                        ".-right-40",
                        "right: -10rem;",
                        ""
                    ],
                    [
                        ".-bottom-40",
                        "bottom: -10rem;",
                        ""
                    ],
                    [
                        ".-left-40",
                        "left: -10rem;",
                        ""
                    ],
                    [
                        ".inset-44",
                        "top: 11rem;\nright: 11rem;\nbottom: 11rem;\nleft: 11rem;",
                        ""
                    ],
                    [
                        ".-inset-44",
                        "top: -11rem;\nright: -11rem;\nbottom: -11rem;\nleft: -11rem;",
                        ""
                    ],
                    [
                        ".inset-y-44",
                        "top: 11rem;\nbottom: 11rem;",
                        ""
                    ],
                    [
                        ".-inset-y-44",
                        "top: -11rem;\nbottom: -11rem;",
                        ""
                    ],
                    [
                        ".inset-x-44",
                        "right: 11rem;\nleft: 11rem;",
                        ""
                    ],
                    [
                        ".-inset-x-44",
                        "right: -11rem;\nleft: -11rem;",
                        ""
                    ],
                    [
                        ".top-44",
                        "top: 11rem;",
                        ""
                    ],
                    [
                        ".right-44",
                        "right: 11rem;",
                        ""
                    ],
                    [
                        ".bottom-44",
                        "bottom: 11rem;",
                        ""
                    ],
                    [
                        ".left-44",
                        "left: 11rem;",
                        ""
                    ],
                    [
                        ".-top-44",
                        "top: -11rem;",
                        ""
                    ],
                    [
                        ".-right-44",
                        "right: -11rem;",
                        ""
                    ],
                    [
                        ".-bottom-44",
                        "bottom: -11rem;",
                        ""
                    ],
                    [
                        ".-left-44",
                        "left: -11rem;",
                        ""
                    ],
                    [
                        ".inset-48",
                        "top: 12rem;\nright: 12rem;\nbottom: 12rem;\nleft: 12rem;",
                        ""
                    ],
                    [
                        ".-inset-48",
                        "top: -12rem;\nright: -12rem;\nbottom: -12rem;\nleft: -12rem;",
                        ""
                    ],
                    [
                        ".inset-y-48",
                        "top: 12rem;\nbottom: 12rem;",
                        ""
                    ],
                    [
                        ".-inset-y-48",
                        "top: -12rem;\nbottom: -12rem;",
                        ""
                    ],
                    [
                        ".inset-x-48",
                        "right: 12rem;\nleft: 12rem;",
                        ""
                    ],
                    [
                        ".-inset-x-48",
                        "right: -12rem;\nleft: -12rem;",
                        ""
                    ],
                    [
                        ".top-48",
                        "top: 12rem;",
                        ""
                    ],
                    [
                        ".right-48",
                        "right: 12rem;",
                        ""
                    ],
                    [
                        ".bottom-48",
                        "bottom: 12rem;",
                        ""
                    ],
                    [
                        ".left-48",
                        "left: 12rem;",
                        ""
                    ],
                    [
                        ".-top-48",
                        "top: -12rem;",
                        ""
                    ],
                    [
                        ".-right-48",
                        "right: -12rem;",
                        ""
                    ],
                    [
                        ".-bottom-48",
                        "bottom: -12rem;",
                        ""
                    ],
                    [
                        ".-left-48",
                        "left: -12rem;",
                        ""
                    ],
                    [
                        ".inset-52",
                        "top: 13rem;\nright: 13rem;\nbottom: 13rem;\nleft: 13rem;",
                        ""
                    ],
                    [
                        ".-inset-52",
                        "top: -13rem;\nright: -13rem;\nbottom: -13rem;\nleft: -13rem;",
                        ""
                    ],
                    [
                        ".inset-y-52",
                        "top: 13rem;\nbottom: 13rem;",
                        ""
                    ],
                    [
                        ".-inset-y-52",
                        "top: -13rem;\nbottom: -13rem;",
                        ""
                    ],
                    [
                        ".inset-x-52",
                        "right: 13rem;\nleft: 13rem;",
                        ""
                    ],
                    [
                        ".-inset-x-52",
                        "right: -13rem;\nleft: -13rem;",
                        ""
                    ],
                    [
                        ".top-52",
                        "top: 13rem;",
                        ""
                    ],
                    [
                        ".right-52",
                        "right: 13rem;",
                        ""
                    ],
                    [
                        ".bottom-52",
                        "bottom: 13rem;",
                        ""
                    ],
                    [
                        ".left-52",
                        "left: 13rem;",
                        ""
                    ],
                    [
                        ".-top-52",
                        "top: -13rem;",
                        ""
                    ],
                    [
                        ".-right-52",
                        "right: -13rem;",
                        ""
                    ],
                    [
                        ".-bottom-52",
                        "bottom: -13rem;",
                        ""
                    ],
                    [
                        ".-left-52",
                        "left: -13rem;",
                        ""
                    ],
                    [
                        ".inset-56",
                        "top: 14rem;\nright: 14rem;\nbottom: 14rem;\nleft: 14rem;",
                        ""
                    ],
                    [
                        ".-inset-56",
                        "top: -14rem;\nright: -14rem;\nbottom: -14rem;\nleft: -14rem;",
                        ""
                    ],
                    [
                        ".inset-y-56",
                        "top: 14rem;\nbottom: 14rem;",
                        ""
                    ],
                    [
                        ".-inset-y-56",
                        "top: -14rem;\nbottom: -14rem;",
                        ""
                    ],
                    [
                        ".inset-x-56",
                        "right: 14rem;\nleft: 14rem;",
                        ""
                    ],
                    [
                        ".-inset-x-56",
                        "right: -14rem;\nleft: -14rem;",
                        ""
                    ],
                    [
                        ".top-56",
                        "top: 14rem;",
                        ""
                    ],
                    [
                        ".right-56",
                        "right: 14rem;",
                        ""
                    ],
                    [
                        ".bottom-56",
                        "bottom: 14rem;",
                        ""
                    ],
                    [
                        ".left-56",
                        "left: 14rem;",
                        ""
                    ],
                    [
                        ".-top-56",
                        "top: -14rem;",
                        ""
                    ],
                    [
                        ".-right-56",
                        "right: -14rem;",
                        ""
                    ],
                    [
                        ".-bottom-56",
                        "bottom: -14rem;",
                        ""
                    ],
                    [
                        ".-left-56",
                        "left: -14rem;",
                        ""
                    ],
                    [
                        ".inset-60",
                        "top: 15rem;\nright: 15rem;\nbottom: 15rem;\nleft: 15rem;",
                        ""
                    ],
                    [
                        ".-inset-60",
                        "top: -15rem;\nright: -15rem;\nbottom: -15rem;\nleft: -15rem;",
                        ""
                    ],
                    [
                        ".inset-y-60",
                        "top: 15rem;\nbottom: 15rem;",
                        ""
                    ],
                    [
                        ".-inset-y-60",
                        "top: -15rem;\nbottom: -15rem;",
                        ""
                    ],
                    [
                        ".inset-x-60",
                        "right: 15rem;\nleft: 15rem;",
                        ""
                    ],
                    [
                        ".-inset-x-60",
                        "right: -15rem;\nleft: -15rem;",
                        ""
                    ],
                    [
                        ".top-60",
                        "top: 15rem;",
                        ""
                    ],
                    [
                        ".right-60",
                        "right: 15rem;",
                        ""
                    ],
                    [
                        ".bottom-60",
                        "bottom: 15rem;",
                        ""
                    ],
                    [
                        ".left-60",
                        "left: 15rem;",
                        ""
                    ],
                    [
                        ".-top-60",
                        "top: -15rem;",
                        ""
                    ],
                    [
                        ".-right-60",
                        "right: -15rem;",
                        ""
                    ],
                    [
                        ".-bottom-60",
                        "bottom: -15rem;",
                        ""
                    ],
                    [
                        ".-left-60",
                        "left: -15rem;",
                        ""
                    ],
                    [
                        ".inset-64",
                        "top: 16rem;\nright: 16rem;\nbottom: 16rem;\nleft: 16rem;",
                        ""
                    ],
                    [
                        ".-inset-64",
                        "top: -16rem;\nright: -16rem;\nbottom: -16rem;\nleft: -16rem;",
                        ""
                    ],
                    [
                        ".inset-y-64",
                        "top: 16rem;\nbottom: 16rem;",
                        ""
                    ],
                    [
                        ".-inset-y-64",
                        "top: -16rem;\nbottom: -16rem;",
                        ""
                    ],
                    [
                        ".inset-x-64",
                        "right: 16rem;\nleft: 16rem;",
                        ""
                    ],
                    [
                        ".-inset-x-64",
                        "right: -16rem;\nleft: -16rem;",
                        ""
                    ],
                    [
                        ".top-64",
                        "top: 16rem;",
                        ""
                    ],
                    [
                        ".right-64",
                        "right: 16rem;",
                        ""
                    ],
                    [
                        ".bottom-64",
                        "bottom: 16rem;",
                        ""
                    ],
                    [
                        ".left-64",
                        "left: 16rem;",
                        ""
                    ],
                    [
                        ".-top-64",
                        "top: -16rem;",
                        ""
                    ],
                    [
                        ".-right-64",
                        "right: -16rem;",
                        ""
                    ],
                    [
                        ".-bottom-64",
                        "bottom: -16rem;",
                        ""
                    ],
                    [
                        ".-left-64",
                        "left: -16rem;",
                        ""
                    ],
                    [
                        ".inset-72",
                        "top: 18rem;\nright: 18rem;\nbottom: 18rem;\nleft: 18rem;",
                        ""
                    ],
                    [
                        ".-inset-72",
                        "top: -18rem;\nright: -18rem;\nbottom: -18rem;\nleft: -18rem;",
                        ""
                    ],
                    [
                        ".inset-y-72",
                        "top: 18rem;\nbottom: 18rem;",
                        ""
                    ],
                    [
                        ".-inset-y-72",
                        "top: -18rem;\nbottom: -18rem;",
                        ""
                    ],
                    [
                        ".inset-x-72",
                        "right: 18rem;\nleft: 18rem;",
                        ""
                    ],
                    [
                        ".-inset-x-72",
                        "right: -18rem;\nleft: -18rem;",
                        ""
                    ],
                    [
                        ".top-72",
                        "top: 18rem;",
                        ""
                    ],
                    [
                        ".right-72",
                        "right: 18rem;",
                        ""
                    ],
                    [
                        ".bottom-72",
                        "bottom: 18rem;",
                        ""
                    ],
                    [
                        ".left-72",
                        "left: 18rem;",
                        ""
                    ],
                    [
                        ".-top-72",
                        "top: -18rem;",
                        ""
                    ],
                    [
                        ".-right-72",
                        "right: -18rem;",
                        ""
                    ],
                    [
                        ".-bottom-72",
                        "bottom: -18rem;",
                        ""
                    ],
                    [
                        ".-left-72",
                        "left: -18rem;",
                        ""
                    ],
                    [
                        ".inset-80",
                        "top: 20;\nright: 20;\nbottom: 20;\nleft: 20;",
                        ""
                    ],
                    [
                        ".-inset-80",
                        "top: -20;\nright: -20;\nbottom: -20;\nleft: -20;",
                        ""
                    ],
                    [
                        ".inset-y-80",
                        "top: 20;\nbottom: 20;",
                        ""
                    ],
                    [
                        ".-inset-y-80",
                        "top: -20;\nbottom: -20;",
                        ""
                    ],
                    [
                        ".inset-x-80",
                        "right: 20;\nleft: 20;",
                        ""
                    ],
                    [
                        ".-inset-x-80",
                        "right: -20;\nleft: -20;",
                        ""
                    ],
                    [
                        ".top-80",
                        "top: 20;",
                        ""
                    ],
                    [
                        ".right-80",
                        "right: 20;",
                        ""
                    ],
                    [
                        ".bottom-80",
                        "bottom: 20;",
                        ""
                    ],
                    [
                        ".left-80",
                        "left: 20;",
                        ""
                    ],
                    [
                        ".-top-80",
                        "top: -20;",
                        ""
                    ],
                    [
                        ".-right-80",
                        "right: -20;",
                        ""
                    ],
                    [
                        ".-bottom-80",
                        "bottom: -20;",
                        ""
                    ],
                    [
                        ".-left-80",
                        "left: -20rem;",
                        ""
                    ],
                    [
                        ".inset-96",
                        "top: 24rem;\nright: 24rem;\nbottom: 24rem;\nleft: 24rem;",
                        ""
                    ],
                    [
                        ".-inset-96",
                        "top: -24rem;\nright: -24rem;\nbottom: -24rem;\nleft: -24rem;",
                        ""
                    ],
                    [
                        ".inset-y-96",
                        "top: 24rem;\nbottom: 24rem;",
                        ""
                    ],
                    [
                        ".-inset-y-96",
                        "top: -24rem;\nbottom: -24rem;",
                        ""
                    ],
                    [
                        ".inset-x-96",
                        "right: 24rem;\nleft: 24rem;",
                        ""
                    ],
                    [
                        ".-inset-x-96",
                        "right: -24rem;\nleft: -24rem;",
                        ""
                    ],
                    [
                        ".top-96",
                        "top: 24rem;",
                        ""
                    ],
                    [
                        ".right-96",
                        "right: 24rem;",
                        ""
                    ],
                    [
                        ".bottom-96",
                        "bottom: 24rem;",
                        ""
                    ],
                    [
                        ".left-96",
                        "left: 24rem;",
                        ""
                    ],
                    [
                        ".-top-96",
                        "top: -24rem;",
                        ""
                    ],
                    [
                        ".-right-96",
                        "right: -24rem;",
                        ""
                    ],
                    [
                        ".-bottom-96",
                        "bottom: -24rem;",
                        ""
                    ],
                    [
                        ".-left-96",
                        "left: -24rem;",
                        ""
                    ],
                    [
                        ".inset-auto",
                        "top: auto;\nright: auto;\nbottom: auto;\nleft: auto;",
                        ""
                    ],
                    [
                        ".inset-y-auto",
                        "top: auto;\nbottom: auto;",
                        ""
                    ],
                    [
                        ".inset-x-auto",
                        "right: auto;\nleft: auto;",
                        ""
                    ],
                    [
                        ".top-auto",
                        "top: auto;",
                        ""
                    ],
                    [
                        ".right-auto",
                        "right: auto;",
                        ""
                    ],
                    [
                        ".bottom-auto",
                        "bottom: auto;",
                        ""
                    ],
                    [
                        ".left-auto",
                        "left: auto;",
                        ""
                    ],
                    [
                        ".inset-1/2",
                        "top: 50%;\nright: 50%;\nbottom: 50%;\nleft: 50%;",
                        ""
                    ],
                    [
                        ".inset-2/3",
                        "top: 66.666667%;\nright: 66.666667%;\nbottom: 66.666667%;\nleft: 66.666667%;",
                        ""
                    ],
                    [
                        ".inset-1/4",
                        "top: 25%;\nright: 25%;\nbottom: 25%;\nleft: 25%;",
                        ""
                    ],
                    [
                        ".inset-3/4",
                        "top: 75%;\nright: 75%;\nbottom: 75%;\nleft: 75%;",
                        ""
                    ],
                    [
                        ".inset-full",
                        "top: 100%;\nright: 100%;\nbottom: 100%;\nleft: 100%;",
                        ""
                    ],
                    [
                        ".-inset-1/2",
                        "top: -50%;\nright: -50%;\nbottom: -50%;\nleft: -50%;",
                        ""
                    ],
                    [
                        ".-inset-2/3",
                        "top: -66.666667%;\nright: -66.666667%;\nbottom: -66.666667%;\nleft: -66.666667%;",
                        ""
                    ],
                    [
                        ".-inset-1/4",
                        "top: -25%;\nright: -25%;\nbottom: -25%;\nleft: -25%;",
                        ""
                    ],
                    [
                        ".-inset-3/4",
                        "top: -75%;\nright: -75%;\nbottom: -75%;\nleft: -75%;",
                        ""
                    ],
                    [
                        ".-inset-full",
                        "top: -100%;\nright: -100%;\nbottom: -100%;\nleft: -100%;",
                        ""
                    ],
                    [
                        ".inset-x-1/2",
                        "right: 50%;\nleft: 50%;",
                        ""
                    ],
                    [
                        ".inset-x-2/3",
                        "right: 66.666667%;\nleft: 66.666667%;",
                        ""
                    ],
                    [
                        ".inset-x-1/4",
                        "right: 25%;\nleft: 25%;",
                        ""
                    ],
                    [
                        ".inset-x-3/4",
                        "right: 75%;\nleft: 75%;",
                        ""
                    ],
                    [
                        ".inset-x-full",
                        "right: 100%;\nleft: 100%;",
                        ""
                    ],
                    [
                        ".-inset-x-1/2",
                        "right: -50%;\nleft: -50%;",
                        ""
                    ],
                    [
                        ".-inset-x-2/3",
                        "right: -66.666667%;\nleft: -66.666667%;",
                        ""
                    ],
                    [
                        ".-inset-x-1/4",
                        "right: -25%;\nleft: -25%;",
                        ""
                    ],
                    [
                        ".-inset-x-3/4",
                        "right: -75%;\nleft: -75%;",
                        ""
                    ],
                    [
                        ".-inset-x-full",
                        "right: -100%;\nleft: -100%;",
                        ""
                    ],
                    [
                        ".inset-y-1/2",
                        "top: 50%;\nbottom: 50%;",
                        ""
                    ],
                    [
                        ".inset-y-2/3",
                        "top: 66.666667%;\nbottom: 66.666667%;",
                        ""
                    ],
                    [
                        ".inset-y-1/4",
                        "top: 25%;\nbottom: 25%;",
                        ""
                    ],
                    [
                        ".inset-y-3/4",
                        "top: 75%;\nbottom: 75%;",
                        ""
                    ],
                    [
                        ".inset-y-full",
                        "top: 100%;\nbottom: 100%;",
                        ""
                    ],
                    [
                        ".-inset-y-1/2",
                        "top: -50%;\nbottom: -50%;",
                        ""
                    ],
                    [
                        ".-inset-y-2/3",
                        "top: -66.666667%;\nbottom: -66.666667%;",
                        ""
                    ],
                    [
                        ".-inset-y-1/4",
                        "top: -25%;\nbottom: -25%;",
                        ""
                    ],
                    [
                        ".-inset-y-3/4",
                        "top: -75%;\nbottom: -75%;",
                        ""
                    ],
                    [
                        ".-inset-y-full",
                        "top: -100%;\nbottom: -100%;",
                        ""
                    ],
                    [
                        ".top-1/2",
                        "top: 50%;",
                        ""
                    ],
                    [
                        ".top-2/3",
                        "top: 66.666667%;",
                        ""
                    ],
                    [
                        ".top-1/4",
                        "top: 25%;",
                        ""
                    ],
                    [
                        ".top-3/4",
                        "top: 75%;",
                        ""
                    ],
                    [
                        ".top-full",
                        "top: 100%;",
                        ""
                    ],
                    [
                        ".-top-1/2",
                        "top: -50%;",
                        ""
                    ],
                    [
                        ".-top-2/3",
                        "top: -66.666667%;",
                        ""
                    ],
                    [
                        ".-top-1/4",
                        "top: -25%;",
                        ""
                    ],
                    [
                        ".-top-3/4",
                        "top: -75%;",
                        ""
                    ],
                    [
                        ".-top-full",
                        "top: -100%;",
                        ""
                    ],
                    [
                        ".right-1/2",
                        "right: 50%;",
                        ""
                    ],
                    [
                        ".right-2/3",
                        "right: 66.666667%;",
                        ""
                    ],
                    [
                        ".right-1/4",
                        "right: 25%;",
                        ""
                    ],
                    [
                        ".right-3/4",
                        "right: 75%;",
                        ""
                    ],
                    [
                        ".right-full",
                        "right: 100%;",
                        ""
                    ],
                    [
                        ".-right-1/2",
                        "right: -50%;",
                        ""
                    ],
                    [
                        ".-right-2/3",
                        "right: -66.666667%;",
                        ""
                    ],
                    [
                        ".-right-1/4",
                        "right: -25%;",
                        ""
                    ],
                    [
                        ".-right-3/4",
                        "right: -75%;",
                        ""
                    ],
                    [
                        ".-right-full",
                        "right: -100%;",
                        ""
                    ],
                    [
                        ".bottom-1/2",
                        "bottom: 50%;",
                        ""
                    ],
                    [
                        ".bottom-2/3",
                        "bottom: 66.666667%;",
                        ""
                    ],
                    [
                        ".bottom-1/4",
                        "bottom: 25%;",
                        ""
                    ],
                    [
                        ".bottom-3/4",
                        "bottom: 75%;",
                        ""
                    ],
                    [
                        ".bottom-full",
                        "bottom: 100%;",
                        ""
                    ],
                    [
                        ".-bottom-1/2",
                        "bottom: -50%;",
                        ""
                    ],
                    [
                        ".-bottom-2/3",
                        "bottom: -66.666667%;",
                        ""
                    ],
                    [
                        ".-bottom-1/4",
                        "bottom: -25%;",
                        ""
                    ],
                    [
                        ".-bottom-3/4",
                        "bottom: -75%;",
                        ""
                    ],
                    [
                        ".-bottom-full",
                        "bottom: -100%;",
                        ""
                    ],
                    [
                        ".left-1/2",
                        "left: 50%;",
                        ""
                    ],
                    [
                        ".left-2/3",
                        "left: 66.666667%;",
                        ""
                    ],
                    [
                        ".left-1/4",
                        "left: 25%;",
                        ""
                    ],
                    [
                        ".left-3/4",
                        "left: 75%;",
                        ""
                    ],
                    [
                        ".left-full",
                        "left: 100%;",
                        ""
                    ],
                    [
                        ".-left-1/2",
                        "left: -50%;",
                        ""
                    ],
                    [
                        ".-left-2/3",
                        "left: -66.666667%;",
                        ""
                    ],
                    [
                        ".-left-1/4",
                        "left: -25%;",
                        ""
                    ],
                    [
                        ".-left-3/4",
                        "left: -75%;",
                        ""
                    ],
                    [
                        ".-left-full",
                        "left: -100%;",
                        ""
                    ]
                ]
            },
            {
                "title": "Visibility",
                "docs": "https://tailwindcss.com/docs/visibility",
                "description": "Show or hide without affecting the layout of the document.",
                "table": [
                    [
                        ".visible",
                        "visibility: visible;",
                        ""
                    ],
                    [
                        ".invisible",
                        "visibility: hidden;",
                        ""
                    ]
                ]
            },
            {
                "title": "Z-index",
                "docs": "https://tailwindcss.com/docs/z-index",
                "description": "Sets the z-order (\"stack order\") of a positioned element.",
                "table": [
                    [
                        ".z-0",
                        "z-index: 0;",
                        ""
                    ],
                    [
                        ".z-10",
                        "z-index: 10;",
                        ""
                    ],
                    [
                        ".z-20",
                        "z-index: 20;",
                        ""
                    ],
                    [
                        ".z-30",
                        "z-index: 30;",
                        ""
                    ],
                    [
                        ".z-40",
                        "z-index: 40;",
                        ""
                    ],
                    [
                        ".z-50",
                        "z-index: 50;",
                        ""
                    ],
                    [
                        ".z-auto",
                        "z-index: auto;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Spacing",
        "content": [
            {
                "title": "Padding",
                "docs": "https://tailwindcss.com/docs/padding",
                "description": "Controls padding in 0.25rem increments.",
                "table": [
                    [
                        ".p-0",
                        "padding: 0;",
                        ""
                    ],
                    [
                        ".p-0.5",
                        "padding: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".p-1",
                        "padding: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".p-1.5",
                        "padding: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".p-2",
                        "padding: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".p-2.5",
                        "padding: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".p-3",
                        "padding: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".p-3.5",
                        "padding: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".p-4",
                        "padding: 1rem;",
                        "16px"
                    ],
                    [
                        ".p-5",
                        "padding: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".p-6",
                        "padding: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".p-8",
                        "padding: 2rem;",
                        "32px"
                    ],
                    [
                        ".p-10",
                        "padding: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".p-11",
                        "padding: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".p-12",
                        "padding: 3rem;",
                        "48px"
                    ],
                    [
                        ".p-14",
                        "padding: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".p-16",
                        "padding: 4rem;",
                        "64px"
                    ],
                    [
                        ".p-20",
                        "padding: 5rem;",
                        "80px"
                    ],
                    [
                        ".p-24",
                        "padding: 6rem;",
                        "96px"
                    ],
                    [
                        ".p-28",
                        "padding: 7rem;",
                        "112px"
                    ],
                    [
                        ".p-32",
                        "padding: 8rem;",
                        "128px"
                    ],
                    [
                        ".p-36",
                        "padding: 9rem;",
                        "144px"
                    ],
                    [
                        ".p-40",
                        "padding: 10rem;",
                        "160px"
                    ],
                    [
                        ".p-44",
                        "padding: 11rem;",
                        "176px"
                    ],
                    [
                        ".p-48",
                        "padding: 12rem;",
                        "192px"
                    ],
                    [
                        ".p-52",
                        "padding: 13rem;",
                        "208px"
                    ],
                    [
                        ".p-56",
                        "padding: 14rem;",
                        "224px"
                    ],
                    [
                        ".p-64",
                        "padding: 16rem;",
                        "256px"
                    ],
                    [
                        ".p-72",
                        "padding: 18rem;",
                        "288px"
                    ],
                    [
                        ".p-80",
                        "padding: 20rem;",
                        "320px"
                    ],
                    [
                        ".p-96",
                        "padding: 24rem;",
                        "384px"
                    ],
                    [
                        ".p-px",
                        "padding: 1px;",
                        ""
                    ],
                    [
                        ".py-0",
                        "padding-top: 0;\npadding-bottom: 0;",
                        ""
                    ],
                    [
                        ".px-0",
                        "padding-left: 0;\npadding-right: 0;",
                        ""
                    ],
                    [
                        ".py-0.5",
                        "padding-top: 0.125rem;\npadding-bottom: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".px-0.5",
                        "padding-left: 0.125rem;\npadding-right: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".py-1",
                        "padding-top: 0.25rem;\npadding-bottom: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".px-1",
                        "padding-left: 0.25rem;\npadding-right: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".py-1.5",
                        "padding-top: 0.375rem;\npadding-bottom: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".px-1.5",
                        "padding-left: 0.375rem;\npadding-right: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".py-2",
                        "padding-top: 0.5rem;\npadding-bottom: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".px-2",
                        "padding-left: 0.5rem;\npadding-right: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".py-2.5",
                        "padding-top: 0.625rem;\npadding-bottom: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".px-2.5",
                        "padding-left: 0.625rem;\npadding-right: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".py-3",
                        "padding-top: 0.75rem;\npadding-bottom: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".px-3",
                        "padding-left: 0.75rem;\npadding-right: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".py-3.5",
                        "padding-top: 0.875rem;\npadding-bottom: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".px-3.5",
                        "padding-left: 0.875rem;\npadding-right: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".py-4",
                        "padding-top: 1rem;\npadding-bottom: 1rem;",
                        "16px"
                    ],
                    [
                        ".px-4",
                        "padding-left: 1rem;\npadding-right: 1rem;",
                        "16px"
                    ],
                    [
                        ".py-5",
                        "padding-top: 1.25rem;\npadding-bottom: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".px-5",
                        "padding-left: 1.25rem;\npadding-right: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".py-6",
                        "padding-top: 1.5rem;\npadding-bottom: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".px-6",
                        "padding-left: 1.5rem;\npadding-right: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".py-7",
                        "padding-top: 1.75rem;\npadding-bottom: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".px-7",
                        "padding-left: 1.75rem;\npadding-right: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".py-8",
                        "padding-top: 2rem;\npadding-bottom: 2rem;",
                        "32px"
                    ],
                    [
                        ".px-8",
                        "padding-left: 2rem;\npadding-right: 2rem;",
                        "32px"
                    ],
                    [
                        ".py-9",
                        "padding-top: 2.25rem;\npadding-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".px-9",
                        "padding-left: 2.25rem;\npadding-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".py-10",
                        "padding-top: 2.5rem;\npadding-bottom: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".px-10",
                        "padding-left: 2.5rem;\npadding-right: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".py-11",
                        "padding-top: 2.75rem;\npadding-bottom: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".px-11",
                        "padding-left: 2.75rem;\npadding-right: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".py-12",
                        "padding-top: 3rem;\npadding-bottom: 3rem;",
                        "48px"
                    ],
                    [
                        ".px-12",
                        "padding-left: 3rem;\npadding-right: 3rem;",
                        "48px"
                    ],
                    [
                        ".py-14",
                        "padding-top: 3.5rem;\npadding-bottom: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".px-14",
                        "padding-left: 3.5rem;\npadding-right: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".py-16",
                        "padding-top: 4rem;\npadding-bottom: 4rem;",
                        "64px"
                    ],
                    [
                        ".px-16",
                        "padding-left: 4rem;\npadding-right: 4rem;",
                        "64px"
                    ],
                    [
                        ".py-20",
                        "padding-top: 5rem;\npadding-bottom: 5rem;",
                        "80px"
                    ],
                    [
                        ".px-20",
                        "padding-left: 5rem;\npadding-right: 5rem;",
                        "80px"
                    ],
                    [
                        ".py-24",
                        "padding-top: 6rem;\npadding-bottom: 6rem;",
                        "96px"
                    ],
                    [
                        ".px-24",
                        "padding-left: 6rem;\npadding-right: 6rem;",
                        "96px"
                    ],
                    [
                        ".py-28",
                        "padding-top: 7rem;\npadding-bottom: 7rem;",
                        "112px"
                    ],
                    [
                        ".px-28",
                        "padding-left: 7rem;\npadding-right: 7rem;",
                        "112px"
                    ],
                    [
                        ".py-32",
                        "padding-top: 8rem;\npadding-bottom: 8rem;",
                        "128px"
                    ],
                    [
                        ".px-32",
                        "padding-left: 8rem;\npadding-right: 8rem;",
                        "128px"
                    ],
                    [
                        ".py-36",
                        "padding-top: 9rem;\npadding-bottom: 9rem;",
                        "144px"
                    ],
                    [
                        ".px-36",
                        "padding-left: 9rem;\npadding-right: 9rem;",
                        "144px"
                    ],
                    [
                        ".py-40",
                        "padding-top: 10rem;\npadding-bottom: 10rem;",
                        "160px"
                    ],
                    [
                        ".px-40",
                        "padding-left: 10rem;\npadding-right: 10rem;",
                        "160px"
                    ],
                    [
                        ".py-44",
                        "padding-top: 11rem;\npadding-bottom: 11rem;",
                        "176px"
                    ],
                    [
                        ".px-44",
                        "padding-left: 11rem;\npadding-right: 11rem;",
                        "176px"
                    ],
                    [
                        ".py-48",
                        "padding-top: 12rem;\npadding-bottom: 12rem;",
                        "192px"
                    ],
                    [
                        ".px-48",
                        "padding-left: 12rem;\npadding-right: 12rem;",
                        "192px"
                    ],
                    [
                        ".py-52",
                        "padding-top: 13rem;\npadding-bottom: 13rem;",
                        "208px"
                    ],
                    [
                        ".px-52",
                        "padding-left: 13rem;\npadding-right: 13rem;",
                        "208px"
                    ],
                    [
                        ".py-56",
                        "padding-top: 14rem;\npadding-bottom: 14rem;",
                        "224px"
                    ],
                    [
                        ".px-56",
                        "padding-left: 14rem;\npadding-right: 14rem;",
                        "224px"
                    ],
                    [
                        ".py-60",
                        "padding-top: 15rem;\npadding-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".px-60",
                        "padding-left: 15rem;\npadding-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".py-64",
                        "padding-top: 16rem;\npadding-bottom: 16rem;",
                        "256px"
                    ],
                    [
                        ".px-64",
                        "padding-left: 16rem;\npadding-right: 16rem;",
                        "256px"
                    ],
                    [
                        ".py-70",
                        "padding-top: 18rem;\npadding-bottom: 18rem;",
                        "280px"
                    ],
                    [
                        ".px-70",
                        "padding-left: 18rem;\npadding-right: 18rem;",
                        "280px"
                    ],
                    [
                        ".py-80",
                        "padding-top: 20rem;\npadding-bottom: 20rem;",
                        "320px"
                    ],
                    [
                        ".px-80",
                        "padding-left: 20rem;\npadding-right: 20rem;",
                        "320px"
                    ],
                    [
                        ".py-96",
                        "padding-top: 24rem;\npadding-bottom: 24rem;",
                        "384px"
                    ],
                    [
                        ".px-96",
                        "padding-left: 24rem;\npadding-right: 24rem;",
                        "384px"
                    ],
                    [
                        ".py-px",
                        "padding-top: 1px;\npadding-bottom: 1px;",
                        ""
                    ],
                    [
                        ".px-px",
                        "padding-left: 1px;\npadding-right: 1px;",
                        ""
                    ],
                    [
                        ".pt-0",
                        "padding-top: 0;",
                        ""
                    ],
                    [
                        ".pr-0",
                        "padding-right: 0;",
                        ""
                    ],
                    [
                        ".pb-0",
                        "padding-bottom: 0;",
                        ""
                    ],
                    [
                        ".pl-0",
                        "padding-left: 0;",
                        ""
                    ],
                    [
                        ".pt-0.5",
                        "padding-top: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".pr-0.5",
                        "padding-right: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".pb-0.5",
                        "padding-bottom: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".pl-0.5",
                        "padding-left: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".pt-1",
                        "padding-top: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".pr-1",
                        "padding-right: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".pb-1",
                        "padding-bottom: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".pl-1",
                        "padding-left: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".pt-1.5",
                        "padding-top: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".pr-1.5",
                        "padding-right: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".pb-1.5",
                        "padding-bottom: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".pl-1.5",
                        "padding-left: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".pt-2",
                        "padding-top: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".pr-2",
                        "padding-right: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".pb-2",
                        "padding-bottom: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".pl-2",
                        "padding-left: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".pt-2.5",
                        "padding-top: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".pr-2.5",
                        "padding-right: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".pb-2.5",
                        "padding-bottom: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".pl-2.5",
                        "padding-left: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".pt-3",
                        "padding-top: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".pr-3",
                        "padding-right: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".pb-3",
                        "padding-bottom: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".pl-3",
                        "padding-left: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".pt-3.5",
                        "padding-top: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".pr-3.5",
                        "padding-right: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".pb-3.5",
                        "padding-bottom: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".pl-3.5",
                        "padding-left: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".pt-4",
                        "padding-top: 1rem;",
                        "16px"
                    ],
                    [
                        ".pr-4",
                        "padding-right: 1rem;",
                        "16px"
                    ],
                    [
                        ".pb-4",
                        "padding-bottom: 1rem;",
                        "16px"
                    ],
                    [
                        ".pl-4",
                        "padding-left: 1rem;",
                        "16px"
                    ],
                    [
                        ".pt-5",
                        "padding-top: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".pr-5",
                        "padding-right: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".pb-5",
                        "padding-bottom: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".pl-5",
                        "padding-left: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".pt-6",
                        "padding-top: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".pr-6",
                        "padding-right: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".pb-6",
                        "padding-bottom: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".pl-6",
                        "padding-left: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".pt-7",
                        "padding-top: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".pr-7",
                        "padding-right: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".pb-7",
                        "padding-bottom: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".pl-7",
                        "padding-left: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".pt-8",
                        "padding-top: 2rem;",
                        "32px"
                    ],
                    [
                        ".pr-8",
                        "padding-right: 2rem;",
                        "32px"
                    ],
                    [
                        ".pb-8",
                        "padding-bottom: 2rem;",
                        "32px"
                    ],
                    [
                        ".pl-8",
                        "padding-left: 2rem;",
                        "32px"
                    ],
                    [
                        ".pt-9",
                        "padding-top: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".pr-9",
                        "padding-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".pb-9",
                        "padding-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".pl-9",
                        "padding-left: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".pt-10",
                        "padding-top: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".pr-10",
                        "padding-right: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".pb-10",
                        "padding-bottom: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".pl-10",
                        "padding-left: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".pt-11",
                        "padding-top: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".pr-11",
                        "padding-right: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".pb-11",
                        "padding-bottom: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".pl-11",
                        "padding-left: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".pt-12",
                        "padding-top: 3rem;",
                        "48px"
                    ],
                    [
                        ".pr-12",
                        "padding-right: 3rem;",
                        "48px"
                    ],
                    [
                        ".pb-12",
                        "padding-bottom: 3rem;",
                        "48px"
                    ],
                    [
                        ".pl-12",
                        "padding-left: 3rem;",
                        "48px"
                    ],
                    [
                        ".pt-14",
                        "padding-top: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".pr-14",
                        "padding-right: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".pb-14",
                        "padding-bottom: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".pl-14",
                        "padding-left: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".pt-16",
                        "padding-top: 4rem;",
                        "64px"
                    ],
                    [
                        ".pr-16",
                        "padding-right: 4rem;",
                        "64px"
                    ],
                    [
                        ".pb-16",
                        "padding-bottom: 4rem;",
                        "64px"
                    ],
                    [
                        ".pl-16",
                        "padding-left: 4rem;",
                        "64px"
                    ],
                    [
                        ".pt-20",
                        "padding-top: 5rem;",
                        "80px"
                    ],
                    [
                        ".pr-20",
                        "padding-right: 5rem;",
                        "80px"
                    ],
                    [
                        ".pb-20",
                        "padding-bottom: 5rem;",
                        "80px"
                    ],
                    [
                        ".pl-20",
                        "padding-left: 5rem;",
                        "80px"
                    ],
                    [
                        ".pt-24",
                        "padding-top: 6rem;",
                        "96px"
                    ],
                    [
                        ".pr-24",
                        "padding-right: 6rem;",
                        "96px"
                    ],
                    [
                        ".pb-24",
                        "padding-bottom: 6rem;",
                        "96px"
                    ],
                    [
                        ".pl-24",
                        "padding-left: 6rem;",
                        "96px"
                    ],
                    [
                        ".pt-28",
                        "padding-top: 7rem;",
                        "112px"
                    ],
                    [
                        ".pr-28",
                        "padding-right: 7rem;",
                        "112px"
                    ],
                    [
                        ".pb-28",
                        "padding-bottom: 7rem;",
                        "112px"
                    ],
                    [
                        ".pl-28",
                        "padding-left: 7rem;",
                        "112px"
                    ],
                    [
                        ".pt-32",
                        "padding-top: 8rem;",
                        "128px"
                    ],
                    [
                        ".pr-32",
                        "padding-right: 8rem;",
                        "128px"
                    ],
                    [
                        ".pb-32",
                        "padding-bottom: 8rem;",
                        "128px"
                    ],
                    [
                        ".pl-32",
                        "padding-left: 8rem;",
                        "128px"
                    ],
                    [
                        ".pt-36",
                        "padding-top: 9rem;",
                        "144px"
                    ],
                    [
                        ".pr-36",
                        "padding-right: 9rem;",
                        "144px"
                    ],
                    [
                        ".pb-36",
                        "padding-bottom: 9rem;",
                        "144px"
                    ],
                    [
                        ".pl-36",
                        "padding-left: 9rem;",
                        "144px"
                    ],
                    [
                        ".pt-40",
                        "padding-top: 10rem;",
                        "160px"
                    ],
                    [
                        ".pr-40",
                        "padding-right: 10rem;",
                        "160px"
                    ],
                    [
                        ".pb-40",
                        "padding-bottom: 10rem;",
                        "160px"
                    ],
                    [
                        ".pl-40",
                        "padding-left: 10rem;",
                        "160px"
                    ],
                    [
                        ".pt-44",
                        "padding-top: 11rem;",
                        "176px"
                    ],
                    [
                        ".pr-44",
                        "padding-right: 11rem;",
                        "176px"
                    ],
                    [
                        ".pb-44",
                        "padding-bottom: 11rem;",
                        "176px"
                    ],
                    [
                        ".pl-44",
                        "padding-left: 11rem;",
                        "176px"
                    ],
                    [
                        ".pt-48",
                        "padding-top: 12rem;",
                        "192px"
                    ],
                    [
                        ".pr-48",
                        "padding-right: 12rem;",
                        "192px"
                    ],
                    [
                        ".pb-48",
                        "padding-bottom: 12rem;",
                        "192px"
                    ],
                    [
                        ".pl-48",
                        "padding-left: 12rem;",
                        "192px"
                    ],
                    [
                        ".pt-52",
                        "padding-top: 13rem;",
                        "208px"
                    ],
                    [
                        ".pr-52",
                        "padding-right: 13rem;",
                        "208px"
                    ],
                    [
                        ".pb-52",
                        "padding-bottom: 13rem;",
                        "208px"
                    ],
                    [
                        ".pl-52",
                        "padding-left: 13rem;",
                        "208px"
                    ],
                    [
                        ".pt-56",
                        "padding-top: 14rem;",
                        "224px"
                    ],
                    [
                        ".pr-56",
                        "padding-right: 14rem;",
                        "224px"
                    ],
                    [
                        ".pb-56",
                        "padding-bottom: 14rem;",
                        "224px"
                    ],
                    [
                        ".pl-56",
                        "padding-left: 14rem;",
                        "224px"
                    ],
                    [
                        ".pt-60",
                        "padding-top: 15rem;",
                        "240px"
                    ],
                    [
                        ".pr-60",
                        "padding-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".pb-60",
                        "padding-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".pl-60",
                        "padding-left: 15rem;",
                        "240px"
                    ],
                    [
                        ".pt-64",
                        "padding-top: 16rem;",
                        "256px"
                    ],
                    [
                        ".pr-64",
                        "padding-right: 16rem;",
                        "256px"
                    ],
                    [
                        ".pb-64",
                        "padding-bottom: 16rem;",
                        "256px"
                    ],
                    [
                        ".pl-64",
                        "padding-left: 16rem;",
                        "256px"
                    ],
                    [
                        ".pt-72",
                        "padding-top: 18rem;",
                        "288px"
                    ],
                    [
                        ".pr-72",
                        "padding-right: 18rem;",
                        "288px"
                    ],
                    [
                        ".pb-72",
                        "padding-bottom: 18rem;",
                        "288px"
                    ],
                    [
                        ".pl-72",
                        "padding-left: 18rem;",
                        "288px"
                    ],
                    [
                        ".pt-80",
                        "padding-top: 20rem;",
                        "320px"
                    ],
                    [
                        ".pr-80",
                        "padding-right: 20rem;",
                        "320px"
                    ],
                    [
                        ".pb-80",
                        "padding-bottom: 20rem;",
                        "320px"
                    ],
                    [
                        ".pl-80",
                        "padding-left: 20rem;",
                        "320px"
                    ],
                    [
                        ".pt-96",
                        "padding-top: 24rem;",
                        "384px"
                    ],
                    [
                        ".pr-96",
                        "padding-right: 24rem;",
                        "384px"
                    ],
                    [
                        ".pb-96",
                        "padding-bottom: 24rem;",
                        "384px"
                    ],
                    [
                        ".pl-96",
                        "padding-left: 24rem;",
                        "384px"
                    ],
                    [
                        ".pt-px",
                        "padding-top: 1px;",
                        ""
                    ],
                    [
                        ".pr-px",
                        "padding-right: 1px;",
                        ""
                    ],
                    [
                        ".pb-px",
                        "padding-bottom: 1px;",
                        ""
                    ],
                    [
                        ".pl-px",
                        "padding-left: 1px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Margin",
                "docs": "https://tailwindcss.com/docs/margin",
                "description": "Controls margin (and negative margin) in 0.25rem increments.",
                "table": [
                    [
                        ".m-0",
                        "margin: 0;",
                        ""
                    ],
                    [
                        ".m-0.5",
                        "margin: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".m-1",
                        "margin: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".m-1.5",
                        "margin: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".m-2",
                        "margin: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".m-2.5",
                        "margin: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".m-3",
                        "margin: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".m-3.5",
                        "margin: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".m-4",
                        "margin: 1rem;",
                        "16px"
                    ],
                    [
                        ".m-5",
                        "margin: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".m-6",
                        "margin: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".m-8",
                        "margin: 2rem;",
                        "32px"
                    ],
                    [
                        ".m-10",
                        "margin: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".m-11",
                        "margin: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".m-12",
                        "margin: 3rem;",
                        "48px"
                    ],
                    [
                        ".m-14",
                        "margin: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".m-16",
                        "margin: 4rem;",
                        "64px"
                    ],
                    [
                        ".m-20",
                        "margin: 5rem;",
                        "80px"
                    ],
                    [
                        ".m-24",
                        "margin: 6rem;",
                        "96px"
                    ],
                    [
                        ".m-28",
                        "margin: 7rem;",
                        "112px"
                    ],
                    [
                        ".m-32",
                        "margin: 8rem;",
                        "128px"
                    ],
                    [
                        ".m-36",
                        "margin: 9rem;",
                        "144px"
                    ],
                    [
                        ".m-40",
                        "margin: 10rem;",
                        "160px"
                    ],
                    [
                        ".m-44",
                        "margin: 11rem;",
                        "176px"
                    ],
                    [
                        ".m-48",
                        "margin: 12rem;",
                        "192px"
                    ],
                    [
                        ".m-52",
                        "margin: 13rem;",
                        "208px"
                    ],
                    [
                        ".m-56",
                        "margin: 14rem;",
                        "224px"
                    ],
                    [
                        ".m-64",
                        "margin: 16rem;",
                        "256px"
                    ],
                    [
                        ".m-72",
                        "margin: 18rem;",
                        "288px"
                    ],
                    [
                        ".m-80",
                        "margin: 20rem;",
                        "320px"
                    ],
                    [
                        ".m-96",
                        "margin: 24rem;",
                        "384px"
                    ],
                    [
                        ".m-px",
                        "margin: 1px;",
                        ""
                    ],
                    [
                        ".my-0",
                        "margin-top: 0;\nmargin-bottom: 0;",
                        ""
                    ],
                    [
                        ".mx-0",
                        "margin-left: 0;\nmargin-right: 0;",
                        ""
                    ],
                    [
                        ".my-0.5",
                        "margin-top: 0.125rem;\nmargin-bottom: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".mx-0.5",
                        "margin-left: 0.125rem;\nmargin-right: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".my-1",
                        "margin-top: 0.25rem;\nmargin-bottom: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".mx-1",
                        "margin-left: 0.25rem;\nmargin-right: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".my-1.5",
                        "margin-top: 0.375rem;\nmargin-bottom: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".mx-1.5",
                        "margin-left: 0.375rem;\nmargin-right: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".my-2",
                        "margin-top: 0.5rem;\nmargin-bottom: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".mx-2",
                        "margin-left: 0.5rem;\nmargin-right: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".my-2.5",
                        "margin-top: 0.625rem;\nmargin-bottom: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".mx-2.5",
                        "margin-left: 0.625rem;\nmargin-right: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".my-3",
                        "margin-top: 0.75rem;\nmargin-bottom: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".mx-3",
                        "margin-left: 0.75rem;\nmargin-right: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".my-3.5",
                        "margin-top: 0.875rem;\nmargin-bottom: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".mx-3.5",
                        "margin-left: 0.875rem;\nmargin-right: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".my-4",
                        "margin-top: 1rem;\nmargin-bottom: 1rem;",
                        "16px"
                    ],
                    [
                        ".mx-4",
                        "margin-left: 1rem;\nmargin-right: 1rem;",
                        "16px"
                    ],
                    [
                        ".my-5",
                        "margin-top: 1.25rem;\nmargin-bottom: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".mx-5",
                        "margin-left: 1.25rem;\nmargin-right: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".my-6",
                        "margin-top: 1.5rem;\nmargin-bottom: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".mx-6",
                        "margin-left: 1.5rem;\nmargin-right: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".my-7",
                        "margin-top: 1.75rem;\nmargin-bottom: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".mx-7",
                        "margin-left: 1.75rem;\nmargin-right: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".my-8",
                        "margin-top: 2rem;\nmargin-bottom: 2rem;",
                        "32px"
                    ],
                    [
                        ".mx-8",
                        "margin-left: 2rem;\nmargin-right: 2rem;",
                        "32px"
                    ],
                    [
                        ".my-9",
                        "margin-top: 2.25rem;\nmargin-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".mx-9",
                        "margin-left: 2.25rem;\nmargin-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".my-10",
                        "margin-top: 2.5rem;\nmargin-bottom: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".mx-10",
                        "margin-left: 2.5rem;\nmargin-right: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".my-11",
                        "margin-top: 2.75rem;\nmargin-bottom: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".mx-11",
                        "margin-left: 2.75rem;\nmargin-right: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".my-12",
                        "margin-top: 3rem;\nmargin-bottom: 3rem;",
                        "48px"
                    ],
                    [
                        ".mx-12",
                        "margin-left: 3rem;\nmargin-right: 3rem;",
                        "48px"
                    ],
                    [
                        ".my-14",
                        "margin-top: 3.5rem;\nmargin-bottom: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".mx-14",
                        "margin-left: 3.5rem;\nmargin-right: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".my-16",
                        "margin-top: 4rem;\nmargin-bottom: 4rem;",
                        "64px"
                    ],
                    [
                        ".mx-16",
                        "margin-left: 4rem;\nmargin-right: 4rem;",
                        "64px"
                    ],
                    [
                        ".my-20",
                        "margin-top: 5rem;\nmargin-bottom: 5rem;",
                        "80px"
                    ],
                    [
                        ".mx-20",
                        "margin-left: 5rem;\nmargin-right: 5rem;",
                        "80px"
                    ],
                    [
                        ".my-24",
                        "margin-top: 6rem;\nmargin-bottom: 6rem;",
                        "96px"
                    ],
                    [
                        ".mx-24",
                        "margin-left: 6rem;\nmargin-right: 6rem;",
                        "96px"
                    ],
                    [
                        ".my-28",
                        "margin-top: 7rem;\nmargin-bottom: 7rem;",
                        "112px"
                    ],
                    [
                        ".mx-28",
                        "margin-left: 7rem;\nmargin-right: 7rem;",
                        "112px"
                    ],
                    [
                        ".my-32",
                        "margin-top: 8rem;\nmargin-bottom: 8rem;",
                        "128px"
                    ],
                    [
                        ".mx-32",
                        "margin-left: 8rem;\nmargin-right: 8rem;",
                        "128px"
                    ],
                    [
                        ".my-36",
                        "margin-top: 9rem;\nmargin-bottom: 9rem;",
                        "144px"
                    ],
                    [
                        ".mx-36",
                        "margin-left: 9rem;\nmargin-right: 9rem;",
                        "144px"
                    ],
                    [
                        ".my-40",
                        "margin-top: 10rem;\nmargin-bottom: 10rem;",
                        "160px"
                    ],
                    [
                        ".mx-40",
                        "margin-left: 10rem;\nmargin-right: 10rem;",
                        "160px"
                    ],
                    [
                        ".my-44",
                        "margin-top: 11rem;\nmargin-bottom: 11rem;",
                        "176px"
                    ],
                    [
                        ".mx-44",
                        "margin-left: 11rem;\nmargin-right: 11rem;",
                        "176px"
                    ],
                    [
                        ".my-48",
                        "margin-top: 12rem;\nmargin-bottom: 12rem;",
                        "192px"
                    ],
                    [
                        ".mx-48",
                        "margin-left: 12rem;\nmargin-right: 12rem;",
                        "192px"
                    ],
                    [
                        ".my-52",
                        "margin-top: 13rem;\nmargin-bottom: 13rem;",
                        "208px"
                    ],
                    [
                        ".mx-52",
                        "margin-left: 13rem;\nmargin-right: 13rem;",
                        "208px"
                    ],
                    [
                        ".my-56",
                        "margin-top: 14rem;\nmargin-bottom: 14rem;",
                        "224px"
                    ],
                    [
                        ".mx-56",
                        "margin-left: 14rem;\nmargin-right: 14rem;",
                        "224px"
                    ],
                    [
                        ".my-60",
                        "margin-top: 15rem;\nmargin-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".mx-60",
                        "margin-left: 15rem;\nmargin-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".my-64",
                        "margin-top: 16rem;\nmargin-bottom: 16rem;",
                        "256px"
                    ],
                    [
                        ".mx-64",
                        "margin-left: 16rem;\nmargin-right: 16rem;",
                        "256px"
                    ],
                    [
                        ".my-70",
                        "margin-top: 18rem;\nmargin-bottom: 18rem;",
                        "280px"
                    ],
                    [
                        ".mx-70",
                        "margin-left: 18rem;\nmargin-right: 18rem;",
                        "280px"
                    ],
                    [
                        ".my-80",
                        "margin-top: 20rem;\nmargin-bottom: 20rem;",
                        "320px"
                    ],
                    [
                        ".mx-80",
                        "margin-left: 20rem;\nmargin-right: 20rem;",
                        "320px"
                    ],
                    [
                        ".my-96",
                        "margin-top: 24rem;\nmargin-bottom: 24rem;",
                        "384px"
                    ],
                    [
                        ".mx-96",
                        "margin-left: 24rem;\nmargin-right: 24rem;",
                        "384px"
                    ],
                    [
                        ".my-px",
                        "margin-top: 1px;\nmargin-bottom: 1px;",
                        ""
                    ],
                    [
                        ".mx-px",
                        "margin-left: 1px;\nmargin-right: 1px;",
                        ""
                    ],
                    [
                        ".mt-0",
                        "margin-top: 0;",
                        ""
                    ],
                    [
                        ".mr-0",
                        "margin-right: 0;",
                        ""
                    ],
                    [
                        ".mb-0",
                        "margin-bottom: 0;",
                        ""
                    ],
                    [
                        ".ml-0",
                        "margin-left: 0;",
                        ""
                    ],
                    [
                        ".mt-0.5",
                        "margin-top: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".mr-0.5",
                        "margin-right: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".mb-0.5",
                        "margin-bottom: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".ml-0.5",
                        "margin-left: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".mt-1",
                        "margin-top: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".mr-1",
                        "margin-right: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".mb-1",
                        "margin-bottom: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".ml-1",
                        "margin-left: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".mt-1.5",
                        "margin-top: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".mr-1.5",
                        "margin-right: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".mb-1.5",
                        "margin-bottom: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".ml-1.5",
                        "margin-left: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".mt-2",
                        "margin-top: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".mr-2",
                        "margin-right: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".mb-2",
                        "margin-bottom: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".ml-2",
                        "margin-left: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".mt-2.5",
                        "margin-top: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".mr-2.5",
                        "margin-right: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".mb-2.5",
                        "margin-bottom: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".ml-2.5",
                        "margin-left: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".mt-3",
                        "margin-top: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".mr-3",
                        "margin-right: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".mb-3",
                        "margin-bottom: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".ml-3",
                        "margin-left: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".mt-3.5",
                        "margin-top: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".mr-3.5",
                        "margin-right: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".mb-3.5",
                        "margin-bottom: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".ml-3.5",
                        "margin-left: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".mt-4",
                        "margin-top: 1rem;",
                        "16px"
                    ],
                    [
                        ".mr-4",
                        "margin-right: 1rem;",
                        "16px"
                    ],
                    [
                        ".mb-4",
                        "margin-bottom: 1rem;",
                        "16px"
                    ],
                    [
                        ".ml-4",
                        "margin-left: 1rem;",
                        "16px"
                    ],
                    [
                        ".mt-5",
                        "margin-top: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".mr-5",
                        "margin-right: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".mb-5",
                        "margin-bottom: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".ml-5",
                        "margin-left: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".mt-6",
                        "margin-top: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".mr-6",
                        "margin-right: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".mb-6",
                        "margin-bottom: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".ml-6",
                        "margin-left: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".mt-7",
                        "margin-top: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".mr-7",
                        "margin-right: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".mb-7",
                        "margin-bottom: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".ml-7",
                        "margin-left: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".mt-8",
                        "margin-top: 2rem;",
                        "32px"
                    ],
                    [
                        ".mr-8",
                        "margin-right: 2rem;",
                        "32px"
                    ],
                    [
                        ".mb-8",
                        "margin-bottom: 2rem;",
                        "32px"
                    ],
                    [
                        ".ml-8",
                        "margin-left: 2rem;",
                        "32px"
                    ],
                    [
                        ".mt-9",
                        "margin-top: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".mr-9",
                        "margin-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".mb-9",
                        "margin-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".ml-9",
                        "margin-left: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".mt-10",
                        "margin-top: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".mr-10",
                        "margin-right: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".mb-10",
                        "margin-bottom: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".ml-10",
                        "margin-left: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".mt-11",
                        "margin-top: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".mr-11",
                        "margin-right: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".mb-11",
                        "margin-bottom: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".ml-11",
                        "margin-left: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".mt-12",
                        "margin-top: 3rem;",
                        "48px"
                    ],
                    [
                        ".mr-12",
                        "margin-right: 3rem;",
                        "48px"
                    ],
                    [
                        ".mb-12",
                        "margin-bottom: 3rem;",
                        "48px"
                    ],
                    [
                        ".ml-12",
                        "margin-left: 3rem;",
                        "48px"
                    ],
                    [
                        ".mt-14",
                        "margin-top: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".mr-14",
                        "margin-right: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".mb-14",
                        "margin-bottom: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".ml-14",
                        "margin-left: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".mt-16",
                        "margin-top: 4rem;",
                        "64px"
                    ],
                    [
                        ".mr-16",
                        "margin-right: 4rem;",
                        "64px"
                    ],
                    [
                        ".mb-16",
                        "margin-bottom: 4rem;",
                        "64px"
                    ],
                    [
                        ".ml-16",
                        "margin-left: 4rem;",
                        "64px"
                    ],
                    [
                        ".mt-20",
                        "margin-top: 5rem;",
                        "80px"
                    ],
                    [
                        ".mr-20",
                        "margin-right: 5rem;",
                        "80px"
                    ],
                    [
                        ".mb-20",
                        "margin-bottom: 5rem;",
                        "80px"
                    ],
                    [
                        ".ml-20",
                        "margin-left: 5rem;",
                        "80px"
                    ],
                    [
                        ".mt-24",
                        "margin-top: 6rem;",
                        "96px"
                    ],
                    [
                        ".mr-24",
                        "margin-right: 6rem;",
                        "96px"
                    ],
                    [
                        ".mb-24",
                        "margin-bottom: 6rem;",
                        "96px"
                    ],
                    [
                        ".ml-24",
                        "margin-left: 6rem;",
                        "96px"
                    ],
                    [
                        ".mt-28",
                        "margin-top: 7rem;",
                        "112px"
                    ],
                    [
                        ".mr-28",
                        "margin-right: 7rem;",
                        "112px"
                    ],
                    [
                        ".mb-28",
                        "margin-bottom: 7rem;",
                        "112px"
                    ],
                    [
                        ".ml-28",
                        "margin-left: 7rem;",
                        "112px"
                    ],
                    [
                        ".mt-32",
                        "margin-top: 8rem;",
                        "128px"
                    ],
                    [
                        ".mr-32",
                        "margin-right: 8rem;",
                        "128px"
                    ],
                    [
                        ".mb-32",
                        "margin-bottom: 8rem;",
                        "128px"
                    ],
                    [
                        ".ml-32",
                        "margin-left: 8rem;",
                        "128px"
                    ],
                    [
                        ".mt-36",
                        "margin-top: 9rem;",
                        "144px"
                    ],
                    [
                        ".mr-36",
                        "margin-right: 9rem;",
                        "144px"
                    ],
                    [
                        ".mb-36",
                        "margin-bottom: 9rem;",
                        "144px"
                    ],
                    [
                        ".ml-36",
                        "margin-left: 9rem;",
                        "144px"
                    ],
                    [
                        ".mt-40",
                        "margin-top: 10rem;",
                        "160px"
                    ],
                    [
                        ".mr-40",
                        "margin-right: 10rem;",
                        "160px"
                    ],
                    [
                        ".mb-40",
                        "margin-bottom: 10rem;",
                        "160px"
                    ],
                    [
                        ".ml-40",
                        "margin-left: 10rem;",
                        "160px"
                    ],
                    [
                        ".mt-44",
                        "margin-top: 11rem;",
                        "176px"
                    ],
                    [
                        ".mr-44",
                        "margin-right: 11rem;",
                        "176px"
                    ],
                    [
                        ".mb-44",
                        "margin-bottom: 11rem;",
                        "176px"
                    ],
                    [
                        ".ml-44",
                        "margin-left: 11rem;",
                        "176px"
                    ],
                    [
                        ".mt-48",
                        "margin-top: 12rem;",
                        "192px"
                    ],
                    [
                        ".mr-48",
                        "margin-right: 12rem;",
                        "192px"
                    ],
                    [
                        ".mb-48",
                        "margin-bottom: 12rem;",
                        "192px"
                    ],
                    [
                        ".ml-48",
                        "margin-left: 12rem;",
                        "192px"
                    ],
                    [
                        ".mt-52",
                        "margin-top: 13rem;",
                        "208px"
                    ],
                    [
                        ".mr-52",
                        "margin-right: 13rem;",
                        "208px"
                    ],
                    [
                        ".mb-52",
                        "margin-bottom: 13rem;",
                        "208px"
                    ],
                    [
                        ".ml-52",
                        "margin-left: 13rem;",
                        "208px"
                    ],
                    [
                        ".mt-56",
                        "margin-top: 14rem;",
                        "224px"
                    ],
                    [
                        ".mr-56",
                        "margin-right: 14rem;",
                        "224px"
                    ],
                    [
                        ".mb-56",
                        "margin-bottom: 14rem;",
                        "224px"
                    ],
                    [
                        ".ml-56",
                        "margin-left: 14rem;",
                        "224px"
                    ],
                    [
                        ".mt-60",
                        "margin-top: 15rem;",
                        "240px"
                    ],
                    [
                        ".mr-60",
                        "margin-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".mb-60",
                        "margin-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".ml-60",
                        "margin-left: 15rem;",
                        "240px"
                    ],
                    [
                        ".mt-64",
                        "margin-top: 16rem;",
                        "256px"
                    ],
                    [
                        ".mr-64",
                        "margin-right: 16rem;",
                        "256px"
                    ],
                    [
                        ".mb-64",
                        "margin-bottom: 16rem;",
                        "256px"
                    ],
                    [
                        ".ml-64",
                        "margin-left: 16rem;",
                        "256px"
                    ],
                    [
                        ".mt-72",
                        "margin-top: 18rem;",
                        "288px"
                    ],
                    [
                        ".mr-72",
                        "margin-right: 18rem;",
                        "288px"
                    ],
                    [
                        ".mb-72",
                        "margin-bottom: 18rem;",
                        "288px"
                    ],
                    [
                        ".ml-72",
                        "margin-left: 18rem;",
                        "288px"
                    ],
                    [
                        ".mt-80",
                        "margin-top: 20rem;",
                        "320px"
                    ],
                    [
                        ".mr-80",
                        "margin-right: 20rem;",
                        "320px"
                    ],
                    [
                        ".mb-80",
                        "margin-bottom: 20rem;",
                        "320px"
                    ],
                    [
                        ".ml-80",
                        "margin-left: 20rem;",
                        "320px"
                    ],
                    [
                        ".mt-96",
                        "margin-top: 24rem;",
                        "384px"
                    ],
                    [
                        ".mr-96",
                        "margin-right: 24rem;",
                        "384px"
                    ],
                    [
                        ".mb-96",
                        "margin-bottom: 24rem;",
                        "384px"
                    ],
                    [
                        ".ml-96",
                        "margin-left: 24rem;",
                        "384px"
                    ],
                    [
                        ".mt-px",
                        "margin-top: 1px;",
                        ""
                    ],
                    [
                        ".mr-px",
                        "margin-right: 1px;",
                        ""
                    ],
                    [
                        ".mb-px",
                        "margin-bottom: 1px;",
                        ""
                    ],
                    [
                        ".ml-px",
                        "margin-left: 1px;",
                        ""
                    ],
                    [
                        ".-m-0",
                        "margin: 0;",
                        ""
                    ],
                    [
                        ".-m-0.5",
                        "margin: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-m-1",
                        "margin: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-m-1.5",
                        "margin: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-m-2",
                        "margin: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-m-2.5",
                        "margin: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-m-3",
                        "margin: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-m-3.5",
                        "margin: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-m-4",
                        "margin: -1rem;",
                        "16px"
                    ],
                    [
                        ".-m-5",
                        "margin: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-m-6",
                        "margin: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-m-8",
                        "margin: -2rem;",
                        "32px"
                    ],
                    [
                        ".-m-10",
                        "margin: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-m-11",
                        "margin: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-m-12",
                        "margin: -3rem;",
                        "48px"
                    ],
                    [
                        ".-m-14",
                        "margin: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-m-16",
                        "margin: -4rem;",
                        "64px"
                    ],
                    [
                        ".-m-20",
                        "margin: -5rem;",
                        "80px"
                    ],
                    [
                        ".-m-24",
                        "margin: -6rem;",
                        "96px"
                    ],
                    [
                        ".-m-28",
                        "margin: -7rem;",
                        "112px"
                    ],
                    [
                        ".-m-32",
                        "margin: -8rem;",
                        "128px"
                    ],
                    [
                        ".-m-36",
                        "margin: -9rem;",
                        "144px"
                    ],
                    [
                        ".-m-40",
                        "margin: -10rem;",
                        "160px"
                    ],
                    [
                        ".-m-44",
                        "margin: -11rem;",
                        "176px"
                    ],
                    [
                        ".-m-48",
                        "margin: -12rem;",
                        "192px"
                    ],
                    [
                        ".-m-52",
                        "margin: -13rem;",
                        "208px"
                    ],
                    [
                        ".-m-56",
                        "margin: -14rem;",
                        "224px"
                    ],
                    [
                        ".-m-64",
                        "margin: -16rem;",
                        "256px"
                    ],
                    [
                        ".-m-72",
                        "margin: -18rem;",
                        "288px"
                    ],
                    [
                        ".-m-80",
                        "margin: -20rem;",
                        "320px"
                    ],
                    [
                        ".-m-96",
                        "margin: -24rem;",
                        "384px"
                    ],
                    [
                        ".-m-px",
                        "margin: -1px;",
                        ""
                    ],
                    [
                        ".-my-0",
                        "margin-top: 0;\nmargin-bottom: 0;",
                        ""
                    ],
                    [
                        ".-mx-0",
                        "margin-left: 0;\nmargin-right: 0;",
                        ""
                    ],
                    [
                        ".-my-0.5",
                        "margin-top: -0.125rem;\nmargin-bottom: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-mx-0.5",
                        "margin-left: -0.125rem;\nmargin-right: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-my-1",
                        "margin-top: -0.25rem;\nmargin-bottom: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-mx-1",
                        "margin-left: -0.25rem;\nmargin-right: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-my-1.5",
                        "margin-top: -0.375rem;\nmargin-bottom: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-mx-1.5",
                        "margin-left: -0.375rem;\nmargin-right: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-my-2",
                        "margin-top: -0.5rem;\nmargin-bottom: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-mx-2",
                        "margin-left: -0.5rem;\nmargin-right: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-my-2.5",
                        "margin-top: -0.625rem;\nmargin-bottom: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-mx-2.5",
                        "margin-left: -0.625rem;\nmargin-right: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-my-3",
                        "margin-top: -0.75rem;\nmargin-bottom: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-mx-3",
                        "margin-left: -0.75rem;\nmargin-right: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-my-3.5",
                        "margin-top: -0.875rem;\nmargin-bottom: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-mx-3.5",
                        "margin-left: -0.875rem;\nmargin-right: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-my-4",
                        "margin-top: -1rem;\nmargin-bottom: -1rem;",
                        "16px"
                    ],
                    [
                        ".-mx-4",
                        "margin-left: -1rem;\nmargin-right: -1rem;",
                        "16px"
                    ],
                    [
                        ".-my-5",
                        "margin-top: -1.25rem;\nmargin-bottom: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-mx-5",
                        "margin-left: -1.25rem;\nmargin-right: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-my-6",
                        "margin-top: -1.5rem;\nmargin-bottom: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-mx-6",
                        "margin-left: -1.5rem;\nmargin-right: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-my-7",
                        "margin-top: 1.75rem;\nmargin-bottom: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".-mx-7",
                        "margin-left: 1.75rem;\nmargin-right: 1.75rem;",
                        "24px"
                    ],
                    [
                        ".-my-8",
                        "margin-top: -2rem;\nmargin-bottom: -2rem;",
                        "32px"
                    ],
                    [
                        ".-mx-8",
                        "margin-left: -2rem;\nmargin-right: -2rem;",
                        "32px"
                    ],
                    [
                        ".-my-9",
                        "margin-top: 2.25rem;\nmargin-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-mx-9",
                        "margin-left: 2.25rem;\nmargin-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-my-10",
                        "margin-top: -2.5rem;\nmargin-bottom: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-mx-10",
                        "margin-left: -2.5rem;\nmargin-right: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-my-11",
                        "margin-top: -2.75rem;\nmargin-bottom: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-mx-11",
                        "margin-left: -2.75rem;\nmargin-right: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-my-12",
                        "margin-top: -3rem;\nmargin-bottom: -3rem;",
                        "48px"
                    ],
                    [
                        ".-mx-12",
                        "margin-left: -3rem;\nmargin-right: -3rem;",
                        "48px"
                    ],
                    [
                        ".-my-14",
                        "margin-top: -3.5rem;\nmargin-bottom: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-mx-14",
                        "margin-left: -3.5rem;\nmargin-right: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-my-16",
                        "margin-top: -4rem;\nmargin-bottom: -4rem;",
                        "64px"
                    ],
                    [
                        ".-mx-16",
                        "margin-left: -4rem;\nmargin-right: -4rem;",
                        "64px"
                    ],
                    [
                        ".-my-20",
                        "margin-top: -5rem;\nmargin-bottom: -5rem;",
                        "80px"
                    ],
                    [
                        ".-mx-20",
                        "margin-left: -5rem;\nmargin-right: -5rem;",
                        "80px"
                    ],
                    [
                        ".-my-24",
                        "margin-top: -6rem;\nmargin-bottom: -6rem;",
                        "96px"
                    ],
                    [
                        ".-mx-24",
                        "margin-left: -6rem;\nmargin-right: -6rem;",
                        "96px"
                    ],
                    [
                        ".-my-28",
                        "margin-top: -7rem;\nmargin-bottom: -7rem;",
                        "112px"
                    ],
                    [
                        ".-mx-28",
                        "margin-left: -7rem;\nmargin-right: -7rem;",
                        "112px"
                    ],
                    [
                        ".-my-32",
                        "margin-top: -8rem;\nmargin-bottom: -8rem;",
                        "128px"
                    ],
                    [
                        ".-mx-32",
                        "margin-left: -8rem;\nmargin-right: -8rem;",
                        "128px"
                    ],
                    [
                        ".-my-36",
                        "margin-top: -9rem;\nmargin-bottom: -9rem;",
                        "144px"
                    ],
                    [
                        ".-mx-36",
                        "margin-left: -9rem;\nmargin-right: -9rem;",
                        "144px"
                    ],
                    [
                        ".-my-40",
                        "margin-top: -10rem;\nmargin-bottom: -10rem;",
                        "160px"
                    ],
                    [
                        ".-mx-40",
                        "margin-left: -10rem;\nmargin-right: -10rem;",
                        "160px"
                    ],
                    [
                        ".-my-44",
                        "margin-top: -11rem;\nmargin-bottom: -11rem;",
                        "176px"
                    ],
                    [
                        ".-mx-44",
                        "margin-left: -11rem;\nmargin-right: -11rem;",
                        "176px"
                    ],
                    [
                        ".-my-48",
                        "margin-top: -12rem;\nmargin-bottom: -12rem;",
                        "192px"
                    ],
                    [
                        ".-mx-48",
                        "margin-left: -12rem;\nmargin-right: -12rem;",
                        "192px"
                    ],
                    [
                        ".-my-52",
                        "margin-top: -13rem;\nmargin-bottom: -13rem;",
                        "208px"
                    ],
                    [
                        ".-mx-52",
                        "margin-left: -13rem;\nmargin-right: -13rem;",
                        "208px"
                    ],
                    [
                        ".-my-56",
                        "margin-top: -14rem;\nmargin-bottom: -14rem;",
                        "224px"
                    ],
                    [
                        ".-mx-56",
                        "margin-left: -14rem;\nmargin-right: -14rem;",
                        "224px"
                    ],
                    [
                        ".-my-60",
                        "margin-top: 15rem;\nmargin-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".-mx-60",
                        "margin-left: 15rem;\nmargin-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".-my-64",
                        "margin-top: -16rem;\nmargin-bottom: -16rem;",
                        "256px"
                    ],
                    [
                        ".-mx-64",
                        "margin-left: -16rem;\nmargin-right: -16rem;",
                        "256px"
                    ],
                    [
                        ".-my-70",
                        "margin-top: -18rem;\nmargin-bottom: -18rem;",
                        "280px"
                    ],
                    [
                        ".-mx-70",
                        "margin-left: -18rem;\nmargin-right: -18rem;",
                        "280px"
                    ],
                    [
                        ".-my-80",
                        "margin-top: -20rem;\nmargin-bottom: -20rem;",
                        "320px"
                    ],
                    [
                        ".-mx-80",
                        "margin-left: -20rem;\nmargin-right: -20rem;",
                        "320px"
                    ],
                    [
                        ".-my-96",
                        "margin-top: -24rem;\nmargin-bottom: -24rem;",
                        "384px"
                    ],
                    [
                        ".-mx-96",
                        "margin-left: -24rem;\nmargin-right: -24rem;",
                        "384px"
                    ],
                    [
                        ".-my-px",
                        "margin-top: -1px;\nmargin-bottom: -1px;",
                        ""
                    ],
                    [
                        ".-mx-px",
                        "margin-left: -1px;\nmargin-right: -1px;",
                        ""
                    ],
                    [
                        ".-mt-0",
                        "margin-top: 0;",
                        ""
                    ],
                    [
                        ".-mr-0",
                        "margin-right: 0;",
                        ""
                    ],
                    [
                        ".-mb-0",
                        "margin-bottom: 0;",
                        ""
                    ],
                    [
                        ".-ml-0",
                        "margin-left: 0;",
                        ""
                    ],
                    [
                        ".-mt-0.5",
                        "margin-top: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-mr-0.5",
                        "margin-right: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-mb-0.5",
                        "margin-bottom: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-ml-0.5",
                        "margin-left: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-mt-1",
                        "margin-top: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-mr-1",
                        "margin-right: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-mb-1",
                        "margin-bottom: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-ml-1",
                        "margin-left: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-mt-1.5",
                        "margin-top: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-mr-1.5",
                        "margin-right: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-mb-1.5",
                        "margin-bottom: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-ml-1.5",
                        "margin-left: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-mt-2",
                        "margin-top: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-mr-2",
                        "margin-right: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-mb-2",
                        "margin-bottom: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-ml-2",
                        "margin-left: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-mt-2.5",
                        "margin-top: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-mr-2.5",
                        "margin-right: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-mb-2.5",
                        "margin-bottom: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-ml-2.5",
                        "margin-left: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-mt-3",
                        "margin-top: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-mr-3",
                        "margin-right: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-mb-3",
                        "margin-bottom: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-ml-3",
                        "margin-left: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-mt-3.5",
                        "margin-top: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-mr-3.5",
                        "margin-right: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-mb-3.5",
                        "margin-bottom: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-ml-3.5",
                        "margin-left: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-mt-4",
                        "margin-top: -1rem;",
                        "16px"
                    ],
                    [
                        ".-mr-4",
                        "margin-right: -1rem;",
                        "16px"
                    ],
                    [
                        ".-mb-4",
                        "margin-bottom: -1rem;",
                        "16px"
                    ],
                    [
                        ".-ml-4",
                        "margin-left: -1rem;",
                        "16px"
                    ],
                    [
                        ".-mt-5",
                        "margin-top: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-mr-5",
                        "margin-right: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-mb-5",
                        "margin-bottom: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-ml-5",
                        "margin-left: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-mt-6",
                        "margin-top: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-mr-6",
                        "margin-right: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-mb-6",
                        "margin-bottom: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-ml-6",
                        "margin-left: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-mt-7",
                        "margin-top: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".-mr-7",
                        "margin-right: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".-mb-7",
                        "margin-bottom: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".-ml-7",
                        "margin-left: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".-mt-8",
                        "margin-top: -2rem;",
                        "32px"
                    ],
                    [
                        ".-mr-8",
                        "margin-right: -2rem;",
                        "32px"
                    ],
                    [
                        ".-mb-8",
                        "margin-bottom: -2rem;",
                        "32px"
                    ],
                    [
                        ".-ml-8",
                        "margin-left: -2rem;",
                        "32px"
                    ],
                    [
                        ".-mt-9",
                        "margin-top: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-mr-9",
                        "margin-right: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-mb-9",
                        "margin-bottom: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-ml-9",
                        "margin-left: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".-mt-10",
                        "margin-top: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-mr-10",
                        "margin-right: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-mb-10",
                        "margin-bottom: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-ml-10",
                        "margin-left: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-mt-11",
                        "margin-top: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-mr-11",
                        "margin-right: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-mb-11",
                        "margin-bottom: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-ml-11",
                        "margin-left: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-mt-12",
                        "margin-top: -3rem;",
                        "48px"
                    ],
                    [
                        ".-mr-12",
                        "margin-right: -3rem;",
                        "48px"
                    ],
                    [
                        ".-mb-12",
                        "margin-bottom: -3rem;",
                        "48px"
                    ],
                    [
                        ".-ml-12",
                        "margin-left: -3rem;",
                        "48px"
                    ],
                    [
                        ".-mt-14",
                        "margin-top: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-mr-14",
                        "margin-right: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-mb-14",
                        "margin-bottom: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-ml-14",
                        "margin-left: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-mt-16",
                        "margin-top: -4rem;",
                        "64px"
                    ],
                    [
                        ".-mr-16",
                        "margin-right: -4rem;",
                        "64px"
                    ],
                    [
                        ".-mb-16",
                        "margin-bottom: -4rem;",
                        "64px"
                    ],
                    [
                        ".-ml-16",
                        "margin-left: -4rem;",
                        "64px"
                    ],
                    [
                        ".-mt-20",
                        "margin-top: -5rem;",
                        "80px"
                    ],
                    [
                        ".-mr-20",
                        "margin-right: -5rem;",
                        "80px"
                    ],
                    [
                        ".-mb-20",
                        "margin-bottom: -5rem;",
                        "80px"
                    ],
                    [
                        ".-ml-20",
                        "margin-left: -5rem;",
                        "80px"
                    ],
                    [
                        ".-mt-24",
                        "margin-top: -6rem;",
                        "96px"
                    ],
                    [
                        ".-mr-24",
                        "margin-right: -6rem;",
                        "96px"
                    ],
                    [
                        ".-mb-24",
                        "margin-bottom: -6rem;",
                        "96px"
                    ],
                    [
                        ".-ml-24",
                        "margin-left: -6rem;",
                        "96px"
                    ],
                    [
                        ".-mt-28",
                        "margin-top: -7rem;",
                        "112px"
                    ],
                    [
                        ".-mr-28",
                        "margin-right: -7rem;",
                        "112px"
                    ],
                    [
                        ".-mb-28",
                        "margin-bottom: -7rem;",
                        "112px"
                    ],
                    [
                        ".-ml-28",
                        "margin-left: -7rem;",
                        "112px"
                    ],
                    [
                        ".-mt-32",
                        "margin-top: -8rem;",
                        "128px"
                    ],
                    [
                        ".-mr-32",
                        "margin-right: -8rem;",
                        "128px"
                    ],
                    [
                        ".-mb-32",
                        "margin-bottom: -8rem;",
                        "128px"
                    ],
                    [
                        ".-ml-32",
                        "margin-left: -8rem;",
                        "128px"
                    ],
                    [
                        ".-mt-36",
                        "margin-top: -9rem;",
                        "144px"
                    ],
                    [
                        ".-mr-36",
                        "margin-right: -9rem;",
                        "144px"
                    ],
                    [
                        ".-mb-36",
                        "margin-bottom: -9rem;",
                        "144px"
                    ],
                    [
                        ".-ml-36",
                        "margin-left: -9rem;",
                        "144px"
                    ],
                    [
                        ".-mt-40",
                        "margin-top: -10rem;",
                        "160px"
                    ],
                    [
                        ".-mr-40",
                        "margin-right: -10rem;",
                        "160px"
                    ],
                    [
                        ".-mb-40",
                        "margin-bottom: -10rem;",
                        "160px"
                    ],
                    [
                        ".-ml-40",
                        "margin-left: -10rem;",
                        "160px"
                    ],
                    [
                        ".-mt-44",
                        "margin-top: -11rem;",
                        "176px"
                    ],
                    [
                        ".-mr-44",
                        "margin-right: -11rem;",
                        "176px"
                    ],
                    [
                        ".-mb-44",
                        "margin-bottom: -11rem;",
                        "176px"
                    ],
                    [
                        ".-ml-44",
                        "margin-left: -11rem;",
                        "176px"
                    ],
                    [
                        ".-mt-48",
                        "margin-top: -12rem;",
                        "192px"
                    ],
                    [
                        ".-mr-48",
                        "margin-right: -12rem;",
                        "192px"
                    ],
                    [
                        ".-mb-48",
                        "margin-bottom: -12rem;",
                        "192px"
                    ],
                    [
                        ".-ml-48",
                        "margin-left: -12rem;",
                        "192px"
                    ],
                    [
                        ".-mt-52",
                        "margin-top: -13rem;",
                        "208px"
                    ],
                    [
                        ".-mr-52",
                        "margin-right: -13rem;",
                        "208px"
                    ],
                    [
                        ".-mb-52",
                        "margin-bottom: -13rem;",
                        "208px"
                    ],
                    [
                        ".-ml-52",
                        "margin-left: -13rem;",
                        "208px"
                    ],
                    [
                        ".-mt-56",
                        "margin-top: -14rem;",
                        "224px"
                    ],
                    [
                        ".-mr-56",
                        "margin-right: -14rem;",
                        "224px"
                    ],
                    [
                        ".-mb-56",
                        "margin-bottom: -14rem;",
                        "224px"
                    ],
                    [
                        ".-ml-56",
                        "margin-left: -14rem;",
                        "224px"
                    ],
                    [
                        ".-mt-60",
                        "margin-top: 15rem;",
                        "240px"
                    ],
                    [
                        ".-mr-60",
                        "margin-right: 15rem;",
                        "240px"
                    ],
                    [
                        ".-mb-60",
                        "margin-bottom: 15rem;",
                        "240px"
                    ],
                    [
                        ".-ml-60",
                        "margin-left: 15rem;",
                        "240px"
                    ],
                    [
                        ".-mt-64",
                        "margin-top: -16rem;",
                        "256px"
                    ],
                    [
                        ".-mr-64",
                        "margin-right: -16rem;",
                        "256px"
                    ],
                    [
                        ".-mb-64",
                        "margin-bottom: -16rem;",
                        "256px"
                    ],
                    [
                        ".-ml-64",
                        "margin-left: -16rem;",
                        "256px"
                    ],
                    [
                        ".-mt-72",
                        "margin-top: -18rem;",
                        "288px"
                    ],
                    [
                        ".-mr-72",
                        "margin-right: -18rem;",
                        "288px"
                    ],
                    [
                        ".-mb-72",
                        "margin-bottom: -18rem;",
                        "288px"
                    ],
                    [
                        ".-ml-72",
                        "margin-left: -18rem;",
                        "288px"
                    ],
                    [
                        ".-mt-80",
                        "margin-top: -20rem;",
                        "320px"
                    ],
                    [
                        ".-mr-80",
                        "margin-right: -20rem;",
                        "320px"
                    ],
                    [
                        ".-mb-80",
                        "margin-bottom: -20rem;",
                        "320px"
                    ],
                    [
                        ".-ml-80",
                        "margin-left: -20rem;",
                        "320px"
                    ],
                    [
                        ".-mt-96",
                        "margin-top: -24rem;",
                        "384px"
                    ],
                    [
                        ".-mr-96",
                        "margin-right: -24rem;",
                        "384px"
                    ],
                    [
                        ".-mb-96",
                        "margin-bottom: -24rem;",
                        "384px"
                    ],
                    [
                        ".-ml-96",
                        "margin-left: -24rem;",
                        "384px"
                    ],
                    [
                        ".-mt-px",
                        "margin-top: -1px;",
                        ""
                    ],
                    [
                        ".-mr-px",
                        "margin-right: -1px;",
                        ""
                    ],
                    [
                        ".-mb-px",
                        "margin-bottom: -1px;",
                        ""
                    ],
                    [
                        ".-ml-px",
                        "margin-left: -1px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Space Between",
                "docs": "https://tailwindcss.com/docs/space",
                "description": "Controls margin between child elements",
                "table": [
                    [
                        ".space-x-0",
                        "margin-left: 0;",
                        ""
                    ],
                    [
                        ".space-x-0.5",
                        "margin-left: 0.125rem;",
                        ""
                    ],
                    [
                        ".space-x-1",
                        "margin-left: 0.25rem;",
                        ""
                    ],
                    [
                        ".space-x-1.5",
                        "margin-left: 0.375rem;",
                        ""
                    ],
                    [
                        ".space-x-2",
                        "margin-left: 0.5rem;",
                        ""
                    ],
                    [
                        ".space-x-2.5",
                        "margin-left: 0.625rem;",
                        ""
                    ],
                    [
                        ".space-x-3",
                        "margin-left: 0.75rem;",
                        ""
                    ],
                    [
                        ".space-x-3",
                        "margin-left: 0.875rem;",
                        ""
                    ],
                    [
                        ".space-x-4",
                        "margin-left: 1rem;",
                        ""
                    ],
                    [
                        ".space-x-5",
                        "margin-left: 1.25rem;",
                        ""
                    ],
                    [
                        ".space-x-6",
                        "margin-left: 1.5rem;",
                        ""
                    ],
                    [
                        ".space-x-7",
                        "margin-left: 1.75rem;",
                        ""
                    ],
                    [
                        ".space-x-8",
                        "margin-left: 2rem;",
                        ""
                    ],
                    [
                        ".space-x-9",
                        "margin-left: 2.25rem;",
                        ""
                    ],
                    [
                        ".space-x-10",
                        "margin-left: 2.5rem;",
                        ""
                    ],
                    [
                        ".space-x-11",
                        "margin-left: 2.75rem;",
                        ""
                    ],
                    [
                        ".space-x-12",
                        "margin-left: 3rem;",
                        ""
                    ],
                    [
                        ".space-x-14",
                        "margin-left: 3.5rem;",
                        ""
                    ],
                    [
                        ".space-x-16",
                        "margin-left: 4rem;",
                        ""
                    ],
                    [
                        ".space-x-20",
                        "margin-left: 5rem;",
                        ""
                    ],
                    [
                        ".space-x-24",
                        "margin-left: 6rem;",
                        ""
                    ],
                    [
                        ".space-x-28",
                        "margin-left: 7rem;",
                        ""
                    ],
                    [
                        ".space-x-32",
                        "margin-left: 8rem;",
                        ""
                    ],
                    [
                        ".space-x-36",
                        "margin-left: 9rem;",
                        ""
                    ],
                    [
                        ".space-x-40",
                        "margin-left: 10rem;",
                        ""
                    ],
                    [
                        ".space-x-44",
                        "margin-left: 11rem;",
                        ""
                    ],
                    [
                        ".space-x-48",
                        "margin-left: 12rem;",
                        ""
                    ],
                    [
                        ".space-x-52",
                        "margin-left: 13rem;",
                        ""
                    ],
                    [
                        ".space-x-56",
                        "margin-left: 14rem;",
                        ""
                    ],
                    [
                        ".space-x-60",
                        "margin-left: 15rem;",
                        ""
                    ],
                    [
                        ".space-x-64",
                        "margin-left: 16rem;",
                        ""
                    ],
                    [
                        ".space-x-72",
                        "margin-left: 18rem;",
                        ""
                    ],
                    [
                        ".space-x-80",
                        "margin-left: 20rem;",
                        ""
                    ],
                    [
                        ".space-x-96",
                        "margin-left: 24rem;",
                        ""
                    ],
                    [
                        ".space-x-px",
                        "margin-left: 1px;",
                        ""
                    ],
                    [
                        ".-space-x-0",
                        "margin-left: 0;",
                        ""
                    ],
                    [
                        ".-space-x-0.5",
                        "margin-left: -0.125rem;",
                        ""
                    ],
                    [
                        ".-space-x-1",
                        "margin-left: -0.25rem;",
                        ""
                    ],
                    [
                        ".-space-x-1.5",
                        "margin-left: -0.375rem;",
                        ""
                    ],
                    [
                        ".-space-x-2",
                        "margin-left: -0.5rem;",
                        ""
                    ],
                    [
                        ".-space-x-2.5",
                        "margin-left: -0.625rem;",
                        ""
                    ],
                    [
                        ".-space-x-3",
                        "margin-left: -0.75rem;",
                        ""
                    ],
                    [
                        ".-space-x-3",
                        "margin-left: -0.875rem;",
                        ""
                    ],
                    [
                        ".-space-x-4",
                        "margin-left: -1rem;",
                        ""
                    ],
                    [
                        ".-space-x-5",
                        "margin-left: -1.25rem;",
                        ""
                    ],
                    [
                        ".-space-x-6",
                        "margin-left: -1.5rem;",
                        ""
                    ],
                    [
                        ".-space-x-7",
                        "margin-left: -1.75rem;",
                        ""
                    ],
                    [
                        ".-space-x-8",
                        "margin-left: -2rem;",
                        ""
                    ],
                    [
                        ".-space-x-9",
                        "margin-left: -2.25rem;",
                        ""
                    ],
                    [
                        ".-space-x-10",
                        "margin-left: -2.5rem;",
                        ""
                    ],
                    [
                        ".-space-x-11",
                        "margin-left: -2.75rem;",
                        ""
                    ],
                    [
                        ".-space-x-12",
                        "margin-left: -3rem;",
                        ""
                    ],
                    [
                        ".-space-x-14",
                        "margin-left: -3.5rem;",
                        ""
                    ],
                    [
                        ".-space-x-16",
                        "margin-left: -4rem;",
                        ""
                    ],
                    [
                        ".-space-x-20",
                        "margin-left: -5rem;",
                        ""
                    ],
                    [
                        ".-space-x-24",
                        "margin-left: -6rem;",
                        ""
                    ],
                    [
                        ".-space-x-28",
                        "margin-left: -7rem;",
                        ""
                    ],
                    [
                        ".-space-x-32",
                        "margin-left: -8rem;",
                        ""
                    ],
                    [
                        ".-space-x-36",
                        "margin-left: -9rem;",
                        ""
                    ],
                    [
                        ".-space-x-40",
                        "margin-left: -10rem;",
                        ""
                    ],
                    [
                        ".-space-x-44",
                        "margin-left: -11rem;",
                        ""
                    ],
                    [
                        ".-space-x-48",
                        "margin-left: -12rem;",
                        ""
                    ],
                    [
                        ".-space-x-52",
                        "margin-left: -13rem;",
                        ""
                    ],
                    [
                        ".-space-x-56",
                        "margin-left: -14rem;",
                        ""
                    ],
                    [
                        ".-space-x-60",
                        "margin-left: -15rem;",
                        ""
                    ],
                    [
                        ".-space-x-64",
                        "margin-left: -16rem;",
                        ""
                    ],
                    [
                        ".-space-x-72",
                        "margin-left: -18rem;",
                        ""
                    ],
                    [
                        ".-space-x-80",
                        "margin-left: -20rem;",
                        ""
                    ],
                    [
                        ".-space-x-96",
                        "margin-left: -24rem;",
                        ""
                    ],
                    [
                        ".-space-x-px",
                        "margin-left: -1px;",
                        ""
                    ],
                    [
                        ".space-y-0",
                        "margin-top: 0;",
                        ""
                    ],
                    [
                        ".space-y-0.5",
                        "margin-top: 0.125rem;",
                        ""
                    ],
                    [
                        ".space-y-1",
                        "margin-top: 0.25rem;",
                        ""
                    ],
                    [
                        ".space-y-1.5",
                        "margin-top: 0.375rem;",
                        ""
                    ],
                    [
                        ".space-y-2",
                        "margin-top: 0.5rem;",
                        ""
                    ],
                    [
                        ".space-y-2.5",
                        "margin-top: 0.625rem;",
                        ""
                    ],
                    [
                        ".space-y-3",
                        "margin-top: 0.75rem;",
                        ""
                    ],
                    [
                        ".space-y-3",
                        "margin-top: 0.875rem;",
                        ""
                    ],
                    [
                        ".space-y-4",
                        "margin-top: 1rem;",
                        ""
                    ],
                    [
                        ".space-y-5",
                        "margin-top: 1.25rem;",
                        ""
                    ],
                    [
                        ".space-y-6",
                        "margin-top: 1.5rem;",
                        ""
                    ],
                    [
                        ".space-y-7",
                        "margin-top: 1.75rem;",
                        ""
                    ],
                    [
                        ".space-y-8",
                        "margin-top: 2rem;",
                        ""
                    ],
                    [
                        ".space-y-9",
                        "margin-top: 2.25rem;",
                        ""
                    ],
                    [
                        ".space-y-10",
                        "margin-top: 2.5rem;",
                        ""
                    ],
                    [
                        ".space-y-11",
                        "margin-top: 2.75rem;",
                        ""
                    ],
                    [
                        ".space-y-12",
                        "margin-top: 3rem;",
                        ""
                    ],
                    [
                        ".space-y-14",
                        "margin-top: 3.5rem;",
                        ""
                    ],
                    [
                        ".space-y-16",
                        "margin-top: 4rem;",
                        ""
                    ],
                    [
                        ".space-y-20",
                        "margin-top: 5rem;",
                        ""
                    ],
                    [
                        ".space-y-24",
                        "margin-top: 6rem;",
                        ""
                    ],
                    [
                        ".space-y-28",
                        "margin-top: 7rem;",
                        ""
                    ],
                    [
                        ".space-y-32",
                        "margin-top: 8rem;",
                        ""
                    ],
                    [
                        ".space-y-36",
                        "margin-top: 9rem;",
                        ""
                    ],
                    [
                        ".space-y-40",
                        "margin-top: 10rem;",
                        ""
                    ],
                    [
                        ".space-y-44",
                        "margin-top: 11rem;",
                        ""
                    ],
                    [
                        ".space-y-48",
                        "margin-top: 12rem;",
                        ""
                    ],
                    [
                        ".space-y-52",
                        "margin-top: 13rem;",
                        ""
                    ],
                    [
                        ".space-y-56",
                        "margin-top: 14rem;",
                        ""
                    ],
                    [
                        ".space-y-60",
                        "margin-top: 15rem;",
                        ""
                    ],
                    [
                        ".space-y-64",
                        "margin-top: 16rem;",
                        ""
                    ],
                    [
                        ".space-y-72",
                        "margin-top: 18rem;",
                        ""
                    ],
                    [
                        ".space-y-80",
                        "margin-top: 20rem;",
                        ""
                    ],
                    [
                        ".space-y-96",
                        "margin-top: 24rem;",
                        ""
                    ],
                    [
                        ".space-y-px",
                        "margin-top: 1px;",
                        ""
                    ],
                    [
                        ".-space-y-0",
                        "margin-top: 0;",
                        ""
                    ],
                    [
                        ".-space-y-0.5",
                        "margin-top: -0.125rem;",
                        ""
                    ],
                    [
                        ".-space-y-1",
                        "margin-top: -0.25rem;",
                        ""
                    ],
                    [
                        ".-space-y-1.5",
                        "margin-top: -0.375rem;",
                        ""
                    ],
                    [
                        ".-space-y-2",
                        "margin-top: -0.5rem;",
                        ""
                    ],
                    [
                        ".-space-y-2.5",
                        "margin-top: -0.625rem;",
                        ""
                    ],
                    [
                        ".-space-y-3",
                        "margin-top: -0.75rem;",
                        ""
                    ],
                    [
                        ".-space-y-3",
                        "margin-top: -0.875rem;",
                        ""
                    ],
                    [
                        ".-space-y-4",
                        "margin-top: -1rem;",
                        ""
                    ],
                    [
                        ".-space-y-5",
                        "margin-top: -1.25rem;",
                        ""
                    ],
                    [
                        ".-space-y-6",
                        "margin-top: -1.5rem;",
                        ""
                    ],
                    [
                        ".-space-y-7",
                        "margin-top: -1.75rem;",
                        ""
                    ],
                    [
                        ".-space-y-8",
                        "margin-top: -2rem;",
                        ""
                    ],
                    [
                        ".-space-y-9",
                        "margin-top: -2.25rem;",
                        ""
                    ],
                    [
                        ".-space-y-10",
                        "margin-top: -2.5rem;",
                        ""
                    ],
                    [
                        ".-space-y-11",
                        "margin-top: -2.75rem;",
                        ""
                    ],
                    [
                        ".-space-y-12",
                        "margin-top: -3rem;",
                        ""
                    ],
                    [
                        ".-space-y-14",
                        "margin-top: -3.5rem;",
                        ""
                    ],
                    [
                        ".-space-y-16",
                        "margin-top: -4rem;",
                        ""
                    ],
                    [
                        ".-space-y-20",
                        "margin-top: -5rem;",
                        ""
                    ],
                    [
                        ".-space-y-24",
                        "margin-top: -6rem;",
                        ""
                    ],
                    [
                        ".-space-y-28",
                        "margin-top: -7rem;",
                        ""
                    ],
                    [
                        ".-space-y-32",
                        "margin-top: -8rem;",
                        ""
                    ],
                    [
                        ".-space-y-36",
                        "margin-top: -9rem;",
                        ""
                    ],
                    [
                        ".-space-y-40",
                        "margin-top: -10rem;",
                        ""
                    ],
                    [
                        ".-space-y-44",
                        "margin-top: -11rem;",
                        ""
                    ],
                    [
                        ".-space-y-48",
                        "margin-top: -12rem;",
                        ""
                    ],
                    [
                        ".-space-y-52",
                        "margin-top: -13rem;",
                        ""
                    ],
                    [
                        ".-space-y-56",
                        "margin-top: -14rem;",
                        ""
                    ],
                    [
                        ".-space-y-60",
                        "margin-top: -15rem;",
                        ""
                    ],
                    [
                        ".-space-y-64",
                        "margin-top: -16rem;",
                        ""
                    ],
                    [
                        ".-space-y-72",
                        "margin-top: -18rem;",
                        ""
                    ],
                    [
                        ".-space-y-80",
                        "margin-top: -20rem;",
                        ""
                    ],
                    [
                        ".-space-y-96",
                        "margin-top: -24rem;",
                        ""
                    ],
                    [
                        ".-space-y-px",
                        "margin-top: -1px;",
                        ""
                    ],
                    [
                        ".space-x-reverse",
                        "--space-x-reverse: 1",
                        ""
                    ],
                    [
                        ".space-y-reverse",
                        "--space-y-reverse: 1",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Backgrounds",
        "content": [
            {
                "title": "Background Attachment",
                "docs": "https://tailwindcss.com/docs/background-attachment",
                "description": "Sets behavior of background images when scrolling.",
                "table": [
                    [
                        ".bg-fixed",
                        "background-attachment: fixed;",
                        ""
                    ],
                    [
                        ".bg-local",
                        "background-attachment: local;",
                        ""
                    ],
                    [
                        ".bg-scroll",
                        "background-attachment: scroll;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Clip",
                "docs": "https://tailwindcss.com/docs/background-clip",
                "description": "Sets behavior of Utilities for controlling the bounding box of an element's background.",
                "table": [
                    [
                        ".bg-clip-border",
                        "background-clip: border-box;",
                        ""
                    ],
                    [
                        ".bg-clip-padding",
                        "background-clip: padding-box;",
                        ""
                    ],
                    [
                        ".bg-clip-content",
                        "background-clip: content-box;",
                        ""
                    ],
                    [
                        ".bg-clip-text",
                        "background-clip: text;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Color",
                "docs": "https://tailwindcss.com/docs/background-color",
                "description": "Sets background color.",
                "table": [
                    [
                        "transparent",
                        ".bg-transparent",
                        "background-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".bg-current",
                        "background-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".bg-black",
                        "background-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".bg-white",
                        "background-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".bg-gray-50",
                        "background-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".bg-gray-100",
                        "background-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".bg-gray-200",
                        "background-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".bg-gray-300",
                        "background-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".bg-gray-400",
                        "background-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".bg-gray-500",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".bg-gray-600",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".bg-gray-700",
                        "background-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".bg-gray-800",
                        "background-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".bg-gray-900",
                        "background-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".bg-red-50",
                        "background-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".bg-red-100",
                        "background-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".bg-red-200",
                        "background-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".bg-red-300",
                        "background-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".bg-red-400",
                        "background-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".bg-red-500",
                        "background-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".bg-red-600",
                        "background-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".bg-red-700",
                        "background-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".bg-red-800",
                        "background-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".bg-red-900",
                        "background-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".bg-yellow-50",
                        "background-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".bg-yellow-100",
                        "background-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".bg-yellow-200",
                        "background-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".bg-yellow-300",
                        "background-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".bg-yellow-400",
                        "background-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".bg-yellow-500",
                        "background-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".bg-yellow-600",
                        "background-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".bg-yellow-700",
                        "background-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".bg-yellow-800",
                        "background-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".bg-yellow-900",
                        "background-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".bg-green-50",
                        "background-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".bg-green-100",
                        "background-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".bg-green-200",
                        "background-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".bg-green-300",
                        "background-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".bg-green-400",
                        "background-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".bg-green-500",
                        "background-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".bg-green-600",
                        "background-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".bg-green-700",
                        "background-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".bg-green-800",
                        "background-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".bg-green-900",
                        "background-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".bg-blue-50",
                        "background-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".bg-blue-100",
                        "background-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".bg-blue-200",
                        "background-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".bg-blue-300",
                        "background-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".bg-blue-400",
                        "background-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".bg-blue-500",
                        "background-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".bg-blue-600",
                        "background-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".bg-blue-700",
                        "background-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".bg-blue-800",
                        "background-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".bg-blue-900",
                        "background-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".bg-indigo-50",
                        "background-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".bg-indigo-100",
                        "background-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".bg-indigo-200",
                        "background-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".bg-indigo-300",
                        "background-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".bg-indigo-400",
                        "background-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".bg-indigo-500",
                        "background-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".bg-indigo-600",
                        "background-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".bg-indigo-700",
                        "background-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".bg-indigo-800",
                        "background-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".bg-indigo-900",
                        "background-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".bg-purple-50",
                        "background-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".bg-purple-100",
                        "background-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".bg-purple-200",
                        "background-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".bg-purple-300",
                        "background-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".bg-purple-400",
                        "background-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".bg-purple-500",
                        "background-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".bg-purple-600",
                        "background-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".bg-purple-700",
                        "background-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".bg-purple-800",
                        "background-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".bg-purple-900",
                        "background-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".bg-pink-50",
                        "background-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".bg-pink-100",
                        "background-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".bg-pink-200",
                        "background-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".bg-pink-300",
                        "background-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".bg-pink-400",
                        "background-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".bg-pink-500",
                        "background-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".bg-pink-600",
                        "background-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".bg-pink-700",
                        "background-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".bg-pink-800",
                        "background-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".bg-pink-900",
                        "background-color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Opacity",
                "docs": "https://tailwindcss.com/docs/background-opacity",
                "description": "Sets background opacity.",
                "table": [
                    [
                        ".bg-opacity-0",
                        "--bg-opacity: 0;",
                        ""
                    ],
                    [
                        ".bg-opacity-5",
                        "--bg-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".bg-opacity-10",
                        "--bg-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".bg-opacity-20",
                        "--bg-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".bg-opacity-25",
                        "--bg-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".bg-opacity-30",
                        "--bg-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".bg-opacity-40",
                        "--bg-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".bg-opacity-50",
                        "--bg-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".bg-opacity-60",
                        "--bg-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".bg-opacity-70",
                        "--bg-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".bg-opacity-75",
                        "--bg-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".bg-opacity-80",
                        "--bg-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".bg-opacity-90",
                        "--bg-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".bg-opacity-95",
                        "--bg-opacity: 0.95;",
                        ""
                    ],
                    [
                        ".bg-opacity-100",
                        "--bg-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Position",
                "docs": "https://tailwindcss.com/docs/background-position",
                "description": "Sets position of a background image.",
                "table": [
                    [
                        ".bg-bottom",
                        "background-position: bottom;",
                        ""
                    ],
                    [
                        ".bg-center",
                        "background-position: center;",
                        ""
                    ],
                    [
                        ".bg-left",
                        "background-position: left;",
                        ""
                    ],
                    [
                        ".bg-left-bottom",
                        "background-position: left bottom;",
                        ""
                    ],
                    [
                        ".bg-left-top",
                        "background-position: left top;",
                        ""
                    ],
                    [
                        ".bg-right",
                        "background-position: right;",
                        ""
                    ],
                    [
                        ".bg-right-bottom",
                        "background-position: right bottom;",
                        ""
                    ],
                    [
                        ".bg-right-top",
                        "background-position: right top;",
                        ""
                    ],
                    [
                        ".bg-top",
                        "background-position: top;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Repeat",
                "docs": "https://tailwindcss.com/docs/background-repeat",
                "description": "Sets repetition of a background image.",
                "table": [
                    [
                        ".bg-repeat",
                        "background-repeat: repeat;",
                        ""
                    ],
                    [
                        ".bg-no-repeat",
                        "background-repeat: no-repeat;",
                        ""
                    ],
                    [
                        ".bg-repeat-x",
                        "background-repeat: repeat-x;",
                        ""
                    ],
                    [
                        ".bg-repeat-y",
                        "background-repeat: repeat-y;",
                        ""
                    ],
                    [
                        ".bg-repeat-round",
                        "background-repeat: round;",
                        ""
                    ],
                    [
                        ".bg-repeat-space",
                        "background-repeat: space;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Size",
                "docs": "https://tailwindcss.com/docs/background-size",
                "description": "Sets background size of a background image.",
                "table": [
                    [
                        ".bg-auto",
                        "background-size: auto;",
                        ""
                    ],
                    [
                        ".bg-cover",
                        "background-size: cover;",
                        ""
                    ],
                    [
                        ".bg-contain",
                        "background-size: contain;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Image",
                "docs": "https://tailwindcss.com/docs/background-image",
                "description": "Utilities for controlling an element's background image.",
                "table": [
                    [
                        ".bg-none",
                        "background-image: none;",
                        ""
                    ],
                    [
                        ".bg-gradient-to-t",
                        "background-image:background-image: background-image: linear-gradient(to top, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-tr",
                        "background-image: background-image: linear-gradient(to top right, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-r",
                        "background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-br",
                        "background-image: background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-b",
                        "background-image: background-image: linear-gradient(to bottom, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-bl",
                        "background-image: background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-l",
                        "background-image: background-image: linear-gradient(to left, var(--tw-gradient-stops));",
                        ""
                    ],
                    [
                        ".bg-gradient-to-tl",
                        "background-image: background-image: linear-gradient(to top left, var(--tw-gradient-stops));",
                        ""
                    ]
                ]
            },
            {
                "title": "Gradient Color Stops",
                "docs": "https://tailwindcss.com/docs/bacgradient-color-stops",
                "description": "Utilities for controlling the color stops in background gradients.",
                "table": [
                    [
                        "transparent",
                        ".from-transparent",
                        "background-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".from-current",
                        "background-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".from-black",
                        "background-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".from-white",
                        "background-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".from-gray-50",
                        "background-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".from-gray-100",
                        "background-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".from-gray-200",
                        "background-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".from-gray-300",
                        "background-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".from-gray-400",
                        "background-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".from-gray-500",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".from-gray-600",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".from-gray-700",
                        "background-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".from-gray-800",
                        "background-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".from-gray-900",
                        "background-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".from-red-50",
                        "background-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".from-red-100",
                        "background-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".from-red-200",
                        "background-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".from-red-300",
                        "background-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".from-red-400",
                        "background-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".from-red-500",
                        "background-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".from-red-600",
                        "background-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".from-red-700",
                        "background-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".from-red-800",
                        "background-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".from-red-900",
                        "background-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".from-yellow-50",
                        "background-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".from-yellow-100",
                        "background-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".from-yellow-200",
                        "background-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".from-yellow-300",
                        "background-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".from-yellow-400",
                        "background-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".from-yellow-500",
                        "background-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".from-yellow-600",
                        "background-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".from-yellow-700",
                        "background-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".from-yellow-800",
                        "background-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".from-yellow-900",
                        "background-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".from-green-50",
                        "background-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".from-green-100",
                        "background-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".from-green-200",
                        "background-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".from-green-300",
                        "background-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".from-green-400",
                        "background-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".from-green-500",
                        "background-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".from-green-600",
                        "background-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".from-green-700",
                        "background-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".from-green-800",
                        "background-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".from-green-900",
                        "background-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".from-blue-50",
                        "background-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".from-blue-100",
                        "background-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".from-blue-200",
                        "background-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".from-blue-300",
                        "background-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".from-blue-400",
                        "background-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".from-blue-500",
                        "background-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".from-blue-600",
                        "background-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".from-blue-700",
                        "background-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".from-blue-800",
                        "background-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".from-blue-900",
                        "background-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".from-indigo-50",
                        "background-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".from-indigo-100",
                        "background-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".from-indigo-200",
                        "background-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".from-indigo-300",
                        "background-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".from-indigo-400",
                        "background-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".from-indigo-500",
                        "background-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".from-indigo-600",
                        "background-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".from-indigo-700",
                        "background-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".from-indigo-800",
                        "background-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".from-indigo-900",
                        "background-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".from-purple-50",
                        "background-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".from-purple-100",
                        "background-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".from-purple-200",
                        "background-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".from-purple-300",
                        "background-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".from-purple-400",
                        "background-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".from-purple-500",
                        "background-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".from-purple-600",
                        "background-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".from-purple-700",
                        "background-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".from-purple-800",
                        "background-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".from-purple-900",
                        "background-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".from-pink-50",
                        "background-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".from-pink-100",
                        "background-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".from-pink-200",
                        "background-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".from-pink-300",
                        "background-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".from-pink-400",
                        "background-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".from-pink-500",
                        "background-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".from-pink-600",
                        "background-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".from-pink-700",
                        "background-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".from-pink-800",
                        "background-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".from-pink-900",
                        "background-color: #831843;",
                        ""
                    ],
                    [
                        "transparent",
                        ".via-transparent",
                        "background-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".via-current",
                        "background-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".via-black",
                        "background-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".via-white",
                        "background-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".via-gray-50",
                        "background-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".via-gray-100",
                        "background-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".via-gray-200",
                        "background-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".via-gray-300",
                        "background-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".via-gray-400",
                        "background-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".via-gray-500",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".via-gray-600",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".via-gray-700",
                        "background-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".via-gray-800",
                        "background-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".via-gray-900",
                        "background-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".via-red-50",
                        "background-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".via-red-100",
                        "background-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".via-red-200",
                        "background-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".via-red-300",
                        "background-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".via-red-400",
                        "background-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".via-red-500",
                        "background-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".via-red-600",
                        "background-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".via-red-700",
                        "background-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".via-red-800",
                        "background-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".via-red-900",
                        "background-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".via-yellow-50",
                        "background-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".via-yellow-100",
                        "background-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".via-yellow-200",
                        "background-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".via-yellow-300",
                        "background-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".via-yellow-400",
                        "background-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".via-yellow-500",
                        "background-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".via-yellow-600",
                        "background-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".via-yellow-700",
                        "background-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".via-yellow-800",
                        "background-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".via-yellow-900",
                        "background-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".via-green-50",
                        "background-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".via-green-100",
                        "background-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".via-green-200",
                        "background-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".via-green-300",
                        "background-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".via-green-400",
                        "background-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".via-green-500",
                        "background-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".via-green-600",
                        "background-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".via-green-700",
                        "background-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".via-green-800",
                        "background-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".via-green-900",
                        "background-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".via-blue-50",
                        "background-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".via-blue-100",
                        "background-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".via-blue-200",
                        "background-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".via-blue-300",
                        "background-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".via-blue-400",
                        "background-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".via-blue-500",
                        "background-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".via-blue-600",
                        "background-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".via-blue-700",
                        "background-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".via-blue-800",
                        "background-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".via-blue-900",
                        "background-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".via-indigo-50",
                        "background-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".via-indigo-100",
                        "background-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".via-indigo-200",
                        "background-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".via-indigo-300",
                        "background-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".via-indigo-400",
                        "background-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".via-indigo-500",
                        "background-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".via-indigo-600",
                        "background-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".via-indigo-700",
                        "background-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".via-indigo-800",
                        "background-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".via-indigo-900",
                        "background-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".via-purple-50",
                        "background-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".via-purple-100",
                        "background-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".via-purple-200",
                        "background-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".via-purple-300",
                        "background-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".via-purple-400",
                        "background-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".via-purple-500",
                        "background-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".via-purple-600",
                        "background-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".via-purple-700",
                        "background-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".via-purple-800",
                        "background-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".via-purple-900",
                        "background-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".via-pink-50",
                        "background-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".via-pink-100",
                        "background-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".via-pink-200",
                        "background-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".via-pink-300",
                        "background-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".via-pink-400",
                        "background-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".via-pink-500",
                        "background-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".via-pink-600",
                        "background-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".via-pink-700",
                        "background-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".via-pink-800",
                        "background-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".via-pink-900",
                        "background-color: #831843;",
                        ""
                    ],
                    [
                        "transparent",
                        ".to-transparent",
                        "background-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".to-current",
                        "background-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".to-black",
                        "background-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".to-white",
                        "background-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".to-gray-50",
                        "background-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".to-gray-100",
                        "background-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".to-gray-200",
                        "background-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".to-gray-300",
                        "background-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".to-gray-400",
                        "background-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".to-gray-500",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".to-gray-600",
                        "background-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".to-gray-700",
                        "background-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".to-gray-800",
                        "background-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".to-gray-900",
                        "background-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".to-red-50",
                        "background-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".to-red-100",
                        "background-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".to-red-200",
                        "background-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".to-red-300",
                        "background-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".to-red-400",
                        "background-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".to-red-500",
                        "background-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".to-red-600",
                        "background-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".to-red-700",
                        "background-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".to-red-800",
                        "background-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".to-red-900",
                        "background-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".to-yellow-50",
                        "background-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".to-yellow-100",
                        "background-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".to-yellow-200",
                        "background-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".to-yellow-300",
                        "background-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".to-yellow-400",
                        "background-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".to-yellow-500",
                        "background-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".to-yellow-600",
                        "background-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".to-yellow-700",
                        "background-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".to-yellow-800",
                        "background-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".to-yellow-900",
                        "background-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".to-green-50",
                        "background-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".to-green-100",
                        "background-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".to-green-200",
                        "background-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".to-green-300",
                        "background-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".to-green-400",
                        "background-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".to-green-500",
                        "background-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".to-green-600",
                        "background-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".to-green-700",
                        "background-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".to-green-800",
                        "background-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".to-green-900",
                        "background-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".to-blue-50",
                        "background-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".to-blue-100",
                        "background-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".to-blue-200",
                        "background-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".to-blue-300",
                        "background-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".to-blue-400",
                        "background-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".to-blue-500",
                        "background-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".to-blue-600",
                        "background-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".to-blue-700",
                        "background-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".to-blue-800",
                        "background-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".to-blue-900",
                        "background-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".to-indigo-50",
                        "background-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".to-indigo-100",
                        "background-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".to-indigo-200",
                        "background-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".to-indigo-300",
                        "background-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".to-indigo-400",
                        "background-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".to-indigo-500",
                        "background-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".to-indigo-600",
                        "background-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".to-indigo-700",
                        "background-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".to-indigo-800",
                        "background-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".to-indigo-900",
                        "background-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".to-purple-50",
                        "background-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".to-purple-100",
                        "background-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".to-purple-200",
                        "background-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".to-purple-300",
                        "background-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".to-purple-400",
                        "background-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".to-purple-500",
                        "background-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".to-purple-600",
                        "background-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".to-purple-700",
                        "background-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".to-purple-800",
                        "background-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".to-purple-900",
                        "background-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".to-pink-50",
                        "background-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".to-pink-100",
                        "background-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".to-pink-200",
                        "background-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".to-pink-300",
                        "background-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".to-pink-400",
                        "background-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".to-pink-500",
                        "background-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".to-pink-600",
                        "background-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".to-pink-700",
                        "background-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".to-pink-800",
                        "background-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".to-pink-900",
                        "background-color: #831843;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Transitions and  Animation",
        "content": [
            {
                "title": "Transition Delay",
                "docs": "https://tailwindcss.com/docs/transition-delay",
                "description": "Sets the CSS properties affected by transition delay.",
                "table": [
                    [
                        ".delay-75",
                        "transition-delay: 75ms;",
                        ""
                    ],
                    [
                        ".delay-100",
                        "transition-delay: 100ms;",
                        ""
                    ],
                    [
                        ".delay-150",
                        "transition-delay: 150ms;",
                        ""
                    ],
                    [
                        ".delay-200",
                        "transition-delay: 200ms;",
                        ""
                    ],
                    [
                        ".delay-300",
                        "transition-delay: 300ms;",
                        ""
                    ],
                    [
                        ".delay-500",
                        "transition-delay: 500ms;",
                        ""
                    ],
                    [
                        ".delay-700",
                        "transition-delay: 700ms;",
                        ""
                    ],
                    [
                        ".delay-1000",
                        "transition-delay: 1000ms;",
                        ""
                    ]
                ]
            },
            {
                "title": "Transition Property",
                "docs": "https://tailwindcss.com/docs/transition-property",
                "description": "Sets the CSS properties affected by transition animations.",
                "table": [
                    [
                        ".transition",
                        "transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;",
                        ""
                    ],
                    [
                        ".transition-none",
                        "transition-property: none;",
                        ""
                    ],
                    [
                        ".transition-all",
                        "transition-property: all;",
                        ""
                    ],
                    [
                        ".transition-colors",
                        "transition-property: background-color, border-color, color, fill, stroke;",
                        ""
                    ],
                    [
                        ".transition-opacity",
                        "transition-property: opacity;",
                        ""
                    ],
                    [
                        ".transition-shadow",
                        "transition-property: box-shadow;",
                        ""
                    ],
                    [
                        ".transition-transform",
                        "transition-property: transform;",
                        ""
                    ]
                ]
            },
            {
                "title": "Transition Duration",
                "docs": "https://tailwindcss.com/docs/transition-duration",
                "description": "Sets the length of time for a transition animations to complete.",
                "table": [
                    [
                        ".duration-75",
                        "transition-duration: 75ms;",
                        ""
                    ],
                    [
                        ".duration-100",
                        "transition-duration: 100ms;",
                        ""
                    ],
                    [
                        ".duration-150",
                        "transition-duration: 150ms;",
                        ""
                    ],
                    [
                        ".duration-200",
                        "transition-duration: 200ms;",
                        ""
                    ],
                    [
                        ".duration-300",
                        "transition-duration: 300ms;",
                        ""
                    ],
                    [
                        ".duration-500",
                        "transition-duration: 500ms;",
                        ""
                    ],
                    [
                        ".duration-700",
                        "transition-duration: 700ms;",
                        ""
                    ],
                    [
                        ".duration-1000",
                        "transition-duration: 1000ms;",
                        ""
                    ]
                ]
            },
            {
                "title": "Transition Timing Function",
                "docs": "https://tailwindcss.com/docs/transition-timing-function",
                "description": "Sets the easing function of transition animations.",
                "table": [
                    [
                        ".ease-linear",
                        "transition-timing-function: linear;",
                        ""
                    ],
                    [
                        ".ease-in",
                        "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);",
                        ""
                    ],
                    [
                        ".ease-out",
                        "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);",
                        ""
                    ],
                    [
                        ".ease-in-out",
                        "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Animation",
                "docs": "https://tailwindcss.com/docs/animation",
                "description": "Utilities for animating elements with CSS animations.",
                "table": [
                    [
                        ".animate-none",
                        "animation: none;",
                        ""
                    ],
                    [
                        ".animate-spin",
                        "animation: spin 1s linear infinite;\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}",
                        ""
                    ],
                    [
                        ".animate-ping",
                        "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}",
                        ""
                    ],
                    [
                        ".animate-pulse",
                        "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}",
                        ""
                    ],
                    [
                        ".animate-bounce",
                        "animation: animation: bounce 1s infinite;\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(0);\n    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);\n  }\n}",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Transforms",
        "content": [
            {
                "title": "Transform Origin",
                "docs": "https://tailwindcss.com/docs/transform-origin",
                "description": "Sets the origin of an element's transforms. Think of the origin as pushing a thumbtack into the element at the specified position.",
                "table": [
                    [
                        ".origin-center",
                        "transform-origin: center;",
                        ""
                    ],
                    [
                        ".origin-top",
                        "transform-origin: top;",
                        ""
                    ],
                    [
                        ".origin-top-right",
                        "transform-origin: top right;",
                        ""
                    ],
                    [
                        ".origin-right",
                        "transform-origin: right;",
                        ""
                    ],
                    [
                        ".origin-bottom-right",
                        "transform-origin: bottom right;",
                        ""
                    ],
                    [
                        ".origin-bottom",
                        "transform-origin: bottom;",
                        ""
                    ],
                    [
                        ".origin-bottom-left",
                        "transform-origin: bottom left;",
                        ""
                    ],
                    [
                        ".origin-left",
                        "transform-origin: left;",
                        ""
                    ],
                    [
                        ".origin-top-left",
                        "transform-origin: top left;",
                        ""
                    ]
                ]
            },
            {
                "title": "Scale",
                "docs": "https://tailwindcss.com/docs/scale",
                "description": "Scales an element that has transform applied.",
                "table": [
                    [
                        ".scale-0",
                        "--transform-scale-x: 0;\n--transform-scale-y: 0;",
                        ""
                    ],
                    [
                        ".scale-50",
                        "--transform-scale-x: .5;\n--transform-scale-y: .5;",
                        ""
                    ],
                    [
                        ".scale-75",
                        "--transform-scale-x: .75;\n--transform-scale-y: .75;",
                        ""
                    ],
                    [
                        ".scale-90",
                        "--transform-scale-x: .9;\n--transform-scale-y: .9;",
                        ""
                    ],
                    [
                        ".scale-95",
                        "--transform-scale-x: .95;\n--transform-scale-y: .95;",
                        ""
                    ],
                    [
                        ".scale-100",
                        "--transform-scale-x: 1;\n--transform-scale-y: 1;",
                        ""
                    ],
                    [
                        ".scale-105",
                        "--transform-scale-x: 1.05;\n--transform-scale-y: 1.05;",
                        ""
                    ],
                    [
                        ".scale-110",
                        "--transform-scale-x: 1.1;\n--transform-scale-y: 1.1;",
                        ""
                    ],
                    [
                        ".scale-125",
                        "--transform-scale-x: 1.25;\n--transform-scale-y: 1.25;",
                        ""
                    ],
                    [
                        ".scale-150",
                        "--transform-scale-x: 1.5;\n--transform-scale-y: 1.5;",
                        ""
                    ],
                    [
                        ".scale-x-0",
                        "--transform-scale-x: 0;",
                        ""
                    ],
                    [
                        ".scale-x-50",
                        "--transform-scale-x: .5;",
                        ""
                    ],
                    [
                        ".scale-x-75",
                        "--transform-scale-x: .75;",
                        ""
                    ],
                    [
                        ".scale-x-90",
                        "--transform-scale-x: .9;",
                        ""
                    ],
                    [
                        ".scale-x-95",
                        "--transform-scale-x: .95;",
                        ""
                    ],
                    [
                        ".scale-x-100",
                        "--transform-scale-x: 1;",
                        ""
                    ],
                    [
                        ".scale-x-105",
                        "--transform-scale-x: 1.05;",
                        ""
                    ],
                    [
                        ".scale-x-110",
                        "--transform-scale-x: 1.1;",
                        ""
                    ],
                    [
                        ".scale-x-125",
                        "--transform-scale-x: 1.25;",
                        ""
                    ],
                    [
                        ".scale-x-150",
                        "--transform-scale-x: 1.5;",
                        ""
                    ],
                    [
                        ".scale-y-0",
                        "--transform-scale-y: 0;",
                        ""
                    ],
                    [
                        ".scale-y-50",
                        "--transform-scale-y: .5;",
                        ""
                    ],
                    [
                        ".scale-y-75",
                        "--transform-scale-y: .75;",
                        ""
                    ],
                    [
                        ".scale-y-90",
                        "--transform-scale-y: .9;",
                        ""
                    ],
                    [
                        ".scale-y-95",
                        "--transform-scale-y: .95;",
                        ""
                    ],
                    [
                        ".scale-y-100",
                        "--transform-scale-y: 1;",
                        ""
                    ],
                    [
                        ".scale-y-105",
                        "--transform-scale-y: 1.05;",
                        ""
                    ],
                    [
                        ".scale-y-110",
                        "--transform-scale-y: 1.1;",
                        ""
                    ],
                    [
                        ".scale-y-125",
                        "--transform-scale-y: 1.25;",
                        ""
                    ],
                    [
                        ".scale-y-150",
                        "--transform-scale-y: 1.5;",
                        ""
                    ]
                ]
            },
            {
                "title": "Rotate",
                "docs": "https://tailwindcss.com/docs/rotate",
                "description": "Rotates an element that has transform applied.",
                "table": [
                    [
                        ".rotate-0",
                        "--transform-rotate: 0;",
                        ""
                    ],
                    [
                        ".rotate-1",
                        "--transform-rotate: 1deg;",
                        ""
                    ],
                    [
                        ".rotate-2",
                        "--transform-rotate: 2deg;",
                        ""
                    ],
                    [
                        ".rotate-3",
                        "--transform-rotate: 3deg;",
                        ""
                    ],
                    [
                        ".rotate-6",
                        "--transform-rotate: 6deg;",
                        ""
                    ],
                    [
                        ".rotate-12",
                        "--transform-rotate: 12deg;",
                        ""
                    ],
                    [
                        ".rotate-45",
                        "--transform-rotate: 45deg;",
                        ""
                    ],
                    [
                        ".rotate-90",
                        "--transform-rotate: 90deg;",
                        ""
                    ],
                    [
                        ".rotate-180",
                        "--transform-rotate: 180deg;",
                        ""
                    ],
                    [
                        ".-rotate-180",
                        "--transform-rotate: -180deg;",
                        ""
                    ],
                    [
                        ".-rotate-90",
                        "--transform-rotate: -90deg;",
                        ""
                    ],
                    [
                        ".-rotate-45",
                        "--transform-rotate: -45deg;",
                        ""
                    ],
                    [
                        ".-rotate-12",
                        "--transform-rotate: -12deg;",
                        ""
                    ],
                    [
                        ".-rotate-6",
                        "--transform-rotate: -6deg;",
                        ""
                    ],
                    [
                        ".-rotate-3",
                        "--transform-rotate: -3deg;",
                        ""
                    ],
                    [
                        ".-rotate-2",
                        "--transform-rotate: -2deg;",
                        ""
                    ],
                    [
                        ".-rotate-1",
                        "--transform-rotate: -1deg;",
                        ""
                    ]

                ]
            },
            {
                "title": "Translate",
                "docs": "https://tailwindcss.com/docs/translate",
                "description": "Translates an element that has transform applied.",
                "table": [
                    [
                        ".translate-x-0",
                        "--transform-translate-x: 0;",
                        ""
                    ],
                    [
                        ".translate-x-0.5",
                        "--transform-translate-x: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".translate-x-1",
                        "--transform-translate-x: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".translate-x-1.5",
                        "--transform-translate-x: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".translate-x-2",
                        "--transform-translate-x: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".translate-x-2.5",
                        "--transform-translate-x: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".translate-x-3",
                        "--transform-translate-x: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".translate-x-3.5",
                        "--transform-translate-x: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".translate-x-4",
                        "--transform-translate-x: 1rem;",
                        "16px"
                    ],
                    [
                        ".translate-x-5",
                        "--transform-translate-x: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".translate-x-6",
                        "--transform-translate-x: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".translate-x-7",
                        "--transform-translate-x: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".translate-x-8",
                        "--transform-translate-x: 2rem;",
                        "32px"
                    ],
                    [
                        ".translate-x-9",
                        "--transform-translate-x: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".translate-x-10",
                        "--transform-translate-x: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".translate-x-11",
                        "--transform-translate-x: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".translate-x-12",
                        "--transform-translate-x: 3rem;",
                        "48px"
                    ],
                    [
                        ".translate-x-14",
                        "--transform-translate-x: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".translate-x-16",
                        "--transform-translate-x: 4rem;",
                        "64px"
                    ],
                    [
                        ".translate-x-20",
                        "--transform-translate-x: 5rem;",
                        "80px"
                    ],
                    [
                        ".translate-x-24",
                        "--transform-translate-x: 6rem;",
                        "96px"
                    ],
                    [
                        ".translate-x-28",
                        "--transform-translate-x: 7rem;",
                        "112px"
                    ],
                    [
                        ".translate-x-32",
                        "--transform-translate-x: 8rem;",
                        "128px"
                    ],
                    [
                        ".translate-x-36",
                        "--transform-translate-x: 8rem;",
                        "144px"
                    ],
                    [
                        ".translate-x-40",
                        "--transform-translate-x: 10rem;",
                        "160px"
                    ],
                    [
                        ".translate-x-44",
                        "--transform-translate-x: 11rem;",
                        "176px"
                    ],
                    [
                        ".translate-x-48",
                        "--transform-translate-x: 12rem;",
                        "192px"
                    ],
                    [
                        ".translate-x-52",
                        "--transform-translate-x: 13rem;",
                        "208px"
                    ],
                    [
                        ".translate-x-56",
                        "--transform-translate-x: 14rem;",
                        "224px"
                    ],
                    [
                        ".translate-x-60",
                        "--transform-translate-x: 15rem;",
                        "240px"
                    ],
                    [
                        ".translate-x-64",
                        "--transform-translate-x: 16rem;",
                        "256px"
                    ],
                    [
                        ".translate-x-72",
                        "--transform-translate-x: 18rem;",
                        "288px"
                    ],
                    [
                        ".translate-x-80",
                        "--transform-translate-x: 20rem;",
                        "320px"
                    ],
                    [
                        ".translate-x-96",
                        "--transform-translate-x: 24rem;",
                        "384px"
                    ],
                    [
                        ".translate-x-px",
                        "--transform-translate-x: 1px;",
                        ""
                    ],
                    [
                        ".translate-x-1/2",
                        "--transform-translate-x: 50%;",
                        ""
                    ],
                    [
                        ".translate-x-1/3",
                        "--transform-translate-x: 33.333333%;",
                        ""
                    ],
                    [
                        ".translate-x-2/3",
                        "--transform-translate-x: 66.6666666%;",
                        ""
                    ],
                    [
                        ".translate-x-1/4",
                        "--transform-translate-x: 25%;",
                        ""
                    ],
                    [
                        ".translate-x-2/4",
                        "--transform-translate-x: 50%;",
                        ""
                    ],
                    [
                        ".translate-x-3/4",
                        "--transform-translate-x: 75%;",
                        ""
                    ],
                    [
                        ".translate-x-full",
                        "--transform-translate-x: 100%;",
                        ""
                    ],
                    [
                        ".-translate-x-0",
                        "--transform-translate-x: 0;",
                        ""
                    ],
                    [
                        ".-translate-x-0.5",
                        "--transform-translate-x: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-translate-x-1",
                        "--transform-translate-x: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-translate-x-1.5",
                        "--transform-translate-x: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-translate-x-2",
                        "--transform-translate-x: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-translate-x-2.5",
                        "--transform-translate-x: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-translate-x-3",
                        "--transform-translate-x: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-translate-x-3.5",
                        "--transform-translate-x: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-translate-x-4",
                        "--transform-translate-x: -1rem;",
                        "16px"
                    ],
                    [
                        ".-translate-x-5",
                        "--transform-translate-x: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-translate-x-6",
                        "--transform-translate-x: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-translate-x-7",
                        "--transform-translate-x: -1.75rem;",
                        "28px"
                    ],
                    [
                        ".-translate-x-8",
                        "--transform-translate-x: -2rem;",
                        "32px"
                    ],
                    [
                        ".-translate-x-9",
                        "--transform-translate-x: -2.25rem;",
                        "36px"
                    ],
                    [
                        ".-translate-x-10",
                        "--transform-translate-x: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-translate-x-11",
                        "--transform-translate-x: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-translate-x-12",
                        "--transform-translate-x: -3rem;",
                        "48px"
                    ],
                    [
                        ".-translate-x-14",
                        "--transform-translate-x: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-translate-x-16",
                        "--transform-translate-x: -4rem;",
                        "64px"
                    ],
                    [
                        ".-translate-x-20",
                        "--transform-translate-x: -5rem;",
                        "80px"
                    ],
                    [
                        ".-translate-x-24",
                        "--transform-translate-x: -6rem;",
                        "96px"
                    ],
                    [
                        ".-translate-x-28",
                        "--transform-translate-x: -7rem;",
                        "112px"
                    ],
                    [
                        ".-translate-x-32",
                        "--transform-translate-x: -8rem;",
                        "128px"
                    ],
                    [
                        ".-translate-x-36",
                        "--transform-translate-x: -8rem;",
                        "144px"
                    ],
                    [
                        ".-translate-x-40",
                        "--transform-translate-x: -10rem;",
                        "160px"
                    ],
                    [
                        ".-translate-x-44",
                        "--transform-translate-x: -11rem;",
                        "176px"
                    ],
                    [
                        ".-translate-x-48",
                        "--transform-translate-x: -12rem;",
                        "192px"
                    ],
                    [
                        ".-translate-x-52",
                        "--transform-translate-x: -13rem;",
                        "208px"
                    ],
                    [
                        ".-translate-x-56",
                        "--transform-translate-x: -14rem;",
                        "224px"
                    ],
                    [
                        ".-translate-x-60",
                        "--transform-translate-x: -15rem;",
                        "240px"
                    ],
                    [
                        ".-translate-x-64",
                        "--transform-translate-x: -16rem;",
                        "256px"
                    ],
                    [
                        ".-translate-x-72",
                        "--transform-translate-x: -18rem;",
                        "288px"
                    ],
                    [
                        ".-translate-x-80",
                        "--transform-translate-x: -20rem;",
                        "320px"
                    ],
                    [
                        ".-translate-x-96",
                        "--transform-translate-x: -24rem;",
                        "384px"
                    ],
                    [
                        ".-translate-x-px",
                        "--transform-translate-x: -1px;",
                        ""
                    ],
                    [
                        ".-translate-x-1/2",
                        "--transform-translate-x: -50%;",
                        ""
                    ],
                    [
                        ".-translate-x-1/3",
                        "--transform-translate-x: -33.333333%;",
                        ""
                    ],
                    [
                        ".-translate-x-2/3",
                        "--transform-translate-x: -66.6666666%;",
                        ""
                    ],
                    [
                        ".-translate-x-1/4",
                        "--transform-translate-x: -25%;",
                        ""
                    ],
                    [
                        ".-translate-x-2/4",
                        "--transform-translate-x: -50%;",
                        ""
                    ],
                    [
                        ".-translate-x-3/4",
                        "--transform-translate-x: -75%;",
                        ""
                    ],
                    [
                        ".-translate-x-full",
                        "--transform-translate-x: -100%;",
                        ""
                    ],
                    [
                        ".translate-y-0",
                        "--transform-translate-y: 0;",
                        ""
                    ],
                    [
                        ".translate-y-0.5",
                        "--transform-translate-y: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".translate-y-1",
                        "--transform-translate-y: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".translate-y-1.5",
                        "--transform-translate-y: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".translate-y-2",
                        "--transform-translate-y: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".translate-y-2.5",
                        "--transform-translate-y: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".translate-y-3",
                        "--transform-translate-y: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".translate-y-3.5",
                        "--transform-translate-y: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".translate-y-4",
                        "--transform-translate-y: 1rem;",
                        "16px"
                    ],
                    [
                        ".translate-y-5",
                        "--transform-translate-y: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".translate-y-6",
                        "--transform-translate-y: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".translate-y-7",
                        "--transform-translate-y: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".translate-y-8",
                        "--transform-translate-y: 2rem;",
                        "32px"
                    ],
                    [
                        ".translate-y-9",
                        "--transform-translate-y: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".translate-y-10",
                        "--transform-translate-y: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".translate-y-11",
                        "--transform-translate-y: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".translate-y-12",
                        "--transform-translate-y: 3rem;",
                        "48px"
                    ],
                    [
                        ".translate-y-14",
                        "--transform-translate-y: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".translate-y-16",
                        "--transform-translate-y: 4rem;",
                        "64px"
                    ],
                    [
                        ".translate-y-20",
                        "--transform-translate-y: 5rem;",
                        "80px"
                    ],
                    [
                        ".translate-y-24",
                        "--transform-translate-y: 6rem;",
                        "96px"
                    ],
                    [
                        ".translate-y-28",
                        "--transform-translate-y: 7rem;",
                        "112px"
                    ],
                    [
                        ".translate-y-32",
                        "--transform-translate-y: 8rem;",
                        "128px"
                    ],
                    [
                        ".translate-y-36",
                        "--transform-translate-y: 8rem;",
                        "144px"
                    ],
                    [
                        ".translate-y-40",
                        "--transform-translate-y: 10rem;",
                        "160px"
                    ],
                    [
                        ".translate-y-44",
                        "--transform-translate-y: 11rem;",
                        "176px"
                    ],
                    [
                        ".translate-y-48",
                        "--transform-translate-y: 12rem;",
                        "192px"
                    ],
                    [
                        ".translate-y-52",
                        "--transform-translate-y: 13rem;",
                        "208px"
                    ],
                    [
                        ".translate-y-56",
                        "--transform-translate-y: 14rem;",
                        "224px"
                    ],
                    [
                        ".translate-y-60",
                        "--transform-translate-y: 15rem;",
                        "240px"
                    ],
                    [
                        ".translate-y-64",
                        "--transform-translate-y: 16rem;",
                        "256px"
                    ],
                    [
                        ".translate-y-72",
                        "--transform-translate-y: 18rem;",
                        "288px"
                    ],
                    [
                        ".translate-y-80",
                        "--transform-translate-y: 20rem;",
                        "320px"
                    ],
                    [
                        ".translate-y-96",
                        "--transform-translate-y: 24rem;",
                        "384px"
                    ],
                    [
                        ".translate-y-px",
                        "--transform-translate-y: 1px;",
                        ""
                    ],
                    [
                        ".translate-y-1/2",
                        "--transform-translate-y: 50%;",
                        ""
                    ],
                    [
                        ".translate-y-1/3",
                        "--transform-translate-y: 33.333333%;",
                        ""
                    ],
                    [
                        ".translate-y-2/3",
                        "--transform-translate-y: 66.6666666%;",
                        ""
                    ],
                    [
                        ".translate-y-1/4",
                        "--transform-translate-y: 25%;",
                        ""
                    ],
                    [
                        ".translate-y-2/4",
                        "--transform-translate-y: 50%;",
                        ""
                    ],
                    [
                        ".translate-y-3/4",
                        "--transform-translate-y: 75%;",
                        ""
                    ],
                    [
                        ".translate-y-full",
                        "--transform-translate-y: 100%;",
                        ""
                    ],
                    [
                        ".-translate-y-0",
                        "--transform-translate-y: 0;",
                        ""
                    ],
                    [
                        ".-translate-y-0.5",
                        "--transform-translate-y: -0.125rem;",
                        "2px"
                    ],
                    [
                        ".-translate-y-1",
                        "--transform-translate-y: -0.25rem;",
                        "4px"
                    ],
                    [
                        ".-translate-y-1.5",
                        "--transform-translate-y: -0.375rem;",
                        "6px"
                    ],
                    [
                        ".-translate-y-2",
                        "--transform-translate-y: -0.5rem;",
                        "8px"
                    ],
                    [
                        ".-translate-y-2.5",
                        "--transform-translate-y: -0.625rem;",
                        "10px"
                    ],
                    [
                        ".-translate-y-3",
                        "--transform-translate-y: -0.75rem;",
                        "12px"
                    ],
                    [
                        ".-translate-y-3.5",
                        "--transform-translate-y: -0.875rem;",
                        "14px"
                    ],
                    [
                        ".-translate-y-4",
                        "--transform-translate-y: -1rem;",
                        "16px"
                    ],
                    [
                        ".-translate-y-5",
                        "--transform-translate-y: -1.25rem;",
                        "20px"
                    ],
                    [
                        ".-translate-y-6",
                        "--transform-translate-y: -1.5rem;",
                        "24px"
                    ],
                    [
                        ".-translate-y-7",
                        "--transform-translate-y: -1.75rem;",
                        "28px"
                    ],
                    [
                        ".-translate-y-8",
                        "--transform-translate-y: -2rem;",
                        "32px"
                    ],
                    [
                        ".-translate-y-9",
                        "--transform-translate-y: -2.25rem;",
                        "36px"
                    ],
                    [
                        ".-translate-y-10",
                        "--transform-translate-y: -2.5rem;",
                        "40px"
                    ],
                    [
                        ".-translate-y-11",
                        "--transform-translate-y: -2.75rem;",
                        "44px"
                    ],
                    [
                        ".-translate-y-12",
                        "--transform-translate-y: -3rem;",
                        "48px"
                    ],
                    [
                        ".-translate-y-14",
                        "--transform-translate-y: -3.5rem;",
                        "56px"
                    ],
                    [
                        ".-translate-y-16",
                        "--transform-translate-y: -4rem;",
                        "64px"
                    ],
                    [
                        ".-translate-y-20",
                        "--transform-translate-y: -5rem;",
                        "80px"
                    ],
                    [
                        ".-translate-y-24",
                        "--transform-translate-y: -6rem;",
                        "96px"
                    ],
                    [
                        ".-translate-y-28",
                        "--transform-translate-y: -7rem;",
                        "112px"
                    ],
                    [
                        ".-translate-y-32",
                        "--transform-translate-y: -8rem;",
                        "128px"
                    ],
                    [
                        ".-translate-y-36",
                        "--transform-translate-y: -8rem;",
                        "144px"
                    ],
                    [
                        ".-translate-y-40",
                        "--transform-translate-y: -10rem;",
                        "160px"
                    ],
                    [
                        ".-translate-y-44",
                        "--transform-translate-y: -11rem;",
                        "176px"
                    ],
                    [
                        ".-translate-y-48",
                        "--transform-translate-y: -12rem;",
                        "192px"
                    ],
                    [
                        ".-translate-y-52",
                        "--transform-translate-y: -13rem;",
                        "208px"
                    ],
                    [
                        ".-translate-y-56",
                        "--transform-translate-y: -14rem;",
                        "224px"
                    ],
                    [
                        ".-translate-y-60",
                        "--transform-translate-y: -15rem;",
                        "240px"
                    ],
                    [
                        ".-translate-y-64",
                        "--transform-translate-y: -16rem;",
                        "256px"
                    ],
                    [
                        ".-translate-y-72",
                        "--transform-translate-y: -18rem;",
                        "288px"
                    ],
                    [
                        ".-translate-y-80",
                        "--transform-translate-y: -20rem;",
                        "320px"
                    ],
                    [
                        ".-translate-y-96",
                        "--transform-translate-y: -24rem;",
                        "384px"
                    ],
                    [
                        ".-translate-y-px",
                        "--transform-translate-y: -1px;",
                        ""
                    ],
                    [
                        ".-translate-y-1/2",
                        "--transform-translate-y: -50%;",
                        ""
                    ],
                    [
                        ".-translate-y-1/3",
                        "--transform-translate-y: -33.333333%;",
                        ""
                    ],
                    [
                        ".-translate-y-2/3",
                        "--transform-translate-y: -66.6666666%;",
                        ""
                    ],
                    [
                        ".-translate-y-1/4",
                        "--transform-translate-y: -25%;",
                        ""
                    ],
                    [
                        ".-translate-y-2/4",
                        "--transform-translate-y: -50%;",
                        ""
                    ],
                    [
                        ".-translate-y-3/4",
                        "--transform-translate-y: -75%;",
                        ""
                    ],
                    [
                        ".-translate-y-full",
                        "--transform-translate-y: -100%;",
                        ""
                    ]
                ]
            },
            {
                "title": "Skew",
                "docs": "https://tailwindcss.com/docs/skew",
                "description": "Skews an element that has transform applied.",
                "table": [
                    [
                        ".skew-x-0",
                        "--transform-skew-x: 0;",
                        ""
                    ],
                    [
                        ".skew-x-1",
                        "--transform-skew-x: 1deg;",
                        ""
                    ],
                    [
                        ".skew-x-2",
                        "--transform-skew-x: 2deg;",
                        ""
                    ],
                    [
                        ".skew-x-3",
                        "--transform-skew-x: 3deg;",
                        ""
                    ],
                    [
                        ".skew-x-6",
                        "--transform-skew-x: 6deg;",
                        ""
                    ],
                    [
                        ".skew-x-12",
                        "--transform-skew-x: 12deg;",
                        ""
                    ],
                    [
                        ".-skew-x-12",
                        "--transform-skew-x: -12deg;",
                        ""
                    ],
                    [
                        ".-skew-x-6",
                        "--transform-skew-x: -6deg;",
                        ""
                    ],
                    [
                        ".-skew-x-3",
                        "--transform-skew-x: -3deg;",
                        ""
                    ],
                    [
                        ".-skew-x-2",
                        "--transform-skew-x: -2deg;",
                        ""
                    ],
                    [
                        ".-skew-x-1",
                        "--transform-skew-x: -1deg;",
                        ""
                    ],
                    [
                        ".skew-y-0",
                        "--transform-skew-y: 0;",
                        ""
                    ],
                    [
                        ".skew-y-1",
                        "--transform-skew-y: 1deg;",
                        ""
                    ],
                    [
                        ".skew-y-2",
                        "--transform-skew-y: 2deg;",
                        ""
                    ],
                    [
                        ".skew-y-3",
                        "--transform-skew-y: 3deg;",
                        ""
                    ],
                    [
                        ".skew-y-6",
                        "--transform-skew-y: 6deg;",
                        ""
                    ],
                    [
                        ".skew-y-12",
                        "--transform-skew-y: 12deg;",
                        ""
                    ],
                    [
                        ".-skew-y-12",
                        "--transform-skew-y: -12deg;",
                        ""
                    ],
                    [
                        ".-skew-y-6",
                        "--transform-skew-y: -6deg;",
                        ""
                    ],
                    [
                        ".-skew-y-3",
                        "--transform-skew-y: -3deg;",
                        ""
                    ],
                    [
                        ".-skew-y-2",
                        "--transform-skew-y: -2deg;",
                        ""
                    ],
                    [
                        ".-skew-y-1",
                        "--transform-skew-x: -1deg;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Typography",
        "content": [
            {
                "title": "Text Color",
                "docs": "https://tailwindcss.com/docs/text-color",
                "description": "Sets the text color.",
                "table": [
                    [
                        "transparent",
                        ".text-transparent",
                        "color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".text-current",
                        "color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".text-black",
                        "color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".text-white",
                        "color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".text-gray-50",
                        "color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".text-gray-100",
                        "color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".text-gray-200",
                        "color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".text-gray-300",
                        "color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".text-gray-400",
                        "color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".text-gray-500",
                        "color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".text-gray-600",
                        "color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".text-gray-700",
                        "color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".text-gray-800",
                        "color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".text-gray-900",
                        "color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".text-red-50",
                        "color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".text-red-100",
                        "color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".text-red-200",
                        "color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".text-red-300",
                        "color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".text-red-400",
                        "color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".text-red-500",
                        "color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".text-red-600",
                        "color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".text-red-700",
                        "color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".text-red-800",
                        "color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".text-red-900",
                        "color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".text-yellow-50",
                        "color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".text-yellow-100",
                        "color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".text-yellow-200",
                        "color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".text-yellow-300",
                        "color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".text-yellow-400",
                        "color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".text-yellow-500",
                        "color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".text-yellow-600",
                        "color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".text-yellow-700",
                        "color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".text-yellow-800",
                        "color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".text-yellow-900",
                        "color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".text-green-50",
                        "color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".text-green-100",
                        "color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".text-green-200",
                        "color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".text-green-300",
                        "color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".text-green-400",
                        "color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".text-green-500",
                        "color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".text-green-600",
                        "color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".text-green-700",
                        "color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".text-green-800",
                        "color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".text-green-900",
                        "color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".text-blue-50",
                        "color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".text-blue-100",
                        "color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".text-blue-200",
                        "color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".text-blue-300",
                        "color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".text-blue-400",
                        "color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".text-blue-500",
                        "color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".text-blue-600",
                        "color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".text-blue-700",
                        "color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".text-blue-800",
                        "color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".text-blue-900",
                        "color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".text-indigo-50",
                        "color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".text-indigo-100",
                        "color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".text-indigo-200",
                        "color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".text-indigo-300",
                        "color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".text-indigo-400",
                        "color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".text-indigo-500",
                        "color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".text-indigo-600",
                        "color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".text-indigo-700",
                        "color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".text-indigo-800",
                        "color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".text-indigo-900",
                        "color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".text-purple-50",
                        "color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".text-purple-100",
                        "color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".text-purple-200",
                        "color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".text-purple-300",
                        "color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".text-purple-400",
                        "color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".text-purple-500",
                        "color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".text-purple-600",
                        "color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".text-purple-700",
                        "color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".text-purple-800",
                        "color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".text-purple-900",
                        "color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".text-pink-50",
                        "color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".text-pink-100",
                        "color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".text-pink-200",
                        "color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".text-pink-300",
                        "color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".text-pink-400",
                        "color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".text-pink-500",
                        "color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".text-pink-600",
                        "color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".text-pink-700",
                        "color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".text-pink-800",
                        "color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".text-pink-900",
                        "color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Text Opacity",
                "docs": "https://tailwindcss.com/docs/text-color",
                "description": "Sets the text opacity.",
                "table": [
                    [
                        ".text-opacity-0",
                        "text-opacity: 0;",
                        ""
                    ],
                    [
                        ".text-opacity-5",
                        "text-opacity: 0.05;",
                        ""
                    ],
                    [
                        ".text-opacity-10",
                        "text-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".text-opacity-20",
                        "text-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".text-opacity-25",
                        "text-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".text-opacity-30",
                        "text-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".text-opacity-40",
                        "text-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".text-opacity-50",
                        "text-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".text-opacity-60",
                        "text-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".text-opacity-70",
                        "text-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".text-opacity-75",
                        "text-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".text-opacity-80",
                        "text-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".text-opacity-90",
                        "text-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".text-opacity-100",
                        "text-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Font Family",
                "docs": "https://tailwindcss.com/docs/fonts",
                "description": "Sets the font family.",
                "table": [
                    [
                        ".font-sans",
                        "font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";",
                        ""
                    ],
                    [
                        ".font-serif",
                        "font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;",
                        ""
                    ],
                    [
                        ".font-mono",
                        "font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;",
                        ""
                    ]
                ]
            },
            {
                "title": "Font Size",
                "docs": "https://tailwindcss.com/docs/text-sizing",
                "description": "Sets the font size.",
                "table": [
                    [
                        ".text-xs",
                        "font-size: 0.75rem;\nline-height: 1rem;",
                        "12px"
                    ],
                    [
                        ".text-sm",
                        "font-size: 0.875rem;\nline-height: 1.25rem;",
                        "14px"
                    ],
                    [
                        ".text-base",
                        "font-size: 1rem;\nline-height: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".text-lg",
                        "font-size: 1.125rem;\nline-height: 1.75rem;",
                        "18px"
                    ],
                    [
                        ".text-xl",
                        "font-size: 1.25rem;\nline-height: 1.75rem;",
                        "20px"
                    ],
                    [
                        ".text-2xl",
                        "font-size: 1.5rem;\nline-height: 2rem;",
                        "24px"
                    ],
                    [
                        ".text-3xl",
                        "font-size: 1.875rem;\nline-height: 2.25rem;",
                        "30px"
                    ],
                    [
                        ".text-4xl",
                        "font-size: 2.25rem;\nline-height: 2.5rem;",
                        "36px"
                    ],
                    [
                        ".text-5xl",
                        "font-size: 3rem;\nline-height: 1;",
                        "48px"
                    ],
                    [
                        ".text-6xl",
                        "font-size: 3.75rem;\nline-height: 1;",
                        "64px"
                    ],
                    [
                        ".text-7xl",
                        "font-size: 4.5rem;\nline-height: 1;",
                        "72px"
                    ],
                    [
                        ".text-8xl",
                        "font-size: 6rem;\nline-height: 1;",
                        "80px"
                    ],
                    [
                        ".text-9xl",
                        "font-size: 8rem;\nline-height: 1;",
                        "96px"
                    ]
                ]
            },
            {
                "title": "Font Smoothing",
                "docs": "https://tailwindcss.com/docs/text-smoothing",
                "description": "",
                "table": [
                    [
                        ".antialiased",
                        "-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;",
                        ""
                    ],
                    [
                        ".subpixel-antialiased",
                        "-webkit-font-smoothing: auto;\n-moz-osx-font-smoothing: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Font Style",
                "docs": "https://tailwindcss.com/docs/text-style",
                "description": "",
                "table": [
                    [
                        ".italic",
                        "font-style: italic;",
                        ""
                    ],
                    [
                        ".not-italic",
                        "font-style: normal;",
                        ""
                    ]
                ]
            },
            {
                "title": "Font Weight",
                "docs": "https://tailwindcss.com/docs/font-weight",
                "description": "Sets the font weight.",
                "table": [
                    [
                        ".font-thin",
                        "font-weight: 100;",
                        ""
                    ],
                    [
                        ".font-extralight",
                        "font-weight: 200;",
                        ""
                    ],
                    [
                        ".font-light",
                        "font-weight: 300;",
                        ""
                    ],
                    [
                        ".font-normal",
                        "font-weight: 400;",
                        ""
                    ],
                    [
                        ".font-medium",
                        "font-weight: 500;",
                        ""
                    ],
                    [
                        ".font-semibold",
                        "font-weight: 600;",
                        ""
                    ],
                    [
                        ".font-bold",
                        "font-weight: 700;",
                        ""
                    ],
                    [
                        ".font-extrabold",
                        "font-weight: 800;",
                        ""
                    ],
                    [
                        ".font-black",
                        "font-weight: 900;",
                        ""
                    ]
                ]
            },
            {
                "title": "Font Variant Numeric",
                "docs": "https://tailwindcss.com/docs/font-variant-numeric",
                "description": "Utilities for controlling the variant of numbers.",
                "table": [
                    [
                        ".normal-nums",
                        "font-variant-numeric: normal;",
                        ""
                    ],
                    [
                        ".ordinal",
                        "font-variant-numeric: ordinal;",
                        ""
                    ],
                    [
                        ".slashed-zero",
                        "font-variant-numeric: slashed-zero;",
                        ""
                    ],
                    [
                        ".lining-nums",
                        "font-variant-numeric: lining-nums;",
                        ""
                    ],
                    [
                        ".oldstyle-nums",
                        "font-variant-numeric: oldstyle-nums;",
                        ""
                    ],
                    [
                        ".proportional-nums",
                        "font-variant-numeric: proportional-nums;",
                        ""
                    ],
                    [
                        ".tabular-nums",
                        "font-variant-numeric: tabular-nums;",
                        ""
                    ],
                    [
                        ".diagonal-fractions",
                        "font-variant-numeric: diagonal-fractions;",
                        ""
                    ],
                    [
                        ".stacked-fractions",
                        "font-variant-numeric: stacked-fractions;",
                        ""
                    ]
                ]
            },
            {
                "title": "Letter Spacing",
                "docs": "https://tailwindcss.com/docs/letter-spacing",
                "description": "Sets the spacing between letters.",
                "table": [
                    [
                        ".tracking-tighter",
                        "letter-spacing: -0.05em;",
                        ""
                    ],
                    [
                        ".tracking-tight",
                        "letter-spacing: -0.025em;",
                        ""
                    ],
                    [
                        ".tracking-normal",
                        "letter-spacing: 0;",
                        ""
                    ],
                    [
                        ".tracking-wide",
                        "letter-spacing: 0.025em;",
                        ""
                    ],
                    [
                        ".tracking-wider",
                        "letter-spacing: 0.05em;",
                        ""
                    ],
                    [
                        ".tracking-widest",
                        "letter-spacing: 0.1em;",
                        ""
                    ]
                ]
            },
            {
                "title": "Line Height",
                "docs": "https://tailwindcss.com/docs/line-height",
                "description": "Sets the line height.",
                "table": [
                    [
                        ".leading-none",
                        "line-height: 1;",
                        ""
                    ],
                    [
                        ".leading-tight",
                        "line-height: 1.25;",
                        ""
                    ],
                    [
                        ".leading-snug",
                        "line-height: 1.375;",
                        ""
                    ],
                    [
                        ".leading-normal",
                        "line-height: 1.5;",
                        ""
                    ],
                    [
                        ".leading-relaxed",
                        "line-height: 1.625;",
                        ""
                    ],
                    [
                        ".leading-loose",
                        "line-height: 2;",
                        ""
                    ],
                    [
                        ".leading-3",
                        "line-height: .75rem;",
                        "12px"
                    ],
                    [
                        ".leading-4",
                        "line-height: 1rem;",
                        "16px"
                    ],
                    [
                        ".leading-5",
                        "line-height: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".leading-6",
                        "line-height: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".leading-7",
                        "line-height: 1.75rem;",
                        "28px"
                    ],
                    [
                        ".leading-8",
                        "line-height: 2rem;",
                        "32px"
                    ],
                    [
                        ".leading-9",
                        "line-height: 2.25rem;",
                        "36px"
                    ],
                    [
                        ".leading-10",
                        "line-height: 2.5rem;",
                        "40px"
                    ]
                ]
            },
            {
                "title": "List Style Type",
                "docs": "https://tailwindcss.com/docs/list-style-type",
                "description": "Sets the bullet style of a list.",
                "table": [
                    [
                        ".list-none",
                        "list-style-type: none;",
                        ""
                    ],
                    [
                        ".list-disc",
                        "list-style-type: disc;",
                        ""
                    ],
                    [
                        ".list-decimal",
                        "list-style-type: decimal;",
                        ""
                    ]
                ]
            },
            {
                "title": "List Style Position",
                "docs": "https://tailwindcss.com/docs/list-style-position",
                "description": "Sets the position of a list's bullets.",
                "table": [
                    [
                        ".list-inside",
                        "list-style-position: inside;",
                        ""
                    ],
                    [
                        ".list-outside",
                        "list-style-position: outside;",
                        ""
                    ]
                ]
            },
            {
                "title": "Placeholder Color",
                "docs": "https://tailwindcss.com/docs/placeholder-color",
                "description": "Sets the placeholder color using the ::placeholder pseudo element.",
                "table": [
                    [
                        "transparent",
                        ".placeholder-transparent",
                        "color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".placeholder-current",
                        "color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".placeholder-black",
                        "color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".placeholder-white",
                        "color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".placeholder-gray-50",
                        "color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".placeholder-gray-100",
                        "color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".placeholder-gray-200",
                        "color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".placeholder-gray-300",
                        "color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".placeholder-gray-400",
                        "color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".placeholder-gray-500",
                        "color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".placeholder-gray-600",
                        "color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".placeholder-gray-700",
                        "color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".placeholder-gray-800",
                        "color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".placeholder-gray-900",
                        "color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".placeholder-red-50",
                        "color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".placeholder-red-100",
                        "color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".placeholder-red-200",
                        "color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".placeholder-red-300",
                        "color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".placeholder-red-400",
                        "color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".placeholder-red-500",
                        "color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".placeholder-red-600",
                        "color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".placeholder-red-700",
                        "color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".placeholder-red-800",
                        "color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".placeholder-red-900",
                        "color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".placeholder-yellow-50",
                        "color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".placeholder-yellow-100",
                        "color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".placeholder-yellow-200",
                        "color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".placeholder-yellow-300",
                        "color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".placeholder-yellow-400",
                        "color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".placeholder-yellow-500",
                        "color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".placeholder-yellow-600",
                        "color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".placeholder-yellow-700",
                        "color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".placeholder-yellow-800",
                        "color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".placeholder-yellow-900",
                        "color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".placeholder-green-50",
                        "color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".placeholder-green-100",
                        "color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".placeholder-green-200",
                        "color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".placeholder-green-300",
                        "color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".placeholder-green-400",
                        "color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".placeholder-green-500",
                        "color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".placeholder-green-600",
                        "color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".placeholder-green-700",
                        "color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".placeholder-green-800",
                        "color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".placeholder-green-900",
                        "color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".placeholder-blue-50",
                        "color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".placeholder-blue-100",
                        "color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".placeholder-blue-200",
                        "color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".placeholder-blue-300",
                        "color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".placeholder-blue-400",
                        "color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".placeholder-blue-500",
                        "color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".placeholder-blue-600",
                        "color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".placeholder-blue-700",
                        "color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".placeholder-blue-800",
                        "color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".placeholder-blue-900",
                        "color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".placeholder-indigo-50",
                        "color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".placeholder-indigo-100",
                        "color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".placeholder-indigo-200",
                        "color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".placeholder-indigo-300",
                        "color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".placeholder-indigo-400",
                        "color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".placeholder-indigo-500",
                        "color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".placeholder-indigo-600",
                        "color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".placeholder-indigo-700",
                        "color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".placeholder-indigo-800",
                        "color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".placeholder-indigo-900",
                        "color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".placeholder-purple-50",
                        "color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".placeholder-purple-100",
                        "color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".placeholder-purple-200",
                        "color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".placeholder-purple-300",
                        "color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".placeholder-purple-400",
                        "color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".placeholder-purple-500",
                        "color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".placeholder-purple-600",
                        "color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".placeholder-purple-700",
                        "color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".placeholder-purple-800",
                        "color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".placeholder-purple-900",
                        "color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".placeholder-pink-50",
                        "color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".placeholder-pink-100",
                        "color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".placeholder-pink-200",
                        "color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".placeholder-pink-300",
                        "color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".placeholder-pink-400",
                        "color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".placeholder-pink-500",
                        "color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".placeholder-pink-600",
                        "color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".placeholder-pink-700",
                        "color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".placeholder-pink-800",
                        "color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".placeholder-pink-900",
                        "color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Placeholder Opacity",
                "docs": "https://tailwindcss.com/docs/placeholder-opacity",
                "description": "Sets the placeholder opacity using the ::placeholder pseudo element.",
                "table": [
                    [
                        ".placeholder-opacity-0",
                        "placeholder-opacity: 0;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-5",
                        "placeholder-opacity: 0.05;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-10",
                        "placeholder-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-20",
                        "placeholder-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-25",
                        "placeholder-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-30",
                        "placeholder-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-40",
                        "placeholder-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-50",
                        "placeholder-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-60",
                        "placeholder-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-70",
                        "placeholder-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-75",
                        "placeholder-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-80",
                        "placeholder-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-90",
                        "placeholder-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".placeholder-opacity-100",
                        "placeholder-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Text Align",
                "docs": "https://tailwindcss.com/docs/text-alignment",
                "description": "Sets the alignment of text.",
                "table": [
                    [
                        ".text-left",
                        "text-align: left;",
                        ""
                    ],
                    [
                        ".text-center",
                        "text-align: center;",
                        ""
                    ],
                    [
                        ".text-right",
                        "text-align: right;",
                        ""
                    ],
                    [
                        ".text-justify",
                        "text-align: justify;",
                        ""
                    ]
                ]
            },
            {
                "title": "Text Decoration",
                "docs": "https://tailwindcss.com/docs/text-decoration",
                "description": "Utilities for controlling the decoration of text.",
                "table": [
                    [
                        ".underline",
                        "text-decoration: underline;",
                        ""
                    ],
                    [
                        ".line-through",
                        "text-decoration: line-through;",
                        ""
                    ],
                    [
                        ".no-underline",
                        "text-decoration: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Text Transform",
                "docs": "https://tailwindcss.com/docs/text-transform",
                "description": "Utilities for controlling the transformation of text.",
                "table": [
                    [
                        ".uppercase",
                        "text-transform: uppercase;",
                        ""
                    ],
                    [
                        ".lowercase",
                        "text-transform: lowercase;",
                        ""
                    ],
                    [
                        ".capitalize",
                        "text-transform: capitalize;",
                        ""
                    ],
                    [
                        ".normal-case",
                        "text-transform: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Text Overflow",
                "docs": "https://tailwindcss.com/docs/text-overflow",
                "description": "Utilities for controlling text overflow in an element.",
                "table": [
                    [
                        ".truncate",
                        "overflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;",
                        ""
                    ],
                    [
                        ".overflow-ellipsis",
                        "text-overflow: ellipsis;",
                        ""
                    ],
                    [
                        ".overflow-clip",
                        "text-overflow: clip;",
                        ""
                    ]
                ]
            },
            {
                "title": "Vertical Align",
                "docs": "https://tailwindcss.com/docs/vertical-alignment",
                "description": "Sets the vertical alignment of an inline or table-cell box.",
                "table": [
                    [
                        ".align-baseline",
                        "vertical-align: baseline;",
                        ""
                    ],
                    [
                        ".align-top",
                        "vertical-align: top;",
                        ""
                    ],
                    [
                        ".align-middle",
                        "vertical-align: middle;",
                        ""
                    ],
                    [
                        ".align-bottom",
                        "vertical-align: bottom;",
                        ""
                    ],
                    [
                        ".align-text-top",
                        "vertical-align: text-top;",
                        ""
                    ],
                    [
                        ".align-text-bottom",
                        "vertical-align: text-bottom;",
                        ""
                    ]
                ]
            },
            {
                "title": "White Space",
                "docs": "https://tailwindcss.com/docs/whitespace",
                "description": "Sets the whitespace of an element.",
                "table": [
                    [
                        ".whitespace-normal",
                        "white-space: normal;",
                        ""
                    ],
                    [
                        ".whitespace-nowrap",
                        "white-space: nowrap;",
                        ""
                    ],
                    [
                        ".whitespace-pre",
                        "white-space: pre;",
                        ""
                    ],
                    [
                        ".whitespace-pre-line",
                        "white-space: pre-line;",
                        ""
                    ],
                    [
                        ".whitespace-pre-wrap",
                        "white-space: pre-wrap;",
                        ""
                    ]
                ]
            },
            {
                "title": "Word Break",
                "docs": "https://tailwindcss.com/docs/word-break",
                "description": "Sets the word breaks of an element.",
                "table": [
                    [
                        ".break-normal",
                        "overflow-wrap: normal;\nword-break: normal;",
                        ""
                    ],
                    [
                        ".break-words",
                        "overflow-wrap: break-word;",
                        ""
                    ],
                    [
                        ".break-all",
                        "word-break: break-all;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Flexbox",
        "content": [
            // {
            //     "title": "Display",
            //     "docs": "https://tailwindcss.com/docs/display",
            //     "description": "Sets element to be a flex container.",
            //     "table": [
            //         [
            //             ".flex",
            //             "display: flex;",
            //             ""
            //         ],
            //         [
            //             ".inline-flex",
            //             "display: inline-flex;",
            //             ""
            //         ]
            //     ]
            // },
            {
                "title": "Flex Direction",
                "docs": "https://tailwindcss.com/docs/flexbox-direction",
                "description": "Sets direction of flex items.",
                "table": [
                    [
                        ".flex-row",
                        "flex-direction: row;",
                        ""
                    ],
                    [
                        ".flex-row-reverse",
                        "flex-direction: row-reverse;",
                        ""
                    ],
                    [
                        ".flex-col",
                        "flex-direction: column;",
                        ""
                    ],
                    [
                        ".flex-col-reverse",
                        "flex-direction: column-reverse;",
                        ""
                    ]
                ]
            },
            {
                "title": "Flex Wrap",
                "docs": "https://tailwindcss.com/docs/flexbox-wrapping",
                "description": "Creates how flex items wrap.",
                "table": [
                    [
                        ".flex-nowrap",
                        "flex-wrap: nowrap;",
                        ""
                    ],
                    [
                        ".flex-wrap",
                        "flex-wrap: wrap;",
                        ""
                    ],
                    [
                        ".flex-wrap-reverse",
                        "flex-wrap: wrap-reverse;",
                        ""
                    ]
                ]
            },
            {
                "title": "Flex",
                "docs": "https://tailwindcss.com/docs/flex",
                "description": "Controls how flex items grow and shrink.",
                "table": [
                    [
                        ".flex-1",
                        "flex: 1 1 0%;",
                        ""
                    ],
                    [
                        ".flex-auto",
                        "flex: 1 1 auto;",
                        ""
                    ],
                    [
                        ".flex-initial",
                        "flex: 0 1 auto;",
                        ""
                    ],
                    [
                        ".flex-none",
                        "flex: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Flex Grow",
                "docs": "https://tailwindcss.com/docs/flex-grow",
                "description": "Controls how flex items grow.",
                "table": [
                    [
                        ".flex-grow",
                        "flex-grow: 1;",
                        ""
                    ],
                    [
                        ".flex-grow-0",
                        "flex-grow: 0;",
                        ""
                    ]
                ]
            },
            {
                "title": "Flex Shrink",
                "docs": "https://tailwindcss.com/docs/flex-shrink",
                "description": "Controls how flex items shrink.",
                "table": [
                    [
                        ".flex-shrink",
                        "flex-shrink: 1;",
                        ""
                    ],
                    [
                        ".flex-shrink-0",
                        "flex-shrink: 0;",
                        ""
                    ]
                ]
            },
            {
                "title": "Order",
                "docs": "https://tailwindcss.com/docs/order",
                "description": "Controls how flex items are ordered.",
                "table": [
                    [
                        ".order-first",
                        "order: -9999;",
                        ""
                    ],
                    [
                        ".order-last",
                        "order: 9999;",
                        ""
                    ],
                    [
                        ".order-none",
                        "order: 0;",
                        ""
                    ],
                    [
                        ".order-1",
                        "order: 1;",
                        ""
                    ],
                    [
                        ".order-2",
                        "order: 2;",
                        ""
                    ],
                    [
                        ".order-3",
                        "order: 3;",
                        ""
                    ],
                    [
                        ".order-4",
                        "order: 4;",
                        ""
                    ],
                    [
                        ".order-5",
                        "order: 5;",
                        ""
                    ],
                    [
                        ".order-6",
                        "order: 6;",
                        ""
                    ],
                    [
                        ".order-7",
                        "order: 7;",
                        ""
                    ],
                    [
                        ".order-8",
                        "order: 8;",
                        ""
                    ],
                    [
                        ".order-9",
                        "order: 9;",
                        ""
                    ],
                    [
                        ".order-10",
                        "order: 10;",
                        ""
                    ],
                    [
                        ".order-11",
                        "order: 11;",
                        ""
                    ],
                    [
                        ".order-12",
                        "order: 12;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Box Alignment",
        "content": [
            {
                "title": "Justify Content",
                "docs": "https://tailwindcss.com/docs/justify-content",
                "description": "Utilities for controlling how flex and grid items are positioned along a container's main axis.",
                "table": [
                    [
                        ".justify-start",
                        "justify-content: flex-start;",
                        ""
                    ],
                    [
                        ".justify-center",
                        "justify-content: center;",
                        ""
                    ],
                    [
                        ".justify-end",
                        "justify-content: flex-end;",
                        ""
                    ],
                    [
                        ".justify-between",
                        "justify-content: space-between;",
                        ""
                    ],
                    [
                        ".justify-around",
                        "justify-content: space-around;",
                        ""
                    ],
                    [
                        ".justify-evenly",
                        "justify-content: space-evenly;",
                        ""
                    ]
                ]
            },
            {
                "title": "Justify Items",
                "docs": "https://tailwindcss.com/docs/justify-items",
                "description": "Utilities for controlling how grid items are aligned along their inline axis.",
                "table": [
                    [
                        ".justify-items-stretch",
                        "justify-items: stretch;",
                        ""
                    ],
                    [
                        ".justify-items-start",
                        "justify-items: start;",
                        ""
                    ],
                    [
                        ".justify-items-center",
                        "justify-items: center;",
                        ""
                    ],
                    [
                        ".justify-items-end",
                        "justify-items: end;",
                        ""
                    ],
                    [
                        ".justify-items-auto",
                        "justify-items: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Justify Self",
                "docs": "https://tailwindcss.com/docs/justify-self",
                "description": "Utilities for controlling how an individual grid item is aligned along its inline axis.",
                "table": [
                    [
                        ".justify-self-stretch",
                        "justify-self: stretch;",
                        ""
                    ],
                    [
                        ".justify-self-start",
                        "justify-self: start;",
                        ""
                    ],
                    [
                        ".justify-self-center",
                        "justify-self: center;",
                        ""
                    ],
                    [
                        ".justify-self-end",
                        "justify-self: end;",
                        ""
                    ],
                    [
                        ".justify-self-auto",
                        "justify-self: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Align Content",
                "docs": "https://tailwindcss.com/docs/align-content",
                "description": "Utilities for controlling how rows are positioned in multi-row flex and grid containers.",
                "table": [
                    [
                        ".content-start",
                        "align-content: flex-start;",
                        ""
                    ],
                    [
                        ".content-center",
                        "align-content: center;",
                        ""
                    ],
                    [
                        ".content-end",
                        "align-content: flex-end;",
                        ""
                    ],
                    [
                        ".content-between",
                        "align-content: space-between;",
                        ""
                    ],
                    [
                        ".content-around",
                        "align-content: space-around;",
                        ""
                    ],
                    [
                        ".content-evenly",
                        "align-content: space-evenly;",
                        ""
                    ]
                ]
            },
            {
                "title": "Align Items",
                "docs": "https://tailwindcss.com/docs/flexbox-align-items",
                "description": "Sets flex items position along a contrainer's cross axis.",
                "table": [
                    [
                        ".items-stretch",
                        "align-items: stretch;",
                        ""
                    ],
                    [
                        ".items-start",
                        "align-items: flex-start;",
                        ""
                    ],
                    [
                        ".items-center",
                        "align-items: center;",
                        ""
                    ],
                    [
                        ".items-end",
                        "align-items: flex-end;",
                        ""
                    ],
                    [
                        ".items-baseline",
                        "align-items: baseline;",
                        ""
                    ]
                ]
            },
            {
                "title": "Align Self",
                "docs": "https://tailwindcss.com/docs/flexbox-align-self",
                "description": "Controls how an individual flex item is positioned along container's cross axis.",
                "table": [
                    [
                        ".self-auto",
                        "align-self: auto;",
                        ""
                    ],
                    [
                        ".self-start",
                        "align-self: flex-start;",
                        ""
                    ],
                    [
                        ".self-center",
                        "align-self: center;",
                        ""
                    ],
                    [
                        ".self-end",
                        "align-self: flex-end;",
                        ""
                    ],
                    [
                        ".self-stretch",
                        "align-self: stretch;",
                        ""
                    ]
                ]
            },
            {
                "title": "Place Content",
                "docs": "https://tailwindcss.com/docs/place-content",
                "description": "Utilities for controlling how content is justified and aligned at the same time.",
                "table": [
                    [
                        ".place-content-start",
                        "place-content: start;",
                        ""
                    ],
                    [
                        ".place-content-center",
                        "place-content: center;",
                        ""
                    ],
                    [
                        ".place-content-end",
                        "place-content: end;",
                        ""
                    ],
                    [
                        ".place-content-between",
                        "place-content: space-between;",
                        ""
                    ],
                    [
                        ".place-content-around",
                        "place-content: space-around;",
                        ""
                    ],
                    [
                        ".place-content-evenly",
                        "place-content: space-evenly;",
                        ""
                    ]
                ]
            },
            {
                "title": "Place Items",
                "docs": "https://tailwindcss.com/docs/place-items",
                "description": "Utilities for controlling how items are justified and aligned at the same time.",
                "table": [
                    [
                        ".place-items-stretch",
                        "place-items: stretch;",
                        ""
                    ],
                    [
                        ".place-items-start",
                        "place-items: start;",
                        ""
                    ],
                    [
                        ".place-items-center",
                        "place-items: center;",
                        ""
                    ],
                    [
                        ".place-items-end",
                        "place-items: end;",
                        ""
                    ]
                ]
            },
            {
                "title": "Place Self",
                "docs": "https://tailwindcss.com/docs/place-self",
                "description": "Utilities for controlling how an individual item is justified and aligned at the same time.",
                "table": [
                    [
                        ".place-self-auto",
                        "place-self: auto;",
                        ""
                    ],
                    [
                        ".place-self-start",
                        "place-self: start;",
                        ""
                    ],
                    [
                        ".place-self-center",
                        "place-self: center;",
                        ""
                    ],
                    [
                        ".place-self-end",
                        "place-self: end;",
                        ""
                    ],
                    [
                        ".place-self-stretch",
                        "place-self: stretch;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Sizing",
        "content": [
            {
                "title": "Width",
                "docs": "https://tailwindcss.com/docs/width",
                "description": "",
                "table": [
                    [
                        ".w-0",
                        "width: 0;",
                        ""
                    ],
                    [
                        ".w-0.5",
                        "width: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".w-1",
                        "width: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".w-1.5",
                        "width: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".w-2",
                        "width: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".w-2.5",
                        "width: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".w-3",
                        "width: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".w-3.5",
                        "width: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".w-4",
                        "width: 1rem;",
                        "16px"
                    ],
                    [
                        ".w-5",
                        "width: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".w-6",
                        "width: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".w-8",
                        "width: 2rem;",
                        "32px"
                    ],
                    [
                        ".w-10",
                        "width: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".w-11",
                        "width: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".w-12",
                        "width: 3rem;",
                        "48px"
                    ],
                    [
                        ".w-14",
                        "width: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".w-16",
                        "width: 4rem;",
                        "64px"
                    ],
                    [
                        ".w-20",
                        "width: 5rem;",
                        "80px"
                    ],
                    [
                        ".w-24",
                        "width: 6rem;",
                        "96px"
                    ],
                    [
                        ".w-28",
                        "width: 7rem;",
                        "112px"
                    ],
                    [
                        ".w-32",
                        "width: 8rem;",
                        "128px"
                    ],
                    [
                        ".w-36",
                        "width: 9rem;",
                        "144px"
                    ],
                    [
                        ".w-40",
                        "width: 10rem;",
                        "160px"
                    ],
                    [
                        ".w-44",
                        "width: 11rem;",
                        "176px"
                    ],
                    [
                        ".w-48",
                        "width: 12rem;",
                        "192px"
                    ],
                    [
                        ".w-52",
                        "width: 13rem;",
                        "208px"
                    ],
                    [
                        ".w-56",
                        "width: 14rem;",
                        "224px"
                    ],
                    [
                        ".w-64",
                        "width: 16rem;",
                        "256px"
                    ],
                    [
                        ".w-72",
                        "width: 18rem;",
                        "288px"
                    ],
                    [
                        ".w-80",
                        "width: 20rem;",
                        "320px"
                    ],
                    [
                        ".w-96",
                        "width: 24rem;",
                        "384px"
                    ],
                    [
                        ".w-px",
                        "width: 1px;",
                        ""
                    ],
                    [
                        ".w-auto",
                        "width: auto;",
                        ""
                    ],
                    [
                        ".w-1/2",
                        "width: 50%;",
                        ""
                    ],
                    [
                        ".w-1/3",
                        "width: 33.333333%;",
                        ""
                    ],
                    [
                        ".w-2/3",
                        "width: 66.666667%;",
                        ""
                    ],
                    [
                        ".w-1/4",
                        "width: 25%;",
                        ""
                    ],
                    [
                        ".w-1/8",
                        "width: 12,5%;",
                        ""
                    ],
                    [
                        ".w-2/4",
                        "width: 50%;",
                        ""
                    ],
                    [
                        ".w-3/4",
                        "width: 75%;",
                        ""
                    ],
                    [
                        ".w-1/5",
                        "width: 20%;",
                        ""
                    ],
                    [
                        ".w-2/5",
                        "width: 40%;",
                        ""
                    ],
                    [
                        ".w-3/5",
                        "width: 60%;",
                        ""
                    ],
                    [
                        ".w-4/5",
                        "width: 80%;",
                        ""
                    ],
                    [
                        ".w-1/6",
                        "width: 16.666667%;",
                        ""
                    ],
                    [
                        ".w-2/6",
                        "width: 33.333333%;",
                        ""
                    ],
                    [
                        ".w-3/6",
                        "width: 50%;",
                        ""
                    ],
                    [
                        ".w-4/6",
                        "width: 66.666667%;",
                        ""
                    ],
                    [
                        ".w-5/6",
                        "width: 83.333333%;",
                        ""
                    ],
                    [
                        ".w-1/12",
                        "width: 8.333333%;",
                        ""
                    ],
                    [
                        ".w-2/12",
                        "width: 16.666667%;",
                        ""
                    ],
                    [
                        ".w-3/12",
                        "width: 25%;",
                        ""
                    ],
                    [
                        ".w-4/12",
                        "width: 33.333333%;",
                        ""
                    ],
                    [
                        ".w-5/12",
                        "width: 41.666667%;",
                        ""
                    ],
                    [
                        ".w-6/12",
                        "width: 50%;",
                        ""
                    ],
                    [
                        ".w-7/12",
                        "width: 58.333333%;",
                        ""
                    ],
                    [
                        ".w-8/12",
                        "width: 66.666667%;",
                        ""
                    ],
                    [
                        ".w-9/12",
                        "width: 75%;",
                        ""
                    ],
                    [
                        ".w-10/12",
                        "width: 83.333333%;",
                        ""
                    ],
                    [
                        ".w-11/12",
                        "width: 91.666667%;",
                        ""
                    ],
                    [
                        ".w-full",
                        "width: 100%;",
                        ""
                    ],
                    [
                        ".w-screen",
                        "width: 100vw;",
                        ""
                    ],
                    [
                        ".w-min",
                        "width: min-content;",
                        ""
                    ],
                    [
                        ".w-max",
                        "width: max-content;",
                        ""
                    ]
                ]
            },
            {
                "title": "Min Width",
                "docs": "https://tailwindcss.com/docs/min-width",
                "description": "Sets the minimum width of an element.",
                "table": [
                    [
                        ".min-w-0",
                        "min-width: 0;",
                        ""
                    ],
                    [
                        ".min-w-full",
                        "min-width: 100%;",
                        ""
                    ],
                    [
                        ".min-w-min",
                        "min-width: min-content;",
                        ""
                    ],
                    [
                        ".min-w-max",
                        "min-width: max-content;",
                        ""
                    ]
                ]
            },
            {
                "title": "Max Width",
                "docs": "https://tailwindcss.com/docs/max-width",
                "description": "Sets the maxiumum width of an element.",
                "table": [
                    [
                        ".max-w-0",
                        "max-width: 0rem;",
                        ""
                    ],
                    [
                        ".max-w-none",
                        "max-width: none;",
                        ""
                    ],
                    [
                        ".max-w-xs",
                        "max-width: 20rem;",
                        "320px"
                    ],
                    [
                        ".max-w-sm",
                        "max-width: 24rem;",
                        "384px"
                    ],
                    [
                        ".max-w-md",
                        "max-width: 28rem;",
                        "448px"
                    ],
                    [
                        ".max-w-lg",
                        "max-width: 32rem;",
                        "512px"
                    ],
                    [
                        ".max-w-xl",
                        "max-width: 36rem;",
                        "576px"
                    ],
                    [
                        ".max-w-2xl",
                        "max-width: 42rem;",
                        "672px"
                    ],
                    [
                        ".max-w-3xl",
                        "max-width: 48rem;",
                        "768px"
                    ],
                    [
                        ".max-w-4xl",
                        "max-width: 56rem;",
                        "896px"
                    ],
                    [
                        ".max-w-5xl",
                        "max-width: 64rem;",
                        "1024px"
                    ],
                    [
                        ".max-w-6xl",
                        "max-width: 72rem;",
                        "1152px"
                    ],
                    [
                        ".max-w-7xl",
                        "max-width: 80rem;",
                        "1280px"
                    ],
                    [
                        ".max-w-full",
                        "max-width: 100%;",
                        ""
                    ],
                    [
                        ".max-w-min",
                        "max-width: min-content;",
                        ""
                    ],
                    [
                        ".max-w-max",
                        "max-width: max-content;",
                        ""
                    ],
                    [
                        ".max-w-prose",
                        "max-width: 65ch;",
                        ""
                    ],
                    [
                        ".max-w-screen-sm",
                        "max-width: 640px;",
                        ""
                    ],
                    [
                        ".max-w-screen-md",
                        "max-width: 768px;",
                        ""
                    ],
                    [
                        ".max-w-screen-lg",
                        "max-width: 1024px;",
                        ""
                    ],
                    [
                        ".max-w-screen-xl",
                        "max-width: 1280px;",
                        ""
                    ],
                    [
                        ".max-w-screen-2xl",
                        "max-width: 1536px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Height",
                "docs": "https://tailwindcss.com/docs/height",
                "description": "",
                "table": [
                    [
                        ".h-0",
                        "height: 0;",
                        ""
                    ],
                    [
                        ".h-0.5",
                        "height: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".h-1",
                        "height: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".h-1.5",
                        "height: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".h-2",
                        "height: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".h-2.5",
                        "height: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".h-3",
                        "height: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".h-3.5",
                        "height: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".h-4",
                        "height: 1rem;",
                        "16px"
                    ],
                    [
                        ".h-5",
                        "height: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".h-6",
                        "height: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".h-8",
                        "height: 2rem;",
                        "32px"
                    ],
                    [
                        ".h-10",
                        "height: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".h-11",
                        "height: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".h-12",
                        "height: 3rem;",
                        "48px"
                    ],
                    [
                        ".h-14",
                        "height: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".h-16",
                        "height: 4rem;",
                        "64px"
                    ],
                    [
                        ".h-20",
                        "height: 5rem;",
                        "80px"
                    ],
                    [
                        ".h-24",
                        "height: 6rem;",
                        "96px"
                    ],
                    [
                        ".h-28",
                        "height: 7rem;",
                        "112px"
                    ],
                    [
                        ".h-32",
                        "height: 8rem;",
                        "128px"
                    ],
                    [
                        ".h-36",
                        "height: 9rem;",
                        "144px"
                    ],
                    [
                        ".h-40",
                        "height: 10rem;",
                        "160px"
                    ],
                    [
                        ".h-44",
                        "height: 11rem;",
                        "176px"
                    ],
                    [
                        ".h-48",
                        "height: 12rem;",
                        "192px"
                    ],
                    [
                        ".h-52",
                        "height: 13rem;",
                        "208px"
                    ],
                    [
                        ".h-56",
                        "height: 14rem;",
                        "224px"
                    ],
                    [
                        ".h-64",
                        "height: 16rem;",
                        "256px"
                    ],
                    [
                        ".h-72",
                        "height: 18rem;",
                        "288px"
                    ],
                    [
                        ".h-80",
                        "height: 20rem;",
                        "320px"
                    ],
                    [
                        ".h-96",
                        "height: 24rem;",
                        "384px"
                    ],
                    [
                        ".h-px",
                        "height: 1px;",
                        ""
                    ],
                    [
                        ".h-auto",
                        "height: auto;",
                        ""
                    ],
                    [
                        ".h-1/2",
                        "height: 50%;",
                        ""
                    ],
                    [
                        ".h-1/3",
                        "height: 33.333333%;",
                        ""
                    ],
                    [
                        ".h-2/3",
                        "height: 66.666667%;",
                        ""
                    ],
                    [
                        ".h-1/4",
                        "height: 25%;",
                        ""
                    ],
                    [
                        ".h-2/4",
                        "height: 50%;",
                        ""
                    ],
                    [
                        ".h-3/4",
                        "height: 75%;",
                        ""
                    ],
                    [
                        ".h-1/5",
                        "height: 20%;",
                        ""
                    ],
                    [
                        ".h-2/5",
                        "height: 40%;",
                        ""
                    ],
                    [
                        ".h-3/5",
                        "height: 60%;",
                        ""
                    ],
                    [
                        ".h-4/5",
                        "height: 80%;",
                        ""
                    ],
                    [
                        ".h-1/6",
                        "height: 16.666667%;",
                        ""
                    ],
                    [
                        ".h-2/6",
                        "height: 33.333333%;",
                        ""
                    ],
                    [
                        ".h-3/6",
                        "height: 50%;",
                        ""
                    ],
                    [
                        ".h-4/6",
                        "height: 66.666667%;",
                        ""
                    ],
                    [
                        ".h-5/6",
                        "height: 83.333333%;",
                        ""
                    ],
                    [
                        ".h-full",
                        "height: 100%;",
                        ""
                    ],
                    [
                        ".h-screen",
                        "height: 100vh;",
                        ""
                    ]
                ]
            },
            {
                "title": "Min Height",
                "docs": "https://tailwindcss.com/docs/min-height",
                "description": "Sets the minimum height of an element.",
                "table": [
                    [
                        ".min-h-0",
                        "min-height: 0;",
                        ""
                    ],
                    [
                        ".min-h-full",
                        "min-height: 100%;",
                        ""
                    ],
                    [
                        ".min-h-screen",
                        "min-height: 100vh;",
                        ""
                    ]
                ]
            },
            {
                "title": "Max Height",
                "docs": "https://tailwindcss.com/docs/max-height",
                "description": "Sets the maxiumum height of an element.",
                "table": [
                    [
                        ".max-h-0",
                        "max-height: 0;",
                        ""
                    ],
                    [
                        ".max-h-0.5",
                        "max-height: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".max-h-1",
                        "max-height: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".max-h-1.5",
                        "max-height: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".max-h-2",
                        "max-height: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".max-h-2.5",
                        "max-height: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".max-h-3",
                        "max-height: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".max-h-3.5",
                        "max-height: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".max-h-4",
                        "max-height: 1rem;",
                        "16px"
                    ],
                    [
                        ".max-h-5",
                        "max-height: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".max-h-6",
                        "max-height: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".max-h-8",
                        "max-height: 2rem;",
                        "32px"
                    ],
                    [
                        ".max-h-10",
                        "max-height: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".max-h-11",
                        "max-height: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".max-h-12",
                        "max-height: 3rem;",
                        "48px"
                    ],
                    [
                        ".max-h-14",
                        "max-height: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".max-h-16",
                        "max-height: 4rem;",
                        "64px"
                    ],
                    [
                        ".max-h-20",
                        "max-height: 5rem;",
                        "80px"
                    ],
                    [
                        ".max-h-24",
                        "max-height: 6rem;",
                        "96px"
                    ],
                    [
                        ".max-h-28",
                        "max-height: 7rem;",
                        "112px"
                    ],
                    [
                        ".max-h-32",
                        "max-height: 8rem;",
                        "128px"
                    ],
                    [
                        ".max-h-36",
                        "max-height: 9rem;",
                        "144px"
                    ],
                    [
                        ".max-h-40",
                        "max-height: 10rem;",
                        "160px"
                    ],
                    [
                        ".max-h-44",
                        "max-height: 11rem;",
                        "176px"
                    ],
                    [
                        ".max-h-48",
                        "max-height: 12rem;",
                        "192px"
                    ],
                    [
                        ".max-h-52",
                        "max-height: 13rem;",
                        "208px"
                    ],
                    [
                        ".max-h-56",
                        "max-height: 14rem;",
                        "224px"
                    ],
                    [
                        ".max-h-64",
                        "max-height: 16rem;",
                        "256px"
                    ],
                    [
                        ".max-h-72",
                        "max-height: 18rem;",
                        "288px"
                    ],
                    [
                        ".max-h-80",
                        "max-height: 20rem;",
                        "320px"
                    ],
                    [
                        ".max-h-96",
                        "max-height: 24rem;",
                        "384px"
                    ],
                    [
                        ".max-h-px",
                        "max-height: 1px;",
                        ""
                    ],
                    [
                        ".max-h-full",
                        "max-height: 100%;",
                        ""
                    ],
                    [
                        ".max-h-screen",
                        "max-height: 100vh;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Borders",
        "content": [
            {
                "title": "Border Radius",
                "docs": "https://tailwindcss.com/docs/border-radius",
                "description": "Sets border radius.",
                "table": [
                    [
                        ".rounded-none",
                        "border-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-sm",
                        "border-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded",
                        "border-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-md",
                        "border-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-lg",
                        "border-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-xl",
                        "border-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-2xl",
                        "border-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-3xl",
                        "border-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-full",
                        "border-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-t-none",
                        "border-top-left-radius: 0;\nborder-top-right-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-r-none",
                        "border-top-right-radius: 0;\nborder-bottom-right-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-b-none",
                        "border-bottom-right-radius: 0;\nborder-bottom-left-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-l-none",
                        "border-top-left-radius: 0;\nborder-bottom-left-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-t-sm",
                        "border-top-left-radius: 0.125rem;\nborder-top-right-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-r-sm",
                        "border-top-right-radius: 0.125rem;\nborder-bottom-right-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-b-sm",
                        "border-bottom-right-radius: 0.125rem;\nborder-bottom-left-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-l-sm",
                        "border-top-left-radius: 0.125rem;\nborder-bottom-left-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-t",
                        "border-top-left-radius: 0.25rem;\nborder-top-right-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-r",
                        "border-top-right-radius: 0.25rem;\nborder-bottom-right-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-b",
                        "border-bottom-right-radius: 0.25rem;\nborder-bottom-left-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-l",
                        "border-top-left-radius: 0.25rem;\nborder-bottom-left-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-t-md",
                        "border-top-left-radius: 0.375rem;\nborder-top-right-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-r-md",
                        "border-top-right-radius: 0.375rem;\nborder-bottom-right-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-b-md",
                        "border-bottom-right-radius: 0.375rem;\nborder-bottom-left-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-l-md",
                        "border-top-left-radius: 0.375rem;\nborder-bottom-left-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-t-lg",
                        "border-top-left-radius: 0.5rem;\nborder-top-right-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-r-lg",
                        "border-top-right-radius: 0.5rem;\nborder-bottom-right-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-b-lg",
                        "border-bottom-right-radius: 0.5rem;\nborder-bottom-left-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-l-lg",
                        "border-top-left-radius: 0.5rem;\nborder-bottom-left-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-t-xl",
                        "border-top-left-radius: 0.75rem;\nborder-top-right-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-r-xl",
                        "border-top-right-radius: 0.75rem;\nborder-bottom-right-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-b-xl",
                        "border-bottom-right-radius: 0.75rem;\nborder-bottom-left-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-l-xl",
                        "border-top-left-radius: 0.75rem;\nborder-bottom-left-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-t-2xl",
                        "border-top-left-radius: 1rem;\nborder-top-right-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-r-2xl",
                        "border-top-right-radius: 1rem;\nborder-bottom-right-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-b-2xl",
                        "border-bottom-right-radius: 1rem;\nborder-bottom-left-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-l-2xl",
                        "border-top-left-radius: 1rem;\nborder-bottom-left-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-t-3xl",
                        "border-top-left-radius: 1.5rem;\nborder-top-right-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-r-3xl",
                        "border-top-right-radius: 1.5rem;\nborder-bottom-right-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-b-3xl",
                        "border-bottom-right-radius: 1.5rem;\nborder-bottom-left-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-l-3xl",
                        "border-top-left-radius: 1.5rem;\nborder-bottom-left-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-t-full",
                        "border-top-left-radius: 9999px;\nborder-top-right-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-r-full",
                        "border-top-right-radius: 9999px;\nborder-bottom-right-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-b-full",
                        "border-bottom-right-radius: 9999px;\nborder-bottom-left-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-l-full",
                        "border-top-left-radius: 9999px;\nborder-bottom-left-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-tl-none",
                        "border-top-left-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-tr-none",
                        "border-top-right-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-br-none",
                        "border-bottom-right-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-bl-none",
                        "border-bottom-left-radius: 0;",
                        ""
                    ],
                    [
                        ".rounded-tl-sm",
                        "border-top-left-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-tr-sm",
                        "border-top-right-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-br-sm",
                        "border-bottom-right-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-bl-sm",
                        "border-bottom-left-radius: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".rounded-tl",
                        "border-top-left-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-tr",
                        "border-top-right-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-br",
                        "border-bottom-right-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-bl",
                        "border-bottom-left-radius: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".rounded-tl-md",
                        "border-top-left-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-tr-md",
                        "border-top-right-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-br-md",
                        "border-bottom-right-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-bl-md",
                        "border-bottom-left-radius: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".rounded-tl-lg",
                        "border-top-left-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-tr-lg",
                        "border-top-right-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-br-lg",
                        "border-bottom-right-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-bl-lg",
                        "border-bottom-left-radius: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".rounded-tl-xl",
                        "border-top-left-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-tr-xl",
                        "border-top-right-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-br-xl",
                        "border-bottom-right-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-bl-xl",
                        "border-bottom-left-radius: 0.75rem;",
                        "10px"
                    ],
                    [
                        ".rounded-tl-2xl",
                        "border-top-left-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-tr-2xl",
                        "border-top-right-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-br-2xl",
                        "border-bottom-right-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-bl-2xl",
                        "border-bottom-left-radius: 1rem;",
                        "12px"
                    ],
                    [
                        ".rounded-tl-3xl",
                        "border-top-left-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-tr-3xl",
                        "border-top-right-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-br-3xl",
                        "border-bottom-right-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-bl-3xl",
                        "border-bottom-left-radius: 1.5rem;",
                        "16px"
                    ],
                    [
                        ".rounded-tl-full",
                        "border-top-left-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-tr-full",
                        "border-top-right-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-br-full",
                        "border-bottom-right-radius: 9999px;",
                        ""
                    ],
                    [
                        ".rounded-bl-full",
                        "border-bottom-left-radius: 9999px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Border Width",
                "docs": "https://tailwindcss.com/docs/border-width",
                "description": "Sets width for borders in increments of 1px.",
                "table": [
                    [
                        ".border",
                        "border-width: 1px;",
                        ""
                    ],
                    [
                        ".border-0",
                        "border-width: 0;",
                        ""
                    ],
                    [
                        ".border-2",
                        "border-width: 2px;",
                        ""
                    ],
                    [
                        ".border-4",
                        "border-width: 4px;",
                        ""
                    ],
                    [
                        ".border-8",
                        "border-width: 8px;",
                        ""
                    ],
                    [
                        ".border-t",
                        "border-top-width: 1px;",
                        ""
                    ],
                    [
                        ".border-t-0",
                        "border-top-width: 0;",
                        ""
                    ],
                    [
                        ".border-t-2",
                        "border-top-width: 2px;",
                        ""
                    ],
                    [
                        ".border-t-4",
                        "border-top-width: 4px;",
                        ""
                    ],
                    [
                        ".border-t-8",
                        "border-top-width: 8px;",
                        ""
                    ],
                    [
                        ".border-r",
                        "border-right-width: 1px;",
                        ""
                    ],
                    [
                        ".border-r-0",
                        "border-right-width: 0;",
                        ""
                    ],
                    [
                        ".border-r-2",
                        "border-right-width: 2px;",
                        ""
                    ],
                    [
                        ".border-r-4",
                        "border-right-width: 4px;",
                        ""
                    ],
                    [
                        ".border-r-8",
                        "border-right-width: 8px;",
                        ""
                    ],
                    [
                        ".border-b",
                        "border-bottom-width: 1px;",
                        ""
                    ],
                    [
                        ".border-b-0",
                        "border-bottom-width: 0;",
                        ""
                    ],
                    [
                        ".border-b-2",
                        "border-bottom-width: 2px;",
                        ""
                    ],
                    [
                        ".border-b-4",
                        "border-bottom-width: 4px;",
                        ""
                    ],
                    [
                        ".border-b-8",
                        "border-bottom-width: 8px;",
                        ""
                    ],
                    [
                        ".border-l",
                        "border-left-width: 1px;",
                        ""
                    ],
                    [
                        ".border-l-0",
                        "border-left-width: 0;",
                        ""
                    ],
                    [
                        ".border-l-2",
                        "border-left-width: 2px;",
                        ""
                    ],
                    [
                        ".border-l-4",
                        "border-left-width: 4px;",
                        ""
                    ],
                    [
                        ".border-l-8",
                        "border-left-width: 8px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Border Color",
                "docs": "https://tailwindcss.com/docs/border-color",
                "description": "Sets color for borders.",
                "table": [
                    [
                        "transparent",
                        ".border-transparent",
                        "border-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".border-current",
                        "border-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".border-black",
                        "border-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".border-white",
                        "border-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".border-gray-50",
                        "border-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".border-gray-100",
                        "border-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".border-gray-200",
                        "border-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".border-gray-300",
                        "border-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".border-gray-400",
                        "border-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".border-gray-500",
                        "border-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".border-gray-600",
                        "border-color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".border-gray-700",
                        "border-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".border-gray-800",
                        "border-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".border-gray-900",
                        "border-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".border-red-50",
                        "border-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".border-red-100",
                        "border-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".border-red-200",
                        "border-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".border-red-300",
                        "border-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".border-red-400",
                        "border-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".border-red-500",
                        "border-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".border-red-600",
                        "border-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".border-red-700",
                        "border-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".border-red-800",
                        "border-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".border-red-900",
                        "border-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".border-yellow-50",
                        "border-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".border-yellow-100",
                        "border-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".border-yellow-200",
                        "border-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".border-yellow-300",
                        "border-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".border-yellow-400",
                        "border-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".border-yellow-500",
                        "border-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".border-yellow-600",
                        "border-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".border-yellow-700",
                        "border-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".border-yellow-800",
                        "border-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".border-yellow-900",
                        "border-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".border-green-50",
                        "border-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".border-green-100",
                        "border-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".border-green-200",
                        "border-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".border-green-300",
                        "border-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".border-green-400",
                        "border-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".border-green-500",
                        "border-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".border-green-600",
                        "border-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".border-green-700",
                        "border-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".border-green-800",
                        "border-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".border-green-900",
                        "border-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".border-blue-50",
                        "border-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".border-blue-100",
                        "border-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".border-blue-200",
                        "border-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".border-blue-300",
                        "border-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".border-blue-400",
                        "border-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".border-blue-500",
                        "border-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".border-blue-600",
                        "border-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".border-blue-700",
                        "border-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".border-blue-800",
                        "border-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".border-blue-900",
                        "border-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".border-indigo-50",
                        "border-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".border-indigo-100",
                        "border-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".border-indigo-200",
                        "border-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".border-indigo-300",
                        "border-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".border-indigo-400",
                        "border-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".border-indigo-500",
                        "border-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".border-indigo-600",
                        "border-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".border-indigo-700",
                        "border-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".border-indigo-800",
                        "border-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".border-indigo-900",
                        "border-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".border-purple-50",
                        "border-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".border-purple-100",
                        "border-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".border-purple-200",
                        "border-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".border-purple-300",
                        "border-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".border-purple-400",
                        "border-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".border-purple-500",
                        "border-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".border-purple-600",
                        "border-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".border-purple-700",
                        "border-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".border-purple-800",
                        "border-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".border-purple-900",
                        "border-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".border-pink-50",
                        "border-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".border-pink-100",
                        "border-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".border-pink-200",
                        "border-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".border-pink-300",
                        "border-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".border-pink-400",
                        "border-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".border-pink-500",
                        "border-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".border-pink-600",
                        "border-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".border-pink-700",
                        "border-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".border-pink-800",
                        "border-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".border-pink-900",
                        "border-color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Border Opacity",
                "docs": "https://tailwindcss.com/docs/border-opacity",
                "description": "Sets opacity for borders.",
                "table": [
                    [
                        ".border-opacity-0",
                        "border-opacity: 0;",
                        ""
                    ],
                    [
                        ".border-opacity-5",
                        "border-opacity: 0.05;",
                        ""
                    ],
                    [
                        ".border-opacity-10",
                        "border-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".border-opacity-20",
                        "border-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".border-opacity-25",
                        "border-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".border-opacity-30",
                        "border-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".border-opacity-40",
                        "border-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".border-opacity-50",
                        "border-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".border-opacity-60",
                        "border-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".border-opacity-70",
                        "border-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".border-opacity-75",
                        "border-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".border-opacity-80",
                        "border-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".border-opacity-90",
                        "border-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".border-opacity-100",
                        "border-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Border Style",
                "docs": "https://tailwindcss.com/docs/border-style",
                "description": "Sets style for borders.",
                "table": [
                    [
                        ".border-solid",
                        "border-style: solid;",
                        ""
                    ],
                    [
                        ".border-dashed",
                        "border-style: dashed;",
                        ""
                    ],
                    [
                        ".border-dotted",
                        "border-style: dotted;",
                        ""
                    ],
                    [
                        ".border-double",
                        "border-style: double;",
                        ""
                    ],
                    [
                        ".border-none",
                        "border-style: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Divide Width",
                "docs": "https://tailwindcss.com/docs/divide-width",
                "description": "Controls the border width between elements.",
                "table": [
                    [
                        ".divide-x-0",
                        "border-left-width: 0;",
                        ""
                    ],
                    [
                        ".divide-x-2",
                        "border-left-width: 2px;",
                        ""
                    ],
                    [
                        ".divide-x-4",
                        "border-left-width: 4px;",
                        ""
                    ],
                    [
                        ".divide-x-8",
                        "border-left-width: 8px;",
                        ""
                    ],
                    [
                        ".divide-x",
                        "border-left-width: 1px;",
                        ""
                    ],
                    [
                        ".divide-y-0",
                        "border-top-width: 0;",
                        ""
                    ],
                    [
                        ".divide-y-2",
                        "border-top-width: 2px;",
                        ""
                    ],
                    [
                        ".divide-y-4",
                        "border-top-width: 4px;",
                        ""
                    ],
                    [
                        ".divide-y-8",
                        "border-top-width: 8px;",
                        ""
                    ],
                    [
                        ".divide-y",
                        "border-top-width: 1px;",
                        ""
                    ],
                    [
                        ".divide-x-reverse",
                        "--divide-x-reverse: 1",
                        ""
                    ],
                    [
                        ".divide-y-reverse",
                        "--divide-y-reverse: 1",
                        ""
                    ]
                ]
            },
            {
                "title": "Divide Color",
                "docs": "https://tailwindcss.com/docs/divide-color",
                "description": "Controls the border color between elements.",
                "table": [
                    [
                        "transparent",
                        ".divide-transparent",
                        "border-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".divide-current",
                        "border-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".divide-black",
                        "border-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".divide-white",
                        "border-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".divide-gray-50",
                        "border-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".divide-gray-100",
                        "border-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".divide-gray-200",
                        "border-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".divide-gray-300",
                        "border-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".divide-gray-400",
                        "border-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".divide-gray-500",
                        "border-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".divide-gray-600",
                        "border-color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".divide-gray-700",
                        "border-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".divide-gray-800",
                        "border-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".divide-gray-900",
                        "border-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".divide-red-50",
                        "border-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".divide-red-100",
                        "border-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".divide-red-200",
                        "border-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".divide-red-300",
                        "border-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".divide-red-400",
                        "border-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".divide-red-500",
                        "border-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".divide-red-600",
                        "border-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".divide-red-700",
                        "border-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".divide-red-800",
                        "border-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".divide-red-900",
                        "border-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".divide-yellow-50",
                        "border-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".divide-yellow-100",
                        "border-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".divide-yellow-200",
                        "border-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".divide-yellow-300",
                        "border-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".divide-yellow-400",
                        "border-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".divide-yellow-500",
                        "border-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".divide-yellow-600",
                        "border-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".divide-yellow-700",
                        "border-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".divide-yellow-800",
                        "border-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".divide-yellow-900",
                        "border-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".divide-green-50",
                        "border-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".divide-green-100",
                        "border-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".divide-green-200",
                        "border-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".divide-green-300",
                        "border-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".divide-green-400",
                        "border-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".divide-green-500",
                        "border-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".divide-green-600",
                        "border-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".divide-green-700",
                        "border-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".divide-green-800",
                        "border-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".divide-green-900",
                        "border-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".divide-blue-50",
                        "border-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".divide-blue-100",
                        "border-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".divide-blue-200",
                        "border-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".divide-blue-300",
                        "border-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".divide-blue-400",
                        "border-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".divide-blue-500",
                        "border-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".divide-blue-600",
                        "border-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".divide-blue-700",
                        "border-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".divide-blue-800",
                        "border-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".divide-blue-900",
                        "border-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".divide-indigo-50",
                        "border-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".divide-indigo-100",
                        "border-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".divide-indigo-200",
                        "border-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".divide-indigo-300",
                        "border-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".divide-indigo-400",
                        "border-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".divide-indigo-500",
                        "border-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".divide-indigo-600",
                        "border-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".divide-indigo-700",
                        "border-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".divide-indigo-800",
                        "border-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".divide-indigo-900",
                        "border-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".divide-purple-50",
                        "border-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".divide-purple-100",
                        "border-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".divide-purple-200",
                        "border-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".divide-purple-300",
                        "border-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".divide-purple-400",
                        "border-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".divide-purple-500",
                        "border-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".divide-purple-600",
                        "border-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".divide-purple-700",
                        "border-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".divide-purple-800",
                        "border-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".divide-purple-900",
                        "border-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".divide-pink-50",
                        "border-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".divide-pink-100",
                        "border-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".divide-pink-200",
                        "border-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".divide-pink-300",
                        "border-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".divide-pink-400",
                        "border-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".divide-pink-500",
                        "border-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".divide-pink-600",
                        "border-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".divide-pink-700",
                        "border-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".divide-pink-800",
                        "border-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".divide-pink-900",
                        "border-color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Divide Opacity",
                "docs": "https://tailwindcss.com/docs/divide-opacity",
                "description": "Controls the border opacity between elements.",
                "table": [
                    [
                        ".divide-opacity-0",
                        "--divide-opacity: 0;",
                        ""
                    ],
                    [
                        ".divide-opacity-5",
                        "--divide-opacity: 0.05;",
                        ""
                    ],
                    [
                        ".divide-opacity-10",
                        "--divide-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".divide-opacity-20",
                        "--divide-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".divide-opacity-25",
                        "--divide-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".divide-opacity-30",
                        "--divide-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".divide-opacity-40",
                        "--divide-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".divide-opacity-50",
                        "--divide-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".divide-opacity-60",
                        "--divide-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".divide-opacity-70",
                        "--divide-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".divide-opacity-75",
                        "--divide-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".divide-opacity-80",
                        "--divide-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".divide-opacity-90",
                        "--divide-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".divide-opacity-100",
                        "--divide-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Divide Style",
                "docs": "https://tailwindcss.com/docs/divide-style",
                "description": "Sets style for divides.",
                "table": [
                    [
                        ".divide-solid",
                        "border-style: solid;",
                        ""
                    ],
                    [
                        ".divide-dashed",
                        "border-style: dashed;",
                        ""
                    ],
                    [
                        ".divide-dotted",
                        "border-style: dotted;",
                        ""
                    ],
                    [
                        ".divide-double",
                        "border-style: double;",
                        ""
                    ],
                    [
                        ".divide-none",
                        "border-style: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Ring Width",
                "docs": "https://tailwindcss.com/docs/ring-width",
                "description": "Utilities for creating outline rings with box-shadows.",
                "table": [
                    [
                        "*",
                        "box-shadow: 0 0 #000000;",
                        ""
                    ],
                    [
                        ".ring-0",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        ".ring-1",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        ".ring-2",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        ".ring-4",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        ".ring-8",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        "ring",
                        "box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);",
                        ""
                    ],
                    [
                        ".ring-inset",
                        "--tw-ring-inset: inset;",
                        ""
                    ]
                ]
            },
            {
                "title": "Ring Color",
                "docs": "https://tailwindcss.com/docs/ring-color",
                "description": "Utilities for setting the color of outline rings.",
                "table": [
                    [
                        "transparent",
                        ".ring-transparent",
                        "--ring-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".ring-current",
                        "--ring-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".ring-black",
                        "--ring-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".ring-white",
                        "--ring-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".ring-gray-50",
                        "--ring-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".ring-gray-100",
                        "--ring-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".ring-gray-200",
                        "--ring-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".ring-gray-300",
                        "--ring-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".ring-gray-400",
                        "--ring-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".ring-gray-500",
                        "--ring-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".ring-gray-600",
                        "--ring-color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".ring-gray-700",
                        "--ring-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".ring-gray-800",
                        "--ring-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".ring-gray-900",
                        "--ring-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".ring-red-50",
                        "--ring-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".ring-red-100",
                        "--ring-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".ring-red-200",
                        "--ring-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".ring-red-300",
                        "--ring-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".ring-red-400",
                        "--ring-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".ring-red-500",
                        "--ring-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".ring-red-600",
                        "--ring-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".ring-red-700",
                        "--ring-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".ring-red-800",
                        "--ring-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".ring-red-900",
                        "--ring-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".ring-yellow-50",
                        "--ring-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".ring-yellow-100",
                        "--ring-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".ring-yellow-200",
                        "--ring-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".ring-yellow-300",
                        "--ring-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".ring-yellow-400",
                        "--ring-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".ring-yellow-500",
                        "--ring-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".ring-yellow-600",
                        "--ring-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".ring-yellow-700",
                        "--ring-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".ring-yellow-800",
                        "--ring-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".ring-yellow-900",
                        "--ring-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".ring-green-50",
                        "--ring-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".ring-green-100",
                        "--ring-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".ring-green-200",
                        "--ring-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".ring-green-300",
                        "--ring-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".ring-green-400",
                        "--ring-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".ring-green-500",
                        "--ring-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".ring-green-600",
                        "--ring-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".ring-green-700",
                        "--ring-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".ring-green-800",
                        "--ring-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".ring-green-900",
                        "--ring-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".ring-blue-50",
                        "--ring-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".ring-blue-100",
                        "--ring-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".ring-blue-200",
                        "--ring-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".ring-blue-300",
                        "--ring-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".ring-blue-400",
                        "--ring-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".ring-blue-500",
                        "--ring-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".ring-blue-600",
                        "--ring-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".ring-blue-700",
                        "--ring-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".ring-blue-800",
                        "--ring-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".ring-blue-900",
                        "--ring-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".ring-indigo-50",
                        "--ring-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".ring-indigo-100",
                        "--ring-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".ring-indigo-200",
                        "--ring-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".ring-indigo-300",
                        "--ring-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".ring-indigo-400",
                        "--ring-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".ring-indigo-500",
                        "--ring-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".ring-indigo-600",
                        "--ring-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".ring-indigo-700",
                        "--ring-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".ring-indigo-800",
                        "--ring-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".ring-indigo-900",
                        "--ring-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".ring-purple-50",
                        "--ring-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".ring-purple-100",
                        "--ring-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".ring-purple-200",
                        "--ring-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".ring-purple-300",
                        "--ring-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".ring-purple-400",
                        "--ring-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".ring-purple-500",
                        "--ring-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".ring-purple-600",
                        "--ring-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".ring-purple-700",
                        "--ring-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".ring-purple-800",
                        "--ring-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".ring-purple-900",
                        "--ring-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".ring-pink-50",
                        "--ring-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".ring-pink-100",
                        "--ring-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".ring-pink-200",
                        "--ring-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".ring-pink-300",
                        "--ring-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".ring-pink-400",
                        "--ring-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".ring-pink-500",
                        "--ring-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".ring-pink-600",
                        "--ring-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".ring-pink-700",
                        "--ring-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".ring-pink-800",
                        "--ring-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".ring-pink-900",
                        "--ring-color: #831843;",
                        ""
                    ]
                ]
            },
            {
                "title": "Ring Opacity",
                "docs": "https://tailwindcss.com/docs/ring-opacity",
                "description": "Utilities for setting the opacity of outline rings.",
                "table": [
                    [
                        ".ring-opacity-0",
                        "--ring-opacity: 0;",
                        ""
                    ],
                    [
                        ".ring-opacity-5",
                        "--ring-opacity: 0.05;",
                        ""
                    ],
                    [
                        ".ring-opacity-10",
                        "--ring-opacity: 0.1;",
                        ""
                    ],
                    [
                        ".ring-opacity-20",
                        "--ring-opacity: 0.2;",
                        ""
                    ],
                    [
                        ".ring-opacity-25",
                        "--ring-opacity: 0.25;",
                        ""
                    ],
                    [
                        ".ring-opacity-30",
                        "--ring-opacity: 0.3;",
                        ""
                    ],
                    [
                        ".ring-opacity-40",
                        "--ring-opacity: 0.4;",
                        ""
                    ],
                    [
                        ".ring-opacity-50",
                        "--ring-opacity: 0.5;",
                        ""
                    ],
                    [
                        ".ring-opacity-60",
                        "--ring-opacity: 0.6;",
                        ""
                    ],
                    [
                        ".ring-opacity-70",
                        "--ring-opacity: 0.7;",
                        ""
                    ],
                    [
                        ".ring-opacity-75",
                        "--ring-opacity: 0.75;",
                        ""
                    ],
                    [
                        ".ring-opacity-80",
                        "--ring-opacity: 0.8;",
                        ""
                    ],
                    [
                        ".ring-opacity-90",
                        "--ring-opacity: 0.9;",
                        ""
                    ],
                    [
                        ".ring-opacity-100",
                        "--ring-opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Ring Width",
                "docs": "https://tailwindcss.com/docs/ring-offset-width",
                "description": "Utilities for simulating an offset when adding outline rings.",
                "table": [
                    [
                        ".ring-offset-0",
                        "--ring-offset-width: 0px;\nbox-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);",
                        ""
                    ],
                    [
                        ".ring-offset-1",
                        "--ring-offset-width: 1px;\nbox-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);",
                        ""
                    ],
                    [
                        ".ring-offset-2",
                        "--ring-offset-width: 2px;\nbox-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);",
                        ""
                    ],
                    [
                        ".ring-offset-4",
                        "--ring-offset-width: 4px;\nbox-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);",
                        ""
                    ],
                    [
                        ".ring-offset-8",
                        "--ring-offset-width: 8px;\nbox-shadow: 0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow);",
                        ""
                    ]
                ]
            },
            {
                "title": "Ring Offset Color",
                "docs": "https://tailwindcss.com/docs/ring-offset-color",
                "description": "Utilities for setting the color of outline rings offset.",
                "table": [
                    [
                        "transparent",
                        ".ring-offset-transparent",
                        "--ring-offset-color: transparent;",
                        ""
                    ],
                    [
                        "current color",
                        ".ring-offset-current",
                        "--ring-offset-color: currentColor;",
                        ""
                    ],
                    [
                        "rgb(0, 0, 0)",
                        ".ring-offset-black",
                        "--ring-offset-color: #000000;",
                        ""
                    ],
                    [
                        "rgb(255, 255, 255)",
                        ".ring-offset-white",
                        "--ring-offset-color: #ffffff;",
                        ""
                    ],
                    [
                        "rgb(249, 250, 251)",
                        ".ring-offset-gray-50",
                        "--ring-offset-color: #F9FAFB;",
                        ""
                    ],
                    [
                        "rgb(243, 244, 246)",
                        ".ring-offset-gray-100",
                        "--ring-offset-color: #F3F4F6;",
                        ""
                    ],
                    [
                        "rgb(229, 231, 235)",
                        ".ring-offset-gray-200",
                        "--ring-offset-color: #E5E7EB;",
                        ""
                    ],
                    [
                        "rgb(209, 213, 219)",
                        ".ring-offset-gray-300",
                        "--ring-offset-color: #D1D5DB;",
                        ""
                    ],
                    [
                        "rgb(156, 163, 175)",
                        ".ring-offset-gray-400",
                        "--ring-offset-color: #9CA3AF;",
                        ""
                    ],
                    [
                        "rgb(107, 114, 128)",
                        ".ring-offset-gray-500",
                        "--ring-offset-color: #6B7280;",
                        ""
                    ],
                    [
                        "rgb(75, 85, 99)",
                        ".ring-offset-gray-600",
                        "--ring-offset-color: #4B5563;",
                        ""
                    ],
                    [
                        "rgb(55, 65, 81)",
                        ".ring-offset-gray-700",
                        "--ring-offset-color: #374151;",
                        ""
                    ],
                    [
                        "rgb(31, 41, 55)",
                        ".ring-offset-gray-800",
                        "--ring-offset-color: #1F2937;",
                        ""
                    ],
                    [
                        "rgb(17, 24, 39)",
                        ".ring-offset-gray-900",
                        "--ring-offset-color: #111827;",
                        ""
                    ],
                    [
                        "rgb(254, 242, 242)",
                        ".ring-offset-red-50",
                        "--ring-offset-color: #FEF2F2;",
                        ""
                    ],
                    [
                        "rgb(254, 226, 226)",
                        ".ring-offset-red-100",
                        "--ring-offset-color: #FEE2E2;",
                        ""
                    ],
                    [
                        "rgb(254, 202, 202)",
                        ".ring-offset-red-200",
                        "--ring-offset-color: #FECACA;",
                        ""
                    ],
                    [
                        "rgb(252, 165, 165)",
                        ".ring-offset-red-300",
                        "--ring-offset-color: #FCA5A5;",
                        ""
                    ],
                    [
                        "rgb(248, 113, 113)",
                        ".ring-offset-red-400",
                        "--ring-offset-color: #F87171;",
                        ""
                    ],
                    [
                        "rgb(239, 68, 68)",
                        ".ring-offset-red-500",
                        "--ring-offset-color: #EF4444;",
                        ""
                    ],
                    [
                        "rgb(220, 38, 38)",
                        ".ring-offset-red-600",
                        "--ring-offset-color: #DC2626;",
                        ""
                    ],
                    [
                        "rgb(185, 28, 28)",
                        ".ring-offset-red-700",
                        "--ring-offset-color: #B91C1C;",
                        ""
                    ],
                    [
                        "rgb(153, 27, 27)",
                        ".ring-offset-red-800",
                        "--ring-offset-color: #991B1B;",
                        ""
                    ],
                    [
                        "rgb(127, 29, 29)",
                        ".ring-offset-red-900",
                        "--ring-offset-color: #7F1D1D;",
                        ""
                    ],
                    [
                        "rgb(255, 251, 235)",
                        ".ring-offset-yellow-50",
                        "--ring-offset-color: #FFFBEB;",
                        ""
                    ],
                    [
                        "rgb(254, 243, 199)",
                        ".ring-offset-yellow-100",
                        "--ring-offset-color: #FEF3C7;",
                        ""
                    ],
                    [
                        "rgb(253, 230, 138)",
                        ".ring-offset-yellow-200",
                        "--ring-offset-color: #FDE68A;",
                        ""
                    ],
                    [
                        "rgb(252, 211, 77)",
                        ".ring-offset-yellow-300",
                        "--ring-offset-color: #FCD34D;",
                        ""
                    ],
                    [
                        "rgb(251, 191, 36)",
                        ".ring-offset-yellow-400",
                        "--ring-offset-color: #FBBF24;",
                        ""
                    ],
                    [
                        "rgb(245, 158, 11)",
                        ".ring-offset-yellow-500",
                        "--ring-offset-color: #F59E0B;",
                        ""
                    ],
                    [
                        "rgb(217, 119, 6)",
                        ".ring-offset-yellow-600",
                        "--ring-offset-color: #D97706;",
                        ""
                    ],
                    [
                        "rgb(180, 83, 9)",
                        ".ring-offset-yellow-700",
                        "--ring-offset-color: #B45309;",
                        ""
                    ],
                    [
                        "rgb(146, 64, 14)",
                        ".ring-offset-yellow-800",
                        "--ring-offset-color: #92400E;",
                        ""
                    ],
                    [
                        "rgb(120, 53, 15)",
                        ".ring-offset-yellow-900",
                        "--ring-offset-color: #78350F;",
                        ""
                    ],
                    [
                        "rgb(236, 253, 245)",
                        ".ring-offset-green-50",
                        "--ring-offset-color: #ECFDF5;",
                        ""
                    ],
                    [
                        "rgb(209, 250, 229)",
                        ".ring-offset-green-100",
                        "--ring-offset-color: #D1FAE5;",
                        ""
                    ],
                    [
                        "rgb(167, 243, 208)",
                        ".ring-offset-green-200",
                        "--ring-offset-color: #A7F3D0;",
                        ""
                    ],
                    [
                        "rgb(110, 231, 183)",
                        ".ring-offset-green-300",
                        "--ring-offset-color: #6EE7B7;",
                        ""
                    ],
                    [
                        "rgb(52, 211, 153)",
                        ".ring-offset-green-400",
                        "--ring-offset-color: #34D399;",
                        ""
                    ],
                    [
                        "rgb(16, 185, 129)",
                        ".ring-offset-green-500",
                        "--ring-offset-color: #10B981;",
                        ""
                    ],
                    [
                        "rgb(5, 150, 105)",
                        ".ring-offset-green-600",
                        "--ring-offset-color: #059669;",
                        ""
                    ],
                    [
                        "rgb(4, 120, 87)",
                        ".ring-offset-green-700",
                        "--ring-offset-color: #047857;",
                        ""
                    ],
                    [
                        "rgb(6, 95, 70)",
                        ".ring-offset-green-800",
                        "--ring-offset-color: #065F46;",
                        ""
                    ],
                    [
                        "rgb(6, 78, 59)",
                        ".ring-offset-green-900",
                        "--ring-offset-color: #064E3B;",
                        ""
                    ],
                    [
                        "rgb(239, 246, 255)",
                        ".ring-offset-blue-50",
                        "--ring-offset-color: #EFF6FF;",
                        ""
                    ],
                    [
                        "rgb(219, 234, 254)",
                        ".ring-offset-blue-100",
                        "--ring-offset-color: #DBEAFE;",
                        ""
                    ],
                    [
                        "rgb(191, 219, 254)",
                        ".ring-offset-blue-200",
                        "--ring-offset-color: #BFDBFE;",
                        ""
                    ],
                    [
                        "rgb(147, 197, 253)",
                        ".ring-offset-blue-300",
                        "--ring-offset-color: #93C5FD;",
                        ""
                    ],
                    [
                        "rgb(96, 165, 250)",
                        ".ring-offset-blue-400",
                        "--ring-offset-color: #60A5FA;",
                        ""
                    ],
                    [
                        "rgb(59, 130, 246)",
                        ".ring-offset-blue-500",
                        "--ring-offset-color: #3B82F6;",
                        ""
                    ],
                    [
                        "rgb(37, 99, 235)",
                        ".ring-offset-blue-600",
                        "--ring-offset-color: #2563EB;",
                        ""
                    ],
                    [
                        "rgb(29, 78, 216)",
                        ".ring-offset-blue-700",
                        "--ring-offset-color: #1D4ED8;",
                        ""
                    ],
                    [
                        "rgb(30, 64, 175)",
                        ".ring-offset-blue-800",
                        "--ring-offset-color: #1E40AF;",
                        ""
                    ],
                    [
                        "rgb(30, 58, 138)",
                        ".ring-offset-blue-900",
                        "--ring-offset-color: #1E3A8A;",
                        ""
                    ],
                    [
                        "rgb(238, 242, 255)",
                        ".ring-offset-indigo-50",
                        "--ring-offset-color: #EEF2FF;",
                        ""
                    ],
                    [
                        "rgb(224, 231, 255)",
                        ".ring-offset-indigo-100",
                        "--ring-offset-color: #E0E7FF;",
                        ""
                    ],
                    [
                        "rgb(199, 210, 254)",
                        ".ring-offset-indigo-200",
                        "--ring-offset-color: #C7D2FE;",
                        ""
                    ],
                    [
                        "rgb(165, 180, 252)",
                        ".ring-offset-indigo-300",
                        "--ring-offset-color: #A5B4FC;",
                        ""
                    ],
                    [
                        "rgb(129, 140, 248)",
                        ".ring-offset-indigo-400",
                        "--ring-offset-color: #818CF8;",
                        ""
                    ],
                    [
                        "rgb(99, 102, 241)",
                        ".ring-offset-indigo-500",
                        "--ring-offset-color: #6366F1;",
                        ""
                    ],
                    [
                        "rgb(79, 70, 229)",
                        ".ring-offset-indigo-600",
                        "--ring-offset-color: #4F46E5;",
                        ""
                    ],
                    [
                        "rgb(67, 56, 202)",
                        ".ring-offset-indigo-700",
                        "--ring-offset-color: #4338CA;",
                        ""
                    ],
                    [
                        "rgb(55, 48, 163)",
                        ".ring-offset-indigo-800",
                        "--ring-offset-color: #3730A3;",
                        ""
                    ],
                    [
                        "rgb(49, 46, 129)",
                        ".ring-offset-indigo-900",
                        "--ring-offset-color: #312E81;",
                        ""
                    ],
                    [
                        "rgb(245, 243, 255)",
                        ".ring-offset-purple-50",
                        "--ring-offset-color: #F5F3FF;",
                        ""
                    ],
                    [
                        "rgb(237, 233, 254)",
                        ".ring-offset-purple-100",
                        "--ring-offset-color: #EDE9FE;",
                        ""
                    ],
                    [
                        "rgb(221, 214, 254)",
                        ".ring-offset-purple-200",
                        "--ring-offset-color: #DDD6FE;",
                        ""
                    ],
                    [
                        "rgb(196, 181, 253)",
                        ".ring-offset-purple-300",
                        "--ring-offset-color: #C4B5FD;",
                        ""
                    ],
                    [
                        "rgb(167, 139, 250)",
                        ".ring-offset-purple-400",
                        "--ring-offset-color: #A78BFA;",
                        ""
                    ],
                    [
                        "rgb(139, 92, 246)",
                        ".ring-offset-purple-500",
                        "--ring-offset-color: #8B5CF6;",
                        ""
                    ],
                    [
                        "rgb(124, 58, 237)",
                        ".ring-offset-purple-600",
                        "--ring-offset-color: #7C3AED;",
                        ""
                    ],
                    [
                        "rgb(109, 40, 217)",
                        ".ring-offset-purple-700",
                        "--ring-offset-color: #6D28D9;",
                        ""
                    ],
                    [
                        "rgb(91, 33, 182)",
                        ".ring-offset-purple-800",
                        "--ring-offset-color: #5B21B6;",
                        ""
                    ],
                    [
                        "rgb(76, 29, 149)",
                        ".ring-offset-purple-900",
                        "--ring-offset-color: #4C1D95;",
                        ""
                    ],
                    [
                        "rgb(253, 242, 248)",
                        ".ring-offset-pink-50",
                        "--ring-offset-color: #FDF2F8;",
                        ""
                    ],
                    [
                        "rgb(252, 231, 243)",
                        ".ring-offset-pink-100",
                        "--ring-offset-color: #FCE7F3;",
                        ""
                    ],
                    [
                        "rgb(251, 207, 232)",
                        ".ring-offset-pink-200",
                        "--ring-offset-color: #FBCFE8;",
                        ""
                    ],
                    [
                        "rgb(249, 168, 212)",
                        ".ring-offset-pink-300",
                        "--ring-offset-color: #F9A8D4;",
                        ""
                    ],
                    [
                        "rgb(244, 114, 182)",
                        ".ring-offset-pink-400",
                        "--ring-offset-color: #F472B6;",
                        ""
                    ],
                    [
                        "rgb(236, 72, 153)",
                        ".ring-offset-pink-500",
                        "--ring-offset-color: #EC4899;",
                        ""
                    ],
                    [
                        "rgb(219, 39, 119)",
                        ".ring-offset-pink-600",
                        "--ring-offset-color: #DB2777;",
                        ""
                    ],
                    [
                        "rgb(190, 24, 93)",
                        ".ring-offset-pink-700",
                        "--ring-offset-color: #BE185D;",
                        ""
                    ],
                    [
                        "rgb(157, 23, 77)",
                        ".ring-offset-pink-800",
                        "--ring-offset-color: #9D174D;",
                        ""
                    ],
                    [
                        "rgb(131, 24, 67)",
                        ".ring-offset-pink-900",
                        "--ring-offset-color: #831843;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Interactivity",
        "content": [
            {
                "title": "Appearance",
                "docs": "https://tailwindcss.com/docs/appearance",
                "description": "Disables native styling based on the operating system's theme.",
                "table": [
                    [
                        ".appearance-none",
                        "appearance: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Cursor",
                "docs": "https://tailwindcss.com/docs/cursor",
                "description": "Changes the cursor when hovering over an element.",
                "table": [
                    [
                        ".cursor-auto",
                        "cursor: auto;",
                        ""
                    ],
                    [
                        ".cursor-default",
                        "cursor: default;",
                        ""
                    ],
                    [
                        ".cursor-pointer",
                        "cursor: pointer;",
                        ""
                    ],
                    [
                        ".cursor-wait",
                        "cursor: wait;",
                        ""
                    ],
                    [
                        ".cursor-text",
                        "cursor: text;",
                        ""
                    ],
                    [
                        ".cursor-move",
                        "cursor: move;",
                        ""
                    ],
                    [
                        ".cursor-help",
                        "cursor: help;",
                        ""
                    ],
                    [
                        ".cursor-not-allowed",
                        "cursor: not-allowed;",
                        ""
                    ]
                ]
            },
            {
                "title": "Outline",
                "docs": "https://tailwindcss.com/docs/outline",
                "description": "",
                "table": [
                    [
                        ".outline-none",
                        "outline: 0;",
                        ""
                    ],
                    [
                        ".outline-white",
                        "outline: 2px dotted white;\noutline-offset: 2px;",
                        ""
                    ],
                    [
                        ".outline-black",
                        "outline: 2px dotted black;\noutline-offset: 2px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Pointer Events",
                "docs": "https://tailwindcss.com/docs/pointer-events",
                "description": "Specifies whether an element is the target of mouse events.",
                "table": [
                    [
                        ".pointer-events-none",
                        "pointer-events: none;",
                        ""
                    ],
                    [
                        ".pointer-events-auto",
                        "pointer-events: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Resize",
                "docs": "https://tailwindcss.com/docs/resize",
                "description": "Sets whether an element is resizable, along with direction.",
                "table": [
                    [
                        ".resize-none",
                        "resize: none;",
                        ""
                    ],
                    [
                        ".resize",
                        "resize: both;",
                        ""
                    ],
                    [
                        ".resize-y",
                        "resize: vertical;",
                        ""
                    ],
                    [
                        ".resize-x",
                        "resize: horizontal;",
                        ""
                    ]
                ]
            },
            {
                "title": "User Select",
                "docs": "https://tailwindcss.com/docs/user-select",
                "description": "Controls whether the user can select text.",
                "table": [
                    [
                        ".select-none",
                        "user-select: none;",
                        ""
                    ],
                    [
                        ".select-text",
                        "user-select: text;",
                        ""
                    ],
                    [
                        ".select-all",
                        "user-select: all;",
                        ""
                    ],
                    [
                        ".select-auto",
                        "user-select: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Accessibility",
                "docs": "https://nerdcave.com/tailwind-cheat-sheet#",
                "description": "Controls whether an element is visually hidden but still accessible to screen readers.",
                "table": [
                    [
                        ".sr-only",
                        "position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhiteSpace: nowrap;\nborderWidth: 0;",
                        ""
                    ],
                    [
                        ".not-sr-only",
                        "position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhiteSpace: normal;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "SVG",
        "content": [
            {
                "title": "Fill",
                "docs": "https://tailwindcss.com/docs/fill",
                "description": "Utilities for styling the fill of SVG elements.",
                "table": [
                    [
                        ".fill-current",
                        "fill: currentColor;",
                        ""
                    ]
                ]
            },
            {
                "title": "Stroke",
                "docs": "https://tailwindcss.com/docs/stroke",
                "description": "Utilities for styling the stroke of SVG elements.",
                "table": [
                    [
                        ".stroke-current",
                        "stroke: currentColor;",
                        ""
                    ]
                ]
            },
            {
                "title": "Stroke Width",
                "docs": "https://tailwindcss.com/docs/stroke-width",
                "description": "Utilities for styling the stroke width of SVG elements.",
                "table": [
                    [
                        ".stroke-0",
                        "stroke-width: 0;",
                        ""
                    ],
                    [
                        ".stroke-1",
                        "stroke-width: 1;",
                        ""
                    ],
                    [
                        ".stroke-2",
                        "stroke-width: 2;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Grid",
        "content": [
            {
                "title": "Grid Template Columns",
                "docs": "https://tailwindcss.com/docs/grid-template-columns",
                "description": "Defines columns for grid layout.",
                "table": [
                    [
                        ".grid-cols-1",
                        "grid-template-columns: repeat(1, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-2",
                        "grid-template-columns: repeat(2, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-3",
                        "grid-template-columns: repeat(3, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-4",
                        "grid-template-columns: repeat(4, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-5",
                        "grid-template-columns: repeat(5, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-6",
                        "grid-template-columns: repeat(6, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-7",
                        "grid-template-columns: repeat(7, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-8",
                        "grid-template-columns: repeat(8, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-9",
                        "grid-template-columns: repeat(9, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-10",
                        "grid-template-columns: repeat(10, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-11",
                        "grid-template-columns: repeat(11, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-12",
                        "grid-template-columns: repeat(12, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-cols-none",
                        "grid-template-columns: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Column, start/end",
                "docs": "https://tailwindcss.com/docs/grid-column",
                "description": "Sets a grid item size and location within the grid column.",
                "table": [
                    [
                        ".col-auto",
                        "grid-column: auto;",
                        ""
                    ],
                    [
                        ".col-span-1",
                        "grid-column: span 1 / span 1;",
                        ""
                    ],
                    [
                        ".col-span-2",
                        "grid-column: span 2 / span 2;",
                        ""
                    ],
                    [
                        ".col-span-3",
                        "grid-column: span 3 / span 3;",
                        ""
                    ],
                    [
                        ".col-span-4",
                        "grid-column: span 4 / span 4;",
                        ""
                    ],
                    [
                        ".col-span-5",
                        "grid-column: span 5 / span 5;",
                        ""
                    ],
                    [
                        ".col-span-6",
                        "grid-column: span 6 / span 6;",
                        ""
                    ],
                    [
                        ".col-span-7",
                        "grid-column: span 7 / span 7;",
                        ""
                    ],
                    [
                        ".col-span-8",
                        "grid-column: span 8 / span 8;",
                        ""
                    ],
                    [
                        ".col-span-9",
                        "grid-column: span 9 / span 9;",
                        ""
                    ],
                    [
                        ".col-span-10",
                        "grid-column: span 10 / span 10;",
                        ""
                    ],
                    [
                        ".col-span-11",
                        "grid-column: span 11 / span 11;",
                        ""
                    ],
                    [
                        ".col-span-12",
                        "grid-column: span 12 / span 12;",
                        ""
                    ],
                    [
                        ".col-start-1",
                        "grid-column-start: 1;",
                        ""
                    ],
                    [
                        ".col-start-2",
                        "grid-column-start: 2;",
                        ""
                    ],
                    [
                        ".col-start-3",
                        "grid-column-start: 3;",
                        ""
                    ],
                    [
                        ".col-start-4",
                        "grid-column-start: 4;",
                        ""
                    ],
                    [
                        ".col-start-5",
                        "grid-column-start: 5;",
                        ""
                    ],
                    [
                        ".col-start-6",
                        "grid-column-start: 6;",
                        ""
                    ],
                    [
                        ".col-start-7",
                        "grid-column-start: 7;",
                        ""
                    ],
                    [
                        ".col-start-8",
                        "grid-column-start: 8;",
                        ""
                    ],
                    [
                        ".col-start-9",
                        "grid-column-start: 9;",
                        ""
                    ],
                    [
                        ".col-start-10",
                        "grid-column-start: 10;",
                        ""
                    ],
                    [
                        ".col-start-11",
                        "grid-column-start: 11;",
                        ""
                    ],
                    [
                        ".col-start-12",
                        "grid-column-start: 12;",
                        ""
                    ],
                    [
                        ".col-start-13",
                        "grid-column-start: 13;",
                        ""
                    ],
                    [
                        ".col-start-auto",
                        "grid-column-start: auto;",
                        ""
                    ],
                    [
                        ".col-end-1",
                        "grid-column-end: 1;",
                        ""
                    ],
                    [
                        ".col-end-2",
                        "grid-column-end: 2;",
                        ""
                    ],
                    [
                        ".col-end-3",
                        "grid-column-end: 3;",
                        ""
                    ],
                    [
                        ".col-end-4",
                        "grid-column-end: 4;",
                        ""
                    ],
                    [
                        ".col-end-5",
                        "grid-column-end: 5;",
                        ""
                    ],
                    [
                        ".col-end-6",
                        "grid-column-end: 6;",
                        ""
                    ],
                    [
                        ".col-end-7",
                        "grid-column-end: 7;",
                        ""
                    ],
                    [
                        ".col-end-8",
                        "grid-column-end: 8;",
                        ""
                    ],
                    [
                        ".col-end-9",
                        "grid-column-end: 9;",
                        ""
                    ],
                    [
                        ".col-end-10",
                        "grid-column-end: 10;",
                        ""
                    ],
                    [
                        ".col-end-11",
                        "grid-column-end: 11;",
                        ""
                    ],
                    [
                        ".col-end-12",
                        "grid-column-end: 12;",
                        ""
                    ],
                    [
                        ".col-end-13",
                        "grid-column-end: 13;",
                        ""
                    ],
                    [
                        ".col-end-auto",
                        "grid-column-end: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Template Rows",
                "docs": "https://tailwindcss.com/docs/grid-template-rows",
                "description": "Defines rows for grid layout.",
                "table": [
                    [
                        ".grid-rows-1",
                        "grid-template-rows: repeat(1, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-2",
                        "grid-template-rows: repeat(2, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-3",
                        "grid-template-rows: repeat(3, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-4",
                        "grid-template-rows: repeat(4, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-5",
                        "grid-template-rows: repeat(5, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-6",
                        "grid-template-rows: repeat(6, minmax(0, 1fr));",
                        ""
                    ],
                    [
                        ".grid-rows-none",
                        "grid-template-rows: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Row, start/end",
                "docs": "https://tailwindcss.com/docs/grid-row",
                "description": "Sets a grid item size and location within the grid row.",
                "table": [
                    [
                        ".row-auto",
                        "grid-row: auto;",
                        ""
                    ],
                    [
                        ".row-span-1",
                        "grid-row: span 1 / span 1;",
                        ""
                    ],
                    [
                        ".row-span-2",
                        "grid-row: span 2 / span 2;",
                        ""
                    ],
                    [
                        ".row-span-3",
                        "grid-row: span 3 / span 3;",
                        ""
                    ],
                    [
                        ".row-span-4",
                        "grid-row: span 4 / span 4;",
                        ""
                    ],
                    [
                        ".row-span-5",
                        "grid-row: span 5 / span 5;",
                        ""
                    ],
                    [
                        ".row-span-6",
                        "grid-row: span 6 / span 6;",
                        ""
                    ],
                    [
                        ".row-start-1",
                        "grid-row-start: 1;",
                        ""
                    ],
                    [
                        ".row-start-2",
                        "grid-row-start: 2;",
                        ""
                    ],
                    [
                        ".row-start-3",
                        "grid-row-start: 3;",
                        ""
                    ],
                    [
                        ".row-start-4",
                        "grid-row-start: 4;",
                        ""
                    ],
                    [
                        ".row-start-5",
                        "grid-row-start: 5;",
                        ""
                    ],
                    [
                        ".row-start-6",
                        "grid-row-start: 6;",
                        ""
                    ],
                    [
                        ".row-start-7",
                        "grid-row-start: 7;",
                        ""
                    ],
                    [
                        ".row-start-auto",
                        "grid-row-start: auto;",
                        ""
                    ],
                    [
                        ".row-end-1",
                        "grid-row-end: 1;",
                        ""
                    ],
                    [
                        ".row-end-2",
                        "grid-row-end: 2;",
                        ""
                    ],
                    [
                        ".row-end-3",
                        "grid-row-end: 3;",
                        ""
                    ],
                    [
                        ".row-end-4",
                        "grid-row-end: 4;",
                        ""
                    ],
                    [
                        ".row-end-5",
                        "grid-row-end: 5;",
                        ""
                    ],
                    [
                        ".row-end-6",
                        "grid-row-end: 6;",
                        ""
                    ],
                    [
                        ".row-end-7",
                        "grid-row-end: 7;",
                        ""
                    ],
                    [
                        ".row-end-auto",
                        "grid-row-end: auto;",
                        ""
                    ]
                ]
            },
            {
                "title": "Gap",
                "docs": "https://tailwindcss.com/docs/gap",
                "description": "Sets the gaps (gutters) between rows and columns.",
                "table": [
                    [
                        ".gap-0",
                        "gap: 0;",
                        ""
                    ],
                    [
                        ".gap-0.5",
                        "gap: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".gap-1",
                        "gap: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".gap-1.5",
                        "gap: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".gap-2",
                        "gap: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".gap-2.5",
                        "gap: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".gap-3",
                        "gap: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".gap-3.5",
                        "gap: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".gap-4",
                        "gap: 1rem;",
                        "16px"
                    ],
                    [
                        ".gap-5",
                        "gap: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".gap-6",
                        "gap: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".gap-8",
                        "gap: 2rem;",
                        "32px"
                    ],
                    [
                        ".gap-10",
                        "gap: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".gap-11",
                        "gap: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".gap-12",
                        "gap: 3rem;",
                        "48px"
                    ],
                    [
                        ".gap-14",
                        "gap: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".gap-16",
                        "gap: 4rem;",
                        "64px"
                    ],
                    [
                        ".gap-20",
                        "gap: 5rem;",
                        "80px"
                    ],
                    [
                        ".gap-24",
                        "gap: 6rem;",
                        "96px"
                    ],
                    [
                        ".gap-28",
                        "gap: 7rem;",
                        "112px"
                    ],
                    [
                        ".gap-32",
                        "gap: 8rem;",
                        "128px"
                    ],
                    [
                        ".gap-36",
                        "gap: 9rem;",
                        "144px"
                    ],
                    [
                        ".gap-40",
                        "gap: 10rem;",
                        "160px"
                    ],
                    [
                        ".gap-44",
                        "gap: 11rem;",
                        "176px"
                    ],
                    [
                        ".gap-48",
                        "gap: 12rem;",
                        "192px"
                    ],
                    [
                        ".gap-52",
                        "gap: 13rem;",
                        "208px"
                    ],
                    [
                        ".gap-56",
                        "gap: 14rem;",
                        "224px"
                    ],
                    [
                        ".gap-64",
                        "gap: 16rem;",
                        "256px"
                    ],
                    [
                        ".gap-72",
                        "gap: 18rem;",
                        "288px"
                    ],
                    [
                        ".gap-80",
                        "gap: 20rem;",
                        "320px"
                    ],
                    [
                        ".gap-96",
                        "gap: 24rem;",
                        "384px"
                    ],
                    [
                        ".gap-px",
                        "gap: 1px;",
                        ""
                    ],
                    [
                        ".gap-x-0",
                        "column-gap: 0;",
                        ""
                    ],
                    [
                        ".gap-x-0.5",
                        "column-gap: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".gap-x-1",
                        "column-gap: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".gap-x-1.5",
                        "column-gap: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".gap-x-2",
                        "column-gap: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".gap-x-2.5",
                        "column-gap: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".gap-x-3",
                        "column-gap: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".gap-x-3.5",
                        "column-gap: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".gap-x-4",
                        "column-gap: 1rem;",
                        "16px"
                    ],
                    [
                        ".gap-x-5",
                        "column-gap: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".gap-x-6",
                        "column-gap: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".gap-x-8",
                        "column-gap: 2rem;",
                        "32px"
                    ],
                    [
                        ".gap-x-10",
                        "column-gap: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".gap-x-11",
                        "column-gap: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".gap-x-12",
                        "column-gap: 3rem;",
                        "48px"
                    ],
                    [
                        ".gap-x-14",
                        "column-gap: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".gap-x-16",
                        "column-gap: 4rem;",
                        "64px"
                    ],
                    [
                        ".gap-x-20",
                        "column-gap: 5rem;",
                        "80px"
                    ],
                    [
                        ".gap-x-24",
                        "column-gap: 6rem;",
                        "96px"
                    ],
                    [
                        ".gap-x-28",
                        "column-gap: 7rem;",
                        "112px"
                    ],
                    [
                        ".gap-x-32",
                        "column-gap: 8rem;",
                        "128px"
                    ],
                    [
                        ".gap-x-36",
                        "column-gap: 9rem;",
                        "144px"
                    ],
                    [
                        ".gap-x-40",
                        "column-gap: 10rem;",
                        "160px"
                    ],
                    [
                        ".gap-x-44",
                        "column-gap: 11rem;",
                        "176px"
                    ],
                    [
                        ".gap-x-48",
                        "column-gap: 12rem;",
                        "192px"
                    ],
                    [
                        ".gap-x-52",
                        "column-gap: 13rem;",
                        "208px"
                    ],
                    [
                        ".gap-x-56",
                        "column-gap: 14rem;",
                        "224px"
                    ],
                    [
                        ".gap-x-64",
                        "column-gap: 16rem;",
                        "256px"
                    ],
                    [
                        ".gap-x-72",
                        "column-gap: 18rem;",
                        "288px"
                    ],
                    [
                        ".gap-x-80",
                        "column-gap: 20rem;",
                        "320px"
                    ],
                    [
                        ".gap-x-96",
                        "column-gap: 24rem;",
                        "384px"
                    ],
                    [
                        ".gap-x-px",
                        "column-gap: 1px;",
                        ""
                    ],
                    [
                        ".gap-y-0",
                        "row-gap: 0;",
                        ""
                    ],
                    [
                        ".gap-y-0.5",
                        "row-gap: 0.125rem;",
                        "2px"
                    ],
                    [
                        ".gap-y-1",
                        "row-gap: 0.25rem;",
                        "4px"
                    ],
                    [
                        ".gap-y-1.5",
                        "row-gap: 0.375rem;",
                        "6px"
                    ],
                    [
                        ".gap-y-2",
                        "row-gap: 0.5rem;",
                        "8px"
                    ],
                    [
                        ".gap-y-2.5",
                        "row-gap: 0.625rem;",
                        "10px"
                    ],
                    [
                        ".gap-y-3",
                        "row-gap: 0.75rem;",
                        "12px"
                    ],
                    [
                        ".gap-y-3.5",
                        "row-gap: 0.875rem;",
                        "14px"
                    ],
                    [
                        ".gap-y-4",
                        "row-gap: 1rem;",
                        "16px"
                    ],
                    [
                        ".gap-y-5",
                        "row-gap: 1.25rem;",
                        "20px"
                    ],
                    [
                        ".gap-y-6",
                        "row-gap: 1.5rem;",
                        "24px"
                    ],
                    [
                        ".gap-y-8",
                        "row-gap: 2rem;",
                        "32px"
                    ],
                    [
                        ".gap-y-10",
                        "row-gap: 2.5rem;",
                        "40px"
                    ],
                    [
                        ".gap-y-11",
                        "row-gap: 2.75rem;",
                        "44px"
                    ],
                    [
                        ".gap-y-12",
                        "row-gap: 3rem;",
                        "48px"
                    ],
                    [
                        ".gap-y-14",
                        "row-gap: 3.5rem;",
                        "56px"
                    ],
                    [
                        ".gap-y-16",
                        "row-gap: 4rem;",
                        "64px"
                    ],
                    [
                        ".gap-y-20",
                        "row-gap: 5rem;",
                        "80px"
                    ],
                    [
                        ".gap-y-24",
                        "row-gap: 6rem;",
                        "96px"
                    ],
                    [
                        ".gap-y-28",
                        "row-gap: 7rem;",
                        "112px"
                    ],
                    [
                        ".gap-y-32",
                        "row-gap: 8rem;",
                        "128px"
                    ],
                    [
                        ".gap-y-36",
                        "row-gap: 9rem;",
                        "144px"
                    ],
                    [
                        ".gap-y-40",
                        "row-gap: 10rem;",
                        "160px"
                    ],
                    [
                        ".gap-y-44",
                        "row-gap: 11rem;",
                        "176px"
                    ],
                    [
                        ".gap-y-48",
                        "row-gap: 12rem;",
                        "192px"
                    ],
                    [
                        ".gap-y-52",
                        "row-gap: 13rem;",
                        "208px"
                    ],
                    [
                        ".gap-y-56",
                        "row-gap: 14rem;",
                        "224px"
                    ],
                    [
                        ".gap-y-64",
                        "row-gap: 16rem;",
                        "256px"
                    ],
                    [
                        ".gap-y-72",
                        "row-gap: 18rem;",
                        "288px"
                    ],
                    [
                        ".gap-y-80",
                        "row-gap: 20rem;",
                        "320px"
                    ],
                    [
                        ".gap-y-96",
                        "row-gap: 24rem;",
                        "384px"
                    ],
                    [
                        ".gap-y-px",
                        "row-gap: 1px;",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Auto Flow",
                "docs": "https://tailwindcss.com/docs/grid-auto-flow",
                "description": "Controls the auto placement of grid elements.",
                "table": [
                    [
                        ".grid-flow-row",
                        "grid-auto-flow: row;",
                        ""
                    ],
                    [
                        ".grid-flow-col",
                        "grid-auto-flow: column;",
                        ""
                    ],
                    [
                        ".grid-flow-row-dense",
                        "grid-auto-flow: row dense;",
                        ""
                    ],
                    [
                        ".grid-flow-col-dense",
                        "grid-auto-flow: column dense;",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Auto Columns",
                "docs": "https://tailwindcss.com/docs/grid-auto-columns",
                "description": "Utilities for controlling the size of implicitly-created grid columns.",
                "table": [
                    [
                        ".auto-cols-auto",
                        "grid-auto-columns: auto;",
                        ""
                    ],
                    [
                        ".auto-cols-min",
                        "grid-auto-columns: min;",
                        ""
                    ],
                    [
                        ".auto-cols-max",
                        "grid-auto-columns: max;",
                        ""
                    ],
                    [
                        ".auto-cols-fr",
                        "grid-auto-columns: minmax(0, 1fr);",
                        ""
                    ]
                ]
            },
            {
                "title": "Grid Auto Rows",
                "docs": "https://tailwindcss.com/docs/grid-auto-rows",
                "description": "Utilities for controlling the size of implicitly-created grid rows.",
                "table": [
                    [
                        ".auto-rows-auto",
                        "grid-auto-rows: auto;",
                        ""
                    ],
                    [
                        ".auto-rows-min",
                        "grid-auto-rows: min;",
                        ""
                    ],
                    [
                        ".auto-rows-max",
                        "grid-auto-rows: max;",
                        ""
                    ],
                    [
                        ".auto-rows-fr",
                        "grid-auto-rows: minmax(0, 1fr);",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Tables",
        "content": [
            {
                "title": "Border Collapse",
                "docs": "https://tailwindcss.com/docs/border-collapse",
                "description": "Collapse or separate table borders.",
                "table": [
                    [
                        ".border-collapse",
                        "border-collapse: collapse;",
                        ""
                    ],
                    [
                        ".border-separate",
                        "border-collapse: separate;",
                        ""
                    ]
                ]
            },
            {
                "title": "Table Layout",
                "docs": "https://tailwindcss.com/docs/table-layout",
                "description": "Defines the algorithm used to lay out table cells, rows, and columns.",
                "table": [
                    [
                        ".table-auto",
                        "table-layout: auto;",
                        ""
                    ],
                    [
                        ".table-fixed",
                        "table-layout: fixed;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Effects",
        "content": [
            {
                "title": "Box Shadow",
                "docs": "https://tailwindcss.com/docs/box-shadow",
                "description": "",
                "table": [
                    [
                        ".shadow-xs",
                        "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);",
                        ""
                    ],
                    [
                        ".shadow-sm",
                        "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
                        ""
                    ],
                    [
                        ".shadow",
                        "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);",
                        ""
                    ],
                    [
                        ".shadow-md",
                        "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);",
                        ""
                    ],
                    [
                        ".shadow-lg",
                        "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);",
                        ""
                    ],
                    [
                        ".shadow-xl",
                        "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);",
                        ""
                    ],
                    [
                        ".shadow-2xl",
                        "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);",
                        ""
                    ],
                    [
                        ".shadow-inner",
                        "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);",
                        ""
                    ],
                    [
                        ".shadow-outline",
                        "box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);",
                        ""
                    ],
                    [
                        ".shadow-none",
                        "box-shadow: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Opacity",
                "docs": "https://tailwindcss.com/docs/opacity",
                "description": "",
                "table": [
                    [
                        ".opacity-0",
                        "opacity: 0;",
                        ""
                    ],
                    [
                        ".opacity-5",
                        "opacity: 0.05;",
                        ""
                    ],
                    [
                        ".opacity-10",
                        "opacity: 0.1;",
                        ""
                    ],
                    [
                        ".opacity-20",
                        "opacity: 0.2;",
                        ""
                    ],
                    [
                        ".opacity-25",
                        "opacity: 0.25;",
                        ""
                    ],
                    [
                        ".opacity-30",
                        "opacity: 0.3;",
                        ""
                    ],
                    [
                        ".opacity-40",
                        "opacity: 0.4;",
                        ""
                    ],
                    [
                        ".opacity-50",
                        "opacity: 0.5;",
                        ""
                    ],
                    [
                        ".opacity-60",
                        "opacity: 0.6;",
                        ""
                    ],
                    [
                        ".opacity-70",
                        "opacity: 0.7;",
                        ""
                    ],
                    [
                        ".opacity-75",
                        "opacity: 0.75;",
                        ""
                    ],
                    [
                        ".opacity-80",
                        "opacity: 0.8;",
                        ""
                    ],
                    [
                        ".opacity-90",
                        "opacity: 0.9;",
                        ""
                    ],
                    [
                        ".opacity-100",
                        "opacity: 1;",
                        ""
                    ]
                ]
            },
            {
                "title": "Mix Blend Mode",
                "docs": "https://tailwindcss.com/docs/mix-blend-mode",
                "description": "Utilities for controlling how an element should blend with the background.",
                "table": [
                    [
                        ".mix-blend-normal",
                        "mix-blend-mode: normal;",
                        ""
                    ],
                    [
                        ".mix-blend-multiply",
                        "mix-blend-mode: multiply;",
                        ""
                    ],
                    [
                        ".mix-blend-screen",
                        "mix-blend-mode: screen;",
                        ""
                    ],
                    [
                        ".mix-blend-overlay",
                        "mix-blend-mode: overlay;",
                        ""
                    ],
                    [
                        ".mix-blend-darken",
                        "mix-blend-mode: darken;",
                        ""
                    ],
                    [
                        ".mix-blend-lighten",
                        "mix-blend-mode: lighten;",
                        ""
                    ],
                    [
                        ".mix-blend-color-dodge",
                        "mix-blend-mode: color-dodge;",
                        ""
                    ],
                    [
                        ".mix-blend-color-burn",
                        "mix-blend-mode: color-burn;",
                        ""
                    ],
                    [
                        ".mix-blend-hard-light",
                        "mix-blend-mode: hard-light;",
                        ""
                    ],
                    [
                        ".mix-blend-soft-light",
                        "mix-blend-mode: soft-light;",
                        ""
                    ],
                    [
                        ".mix-blend-difference",
                        "mix-blend-mode: difference;",
                        ""
                    ],
                    [
                        ".mix-blend-exclusion",
                        "mix-blend-mode: exclusion;",
                        ""
                    ],
                    [
                        ".mix-blend-hue",
                        "mix-blend-mode: hue;",
                        ""
                    ],
                    [
                        ".mix-blend-saturation",
                        "mix-blend-mode: saturation;",
                        ""
                    ],
                    [
                        ".mix-blend-color",
                        "mix-blend-mode: color;",
                        ""
                    ],
                    [
                        ".mix-blend-luminosity",
                        "mix-blend-mode: luminosity;",
                        ""
                    ]
                ]
            },
            {
                "title": "Background Blend Mode",
                "docs": "https://tailwindcss.com/docs/background-blend-mode",
                "description": "Utilities for controlling how an element's background image should blend with its background color.",
                "table": [
                    [
                        ".bg-blend-normal",
                        "background-blend-mode: normal;",
                        ""
                    ],
                    [
                        ".bg-blend-multiply",
                        "background-blend-mode: multiply;",
                        ""
                    ],
                    [
                        ".bg-blend-screen",
                        "background-blend-mode: screen;",
                        ""
                    ],
                    [
                        ".bg-blend-overlay",
                        "background-blend-mode: overlay;",
                        ""
                    ],
                    [
                        ".bg-blend-darken",
                        "background-blend-mode: darken;",
                        ""
                    ],
                    [
                        ".bg-blend-lighten",
                        "background-blend-mode: lighten;",
                        ""
                    ],
                    [
                        ".bg-blend-color-dodge",
                        "background-blend-mode: color-dodge;",
                        ""
                    ],
                    [
                        ".bg-blend-color-burn",
                        "background-blend-mode: color-burn;",
                        ""
                    ],
                    [
                        ".bg-blend-hard-light",
                        "background-blend-mode: hard-light;",
                        ""
                    ],
                    [
                        ".bg-blend-soft-light",
                        "background-blend-mode: soft-light;",
                        ""
                    ],
                    [
                        ".bg-blend-difference",
                        "background-blend-mode: difference;",
                        ""
                    ],
                    [
                        ".bg-blend-exclusion",
                        "background-blend-mode: exclusion;",
                        ""
                    ],
                    [
                        ".bg-blend-hue",
                        "background-blend-mode: hue;",
                        ""
                    ],
                    [
                        ".bg-blend-saturation",
                        "background-blend-mode: saturation;",
                        ""
                    ],
                    [
                        ".bg-blend-color",
                        "background-blend-mode: color;",
                        ""
                    ],
                    [
                        ".bg-blend-luminosity",
                        "background-blend-mode: luminosity;",
                        ""
                    ]
                ]
            }
        ]
    },
    {
        "title": "Filters",
        "content": [
            {
                "title": "Filter",
                "docs": "https://tailwindcss.com/docs/filter",
                "description": "Utilities for enabling and disabling filters on an element.",
                "table": [
                    [
                        ".filter",
                        "filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);",
                        ""
                    ],
                    [
                        ".filter-none",
                        "filter: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Blur",
                "docs": "https://tailwindcss.com/docs/blur",
                "description": "Utilities for applying blur filters to an element.",
                "table": [
                    [
                        ".blur-0",
                        "blur: blur(0);",
                        ""
                    ],
                    [
                        ".blur-sm",
                        "blur: blur(4px);",
                        ""
                    ],
                    [
                        ".blur",
                        "blur: blur(8px);",
                        ""
                    ],
                    [
                        ".blur-md",
                        "blur: blur(12px);",
                        ""
                    ],
                    [
                        ".blur-lg",
                        "blur: blur(16px);",
                        ""
                    ],
                    [
                        ".blur-xl",
                        "blur: blur(24px);",
                        ""
                    ],
                    [
                        ".blur-2xl",
                        "blur: blur(40px);",
                        ""
                    ],
                    [
                        ".blur-3xl",
                        "blur: blur(64px);",
                        ""
                    ]
                ]
            },
            {
                "title": "Brightness",
                "docs": "https://tailwindcss.com/docs/brightness",
                "description": "Utilities for applying brightness filters to an element.",
                "table": [
                    [
                        ".brightness-0",
                        "brightness: brightness(0);",
                        ""
                    ],
                    [
                        ".brightness-50",
                        "brightness: brightness(.5);",
                        ""
                    ],
                    [
                        ".brightness-75",
                        "brightness: brightness(.75);",
                        ""
                    ],
                    [
                        ".brightness-90",
                        "brightness: brightness(.9);",
                        ""
                    ],
                    [
                        ".brightness-95",
                        "brightness: brightness(.95);",
                        ""
                    ],
                    [
                        ".brightness-100",
                        "brightness: brightness(1);",
                        ""
                    ],
                    [
                        ".brightness-105",
                        "brightness: brightness(1.05);",
                        ""
                    ],
                    [
                        ".brightness-110",
                        "brightness: brightness(1.1);",
                        ""
                    ],
                    [
                        ".brightness-125",
                        "brightness: brightness(1.25);",
                        ""
                    ],
                    [
                        ".brightness-150",
                        "brightness: brightness(1.5);",
                        ""
                    ],
                    [
                        ".brightness-200",
                        "brightness: brightness(2);",
                        ""
                    ]
                ]
            },
            {
                "title": "Contrast",
                "docs": "https://tailwindcss.com/docs/contrast",
                "description": "Utilities for applying contrast filters to an element.",
                "table": [
                    [
                        ".contrast-0",
                        "contrast: contrast(0);",
                        ""
                    ],
                    [
                        ".contrast-50",
                        "contrast: contrast(.5);",
                        ""
                    ],
                    [
                        ".contrast-75",
                        "contrast: contrast(.75);",
                        ""
                    ],
                    [
                        ".contrast-100",
                        "contrast: contrast(1);",
                        ""
                    ],
                    [
                        ".contrast-125",
                        "contrast: contrast(1.25);",
                        ""
                    ],
                    [
                        ".contrast-150",
                        "contrast: contrast(1.5);",
                        ""
                    ],
                    [
                        ".contrast-200",
                        "contrast: contrast(2);",
                        ""
                    ]
                ]
            },
            {
                "title": "Drop Shadow",
                "docs": "https://tailwindcss.com/docs/drop-shadow",
                "description": "Utilities for applying drop-shadow filters to an element.",
                "table": [
                    [
                        ".drop-shadow-sm",
                        "drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05));",
                        ""
                    ],
                    [
                        ".drop-shadow",
                        "drop-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));",
                        ""
                    ],
                    [
                        ".drop-shadow-md",
                        "drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));",
                        ""
                    ],
                    [
                        ".drop-shadow-lg",
                        "drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));",
                        ""
                    ],
                    [
                        ".drop-shadow-xl",
                        "drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));",
                        ""
                    ],
                    [
                        ".drop-shadow-2xl",
                        "drop-shadow: drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));",
                        ""
                    ],
                    [
                        ".drop-shadow-none",
                        "drop-shadow: drop-shadow: drop-shadow(0 0 #0000);",
                        ""
                    ]
                ]
            },
            {
                "title": "Grayscale",
                "docs": "https://tailwindcss.com/docs/grayscale",
                "description": "Utilities for applying grayscale filters to an element.",
                "table": [
                    [
                        ".grayscale-0",
                        "grayscale: grayscale(0);",
                        ""
                    ],
                    [
                        ".grayscale",
                        "grayscale: grayscale(1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Hue Rotate",
                "docs": "https://tailwindcss.com/docs/hue-rotate",
                "description": "Utilities for applying hue-rotate filters to an element.",
                "table": [
                    [
                        ".-hue-rotate-180",
                        "hue-rotate: hue-rotate(-180deg);",
                        ""
                    ],
                    [
                        ".-hue-rotate-90",
                        "hue-rotate: hue-rotate(-90deg);",
                        ""
                    ],
                    [
                        ".-hue-rotate-60",
                        "hue-rotate: hue-rotate(-60deg);",
                        ""
                    ],
                    [
                        ".-hue-rotate-30",
                        "hue-rotate: hue-rotate(-30deg);",
                        ""
                    ],
                    [
                        ".-hue-rotate-15",
                        "hue-rotate: hue-rotate(-15deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-0",
                        "hue-rotate: hue-rotate(0deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-15",
                        "hue-rotate: hue-rotate(15deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-30",
                        "hue-rotate: hue-rotate(30deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-60",
                        "hue-rotate: hue-rotate(60deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-90",
                        "hue-rotate: hue-rotate(90deg);",
                        ""
                    ],
                    [
                        ".hue-rotate-180",
                        "hue-rotate: hue-rotate(180deg);",
                        ""
                    ]
                ]
            },
            {
                "title": "Invert",
                "docs": "https://tailwindcss.com/docs/invert",
                "description": "Utilities for applying invert filters to an element.",
                "table": [
                    [
                        ".invert-0",
                        "invert: invert(0);",
                        ""
                    ],
                    [
                        ".invert",
                        "invert: invert(1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Saturate",
                "docs": "https://tailwindcss.com/docs/saturate",
                "description": "Utilities for applying saturation filters to an element.",
                "table": [
                    [
                        ".saturate-0",
                        "saturate: saturate(0);",
                        ""
                    ],
                    [
                        ".saturate-50",
                        "saturate: saturate(.5);",
                        ""
                    ],
                    [
                        ".saturate-100",
                        "saturate: saturate(1);",
                        ""
                    ],
                    [
                        ".saturate-150",
                        "saturate: saturate(1.50);",
                        ""
                    ],
                    [
                        ".saturate-200",
                        "saturate: saturate(2);",
                        ""
                    ]
                ]
            },
            {
                "title": "Sepia",
                "docs": "https://tailwindcss.com/docs/sepia",
                "description": "Utilities for applying sepia filters to an element.",
                "table": [
                    [
                        ".sepia-0",
                        "sepia: sepia(0);",
                        ""
                    ],
                    [
                        ".sepia",
                        "sepia: sepia(1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Filter",
                "docs": "https://tailwindcss.com/docs/backdrop-filter",
                "description": "Utilities for enabling and disabling backdrop filters on an element.",
                "table": [
                    [
                        ".backdrop-filter",
                        "backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);",
                        ""
                    ],
                    [
                        ".backdrop-filter-none",
                        "backdrop-filter: none;",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Blur",
                "docs": "https://tailwindcss.com/docs/backdrop-blur",
                "description": "Utilities for applying backdrop blur filters to an element.",
                "table": [
                    [
                        ".backdrop-blur-0",
                        "backdrop-blur: blur(0);",
                        ""
                    ],
                    [
                        ".backdrop-blur-sm",
                        "backdrop-blur: blur(4px);",
                        ""
                    ],
                    [
                        ".backdrop-blur",
                        "backdrop-blur: blur(8px);",
                        ""
                    ],
                    [
                        ".backdrop-blur-md",
                        "backdrop-blur: blur(12px);",
                        ""
                    ],
                    [
                        ".backdrop-blur-lg",
                        "backdrop-blur: blur(16px);",
                        ""
                    ],
                    [
                        ".backdrop-blur-xl",
                        "backdrop-blur: blur(24px);",
                        ""
                    ],
                    [
                        ".backdrop-blur-2xl",
                        "backdrop-blur: blur(40px);",
                        ""
                    ],
                    [
                        ".backdrop-blur-3xl",
                        "backdrop-blur: blur(64px);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Brightness",
                "docs": "https://tailwindcss.com/docs/backdrop-brightness",
                "description": "Utilities for applying Backdrop Brightness filters to an element.",
                "table": [
                    [
                        ".backdrop-brightness-0",
                        "backdrop-brightness: brightness(0);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-sm",
                        "backdrop-brightness: brightness(4px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness",
                        "backdrop-brightness: brightness(8px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-md",
                        "backdrop-brightness: brightness(12px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-lg",
                        "backdrop-brightness: brightness(16px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-xl",
                        "backdrop-brightness: brightness(24px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-2xl",
                        "backdrop-brightness: brightness(40px);",
                        ""
                    ],
                    [
                        ".backdrop-brightness-3xl",
                        "backdrop-brightness: brightness(64px);",
                        ""
                    ]
                ]
            },
            {
                "title": "BackdropContrast",
                "docs": "https://tailwindcss.com/docs/backdrop-contrast",
                "description": "Utilities for applying backdrop contrast filters to an element.",
                "table": [
                    [
                        ".backdrop-contrast-0",
                        "backdrop-contrast: contrast(0);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-50",
                        "backdrop-contrast: contrast(.5);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-75",
                        "backdrop-contrast: contrast(.75);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-100",
                        "backdrop-contrast: contrast(1);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-125",
                        "backdrop-contrast: contrast(1.25);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-150",
                        "backdrop-contrast: contrast(1.5);",
                        ""
                    ],
                    [
                        ".backdrop-contrast-200",
                        "backdrop-contrast: contrast(2);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Grayscale",
                "docs": "https://tailwindcss.com/docs/backdrop-grayscale",
                "description": "Utilities for applying backdrop grayscale filters to an element.",
                "table": [
                    [
                        ".backdrop-grayscale-0",
                        "backdrop-grayscale: grayscale(0);",
                        ""
                    ],
                    [
                        ".backdrop-grayscale",
                        "backdrop-grayscale: grayscale(1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Hue Rotate",
                "docs": "https://tailwindcss.com/docs/backdrop-hue-rotate",
                "description": "Utilities for applying backdrop hue-rotate filters to an element.",
                "table": [
                    [
                        ".-backdrop-hue-rotate-180",
                        "backdrop-hue-rotate: hue-rotate(-180deg);",
                        ""
                    ],
                    [
                        ".-backdrop-hue-rotate-90",
                        "backdrop-hue-rotate: hue-rotate(-90deg);",
                        ""
                    ],
                    [
                        ".-backdrop-hue-rotate-60",
                        "backdrop-hue-rotate: hue-rotate(-60deg);",
                        ""
                    ],
                    [
                        ".-backdrop-hue-rotate-30",
                        "backdrop-hue-rotate: hue-rotate(-30deg);",
                        ""
                    ],
                    [
                        ".-backdrop-hue-rotate-15",
                        "backdrop-hue-rotate: hue-rotate(-15deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-0",
                        "backdrop-hue-rotate: hue-rotate(0deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-15",
                        "backdrop-hue-rotate: hue-rotate(15deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-30",
                        "backdrop-hue-rotate: hue-rotate(30deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-60",
                        "backdrop-hue-rotate: hue-rotate(60deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-90",
                        "backdrop-hue-rotate: hue-rotate(90deg);",
                        ""
                    ],
                    [
                        ".backdrop-hue-rotate-180",
                        "backdrop-hue-rotate: hue-rotate(180deg);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Invert",
                "docs": "https://tailwindcss.com/docs/backdrop-invert",
                "description": "Utilities for applying backdrop invert filters to an element.",
                "table": [
                    [
                        ".backdrop-invert-0",
                        "backdrop-invert: invert(0);",
                        ""
                    ],
                    [
                        ".backdrop-invert",
                        "backdrop-invert: invert(1);",
                        ""
                    ]

                ]
            },
            {
                "title": "Backdrop Opacity",
                "docs": "https://tailwindcss.com/docs/backdrop-opacity",
                "description": "Utilities for applying backdrop opacity filters to an element.",
                "table": [
                    [
                        ".backdrop-opacity-0",
                        "backdrop-opacity: opacity(0);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-5",
                        "backdrop-opacity: opacity(0.05);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-10",
                        "backdrop-opacity: opacity(0.1);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-20",
                        "backdrop-opacity: opacity(0.2);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-25",
                        "backdrop-opacity: opacity(0.25);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-30",
                        "backdrop-opacity: opacity(0.3);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-40",
                        "backdrop-opacity: opacity(0.4);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-50",
                        "backdrop-opacity: opacity(0.5);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-60",
                        "backdrop-opacity: opacity(0.6);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-70",
                        "backdrop-opacity: opacity(0.7);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-75",
                        "backdrop-opacity: opacity(0.75);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-80",
                        "backdrop-opacity: opacity(0.8);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-90",
                        "backdrop-opacity: opacity(0.9);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-95",
                        "backdrop-opacity: opacity(0.95);",
                        ""
                    ],
                    [
                        ".backdrop-opacity-100",
                        "backdrop-opacity: opacity(1);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Saturate",
                "docs": "https://tailwindcss.com/docs/backdrop-saturate",
                "description": "Utilities for applying backdrop saturation filters to an element.",
                "table": [
                    [
                        ".backdrop-saturate-0",
                        "backdrop-saturate: saturate(0);",
                        ""
                    ],
                    [
                        ".backdrop-saturate-50",
                        "backdrop-saturate: saturate(.5);",
                        ""
                    ],
                    [
                        ".backdrop-saturate-100",
                        "backdrop-saturate: saturate(1);",
                        ""
                    ],
                    [
                        ".backdrop-saturate-150",
                        "backdrop-saturate: saturate(1.50);",
                        ""
                    ],
                    [
                        ".backdrop-saturate-200",
                        "backdrop-saturate: saturate(2);",
                        ""
                    ]
                ]
            },
            {
                "title": "Backdrop Sepia",
                "docs": "https://tailwindcss.com/docs/sepia",
                "description": "Utilities for applying backdrop sepia filters to an element.",
                "table": [
                    [
                        ".backdrop-sepia-0",
                        "backdrop-sepia: sepia(0);",
                        ""
                    ],
                    [
                        ".backdrop-sepia",
                        "backdrop-sepia: sepia(1);",
                        ""
                    ]
                ]
            }
        ]
    }
]

export default CheatSheet;
