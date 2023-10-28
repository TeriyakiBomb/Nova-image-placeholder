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

nova.commands.register("lorem-picsum.insertImagePlaceholder", (editor) => {
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
  "lorem-picsum.insertImagePlaceholderRandom",
  (editor) => {
    let generator = "https://picsum.photos/";
    var options = {};
    nova.workspace.showInputPalette(
      "Enter width and then height",
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
