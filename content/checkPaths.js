function shouldSkipPage(path, excludedPaths, excludedPrefixes) {
  if (excludedPaths.includes(path) || excludedPrefixes.some(prefix => path.startsWith(prefix))) {
    console.log("[INFO] LeetQuiet is skipping this page:", path);
    return true;
  }
  return false;
}