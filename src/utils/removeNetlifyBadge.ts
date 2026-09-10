export function removeNetlifyBadge() {
  const remove = () => {
    document.querySelectorAll("iframe").forEach((iframe) => {
      const attributes = [
        iframe.getAttribute("src"),
        iframe.getAttribute("title"),
        iframe.getAttribute("aria-label"),
        iframe.getAttribute("name"),
      ]
        .filter(Boolean)
        .join(" ");

      if (/netlify/i.test(attributes)) {
        iframe.remove();
      }
    });
  };

  remove();
  
  const observer = new MutationObserver(remove);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  
  return () => observer.disconnect();
}
