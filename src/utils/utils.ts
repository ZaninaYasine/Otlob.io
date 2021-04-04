export const getCookie = (cname: string) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const device = () => {
  const os = navigator.platform;

  const screen = {
    width: window.screen.width,
    height: window.screen.height,
  };
  const standalone: any = window.navigator;

  if (os === "iPhone" && standalone.standalone! === true) {
    if (
      (screen.width === 414 && screen.height === 896) ||
      (screen.width === 375 && screen.height === 812) ||
      (screen.width === 390 && screen.height === 844) ||
      (screen.width === 360 && screen.height === 780) ||
      (screen.width === 428 && screen.height === 926)
    ) {
      return 34;
    }
  }
  return 0;
};
