# PETRA Vitepress homepage

Welcome to the repository of the PETRA home page. In here, you can see all the
code that makes up the home page. The pages themselves are contained within
the [content](/content) directory. If you want to add or edit pages, click
[here](/content) for a tutorial.

## Running

Clone the repo, `npm install` the dependencies and launch a development server
with hot reloading with `npm run dev`. Any changes to existing pages will appear
immediately, and adding new pages (in terms of `.md` files) will work, but the
sidebar will not automatically be updated. You can manually go to the link of
the page if you want to work on a new page, or quit and restart the server.

To build for production, use `npm run build`, and your output will be located
in `.vitepress/dist`.
