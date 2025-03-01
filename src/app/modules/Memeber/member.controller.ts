import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemberService } from "./member.service";

const createMember = catchAsync(async (req: Request, res: Response) => {
    const memberData = req.body;
    const result = await MemberService.createMember(memberData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Member created successfully",
        data: result
    });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberService.getAllMembers();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Members fetched successfully",
        data: result
    });
});

const getMemberById = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params;
    const result = await MemberService.getMemberById(memberId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member fetched successfully",
        data: result
    });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params;
    const updateData = req.body;
    const result = await MemberService.updateMember(memberId, updateData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params;
    const result = await MemberService.deleteMember(memberId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member deleted successfully",
        data: result
    });
});

export const MembersController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember
};
