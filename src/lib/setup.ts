import { UserLocation } from "@/types/auth";
import { $Enums } from "@generated/prisma";

/* Works out which setup step a signed-in person should be on, using data we already have.
   Returns the page to send them to, or null if no setup is needed.
*/
const getSetupPath = (
  isSignedIn: boolean, // false before sign-in, while loading, or after logout
  locations: UserLocation[],
): string | null => {
  // Nobody signed in yet (or still loading), so no setup redirect
  if (!isSignedIn) return null;

  // Step 1: the owner hasn't created a restaurant yet
  if (!locations.length) return "/setup";

  // List of all owned locations the user belongs to
  const owned = locations.filter((l) => l.role === $Enums.Role.owner);

  // User owns no restaurants therefore setup has nothing to do with them
  if (owned.length === 0) return null;

  // Check if at least one restaurant has positions setup.
  const hasAnyPositions = owned.some((l) => {
    return l.location._count.position > 0;
  });

  // Implies that an owner hasn't gotten past setting up a restaurant
  if (!hasAnyPositions) return "/setup/roles";

  // Setup done (step 3, inviting the team, is optional)
  return null;
};

export default getSetupPath;
