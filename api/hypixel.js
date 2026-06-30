export default async function handler(req, res) {
  const uuid = process.env.MINECRAFT_UUID;
  const apiKey = process.env.HYPIXEL_API_KEY;

  // Add these so you can see what's being read
  console.log("UUID:", uuid);
  console.log("API Key exists:", !!apiKey);

  if (!uuid || !apiKey) {
    return res.status(500).json({ error: "Missing env variables" });
  }

  try {
    const response = await fetch(
      `https://api.hypixel.net/v2/player?uuid=${uuid}`,
      { headers: { "API-Key": apiKey } }
    );

    console.log("Hypixel response status:", response.status);

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}