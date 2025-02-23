import  Jwt, { Secret }  from "jsonwebtoken";
 const generateToken = (payload: any, secretKey: string, expiresIn: string) => {
    const token = Jwt.sign(payload, secretKey, {
      algorithm: 'HS256',
      expiresIn: expiresIn
    });
    return token;
  };
 const verifyToken = (payload: any,secret:Secret) => {
    const token = Jwt.verify(payload, 'abcdefgh');
    return token;
  };


export const jwtHelpers = {
    generateToken,
    verifyToken
}