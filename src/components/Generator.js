export default function Generator({ length = 16, lowercase = true, uppercase = true, numbers = true, symbols = true }) {
  try {
    let lower = 'abcdefghijklmnopqrstuvwxyz',
      upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      num = '0123456789',
      sym = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~'

    let password = ''
    let chars = '';

    if (numbers) chars += num;
    if (lowercase) chars += lower;
    if (symbols) chars += sym;
    if (uppercase) chars += upper;

    if (!chars) chars = num + lower + sym + upper;


    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * chars.length);

      password += chars.substring(random, random + 1);
    }
    return password;
  } catch (error) {
    console.error(error)
  }
}