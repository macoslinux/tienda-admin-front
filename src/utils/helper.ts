export const parseXmlToJson = (xml: string) => {
  const json: { [key: string]: string | number | null | undefined | object } =
    {};
  for (const res of xml.matchAll(
    /(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm,
  )) {
    const key = res[1] || res[3];
    const value = res[2] && parseXmlToJson(res[2]);
    if (key && !json[key])
      json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
    else if (key && json[key] && !Array.isArray(json[key]))
      json[key] = [
        json[key],
        (value && Object.keys(value).length ? value : res[2]) || null,
      ];
    else if (key && json[key] && Array.isArray(json[key]))
      json[key].push(
        (value && Object.keys(value).length ? value : res[2]) || null,
      );
  }
  return json;
};

export const normalizeStr = (s: unknown) =>
  (s ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

export const compareStrings = (a: string, b: string) =>
  normalizeStr(a).localeCompare(normalizeStr(b), undefined, { numeric: false });

export const parsePrice = (s: unknown) => {
  const cleaned = (s ?? "").toString().replace(/[^0-9.,-]/g, "");
  const noThousands = cleaned.replace(/,/g, "");
  const n = Number(noThousands);
  return Number.isFinite(n) ? n : 0;
};
