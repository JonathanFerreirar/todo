export const rootDiv = document.querySelector("#root");

export const storegeValue = localStorage.getItem("class");

export const handleTheme = () => {
  const setTheme = () => {
    rootDiv?.setAttribute("class", "dark");
    localStorage.setItem("class", "dark");
  };

  const removeTheme = () => {
    rootDiv?.removeAttribute("class");
    localStorage.removeItem("class");
  };

  return { setTheme, removeTheme };
};

