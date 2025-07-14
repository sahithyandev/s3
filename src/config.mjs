import starlight from "@astrojs/starlight";
// import starlightLinksValidator from "starlight-links-validator";

export const SITE_TITLE = "Sahithyan's S3";
export const SITE_DESCRIPTION = "Sahithyan's 3rd semester notes of Engineering";
export const SITE_DOMAIN = "s3.sahithyan.dev";
export const SITE_HREF = `https://${SITE_DOMAIN}`;
export const CREATE_E_BOOK = process.env.CREATE_E_BOOK || false;

export const HTML__HOMEPAGE_DESCRIPTION = `I’ve created a website to share <a href="https://sahithyan.dev">my</a> 3rd-semester Computer Science & Engineering notes, following the success of <a href="https://s1.sahithyan.dev">S1</a>, which helped me achieve <b><u>4.0 GPA.</u></b>`;

/**
 * @type {Record<string, string>}
 */
export const MODULE_CODES = {
  "Artificial Intelligence": "CS3613",
  "Computer Architecture": "CS2053",
};

export const BOOK_CONFIG = {
  description:
    "This e-book is a complete compilation of all the core modules I studied during my 3rd semester of Computer Science & Engineering. It is designed to serve as a well-organized and accessible resource for students, offering a streamlined way to review key concepts and materials.\n\nWhile all of this content is freely available on the website, this e-book provides a convenient, offline format for easy reference. By purchasing this e-book, you are not only supporting my work but also helping me continue to share educational resources for students like you.",
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
    label: "AI",
    autogenerate: {
      directory: "ai",
    }
  },
  {
    label: "Computer Architecture",
    autogenerate: {
      directory: "computer-architecture",
    }
  },
  {
    label: "License",
    link: "/license",
  },
];
