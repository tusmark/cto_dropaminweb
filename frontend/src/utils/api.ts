export const getApiBase = () => {
  if (typeof window === 'undefined') return 'http://localhost:5000';
  
  const { hostname, origin } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
    return 'http://localhost:5000';
  }
  
  // Logic for the sandbox environment to reach port 5000
  // e.g. from https://3000-xxx.e2b.dev to https://5000-xxx.e2b.dev
  return origin.replace(/^(https?:\/\/)\d+-/, '$15000-');
};
