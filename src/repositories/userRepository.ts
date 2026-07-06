import { prisma } from "@/lib/prisma";

export class UserRepository {
  async findByClerkId(clerkId: string) {
    return prisma.user.findUnique({
      where: { clerkId },
    });
  }

  async create(data: {
    clerkId: string;
    email: string;
    firstName?: string;
    lastName?: string;
    tenantId?: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}

export const userRepository = new UserRepository();