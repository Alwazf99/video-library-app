export const saveSearchTerms = (terms) => {
  localStorage.setItem("searchTerms", JSON.stringify(terms));
};

export const getSearchTerms = () => {
  const terms = localStorage.getItem("searchTerms");
  return terms ? JSON.parse(terms) : [];
};
