javascript: (function () {
  const acceptableInputsOrderedByPreference = ["1600", "1500", "1400"];
  const quantity = 2;

  const openQuantitySelector = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        const buttons = document.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].className.includes("rec-select")) {
            buttons[i].click();
            resolve(undefined);
            clearInterval(id);
          }
        }
      }, 10);
    });
  };

  const incrementGenerateAdmissions = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        const buttons = document.getElementsByTagName("button");
        var incrementButton = undefined;
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].ariaLabel == "Add General Admissions") {
            incrementButton = buttons[i];
          }
        }

        if (!!incrementButton) {
          const ticketId = document.URL.split("/").slice(-1)[0].split("?")[0];
          const input = document.getElementById(
            ticketId + "-number-field-General-Admission",
          );
          if (!!input && input.value < quantity) {
            incrementButton.click();
          }

          if (!!input && input.value == quantity) {
            resolve(undefined);
            clearInterval(id);
          }
        }
      }, 10);
    });
  };

  const waitForIncrement = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        buttons = document.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i++) {
          if (
            buttons[i].className.includes("rec-select") &&
            buttons[i].textContent ==
              `${quantity} Ticket${quantity > 1 ? "s" : ""}`
          ) {
            resolve(undefined);
            clearInterval(id);
          }
        }
      }, 10);
    });
  };

  const closeQuantitySelector = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        buttons = document.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent == "Close") {
            buttons[i].click();
            resolve(undefined);
            clearInterval(id);
          }
        }
      }, 10);
    });
  };

  const selectBestStartTime = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        const inputs = document.getElementsByTagName("input");
        var filteredInputs = [];
        for (i = 0; i < inputs.length; i++) {
          if (
            inputs[i].type == "radio" &&
            !inputs[i].disabled &&
            acceptableInputsOrderedByPreference.includes(inputs[i].value)
          ) {
            filteredInputs.push(inputs[i]);
          }
        }
        if (filteredInputs.length > 0) {
          filteredInputs.sort((a, b) => {
            return (
              acceptableInputsOrderedByPreference.indexOf(a.value) -
              acceptableInputsOrderedByPreference.indexOf(b.value)
            );
          });
          console.log("Selected best start time:", filteredInputs[0].value);
          filteredInputs[0].click();
          resolve(filteredInputs[0]);
          clearInterval(id);
        }
      }, 10);
    });
  };

  const clickOnRequestTickets = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        const button = document.getElementById("request-tickets");
        if (!!button) {
          button.click();
          resolve(undefined);
          clearInterval(id);
        }
      }, 10);
    });
  };

  openQuantitySelector()
    .then(() => incrementGenerateAdmissions())
    .then(() => waitForIncrement())
    .then(() => closeQuantitySelector())
    .then(() => selectBestStartTime())
    .then(() => clickOnRequestTickets())
    .then(() => console.log("Done!"))
    .catch((error) => console.error("Error occurred:", error));
})();
