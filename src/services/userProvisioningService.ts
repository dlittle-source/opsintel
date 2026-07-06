import { userRepository } from "@/repositories/userRepository";

export class UserProvisioningService {
  async provisionUser(input: {
    clerkId: string;
    email: string;
    firstName?: string;
    lastName?: string;
    tenantId?: string;
  }) {
    const existingUser =
      await userRepository.findByClerkId(input.clerkId);

    if (existingUser) {
      return existingUser;
    }

    return userRepository.create(input);
  }
}

export const userProvisioningService =
  new UserProvisioningService();