/** @type {import('next').NextConfig} */
const nextConfig = {
  // Yeh aapke mobile aur laptop dono ke network ko allow kar dega
  allowedDevOrigins: ['localhost', '192.168.1.192'],
};

export default nextConfig; 
// (Agar aapki file ka naam .js par khatam hota hai, toh is last line ki jagah 'module.exports = nextConfig;' likhein)