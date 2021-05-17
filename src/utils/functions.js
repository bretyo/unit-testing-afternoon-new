export const shortenText = text => {
    let shortened = text.slice(0, 100)
    shortened.length === 100 && (shortened += '...');
    return shortened;
  };
  