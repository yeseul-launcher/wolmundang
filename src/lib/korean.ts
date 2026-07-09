/** 한글 이름 뒤 받침 유무에 따라 조사를 붙인다 (예: josa("이진석", "이/가") → "이진석이") */
export function josa(word: string, pair: string): string {
  const last = word.trim().slice(-1);
  const code = last.charCodeAt(0);
  const hasBatchim =
    code >= 0xac00 && code <= 0xd7a3 ? (code - 0xac00) % 28 !== 0 : false;
  const [withBatchim, withoutBatchim] = pair.split("/");
  return word + (hasBatchim ? withBatchim : withoutBatchim);
}
