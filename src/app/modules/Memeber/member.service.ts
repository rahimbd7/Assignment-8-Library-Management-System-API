import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Get all members
export const getAllMembers = async () => {
  return await prisma.member.findMany();
};

// Get a member by their ID
export const getMemberById = async (memberId: string) => {
  return await prisma.member.findUnique({
    where: { memberId },
  });
};

// Create a new member
export const createMember = async (data: Prisma.MemberCreateInput) => {
  return await prisma.member.create({
    data,
  });
};

// Update member details
export const updateMember = async (memberId: string, data: Prisma.MemberUpdateInput) => {
  return await prisma.member.update({
    where: { memberId },
    data,
  });
};

// Delete a member
export const deleteMember = async (memberId: string) => {
  return await prisma.member.delete({
    where: { memberId },
  });
};

export const MemberService = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
};
