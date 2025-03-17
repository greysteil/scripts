javascript: (function () {
  const openQuantitySelector = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        buttons = document.getElementsByTagName("button");
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
        buttons = document.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].ariaLabel == "Add General Admissions") {
            buttons[i].click();
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
            buttons[i].textContent == "2 Tickets"
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

  const select4pmStartTime = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        inputs = document.getElementsByTagName("input");
        for (i = 0; i < inputs.length; i++) {
          if (inputs[i].type == "radio" && inputs[i].value == "1600") {
            inputs[i].click();
            resolve(undefined);
            clearInterval(id);
          }
        }
      }, 10);
    });
  };

  const clickOnRequestTickets = () => {
    return new Promise(function (resolve) {
      const id = setInterval(function () {
        button = document.getElementById("request-tickets");
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
    .then(() => select4pmStartTime())
    .then(() => clickOnRequestTickets())
    .then(() => console.log("Done!"));
})();
