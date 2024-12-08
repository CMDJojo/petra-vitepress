# Website content

Hello, here in the folder `content` lives the website content itself. Here are
some instructions on how to create and edit pages.

## Basic structure

Each file ending in `.md`, excluding `README.md`, becomes one web page on the
actual website. Files named `index.md` will have the same name as the folder
the file is in. All other `.md` files will be their own web page, with the same
name as the file name.

If you want to make a page named `Test`, which will be found on
`https://petragroup.se/test.html`, then you should create a file named
`Test.md`. You can create a new file on GitHub by navigating to where you want
your file using the file navigator above, and then clicking on "**Add file**"
and then "**+ Create new file**". If you do that on this page (inside this
folder, named `content`), you will see `petra-vitepress/<name your file>`.
Enter the name `Test.md`. Then, in the big box saying "Enter file contents
here", you write your page. Simply write whatever you want to appear on the
page, in just plain text. The format used on the pages is Markdown, described
below.

If you want to make a "page within a group", like we have the "About PETRA"
page group with the page "The team" within it, it needs to be in a folder with
the name of the group. You can simply do this by adding slashes to the file
name, so for a page under `Research Projects` named `New Project.md` you would
"name" the file `Research Projects/New Project.md`. When you enter the slash,
you will automatically see the file being created within a subfolder.
To have a page appear when you click the page group name, you should create
a file within the folder named `index.md`.
_Note: You cannot have empty folders._

To edit an existing page, find the associated `.md` file in the file navigator
above, click on it, then click the pen icon "Edit this file" and edit is as you
please.

When you are happy with your changes, click "Commit changes", a box will appear,
make sure "Commit directly to the main branch" is selected and then click
"Commit changes". Wait a minute and your page will be online! All history is
stored, so if you do something wrong, you can always revert the changes (but
that is outside the scope of this tutorial, please contact Jonathan and he will
do it faster than you can blink)

## Markdown

In Markdown, plain text is written as-is. You can press enter to create new
rows, and multiple consecutive rows will become one single paragraph. For
example,

```md
Hello, my name is Jonathan Widén, and I
am a student at CSE at Chalmers
```

will all become one single paragraph. Add blank lines between multiple
paragraphs, like this:

```md
This is one paragraph.

This is a second one. Let me tell you
something interesting...
```

If you are unsure if you got it right, click "preview" at the top of the text
box and see if the paragraphs looks like you expect.

### Headings

You make headings by using `#`. If you want a heading with the text "PETRA", do
something like:

```md
# PETRA

Here is some text about PETRA...
```

If you do `##` you get a subheading instead, and you can add even more hashtags
for even smaller sections. Use the "preview" feature to make sure it looks
right. That is it, easy does it.

### Links

You can link to a website by doing `[link text](https://example.com)`. So, if
you want a link with the text "Click here" to gu.se, you can do
`[Click here](https://gu.se)`, and it will look like
[Click here](https://gu.se).

### **Bold** and _italic_ text

To get text bold, surround it with `**`, like `**this**`. It will look like
**this**. To get text italic, surround it with `_`, `_this_` looks like _this_.
To get text both bold and italic, surround it with `***`. `***this***` looks
like ***this***.

### Images

To add an image, first upload it to the "public" folder. Name it something you
will remember. If your image is named `logo.png`, you can add it by doing
`![image](/logo.png)`. It will look like this:

![image](/content/public/logo.png)

_Note: Previewing images in GitHub does not work._

### Lists

You can make an unnumbered list like

- One
- Two
- Three

by doing

```md
- One
- Two
- Three
```

_Ensure you have a blank row before the list._ Numbered lists, like

1. One
1. Two
1. Three

can be done with either

```md
1. One
2. Two
3. Three
```

or even

```md
1. One
1. Two
1. Three
```

(The items will be numbered automatically)

### For advanced users: HTML and CSS

Ignore this if you don't know what HTML or CSS is.

You can use HTML and CSS directly in the Markdown file. For even more advanced
use cases, you can create Vue components and use them. To learn more, check out
the [Vitepress documentation](https://vitepress.dev/). For styling images, the
easiest thing is probably to do something like
`<img class="my-image" src="...">` and
`<style>image.my-image {...}</style>`.

## Advanced features

_Skip this if you are not an advanced user._

You can add so-called frontmatter properties at the top of each `.md` file to
change how Vitepress treats it. The properties are written in YAML format, which
is very easy for key-value pairs. If you want a page to be excluded from the
sidebar index, you can put this at the very top of the `.md` file:

```
---
exclude: true
---
```

If you want to exclude it from sidebar indexing, disable the sidebar completely,
and add a "last updated" text, you can do this:

```
---
exclude: true
sidebar: false
lastUpdated: true
---
```

Check out [the docs](https://vitepress.dev/reference/frontmatter-config) for
more!

Since Vitepress is compiled down to Vue, you can write your own Vue components
and use them. You can also add custom properties to frontmatter and extract
them with [data loaders](https://vitepress.dev/guide/data-loading). Also, you
can customize the theme or even build your own theme.
