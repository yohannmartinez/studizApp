export const windowScrollListener = (backgroundColor) => {
  const basicMenuStyle = () => {
    if (document.getElementById("menuDesktop") != null) {
      document.getElementById("menuDesktop").style.backgroundColor =
        backgroundColor || "white";
      document.getElementById("menuDesktop").style.position = "inherit";
      document.getElementById("menuDesktop").style.top = "0";
      document.getElementById("menuDesktop").style.width = "100%";
      document.getElementById("menuDesktop").style.boxShadow = "none";
    }
  };

  const scrollMenuStyle = () => {
    if (document.getElementById("menuDesktop") != null) {
      document.getElementById("menuDesktop").style.backgroundColor = "white";
      document.getElementById("menuDesktop").style.position = "fixed";
      document.getElementById("menuDesktop").style.top = "10px";
      document.getElementById("menuDesktop").style.width = "calc(100vw - 20px)";
      document.getElementById("menuDesktop").style.boxShadow =
        "0 4px 40px rgb(0 0 0 / 15%)";
    }
  };

  if (window.scrollY < 200) {
    basicMenuStyle();
  }

  if (window.scrollY >= 200) {
    scrollMenuStyle();
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      basicMenuStyle();
    }
    if (window.scrollY >= 200) {
      scrollMenuStyle();
    }
  });
};
