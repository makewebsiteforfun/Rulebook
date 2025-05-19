  document.getElementById("welcomeBtn").addEventListener("click", function () {
      // Set a flag to indicate that music should play
      localStorage.setItem("playEntryMusic", "true");
      window.location.href = "main.html";
    });