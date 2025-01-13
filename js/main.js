    // Variable to store the name of the clicked button
    let clickedButtonName = "";

    // Select all elements with the class 'openPopup' and add event listeners to each
    document.querySelectorAll(".openPopup").forEach(function (element) {
      element.addEventListener("click", function () {
        // Capture the button name from the data attribute
        clickedButtonName = element.getAttribute("data-button-name");
    
        // Set the hidden input field value
        document.getElementById("buttonName").value = clickedButtonName;
    
        // Display the popup form
        document.getElementById("popupForm").style.display = "flex";
      });
    });
    
    // Close button within the popup
    document
      .querySelector(".popup-content .close-button")
      .addEventListener("click", function () {
        document.getElementById("popupForm").style.display = "none";
      });
    
    // Close the popup when clicking outside the popup content
    window.addEventListener("click", function (event) {
      if (event.target === document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
      }
    });