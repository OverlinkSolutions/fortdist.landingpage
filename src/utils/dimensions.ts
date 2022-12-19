export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function isMobile() {
  return getWindowDimensions().width < 768;
}