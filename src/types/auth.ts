import { $Enums, Location } from "@generated/prisma";
type LocationCount = Location & { _count: { position: number } };

export interface UserLocation {
  location: LocationCount;
  status: $Enums.Status;
  role: $Enums.Role;
}

export interface AuthenticationResponse {
  accessToken: string;
  id: string;
  locations: UserLocation[];
}
