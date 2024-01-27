export const correctAuthorName = (author) => {
  const regExp = /,?\s?type\.fit/;

  return author.replace(regExp, "");
};
