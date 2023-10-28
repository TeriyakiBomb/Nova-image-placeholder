function parseDimensions(input) {
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
      return `${width}${height ? `/${height}` : ""}`;
    }
  }

  return "Invalid input format";
}

function parseDimensionsRandom(input) {
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
      const randomNum = Math.floor(Math.random() * 999) + 1;
      return `${width}${height ? `/${height}` : ""}?random=${randomNum}`;
    }
  }

  return "Invalid input format";
}

nova.commands.register("image-placeholder.insertImagePlaceholder", (editor) => {
  let generator = "https://picsum.photos/";
  var options = {};
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
});

nova.commands.register(
  "image-placeholder.insertImagePlaceholderRandom",
  (editor) => {
    let generator = "https://picsum.photos/";
    var options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, randomised output",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          let dimensions = parseDimensionsRandom(result);
          editor.insert(generator + dimensions);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.insertImagePlaceholderTag",
  (editor) => {
    let generator = "https://picsum.photos/";
    var options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          let dimensions = parseDimensions(result);
          editor.insert(`<img src="${generator}${dimensions}" alt="$[]">`);
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.insertImagePlaceholderCssBg",
  (editor) => {
    let generator = "https://picsum.photos/";
    var options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background iamge",
      options,
      function (result) {
        // Rename the parameter from 'editor' to 'inputEditor'
        if (result) {
          let dimensions = parseDimensions(result);
          editor.insert(`background-image: url("${generator}${dimensions}")`);
        }
      }
    );
  }
);
