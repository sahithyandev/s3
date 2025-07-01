import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";

export const SITE_TITLE = "Sahithyan's S3";
export const SITE_DESCRIPTION = "Sahithyan's 2nd semester notes of Engineering";
export const SITE_DOMAIN = "s3.sahithyan.dev";
export const SITE_HREF = `https://${SITE_DOMAIN}`;
export const CREATE_E_BOOK = process.env.CREATE_E_BOOK || false;

export const HTML__HOMEPAGE_DESCRIPTION = `I’ve created a website to share <a href="https://sahithyan.dev">my</a> 2nd-semester Computer Science & Engineering notes, following the success of <a href="https://s1.sahithyan.dev">S1</a>, which helped me achieve <b><u>4.0 GPA.</u></b>`;

/**
 * @type {Record<string, string>}
 */
export const MODULE_CODES = {
  "Program Construction": "CS1040",
  "Theory of Electricity": "EE2094",
  "Methods of Mathematics": "MA1024",
  "Computer Organization and Digital Design": "CS1050",
  "Data Structures and Algorithms": "CS2023",
};

export const BOOK_CONFIG = {
  description:
    "This e-book is a complete compilation of all the core modules I studied during my 2nd semester of Computer Science & Engineering. It is designed to serve as a well-organized and accessible resource for students, offering a streamlined way to review key concepts and materials.\n\nWhile all of this content is freely available on the website, this e-book provides a convenient, offline format for easy reference. By purchasing this e-book, you are not only supporting my work but also helping me continue to share educational resources for students like you.",
};

/**
 * @type {Parameters<typeof starlight>[0]["head"]}
 */
export const STARLIGHT_CONFIG_HEAD = [];
if (process.env.NODE_ENV === "production") {
  STARLIGHT_CONFIG_HEAD.push({
    tag: "script",
    attrs: {
      defer: true,
      "data-domain": "s3.sahithyan.dev",
      src: "https://analytics.sahithyan.dev/js/script.js",
    },
  });
}

/**
 * @type {Parameters<typeof starlight>[0]["sidebar"]}
 */
export const STARLIGHT_SIDEBAR_CONFIG = [
  {
    label: "Computer Organization & Digital Design",
    items: [
      {
        label: "Basics",
        collapsed: true,
        autogenerate: {
          directory: "computer-organization-and-digital-design/basics",
        },
      },
      {
        label: "Combinational Logic",
        collapsed: true,
        autogenerate: {
          directory: "computer-organization-and-digital-design/combinational-logic",
        },
      },
      {
        label: "Sequential Logic",
        collapsed: true,
        autogenerate: {
          directory: "computer-organization-and-digital-design/sequential-logic",
        },
      },
      {
        label: "Computer Organization",
        collapsed: true,
        autogenerate: {
          directory: "computer-organization-and-digital-design/computer-organization",
        },
      },
    ],
  },
  {
    label: "Data Structures & Algorithms",
    items: [
      {
        label: "Common",
        collapsed: true,
        autogenerate: {
          directory: "data-structures-and-algorithms/common",
        },
      },
      {
        label: "Algorithms",
        collapsed: true,
        autogenerate: {
          directory: "data-structures-and-algorithms/algorithms",
        },
      },
      {
        label: "Data Structures",
        collapsed: true,
        autogenerate: {
          directory: "data-structures-and-algorithms/data-structures",
        },
      },
    ],
  },
  {
    label: "Methods of Mathematics",
    items: [
      {
        label: "Multivariable Calculus",
        collapsed: true,
        autogenerate: {
          directory: "methods-of-mathematics/multivariable-calculus",
        },
      },
      {
        label: "Numerical Methods",
        collapsed: true,
        autogenerate: {
          directory: "methods-of-mathematics/numerical-methods",
        },
      },
      {
        label: "Probability",
        collapsed: true,
        autogenerate: {
          directory: "methods-of-mathematics/probability",
        },
      },
      {
        label: "Statistics",
        collapsed: true,
        autogenerate: {
          directory: "methods-of-mathematics/statistics",
        },
      },
    ],
  },
  {
    label: "Program Construction",
    items: [
      {
        label: "Basics",
        collapsed: true,
        autogenerate: {
          directory: "program-construction/basics",
        },
      },
      {
        label: "Design Patterns",
        collapsed: true,
        autogenerate: {
          directory: "program-construction/design-patterns",
        },
      },
    ],
  },
  {
    label: "Theory of Electricity",
    collapsed: true,
    autogenerate: {
      directory: "theory-of-electricity",
    },
  },
  {
    label: "License",
    link: "/license",
  },
];
