import * as CryptoJS from 'crypto-js'

export async function generateSecret(length = 32): Promise<string> {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let secret = ''
  for (let i = 0; i < length; i++) {
    secret += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return secret
}

export function encrypt(plaintext: string, key: string): string {
  const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString()
  return ciphertext
}

export function decrypt(ciphertext: string, key: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key)
  const decryptedPlaintext = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedPlaintext
}
