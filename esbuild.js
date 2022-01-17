#!/usr/bin/env node

import esbuildServe from "esbuild-serve";
import pkg from "esbuild-plugin-external-global";

const { externalGlobalPlugin } = pkg;

// noinspection JSIgnoredPromiseFromCall
esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outfile: "out/index.js",
    sourcemap: true,
    define: { "process.env.NODE_ENV": '"development"' },
    external: ["react", "react-dom"],
    plugins: [
      externalGlobalPlugin({
        react: "window.React",
        "react-dom": "window.ReactDOM",
      }),
    ],
  },
  {
    root: "out",
    port: 5000,
  }
);
