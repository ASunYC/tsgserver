module.exports = {
    require: [
        'ts-node/register',
        './test/Base.ts'
    ],
    exit: true,
    bail: true,
    timeout: 999999,
    'preserve-symlinks': true,
    spec: [
        './test/cases/http.test.ts',
        './test/cases/httpJSON.test.ts',
        './test/cases/ws.test.ts',
        './test/cases/wsJSON.test.ts',
        './test/cases/inner.test.ts',
        './test/cases/inputJSON.test.ts',
        './test/cases/inputBuffer.test.ts',
        './test/cases/https.test.ts',
        './test/cases/httpsJSON.test.ts',
        './test/cases/wss.test.ts',
        './test/cases/wssJSON.test.ts',

    ],
    // parallel: false,

    // 'expose-gc': true,
    // fgrep: 'Same-name'
}