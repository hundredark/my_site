const getScrollTop = () => {
  let scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0

  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop

  return scrollTop
}

const getScrollHeight = () => {
  let scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0

  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight

  return scrollHeight
}

const getWindowHeight = () => {
  let windowHeight = 0

  if (document.compatMode === "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }

  return windowHeight;
}

const getViewportSize = () => {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      }
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    }
  }
}

const getElementPosition = (ele: HTMLElement) => {
  let parent = ele.offsetParent
  let offsetLeft = ele.offsetLeft
  let offsetTop = ele.offsetTop

  while (parent) {
    offsetLeft += (parent as HTMLElement).offsetLeft
    offsetTop  += (parent as HTMLElement).offsetTop
    parent = (parent as HTMLElement).offsetParent
  }

  return {
    left: offsetLeft,
    top: offsetTop,
  }
}

export {
  getScrollTop,
  getScrollHeight,
  getWindowHeight,
  getViewportSize,
  getElementPosition
}
