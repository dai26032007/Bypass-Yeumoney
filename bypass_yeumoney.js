(function() {
  if (window.daiFinalScriptLoaded) return;
  window.daiFinalScriptLoaded = true;

  const fastSpeed = 100;
  const oSetTimeout = window.setTimeout;
  const oSetInterval = window.setInterval;

  const speedHack = () => {
    window.setTimeout = (fn, ms) => oSetTimeout(fn, ms / fastSpeed);
    window.setInterval = (fn, ms) => oSetInterval(fn, ms / fastSpeed);
  };

  if (currentUrl.startsWith("https://yeumoney.com/") || currentUrl.startsWith("http://yeumoney.com/")) {
    // Nếu là yeumoney.com, đợi sự kiện DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => {
      speedHack();
      originalSetInterval(speedHack, 100); // Sử dụng originalSetInterval
      waitForBody(); // Gọi waitForBody để hiển thị popup sau khi body có
    });
  } else {
    // Đối với các trang khác, chạy ngay lập tức như code gốc của bạn
    speedHack();
  oSetInterval(speedHack, 100);


  function showPopup() {
    if (document.getElementById("dai-popup")) return;

    const css = document.createElement("style");
    css.innerHTML = `
      #dai-popup {
        position: fixed;
        top: 25px;
        right: 25px;
        background: rgba(30,35,50,0.7);
        color: #e0e0e0;
        padding: 12px 18px;
        border-radius: 12px;
        font-family: 'Segoe UI', 'Roboto', sans-serif;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.18);
        display: flex;
        align-items: center;
        gap: 15px;
        opacity: 0;
        transform: translateX(120%);
        transition: all 0.5s ease;
        z-index: 99999;
      }
      #dai-popup.visible { opacity: 1;
        transform: translateX(0); }
      #dai-popup .close {
        font-size: 24px;
        color: #aaa; cursor: pointer; margin-left: auto;
      }
      #dai-popup .close:hover { color: #fff;
      }
    `;

    const popup = document.createElement("div");
    popup.id = "dai-popup";
    popup.innerHTML = `
      <div><strong>Đã tăng tốc trang web</strong><br>Bypass by Nguyễn Bá Đại</div>
      <div class="close" title="Đóng">&times;</div>
    `;
    popup.querySelector(".close").onclick = () => {
      popup.classList.remove("visible");
      oSetTimeout(() => popup.remove(), 600);
      css.remove();
    };

    document.head.appendChild(css);
    document.body.appendChild(popup);
    oSetTimeout(() => popup.classList.add("visible"), 100);

  }

  function waitForBody() {
    if (document.body) showPopup();
    else oSetTimeout(waitForBody, 100);
  }

  waitForBody();
})();
