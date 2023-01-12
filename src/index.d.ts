declare namespace HashLib {
	/**
	 * Uses one of HashLib's many hashing functions to hash the given message.
	 * @param hashFunction The function used to hash.
	 * @param key The hash key.
	 * @param message The optional message.
	 * @param asBinary Whether or not to encode as binary.
	 */
	export function hmac(
		this: void,
		hashFunction: (key: string) => string,
		key: string,
		message?: string,
		asBinary?: boolean,
	): string;

	/**
	 * Hashes the given message with MD5.
	 * @param message The message you want to hash as MD5.
	 */
	export function md5(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-1.
	 * @param message The message you want to hash as SHA-1.
	 */
	export function sha1(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-224.
	 * @param message The message you want to hash as SHA-224.
	 */
	export function sha224(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-256.
	 * @param message The message you want to hash as SHA-256.
	 */
	export function sha256(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-512/224.
	 * @param message The message you want to hash as SHA-512/224.
	 */
	export function sha512_224(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-512/256.
	 * @param message The message you want to hash as SHA-512/256.
	 */
	export function sha512_256(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-384.
	 * @param message The message you want to hash as SHA-384.
	 */
	export function sha384(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA-512.
	 * @param message The message you want to hash as SHA-512.
	 */
	export function sha512(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA3-224.
	 * @param message The message you want to hash as SHA3-224.
	 */

	export function sha3_224(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA3-256.
	 * @param message The message you want to hash as SHA3-256.
	 */
	export function sha3_256(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA3-384.
	 * @param message The message you want to hash as SHA3-384.
	 */
	export function sha3_384(this: void, message: string): string;

	/**
	 * Hashes the given message with SHA3-512.
	 * @param message The message you want to hash as SHA3-512.
	 */
	export function sha3_512(this: void, message: string): string;

	/**
	 * Hashes the given message with SHAKE128.
	 * @param message The message you want to hash as SHAKE128.
	 * @param digestSizeInBytes The digest size in bytes.
	 */
	export function shake128(this: void, message: string, digestSizeInBytes: number): string;

	/**
	 * Hashes the given message with SHAKE256.
	 * @param message The message you want to hash as SHAKE256.
	 * @param digestSizeInBytes The digest size in bytes.
	 */
	export function shake256(this: void, message: string, digestSizeInBytes: number): string;

	/**
	 * Converts a hex string to binary.
	 * @param hexString The string you want to turn into binary.
	 */
	export function hex_to_bin(this: void, hexString: string): string;

	/**
	 * Converts a Base64-encoded string to binary.
	 * @param base64String The string you want to turn into binary.
	 */
	export function base64_to_bin(this: void, base64String: string): string;

	/**
	 * Converts a binary string back into Base64.
	 * @param binaryString The string you want to turn into Base64.
	 */
	export function bin_to_base64(this: void, binaryString: string): string;

	/**
	 * A very fast way to encode a string into Base64.
	 * @param value The value you want to encode in Base64.
	 */
	export function base64_encode(this: void, value: string): string;

	/**
	 * A very fast way to decode a Base64 string back into plaintexst.
	 * @param value The value you want to decode from Base64.
	 */
	export function base64_decode(this: void, value: string): string;
}

export = HashLib;
