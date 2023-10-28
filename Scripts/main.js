function parseDimensions(input, random = false) {
  const regexes = [
    /^\d+\s\d+$/,
    /^w\d+\sh\d+$/,
    /^\d+,\d+$/,
    /^\d+\/\d+$/,
    /^\d+$/,
  ];

  for (const regex of regexes) {
    if (regex.test(input)) {
      const [width, height] = input.match(/\d+/g);
      if (random) {
        const randomNum = Math.floor(Math.random() * 999) + 1;
        return `${width}${height ? `/${height}` : ""}?random=${randomNum}`;
      } else {
        return `${width}${height ? `/${height}` : ""}`;
      }
    }
  }

  return "Invalid input format";
}

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholder",
  (editor) => {
    let generator = "https://picsum.photos/";
    let options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          let dimensions = parseDimensions(result);
          editor.insert(generator + dimensions);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderRandom",
  (editor) => {
    let generator = "https://picsum.photos/";
    let options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, randomised output",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          random = true;
          let dimensions = parseDimensions(result, random);
          editor.insert(generator + dimensions);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderTag",
  (editor) => {
    let generator = "https://picsum.photos/";
    let options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          random = false;
          let dimensions = parseDimensions(result, random);
          editor.insert(`<img src="${generator}${dimensions}" alt="$[]">`);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderCssBg",
  (editor) => {
    let generator = "https://picsum.photos/";
    let options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background iamge",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          random = false;
          let dimensions = parseDimensions(result, random);
          editor.insert(`background-image: url("${generator}${dimensions}")`);
        }
      }
    );
  }
);
