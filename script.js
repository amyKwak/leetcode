// Write a script that finds the average image dimensions from Wikipedia

import { JSDOM } from "jsdom";

async function fetchImages() {
  const response = await fetch(
    "https://en.wikipedia.org/wiki/Special:Random/File",
  );

  if (!response.ok) throw new Error("Failed to retrieve images");
  const html = await response.text();
  const dom = new JSDOM(html);

  //   // Parse the text

  console.log(dom);
}

async function main() {
  try {
    const images = await fetchImages();

    // Get images
    // Get average dimension of images
    // return tuple [width, height] average
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
