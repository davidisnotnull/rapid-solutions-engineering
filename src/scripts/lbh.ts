import Button from "lbh-frontend/lbh/components/lbh-button/button";

document.querySelectorAll('[data-module="govuk-button"]').forEach((element) => {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  new Button(element).init();
});
