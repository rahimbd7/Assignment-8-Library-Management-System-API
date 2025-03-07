import { Router } from 'express';
import { MembersController } from './member.controller';
import { checkExistenceOfBookOrMembers } from '../../middlewares/checkExistenceOfBookOrMembers';

const router = Router();


router.post('/', MembersController.createMember);
router.get('/', MembersController.getAllMembers);
router.get('/:memberId', checkExistenceOfBookOrMembers.checkMemberAvailability, MembersController.getMemberById);
router.put('/:memberId', checkExistenceOfBookOrMembers.checkMemberAvailability, MembersController.updateMember);
router.delete('/:memberId', checkExistenceOfBookOrMembers.checkMemberAvailability, MembersController.deleteMember);

export const MembersRouter = router;
