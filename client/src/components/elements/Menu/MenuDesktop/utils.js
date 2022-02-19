export const windowScrollListener = (backgroundColor) => {
  const basicMenuStyle = () => {
    if (document.getElementById("menuDesktop") != null) {
      document.getElementById("menuDesktop").style.backgroundColor =
        backgroundColor || "white";
      document.getElementById("menuDesktop").style.position = "inherit";
      document.getElementById("menuDesktop").style.top = "0";
      document.getElementById("menuDesktop").style.width = "100%";
      document.getElementById("menuDesktop").style.border = "0px solid #ffffff";
      document.getElementById("menuDesktop").style.boxShadow = "none";
    }
  };

  const scrollMenuStyle = () => {
    if (document.getElementById("menuDesktop") != null) {
      document.getElementById("menuDesktop").style.backgroundColor = "white";
      document.getElementById("menuDesktop").style.position = "fixed";
      document.getElementById("menuDesktop").style.top = "10px";
      document.getElementById("menuDesktop").style.width = "calc(100vw - 20px)";
      document.getElementById("menuDesktop").style.border =
        "1px solid rgb(238,238,238)";
      document.getElementById("menuDesktop").style.boxShadow =
        "0px 7px 24px -10px rgba(66, 54, 92, 0.1)";
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
