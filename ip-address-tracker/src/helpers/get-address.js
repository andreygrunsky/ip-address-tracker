export async function getAddress(ip = '8.8.8.8') {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_nZG2x83U5QLXgPMKlnheoEBiIeODr&ipAddress=${ip}`
  );
  return await response.json();
}
