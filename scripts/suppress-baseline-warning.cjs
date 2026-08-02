const originalWarn = console.warn

console.warn = (...messages) => {
  const isBundledBaselineDataWarning = messages.some(
    (message) =>
      typeof message === "string" &&
      message.startsWith("[baseline-browser-mapping] The data in this module is over two months old"),
  )

  if (!isBundledBaselineDataWarning) {
    originalWarn(...messages)
  }
}
