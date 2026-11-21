import { UserLocation } from "@/types/auth";
import { $Enums } from "@generated/prisma";

/* Works out which setup step a signed-in person should be on, using data we already have.
   Returns the page to send them to, or null if no setup is needed.
*/
const getSetupPath = (
  isSignedIn: boolean, // false before sign-in, while loading, or after logout
  locations: UserLocation[],
  activeLocationId: string | null,
): string | null => {
  // Nobody signed in yet (or still loading), so no setup redirect
  if (!isSignedIn) return null;

  // User is not part of a restaurant
  if (!locations.length) return "/setup";

  // Find the current restaurant the user is part of
  const currentRestaurant = locations.find(
    (uL) => uL.location.id === activeLocationId,
  );

  // No active restaurant yet, or the user isn't its owner
  if (currentRestaurant?.role !== $Enums.Role.owner) return null;

  // Owner hasn't setup positions yet
  if (currentRestaurant.location._count.position === 0) return "/setup/roles";

  // Owner hasn't completed setup? Direct them to the invite page
  return currentRestaurant.location.setupCompletedAt ? null : "/setup/invite";
};

export default getSetupPath;
