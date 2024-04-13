import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eSZ8oHQpamC05WwGgiyBdvg9c6"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
