/**
 * @param {string} str
 * @param {keyof lengths} algorithm
 */
export default function isHash(str: string, algorithm: "md5" | "md4" | "sha1" | "sha256" | "sha384" | "sha512" | "ripemd128" | "ripemd160" | "tiger128" | "tiger160" | "tiger192" | "crc32" | "crc32b"): boolean;
