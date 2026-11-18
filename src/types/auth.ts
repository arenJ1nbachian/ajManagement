import { $Enums, Location } from "@generated/prisma";
type LocationCount = Location & { _count: { position: number } };

export interface UserLocation {
  location: LocationCount;
  status: $Enums.Status;
}

export interface AuthenticationResponse {
  accessToken: string;
  id: string;
  role: $Enums.Role;
  locations: UserLocation[];
}
