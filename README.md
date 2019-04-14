# React Skeleton

## Scripts

### Stylesheet

To generate the project's CSS, run `npm run generate`. See the
[Tailwind](#tailwind) section for more information.

### Running

To start the development server, run `npm run serve`.

### Formatting

To format all source files with Prettier, run `npm run format`.

### Unit Tests

To run the testing framework, run `npm run test`.

### Building

To build production artifacts, run `npm run build`.

## Tailwind

This project uses [Tailwind CSS](https://tailwindcss.com/docs). Generating the
CSS files requires an extra build step which goes something like this:

0. Run `npx run tailwind init tailwind.js` (Only needs to be done once.)
1. Make changes to `tailwind.js` or `stylesheet/tailwind.src.css`.
2. Run `npm run generate` to generate the `stylesheet/style.css`.
