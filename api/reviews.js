export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({ error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variables." });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(500).json({ error: `Google API returned status: ${data.status}` });
    }

    const { result } = data;

    return res.status(200).json({
      rating: result.rating ?? null,
      totalReviews: result.user_ratings_total ?? null,
      reviews: (result.reviews || []).map((r) => ({
        name: r.author_name,
        rating: r.rating,
        date: new Date(r.time * 1000).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
        text: r.text,
        profilePhoto: r.profile_photo_url ?? null,
      })),
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch reviews from Google." });
  }
}
