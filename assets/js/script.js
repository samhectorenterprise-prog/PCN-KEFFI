    function showSidebar(){
      const sideBar = document.querySelector(".sidebar").style.display = "flex"
    }
    function hideSidebar(){
      const sideBar = document.querySelector(".sidebar").style.display = "none"
    }

    const loader = document.getElementById("welcomeLoader");
    if (loader) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.body.classList.add("loaded");
        }, 1200);
      });
    }

    const eventDate = new Date("2026-10-24T23:59:59");
    const countdownEls = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    };

    function updateCountdown() {
      if (!countdownEls.days || !countdownEls.hours || !countdownEls.minutes || !countdownEls.seconds) {
        return;
      }

      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        countdownEls.days.textContent = "00";
        countdownEls.hours.textContent = "00";
        countdownEls.minutes.textContent = "00";
        countdownEls.seconds.textContent = "00";
        const label = document.querySelector(".countdown-label");
        if (label) label.textContent = "The event day is here!";
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      countdownEls.days.textContent = String(days).padStart(2, "0");
      countdownEls.hours.textContent = String(hours).padStart(2, "0");
      countdownEls.minutes.textContent = String(minutes).padStart(2, "0");
      countdownEls.seconds.textContent = String(seconds).padStart(2, "0");
    }

    if (countdownEls.days && countdownEls.hours && countdownEls.minutes && countdownEls.seconds) {
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }

    