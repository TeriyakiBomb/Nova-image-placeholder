const providers = {
  picsum: "https://picsum.photos",
  placekitten: "http://placekitten.com",
  loremflickr: "https://loremflickr.com",
};

function providerName(provider) {
  let providerNameArr = provider.split("//")[1].split(".");
  return providerNameArr[0];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9999) + 1;
}

function picsumDimensions(input, random) {
  const regex = /^(\d+)(?:\s|,)?(\d+)?$/;
  if (regex.test(input)) {
    const matches = input.match(regex);
    const width = matches[1];
    const height = matches[2] || width;
    return random
      ? `/${width}/${height}?random=${getRandomNumber()}`
      : `/${width}/${height}`;
  }
  nova.workspace.showErrorMessage(
    `Incorrect formatting, please format as either: \n width height, width/height or width,height`
  );
  return false; // Return an empty string on error
}

function placekittenDimensions(input) {
  const regex = /^(\d+)(?:\s|,)?(\d+)?$/;
  if (regex.test(input)) {
    const matches = input.match(regex);
    const width = matches[1];
    const height = matches[2] || width;
    return `/${width}/${height}`;
  }
  nova.workspace.showErrorMessage(
    `Incorrect formatting, please format as either: \n width height, width/height or width,height`
  );
  return false;
}

function loremflickrDimensions(input, random) {
  const regex = /^(\d+)(?:\s|,)?(\d+)?(?:\s([a-zA-Z\s,]+))?$/;
  if (regex.test(input)) {
    const matches = input.match(regex);
    const width = matches[1];
    const height = matches[2] || width;
    const categories = matches[3] ? matches[3].replace(/\s+/g, ",") : "";

    if (random) {
      return `/${width}/${height}/${categories}?random=${getRandomNumber()}`;
    } else {
      return `/${width}/${height}/${categories}`;
    }
  }
  nova.workspace.showErrorMessage(
    `Incorrect formatting, please format as either: \n {w} {h} {category}, {w}/{h} {category} or {w},{h} {category}`
  );
  return false;
}

// PICSUM ---------------------------------------------------

nova.commands.register("image-placeholder.picsumPlaceholder", (editor) => {
  let provider = providers.picsum;
  let options = {};
  const random = false;
  nova.workspace.showInputPalette(
    "Enter width and then height",
    options,
    function (result) {
      if (result) {
        let dimensions = picsumDimensions(result, random, provider);
        if (dimensions !== false) {
          editor.insert(provider + dimensions);
        }
      }
    }
  );
});

nova.commands.register(
  "image-placeholder.picsumPlaceholderRandom",
  (editor) => {
    let provider = providers.picsum;
    let options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, randomised output",
      options,
      function (result) {
        if (result) {
          let dimensions = picsumDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(provider + dimensions);
          }
        }
      }
    );
  }
);

nova.commands.register("image-placeholder.picsumPlaceholderTag", (editor) => {
  let provider = providers.picsum;
  let options = {};
  const random = false;

  nova.workspace.showInputPalette(
    "Enter width and then height, outputs an <img>",
    options,
    function (result) {
      if (result) {
        let dimensions = picsumDimensions(result, random, provider);
        if (dimensions !== false) {
          editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
        }
      }
    }
  );
});

nova.commands.register(
  "image-placeholder.picsumPlaceholderTagRandom",
  (editor) => {
    let provider = providers.picsum;
    let options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        if (result) {
          let dimensions = picsumDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
          }
        }
      }
    );
  }
);

nova.commands.register("image-placeholder.picsumPlaceholderCssBg", (editor) => {
  const provider = providers.picsum;
  const options = {};
  const random = false;

  nova.workspace.showInputPalette(
    "Enter width and then height, outputs as CSS background image",
    options,
    function (result) {
      if (result) {
        let dimensions = picsumDimensions(result, random, provider);
        if (dimensions !== false) {
          editor.insert(`background-image: url("${provider}${dimensions}")`);
        }
      }
    }
  );
});

nova.commands.register(
  "image-placeholder.picsumPlaceholderCssBgRandom",
  (editor) => {
    const provider = providers.picsum;
    const options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background image",
      options,
      function (result) {
        if (result) {
          let dimensions = picsumDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`background-image: url("${provider}${dimensions}")`);
          }
        }
      }
    );
  }
);

// LOREMFLICKR ---------------------------------------------------

nova.commands.register("image-placeholder.loremflickrPlaceholder", (editor) => {
  let provider = providers.loremflickr;
  let options = {};
  const random = false;
  nova.workspace.showInputPalette(
    "Enter width and then height",
    options,
    function (result) {
      if (result) {
        let dimensions = loremflickrDimensions(result, random, provider);
        if (dimensions !== false) {
          editor.insert(provider + dimensions);
        }
      }
    }
  );
});

nova.commands.register(
  "image-placeholder.loremflickrPlaceholderRandom",
  (editor) => {
    let provider = providers.loremflickr;
    let options = {};
    const random = true;
    nova.workspace.showInputPalette(
      "Enter width and then height",
      options,
      function (result) {
        if (result) {
          let dimensions = loremflickrDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(provider + dimensions);
          }
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.loremflickrPlaceholderTag",
  (editor) => {
    let provider = providers.loremflickr;
    let options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        if (result) {
          let dimensions = loremflickrDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
          }
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.loremflickrPlaceholderTagRandom",
  (editor) => {
    let provider = providers.loremflickr;
    let options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        if (result) {
          let dimensions = loremflickrDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
          }
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.loremflickrPlaceholderCssBg",
  (editor) => {
    const provider = providers.loremflickr;
    const options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background image",
      options,
      function (result) {
        if (result) {
          let dimensions = loremflickrDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`background-image: url("${provider}${dimensions}")`);
          }
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.loremflickrPlaceholderCssBgRandom",
  (editor) => {
    const provider = providers.loremflickr;
    const options = {};
    const random = true;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background image",
      options,
      function (result) {
        if (result) {
          let dimensions = loremflickrDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`background-image: url("${provider}${dimensions}")`);
          }
        }
      }
    );
  }
);

// PLACEKITTEN ---------------------------------------------------

nova.commands.register("image-placeholder.placekittenPlaceholder", (editor) => {
  let provider = providers.placekitten;
  let options = {};
  const random = false;
  nova.workspace.showInputPalette(
    "Enter width and then height",
    options,
    function (result) {
      if (result) {
        let dimensions = placekittenDimensions(result, random, provider);
        if (dimensions !== false) {
          editor.insert(provider + dimensions);
        }
      }
    }
  );
});

nova.commands.register(
  "image-placeholder.placekittenPlaceholderTag",
  (editor) => {
    let provider = providers.placekitten;
    let options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs an <img>",
      options,
      function (result) {
        if (result) {
          let dimensions = placekittenDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`<img src="${provider}${dimensions}" alt="$[]">`);
          }
        }
      }
    );
  }
);

nova.commands.register(
  "image-placeholder.placekittenPlaceholderCssBg",
  (editor) => {
    const provider = providers.placekitten;
    const options = {};
    const random = false;

    nova.workspace.showInputPalette(
      "Enter width and then height, outputs as CSS background image",
      options,
      function (result) {
        if (result) {
          let dimensions = placekittenDimensions(result, random, provider);
          if (dimensions !== false) {
            editor.insert(`background-image: url("${provider}${dimensions}")`);
          }
        }
      }
    );
  }
);
