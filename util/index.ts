export const translationUtil =
  (archive: unknown, lang = "pt-BR") =>
  (key: string) => {
    const keys = key.split(".");
    let obj: unknown = archive[lang][keys[0]];
    keys.shift();

    keys.forEach((k) => {
      obj = obj[k];
      keys.shift();
    });

    return (obj as string) || "";
  };
