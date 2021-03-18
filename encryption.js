

// 秘钥
const KEY = "635ba0d34b505a75";


class Encryption {

    constructor() {
        this.key = CryptoJS.enc.Utf8.parse(KEY);
    }

    // AES加密
    encrypt = function (val) {
        if (typeof val === "object") {
            // 对象
            val = JSON.stringify(val);
        }
        val = CryptoJS.enc.Utf8.parse(val);
        let cryptor = CryptoJS.AES.encrypt(val, this.key, {
            mode: CryptoJS.mode.ECB, // 该模式下无需指定偏移量
            padding: CryptoJS.pad.Pkcs7
        });
        return cryptor.ciphertext.toString();
    };

    // AES解密
    decrypt = function (val) {
        val = CryptoJS.enc.Hex.parse(val);
        val = CryptoJS.enc.Base64.stringify(val);
        let decryptor = CryptoJS.AES.decrypt(val, this.key, {
            mode: CryptoJS.mode.ECB, // 该模式下无需指定偏移量
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decryptor);
    };
}


export {
    Encryption
}