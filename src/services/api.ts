import { OutletLocation, PALACE_OUTLETS } from "../data/outletsData";

const API_BASE = "/api";

export async function fetchOutletsFromDb(
  zone?: string,
  userCoords?: { lat: number; lng: number }
): Promise<OutletLocation[]> {
  try {
    const params = new URLSearchParams();
    if (zone && zone !== "All") params.append("zone", zone);
    if (userCoords) {
      params.append("lat", userCoords.lat.toString());
      params.append("lng", userCoords.lng.toString());
    }

    const res = await fetch(`${API_BASE}/outlets.php?${params.toString()}`);
    if (!res.ok) throw new Error("API not reachable");
    const data = await res.json();
    if (data.success && Array.isArray(data.outlets) && data.outlets.length > 0) {
      return data.outlets;
    }
    return PALACE_OUTLETS;
  } catch {
    // Graceful offline fallback to bundled data
    return PALACE_OUTLETS;
  }
}

export async function submitWaitlistNotification(
  searchedLocation: string,
  contactInfo: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE}/notify.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searched_location: searchedLocation,
        contact_info: contactInfo,
      }),
    });
    const data = await res.json();
    return { success: !!data.success, message: data.message };
  } catch {
    // If backend is not yet connected, return success locally
    return { success: true };
  }
}

export async function submitRoyalCircleMember(
  email: string
): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_BASE}/club.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    return { success: !!data.success, message: data.message };
  } catch {
    // Fallback if backend is not yet connected
    return { success: true };
  }
}
