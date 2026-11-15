import { UserLocation } from "@/types/auth";
import { $Enums } from "@generated/prisma";

/* Works out which setup step an owner should be on, using data we already have.
   Returns the page to send them to, or null if no setup is needed.
*/
const getSetupPath = (
  role: $Enums.Role | null, // null before sign-in, while loading, or after logout
  locations: UserLocation[],
): string | null => {
  // Only owners go through setup (employees and managers join by invite)
  if (role !== $Enums.Role.owner) return null;

  // Step 1: the owner hasn't created a restaurant yet
  if (!locations.length) return "/setup";

  // Check if at least one restaurant has positions setup.
  const hasAnyPositions = locations.some((l) => {
    return l.location._count.position > 0;
  });

  // Implies that an owner hasn't gotten past setting up a restaurant
  if (!hasAnyPositions) return "/setup/roles";

  // Setup done (step 3, inviting the team, is optional)
  return null;
};

export default getSetupPath;
