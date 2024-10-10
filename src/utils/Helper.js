import axios from "axios";
import CryptoJS from "crypto-js";
import aes from "crypto-js/aes";
import encHex from "crypto-js/enc-hex";
import padZeroPadding from "crypto-js/pad-zeropadding";

export const s3 = process.env.REACT_APP_S3_PATH

export function en(data) {
    const apiTest = process.env.REACT_APP_API_TEST;
    if (apiTest == 1) {
        return "" + data + "";
    }

    let uuid = get_hex(32);
    try {
        let text =
            data !== undefined && data !== null && data !== "" ? "" + data + "" : "";
        if (text === "") {
            return text;
        }

        let key = encHex.parse(process.env.REACT_APP_EN_ID1);
        let iv = "";
        if (
            uuid === "undefined" ||
            uuid === "null" ||
            uuid === undefined ||
            uuid === null ||
            uuid === ""
        ) {
            iv = encHex.parse(process.env.REACT_APP_EN_ID2);
        } else {
            iv = encHex.parse(uuid);
        }
        let en1 = aes
            .encrypt(text, key, { iv: iv, padding: padZeroPadding })
            .toString();

        return encodeURIComponent(window.btoa(en1 + "" + uuid));
    } catch (e) {
        return "";
    }
}

export function de(data) {
    const apiTest = process.env.REACT_APP_API_TEST;
    if (apiTest == 1) {
        return "" + data + "";
    }

    data = window.atob(decodeURIComponent(data));

    let uuid = data.slice(-32);
    data = data.substring(0, data.indexOf(uuid));
    try {
        let encrypted =
            data !== undefined && data !== null && data !== "" ? data : "";
        if (encrypted === "") {
            return encrypted;
        }

        let key = encHex.parse(process.env.REACT_APP_EN_ID1);
        let iv = "";
        if (
            uuid === "undefined" ||
            uuid === "null" ||
            uuid === undefined ||
            uuid === null ||
            uuid === ""
        ) {
            iv = encHex.parse(process.env.REACT_APP_EN_ID2);
        } else {
            iv = encHex.parse(uuid);
        }
        let de1 = aes
            .decrypt(encrypted, key, { iv: iv })
            .toString(CryptoJS.enc.Utf8);

        return de1;
    } catch (e) {
        return "";
    }
}

export function en1(data) {
    let text =
        data !== undefined && data !== null && data !== "" ? "" + data : "";
    if (text === "") {
        return text;
    }
    return encodeURIComponent(window.btoa(text));
}

export function de1(encryptedData) {
    if (!encryptedData) {
        return "";
    }
    return window.atob(decodeURIComponent(encryptedData))
}

function xorEncrypt(text, key) {
    let result = "";
    key = String(key); // Ensure key is treated as a string
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
            key.charCodeAt(i % key.length) ^ text.charCodeAt(i)
        );
    }
    return result;
}

export function get_hex(len) {
    const hex = "0123456789ABCDEF";
    let output = "";
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}
