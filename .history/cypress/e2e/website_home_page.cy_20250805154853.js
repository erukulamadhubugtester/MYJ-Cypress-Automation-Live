Cypress.Commands.add("highlight", { prevSubject: "element" }, (subject) => {
  const originalStyle = subject.attr("style") || "";
  subject.attr(
    "style",
    `${originalStyle}; border: 2px solid red !important; background-color: yellow !important;`
  );
  setTimeout(() => {
    subject.attr("style", originalStyle);
  }, 1000);
  return subject;
});
