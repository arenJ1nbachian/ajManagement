import { $Enums, Location } from "@generated/prisma";

export interface UserLocation {
  location: Location;
  status: $Enums.Status;
}

export interface AuthenticationResponse {
  accessToken: string;
  id: string;
  role: $Enums.Role;
  locations: UserLocation[];
}
