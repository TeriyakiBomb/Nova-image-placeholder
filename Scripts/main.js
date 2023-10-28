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
        return `/${width}${height ? `/${height}` : ""}?random=${randomNum}`;
      } else {
        return `/${width}${height ? `/${height}` : ""}`;
      }
    }
  }

  return "Invalid input format";
}

// PICSUM ---------------------------------------------------

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholder",
  (editor) => {
    let provider = "https://picsum.photos";
    let options = {};
    const random = false;
    nova.workspace.showInputPalette(
      "Enter width and then height",
      options,
      function (result) {
        if (result) {
          let dimensions = parseDimensions(result, random);
          editor.insert(provider + dimensions);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderRandom",
  (editor) => {
    let provider = "https://picsum.photos";
    let options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, randomised output",
      options,
      function (result) {
        if (result) {
          let dimensions = parseDimensions(result, random);
          editor.insert(provider + dimensions);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderTag",
  (editor) => {
    let provider = "https://picsum.photos";
    let options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        if (result) {
          let dimensions = parseDimensions(result, random);
          editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderCssBg",
  (editor) => {
    const provider = "https://picsum.photos";
    const options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background iamge",
      options,
      function (result) {
        if (result) {
          let dimensions = parseDimensions(result, random);
          editor.insert(`background-image: url("${provider}${dimensions}")`);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.picsumInsertImagePlaceholderCssBgRandom",
  (editor) => {
    const provider = "https://picsum.photos";
    const options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background iamge",
      options,
      function (result) {
        if (result) {
          let dimensions = parseDimensions(result, random);
          editor.insert(`background-image: url("${provider}${dimensions}")`);
        }
      }
    );
  }
);
