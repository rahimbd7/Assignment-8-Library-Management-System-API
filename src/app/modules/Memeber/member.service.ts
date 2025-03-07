import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Get all members
const getAllMembers = async () => {
  const members = await prisma.member.findMany();
  if (members.length === 0) {
      throw new Error("No members found");
  }
  return members;
};


// Get a member by their ID
const getMemberById = async (memberId: string) => {
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
const updateMember = async (memberId: string, data: Prisma.MemberUpdateInput) => {
  return await prisma.member.update({
    where: { memberId },
    data,
  });
};

// Delete a member
const deleteMember = async (memberId: string) => {
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
