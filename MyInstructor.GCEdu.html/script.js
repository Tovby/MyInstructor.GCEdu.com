const departmentButtons = document.querySelectorAll(".color-button");
const departmentPanels = document.querySelectorAll("[data-department-panel]");

departmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedDepartment = button.dataset.department;

    departmentButtons.forEach((departmentButton) => {
      const isSelected = departmentButton === button;
      departmentButton.classList.toggle("is-selected", isSelected);
      departmentButton.setAttribute("aria-pressed", String(isSelected));
    });

    departmentPanels.forEach((panel) => {
      panel.hidden = panel.dataset.departmentPanel !== selectedDepartment;
    });
  });
});

departmentPanels.forEach((departmentPanel) => {
  const infoButtons = departmentPanel.querySelectorAll(".info-button");
  const infoPanels = departmentPanel.querySelectorAll("[data-info-panel]");

  infoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedInfo = button.dataset.info;

      infoButtons.forEach((infoButton) => {
        infoButton.setAttribute("aria-pressed", String(infoButton === button));
      });

      infoPanels.forEach((panel) => {
        panel.hidden = panel.dataset.infoPanel !== selectedInfo;
      });
    });
  });
});
