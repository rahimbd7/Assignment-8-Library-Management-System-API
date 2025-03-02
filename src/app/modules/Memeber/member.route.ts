import { Router } from 'express';
import { MembersController } from './member.controller';

const router = Router();


router.post('/', MembersController.createMember);
router.get('/', MembersController.getAllMembers);
router.get('/:memberId', MembersController.getMemberById);
router.put('/:memberId', MembersController.updateMember);
router.delete('/:memberId', MembersController.deleteMember);

export const MembersRouter = router;
