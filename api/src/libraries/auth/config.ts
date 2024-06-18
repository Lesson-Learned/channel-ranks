import admin from 'firebase-admin';

export function initializeAuth() {
  admin.initializeApp({
    credential: admin.credential.cert({
      [process.env.AUTH_KEY_1!]: process.env.AUTH_VALUE_1!,
      [process.env.AUTH_KEY_2!]: process.env.AUTH_VALUE_2!,
      [process.env.AUTH_KEY_3!]: process.env.AUTH_VALUE_3!,
      [process.env.AUTH_KEY_4!]: process.env.AUTH_VALUE_4!,
      [process.env.AUTH_KEY_5!]: process.env.AUTH_VALUE_5!,
      [process.env.AUTH_KEY_6!]: process.env.AUTH_VALUE_6!,
      [process.env.AUTH_KEY_7!]: process.env.AUTH_VALUE_7!.replace(/\\n/g, '\n'),
      [process.env.AUTH_KEY_8!]: process.env.AUTH_VALUE_8!,
      [process.env.AUTH_KEY_9!]: process.env.AUTH_VALUE_9!,
      [process.env.AUTH_KEY_10!]: process.env.AUTH_VALUE_10!,
      [process.env.AUTH_KEY_11!]: process.env.AUTH_VALUE_11!,
    })
  });
}
