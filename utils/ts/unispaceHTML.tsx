export default function unescapeHTML(html: string) {
  const escapeEl = document.createElement("textarea");
  escapeEl.innerHTML = html;
  const div = (
    <div dangerouslySetInnerHTML={{ __html: `${escapeEl.textContent}` }}></div>
  );
  return div;
}
